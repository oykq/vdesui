<template>
  <div class="ui-mask" v-if="show">
    <div class="scene">
      <div class="scene-hd">
        <div class="scene-hd-icon">
          <i class="magnifier"></i>
        </div>
        <div class="scene-hd-input-box">
          <input
            type="text"
            placeholder="查找场景值"
            class="input"
            v-model="searchValue"
          />
        </div>
      </div>

      <div class="scene-bd">
        <div
          class="scene-bd-item"
          v-for="key in sceneKeys"
          :key="key"
          @click="$emit('close')"
        >
          <p class="name" :title="key + ': ' + scenes[key]">
            {{ key + ': ' + scenes[key] }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, defineComponent } from 'vue';
import scenes from '../../common/scene.config';

defineProps({
  show: {
    type: Boolean,
    default: false
  }
});

defineEmits(['close'])

const searchValue = '';
const sceneKeys = computed(() => {
  const keys: string[] = Object.keys(scenes);
  return keys.filter((key) => {
    return (
      key.indexOf(searchValue) != -1 || scenes[key].indexOf(searchValue) != -1
    );
  });
});

</script>
<style lang="scss" scoped>
.ui-mask {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1000;
  .scene {
    background-color: #333;
    width: 100vw;
    height: 100vh;
    .scene-hd {
      display: flex;
      padding: 12px 24px;
      .scene-hd-icon {
        display: flex;
        align-items: center;
        margin-right: 16px;
        .magnifier {
          width: 18px;
          height: 18px;
          mask: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RmlsbCAxPC90aXRsZT48cGF0aCBkPSJNMTIuODM2IDExLjM4Nmw0Ljg3NSA0Ljg3NWEuNS41IDAgMCAxIDAgLjcwN2wtLjc0My43NDNhLjUuNSAwIDAgMS0uNzA3IDBsLTQuODc1LTQuODc1YTcuMTI1IDcuMTI1IDAgMSAxIDEuNDUtMS40NXptLS4wODYtNC4yNjFhNS42MjUgNS42MjUgMCAxIDAtMTEuMjUgMCA1LjYyNSA1LjYyNSAwIDAgMCAxMS4yNSAweiIgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsLW9wYWNpdHk9Ii42Ii8+PC9zdmc+')
            no-repeat 50% 50%;
          mask-size: cover;
          background-color: hsla(0, 0%, 100%, 0.8);
        }
      }
      .scene-hd-input-box {
        padding: 8px 0 7px;
        flex: 1;
        .input {
          display: block;
          width: 100%;
          height: 100%;
          font-size: 18px;
          outline: 0;
          border: 0;
          caret-color: #06bd04;
          background-color: transparent;
          color: hsla(0, 0%, 100%, 0.8);
        }
      }
    }
    .scene-bd {
      padding: 14px 0;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      border-top-color: #434343;
      max-height: 600px;
      overflow-y: auto;
      .scene-bd-item {
        display: flex;
        padding: 4px 23px;
        cursor: pointer;
        font-size: 14px;
        color: hsla(0, 0%, 100%, 0.8);
        &:hover {
          background-color: rgb(66, 172, 107);
          color: hsla(0, 0%, 100%, 1);
        }
        .name {
          display: inline-block;
          white-space: nowrap;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-left: 6px;
        }
      }
    }
  }
}
</style>
