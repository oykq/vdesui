<template>
  <div class="topbar">
    <div>
      <span>
        <i class="point"></i>
      </span>
      <span style="margin: 0px 2px">WeChat</span>
      <span>
        <i class="wifi"></i>
      </span>
    </div>
    <div class="time">
        {{ time }}
      <!-- <p>{{ time }}</p> -->
    </div>
    <div class="electricity">
      <span class="text">100%</span>
      <span>
        <div class="icon">
          <div class="right"></div>
          <div class="center"></div>
        </div>
      </span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const getTime = (): string => {
  const date = new Date();
  const time =
    date.getHours().toString().padStart(2, '0') +
    ':' +
    date.getMinutes().toString().padStart(2, '0');
  return time;
};
const time = ref(getTime());

onMounted(() => {
  setInterval(() => {
    time.value = getTime();
  }, 1000);
});
</script>
<style lang="scss" scoped>
.topbar {
  height: 20px;
  background: rgb(0, 0, 0);
  padding: 0px 10px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  z-index: 10;
  position: relative;
  font-size: 12px;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  display: flex;

  .point {
    color: rgb(0, 0, 0);
    width: 34px;
    height: 6px;
    display: inline-block;
    background: rgb(255, 255, 255);
    vertical-align: middle;
    -webkit-mask: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjciIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCA2NyAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+U2lnbmFsPC90aXRsZT48cGF0aCBkPSJNNS41IDExLjA3QzIuNDYyIDExLjA3IDAgOC42MDMgMCA1LjU1NyAwIDIuNTEgMi40NjIuMDQgNS41LjA0UzExIDIuNTEgMTEgNS41NTYgOC41MzggMTEuMDcgNS41IDExLjA3em0xNCAwYy0zLjAzOCAwLTUuNS0yLjQ2OC01LjUtNS41MTRDMTQgMi41MSAxNi40NjIuMDQgMTkuNS4wNFMyNSAyLjUxIDI1IDUuNTU2cy0yLjQ2MiA1LjUxNS01LjUgNS41MTV6bTE0IDBjLTMuMDM4IDAtNS41LTIuNDY4LTUuNS01LjUxNEMyOCAyLjUxIDMwLjQ2Mi4wNCAzMy41LjA0UzM5IDIuNTEgMzkgNS41NTZzLTIuNDYyIDUuNTE1LTUuNSA1LjUxNXptMTQgMGMtMy4wMzggMC01LjUtMi40NjgtNS41LTUuNTE0QzQyIDIuNTEgNDQuNDYyLjA0IDQ3LjUuMDRTNTMgMi41MSA1MyA1LjU1NnMtMi40NjIgNS41MTUtNS41IDUuNTE1em0xNCAwYy0zLjAzOCAwLTUuNS0yLjQ2OC01LjUtNS41MTRDNTYgMi41MSA1OC40NjIuMDQgNjEuNS4wNFM2NyAyLjUxIDY3IDUuNTU2cy0yLjQ2MiA1LjUxNS01LjUgNS41MTV6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')
      50% 50% / cover no-repeat;
    background-color: rgb(0, 0, 0);
  }
  .wifi {
    color: rgb(0, 0, 0);
    width: 12px;
    height: 9px;
    display: inline-block;
    background: rgb(255, 255, 255);
    vertical-align: middle;
    -webkit-mask: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAyNCAxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+V2lmaTwvdGl0bGU+PHBhdGggZD0iTTExLjk5MiAzLjA1YzMuODc5IDAgNy40MTUgMS40MzMgMTAuMTI2IDMuNzgzTDI0IDQuNzQ5QzIwLjc5IDEuOTU0IDE2LjU5NiAwIDExLjk5MiAwIDcuMzk0IDAgMy4yMDcgMS45NDggMCA0LjczNGwxLjg3OCAyLjA4N0ExNS40MDQgMTUuNDA0IDAgMCAxIDExLjk5MiAzLjA1em0wIDYuMDE1YzIuMzI1IDAgNC40NDkuODQ3IDYuMDg3IDIuMjQxbDEuOTkxLTIuMjA1Yy0yLjE2Ny0xLjg2Ni00Ljk4Ni0zLjA4NC04LjA3OC0zLjA4NC0zLjA4NyAwLTUuOTA0IDEuMjE1LTguMDcgMy4wNzVMNS45MTIgMTEuM2E5LjM1NyA5LjM1NyAwIDAgMSA2LjA4LTIuMjM1em00LjA5NSA0LjQ0NmMtMS4xMDktLjkyMi0yLjUzNi0xLjU2MS00LjA5Ni0xLjU2MS0xLjU1OCAwLTIuOTgzLjYzOC00LjA5MiAxLjU1N2w0LjA5MiA0LjU0MiA0LjA5Ni00LjUzOHoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')
      50% 50% / cover no-repeat;
    background-color: rgb(0, 0, 0);
  }
  .time {
    color: rgb(0, 0, 0);
    position: absolute;
    left: 0px;
    right: 0px;
    height: 20px;
    text-align: center;
    p {
        display: inline-block;
    }
  }
  .electricity {
    .text {
      color: rgb(0, 0, 0);
      font-size: 11px;
      display: inline-block;
      vertical-align: middle;
      margin-right: 5px;
    }
    .icon {
      color: rgb(0, 0, 0);
      display: inline-block;
      position: relative;
      width: 23px;
      height: 10px;
      padding: 1px;
      border: 1px solid rgb(255, 255, 255);
      border-radius: 2px;
      vertical-align: middle;
      font-size: 0px;
      border-color: rgb(0, 0, 0);
      .right {
        color: rgb(0, 0, 0);
        font-size: 0px;
        position: absolute;
        left: 100%;
        top: 50%;
        margin-top: -2px;
        margin-left: 2px;
        width: 2px;
        height: 4px;
        border-radius: 0px 2px 2px 0px;
        background: rgb(255, 255, 255);
        background-color: rgb(0, 0, 0);
      }
      .center {
        color: rgb(0, 0, 0);
        font-size: 0px;
        width: 100%;
        height: 100%;
        background: rgb(255, 255, 255);
        border-radius: 1px;
        display: inline-block;
        background-color: rgb(0, 0, 0);
      }
    }
  }
}
</style>
