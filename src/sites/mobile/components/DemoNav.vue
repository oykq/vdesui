<template>
  <div class="nav" v-if="mobileGlobal.title">
    <div class="back" @click="onBack">
      <i class="icon"></i>
    </div>
    <div class="title">
      <h3 class="text">
        <i class="loading" v-show="false"></i>
        {{ mobileGlobal.title }}
      </h3>
    </div>
    <div class="function">
      <div class="wrap">
        <div class="share" @click="shareShow">
          <i class="icon"></i>
        </div>
        <span class="split"></span>
        <div class="quit" @click="sceneShow">
          <i class="icon"></i>
        </div>
      </div>
    </div>
  </div>
  <share-dialog
    :show="shareDialogVisiable"
    @close="shareDialogVisiable = false"
  />
  <scene-dialog
    :show="sceneDialogVisiable"
    @close="sceneDialogVisiable = false"
  />
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from '@vue/reactivity';
import { watch } from '@vue/runtime-core';
import { useRoute, useRouter } from 'vue-router';
import SceneDialog from '../dialogs/SceneDialog.vue';
import shareDialog from '../dialogs/ShareDialog.vue';
import { useGlobal } from '../store/global';

const shareDialogVisiable = ref(false);
const sceneDialogVisiable = ref(false);

const route = useRoute();
// const title = computed(() => {
//   const name = route.meta.name as string;
//   return name ? name.replace(/-/g, '') : '';
// });


// const data = reactive({
//   title: name ? name.replace(/-/g, '') : ''
// })
const {mobileGlobal} = useGlobal()

watch(() => route.meta.name, () => {
  let name = route.meta.name as string;
  mobileGlobal.title = name ? name.replace(/-/g, '') : ''
})




const router = useRouter();
const onBack = () => {
  if (history.length > 1) {
    history.back();
  } else {
    router.replace('/');
  }
};
const shareShow = () => {
  shareDialogVisiable.value = true;
};
const sceneShow = () => {
  sceneDialogVisiable.value = true;
};
</script>

