<template>
  <div class="doc-demo-preview">
    <iframe :src="url" frameborder="0"></iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    url: String
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss">
.doc {
  &-demo-preview {
    height: 667px;
    width: 375px;
    position: fixed;
    right: 30px;
    top: 100px;
    box-shadow: #ebedf0 0 4px 12px;
    border-radius: 12px;

    iframe {
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
  }
}
</style>
