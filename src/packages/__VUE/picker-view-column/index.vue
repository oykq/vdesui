<script lang="tsx">
import { useTouch } from '@/packages/compsables';
import { preventDefault } from '@/packages/utils/dom/event';
import { clamp } from '@/packages/utils/format/number';
import { ref, defineComponent, reactive, getCurrentInstance } from 'vue';

function getElementTranslateY(element: Element) {
  const style = getComputedStyle(element);
  const transform = style.transform;
  console.log(transform);
  const translateY = transform.slice(7, transform.length - 1).split(', ')[5];
  return Number(translateY);
}

const visibleItemCount = 6;
const itemHeight = 34;
const swipeDuration = 1000;

// 惯性滑动思路:
// 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_LIMIT_TIME` 且 move
// 距离大于 `MOMENTUM_LIMIT_DISTANCE` 时，执行惯性滑动
const MOMENTUM_LIMIT_TIME = 300;
const MOMENTUM_LIMIT_DISTANCE = 15;
const DEFAULT_DURATION = 200;

export default defineComponent({
  name: 'vdes-picker-view-column',
  props: {
    defaultIndex: {
      type: Number,
      default: 0
    },
    columnIndex: {
      type: Number
    }
  },
  emits: ['change'],
  setup(props, { slots, emit }) {
    const parentInstance = getCurrentInstance()?.parent;
    const parentProps = parentInstance?.props;
    // @ts-ignore
    const { indicatorStyle, indicatorClass, maskStyle, maskClass } =
      parentProps;

    let moving: boolean;
    let startOffset: number;
    let touchStartTime: number;
    let momentumOffset: number;
    let transitionEndTrigger: null | (() => void);

    const childCount = slots.default?.().length ? slots.default().length : 0;

    const touch = useTouch();

    const wrapper = ref<HTMLElement>();

    const state = reactive({
      index: props.defaultIndex,
      offset: 0,
      duration: 0
    });

    const baseOffset = () => {
      return (itemHeight * (+visibleItemCount + 1)) / 2;
    };

    const setIndex = (index: number, emitChange?: boolean) => {
      const offset = -index * itemHeight;
      const trigger = () => {
        if (index !== state.index) {
          state.index = index;

          if (emitChange) {
            console.log('change');
            emit('change');

            const changeEvent = new CustomEvent('change', {
              detail: {
                value: [props.columnIndex, index]
              }
            });

            parentInstance?.emit('change', changeEvent);
          }
        }
      };

      // trigger the change event after transitionend when moving
      if (moving && offset !== state.offset) {
        transitionEndTrigger = trigger;
      } else {
        trigger();
      }

      state.offset = offset;
    };

    const getIndexByOffset = (offset: number) =>
      clamp(Math.round(-offset / itemHeight), 0, childCount - 1);
    const momentum = (distance: number, duration: number) => {
      const speed = Math.abs(distance / duration);

      distance = state.offset + (speed / 0.003) * (distance < 0 ? -1 : 1);

      const index = getIndexByOffset(distance);

      state.duration = +swipeDuration;
      setIndex(index, true);
    };

    const onTouchStart = (event: TouchEvent) => {
      console.log('onTouchStart');
      touch.start(event);

      parentInstance?.emit('pickstart');

      if (moving) {
        const translateY = getElementTranslateY(wrapper.value!);
        state.offset = Math.min(0, translateY - baseOffset());
        startOffset = state.offset;
      } else {
        startOffset = state.offset;
      }
      state.duration = 0;
      touchStartTime = Date.now();
      momentumOffset = startOffset;
      transitionEndTrigger = null;
    };

    const onTouchMove = (event: TouchEvent) => {
      console.log('onTouchmove');

      touch.move(event);

      if (touch.isVertical()) {
        moving = true;
        preventDefault(event, true);
      }

      state.offset = clamp(
        startOffset + touch.deltaY.value,
        -(childCount * itemHeight),
        itemHeight
      );

      const now = Date.now();
      if (now - touchStartTime > MOMENTUM_LIMIT_TIME) {
        touchStartTime = now;
        momentumOffset = state.offset;
      }
    };

    const onTouchEnd = () => {
      console.log('onTouchend');

      parentInstance?.emit('pickend');

      const distance = state.offset - momentumOffset;
      const duration = Date.now() - touchStartTime;
      const allowMomentum =
        duration < MOMENTUM_LIMIT_TIME &&
        Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;

      if (allowMomentum) {
        momentum(distance, duration);
        return;
      }

      const index = getIndexByOffset(state.offset);
      console.log('index', index);
      state.duration = DEFAULT_DURATION;
      setIndex(index, true);

      // compatible with desktop scenario
      // use setTimeout to skip the click event Emitted after touchstart
      setTimeout(() => {
        moving = false;
      }, 0);
    };

    const onTouchCancel = () => {
      console.log('onTouchcancel');
    };

    const stopMomentum = () => {
      moving = false;
      state.duration = 0;

      if (transitionEndTrigger) {
        transitionEndTrigger();
        transitionEndTrigger = null;
      }
    };

    return () => {
      const wrapperStyle = {
        transform: `translate3d(0, ${state.offset + baseOffset()}px, 0)`,
        transitionDuration: `${state.duration}ms`,
        transitionProperty: state.duration ? 'all' : 'none'
      };
      return (
        <div
          class="vdes-picker-view-column"
          onTouchstart={onTouchStart}
          onTouchmove={onTouchMove}
          onTouchend={onTouchEnd}
          onTouchcancel={onTouchCancel}
        >
          <div class="vdes-picker-view-group">
            <div
              class={`vdes-picker-view-mask ${maskClass}`}
              style={maskStyle}
            ></div>
            <div
              class={`vdes-picker-view-indicator ${indicatorClass}`}
              style={indicatorStyle}
            ></div>
            <div
              class="vdes-picker-view-content"
              ref={wrapper}
              style={wrapperStyle}
              onTransitionend={stopMomentum}
            >
              {slots.default?.()}
            </div>
          </div>
        </div>
      );
    };
  }
});
</script>