<style lang="scss">
.nav {
  height: 44px;
  background: rgb(0, 0, 0);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 12px 10px;
  position: relative;
  z-index: 10;
  pointer-events: none;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  .back {
    pointer-events: all;
    cursor: pointer;
    .icon {
      pointer-events: all;
      cursor: pointer;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      display: inline-block;
      vertical-align: middle;
      width: 10px;
      height: 18px;
      -webkit-mask: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMzciIHZpZXdCb3g9IjAgMCAyMSAzNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTcgMzZMMCAxOWEyLjkxIDIuOTEgMCAwIDEgMC0xTDE3IDFjLjEzMS0uMDU3LjUtLjA2IDEgMGwyIDJjLjA1Ny41MjIuMDYuODk5IDAgMUw2IDE4YS44OTguODk4IDAgMCAwIDAgMWwxNCAxNGMuMDU2LjA5OC4wNjIuNDc0IDAgMWwtMiAyYy0uNDk0LjA1Ny0uODY4LjA2LTEgMHoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')
        50% 50% / cover no-repeat;
      background: rgb(255, 255, 255);
      background-color: rgb(0, 0, 0);
    }
  }
  .title {
    position: absolute;
    left: 100px;
    right: 100px;
    text-align: center;
    font-size: 13px;
    display: block;
    h3 {
      overflow: hidden;
      white-space: nowrap;
      font-weight: normal;
      font-size: inherit;
      text-overflow: ellipsis;
      .loading {
        pointer-events: none;
        color: rgb(0, 0, 0);
        text-align: center;
        white-space: nowrap;
        font-weight: normal;
        font-size: inherit;
        width: 20px;
        height: 20px;
        vertical-align: -6px;
        display: inline-block;
        -webkit-mask: url('data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibGRzLXNwaW5uZXIiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCIgc3R5bGU9ImJhY2tncm91bmQ6MCAwIj48cmVjdCB4PSI0NyIgeT0iMjQiIHJ4PSI5LjQiIHJ5PSI0LjgiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIiBmaWxsPSIjYjNiM2IzIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIgZHVyPSIxcyIgYmVnaW49Ii0wLjkxNjY2NjY2NjY2NjY2NjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjwvcmVjdD48cmVjdCB4PSI0NyIgeT0iMjQiIHJ4PSI5LjQiIHJ5PSI0LjgiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIiBmaWxsPSIjYjNiM2IzIiB0cmFuc2Zvcm09InJvdGF0ZSgzMCA1MCA1MCkiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMTswIiBkdXI9IjFzIiBiZWdpbj0iLTAuODMzMzMzMzMzMzMzMzMzNHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9yZWN0PjxyZWN0IHg9IjQ3IiB5PSIyNCIgcng9IjkuNCIgcnk9IjQuOCIgd2lkdGg9IjYiIGhlaWdodD0iMTIiIGZpbGw9IiNiM2IzYjMiIHRyYW5zZm9ybT0icm90YXRlKDYwIDUwIDUwKSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGR1cj0iMXMiIGJlZ2luPSItMC43NXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9yZWN0PjxyZWN0IHg9IjQ3IiB5PSIyNCIgcng9IjkuNCIgcnk9IjQuOCIgd2lkdGg9IjYiIGhlaWdodD0iMTIiIGZpbGw9IiNiM2IzYjMiIHRyYW5zZm9ybT0icm90YXRlKDkwIDUwIDUwKSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGR1cj0iMXMiIGJlZ2luPSItMC42NjY2NjY2NjY2NjY2NjY2cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDciIHk9IjI0IiByeD0iOS40IiByeT0iNC44IiB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgZmlsbD0iI2IzYjNiMyIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDUwIDUwKSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGR1cj0iMXMiIGJlZ2luPSItMC41ODMzMzMzMzMzMzMzMzM0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDciIHk9IjI0IiByeD0iOS40IiByeT0iNC44IiB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgZmlsbD0iI2IzYjNiMyIgdHJhbnNmb3JtPSJyb3RhdGUoMTUwIDUwIDUwKSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGR1cj0iMXMiIGJlZ2luPSItMC41cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDciIHk9IjI0IiByeD0iOS40IiByeT0iNC44IiB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgZmlsbD0iI2IzYjNiMyIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDUwIDUwKSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGR1cj0iMXMiIGJlZ2luPSItMC40MTY2NjY2NjY2NjY2NjY3cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDciIHk9IjI0IiByeD0iOS40IiByeT0iNC44IiB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgZmlsbD0iI2IzYjNiMyIgdHJhbnNmb3JtPSJyb3RhdGUoMjEwIDUwIDUwKSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGR1cj0iMXMiIGJlZ2luPSItMC4zMzMzMzMzMzMzMzMzMzMzcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDciIHk9IjI0IiByeD0iOS40IiByeT0iNC44IiB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgZmlsbD0iI2IzYjNiMyIgdHJhbnNmb3JtPSJyb3RhdGUoMjQwIDUwIDUwKSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGR1cj0iMXMiIGJlZ2luPSItMC4yNXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9yZWN0PjxyZWN0IHg9IjQ3IiB5PSIyNCIgcng9IjkuNCIgcnk9IjQuOCIgd2lkdGg9IjYiIGhlaWdodD0iMTIiIGZpbGw9IiNiM2IzYjMiIHRyYW5zZm9ybT0icm90YXRlKDI3MCA1MCA1MCkiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMTswIiBkdXI9IjFzIiBiZWdpbj0iLTAuMTY2NjY2NjY2NjY2NjY2NjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjwvcmVjdD48cmVjdCB4PSI0NyIgeT0iMjQiIHJ4PSI5LjQiIHJ5PSI0LjgiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIiBmaWxsPSIjYjNiM2IzIiB0cmFuc2Zvcm09InJvdGF0ZSgzMDAgNTAgNTApIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIgZHVyPSIxcyIgYmVnaW49Ii0wLjA4MzMzMzMzMzMzMzMzMzMzcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDciIHk9IjI0IiByeD0iOS40IiByeT0iNC44IiB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgZmlsbD0iI2IzYjNiMyIgdHJhbnNmb3JtPSJyb3RhdGUoMzMwIDUwIDUwKSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGR1cj0iMXMiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PC9zdmc+')
          50% 50% / cover no-repeat;
        background-color: rgb(0, 0, 0);
      }
    }
  }
  .function {
    -webkit-box-align: center;
    align-items: center;
    pointer-events: all;
    display: flex;
    .wrap {
      display: flex;
      width: 87px;
      border-radius: 27px;
      border: 1px solid rgba(255, 255, 255, 0.25);
      line-height: 1;
      font-size: 0px;
      -webkit-box-align: center;
      align-items: center;
      background-color: rgba(255, 255, 255, 0.6);
      border-color: rgba(0, 0, 0, 0.05);
      .share {
        display: flex;
        flex: 1 1 0%;
        height: 30px;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        padding: 6.4px 0px;
        cursor: pointer;

        .icon {
          cursor: pointer;
          display: inline-block;
          vertical-align: middle;
          width: 22px;
          height: 7px;
          -webkit-mask: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCA0NSAxNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+bWVudV9ibGFja0AyeDwvdGl0bGU+PHBhdGggZD0iTTEwIDhBNSA1IDAgMSAxLS4wMDEgNy45OTkgNSA1IDAgMCAxIDEwIDh6bTEyLjUtOGE3LjUgNy41IDAgMSAxIDAgMTUgNy41IDcuNSAwIDAgMSAwLTE1ek00MCAzYTUgNSAwIDEgMSAwIDEwIDUgNSAwIDAgMSAwLTEweiIgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')
            50% 50% / cover no-repeat;
          background: rgb(255, 255, 255);
          background-color: rgb(0, 0, 0);
        }
      }
      .split {
        display: inline-block;
        min-width: 1px;
        height: 17.2px;
        background: rgba(0, 0, 0, 0.15);
      }
      .quit {
        font-size: 0px;
        display: flex;
        flex: 1 1 0%;
        height: 30px;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        padding: 6.4px 0px;
        cursor: pointer;
        .icon {
          cursor: pointer;
          display: inline-block;
          vertical-align: middle;
          width: 17px;
          height: 17px;
          -webkit-mask: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA1MiA1MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+ZXhpdDwvdGl0bGU+PHBhdGggZD0iTTI2IDUyQzExLjY0IDUyIDAgNDAuMzYgMCAyNlMxMS42NCAwIDI2IDBzMjYgMTEuNjQgMjYgMjYtMTEuNjQgMjYtMjYgMjZ6bTAtNi4xMThjMTAuOTggMCAxOS44ODItOC45MDEgMTkuODgyLTE5Ljg4MiAwLTEwLjk4LTguOTAxLTE5Ljg4Mi0xOS44ODItMTkuODgyQzE1LjAyIDYuMTE4IDYuMTE4IDE1LjAxOSA2LjExOCAyNmMwIDEwLjk4IDguOTAxIDE5Ljg4MiAxOS44ODIgMTkuODgyek0zNSAyNmE5LjAwMSA5LjAwMSAwIDEgMS0xOC4wMDItLjAwMkE5LjAwMSA5LjAwMSAwIDAgMSAzNSAyNnoiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==')
            50% 50% / cover no-repeat;
          background: rgb(255, 255, 255);
          background-color: rgb(0, 0, 0);
        }
      }
    }
  }
}
</style>