<style lang="scss">
.vdes-picker-view-column {
  -webkit-flex: 1;
  flex: 1;
  position: relative;
  height: 100%;
  overflow: hidden;
}
.vdes-picker-view-column[hidden] {
  display: none;
}
.vdes-picker-view-group {
  height: 100%;
  overflow: hidden;
}

.vdes-picker-view-mask {
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}

.vdes-picker-view-indicator,
.vdes-picker-view-mask {
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 3;
  pointer-events: none;
}

.vdes-picker-view-mask {
  top: 0;
  height: 100%;
  margin: 0 auto;
  background: linear-gradient(
      180deg,
      hsla(0, 0%, 100%, 0.95),
      hsla(0, 0%, 100%, 0.6)
    ),
    linear-gradient(0deg, hsla(0, 0%, 100%, 0.95), hsla(0, 0%, 100%, 0.6));
  background-position: top, bottom;
  background-size: 100% 102px;
  background-repeat: no-repeat;
}

.vdes-picker-view-indicator {
  height: 34px;
  /* top: 102px; */
  top: 50%;
  transform: translateY(-50%);
}

.vdes-picker-view-content {
  // position: absolute;
  // top: 0;
  // left: 0;
  // width: 100%;
  will-change: transform;
  padding: 102px 0;
  cursor: pointer;
}

.vdes-picker-view-content > * {
  height: 34px;
  overflow: hidden;
}

.vdes-picker-view-indicator:after,
.vdes-picker-view-indicator:before {
  content: ' ';
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  color: #e5e5e5;
}

.vdes-picker-view-indicator:before {
  top: 0;
  border-top: 1px solid #e5e5e5;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}

.vdes-picker-view-indicator:after {
  bottom: 0;
  border-bottom: 1px solid #e5e5e5;
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}

.vdes-picker-view-indicator:after,
.vdes-picker-view-indicator:before {
  content: ' ';
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  color: #e5e5e5;
}
</style>
