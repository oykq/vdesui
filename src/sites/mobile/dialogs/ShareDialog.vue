<template>
  <teleport to="body" v-if="show">
    <div class="shareDialog">
      <div class="mask" @click="$emit('close')"></div>
      <div class="more-show">
        <div class="body">
          <div class="title">
            wx333接口测试号
            <i class="more"></i>
          </div>
          <div class="scroll">
            <div class="item">
              <div class="icon-background">
                <i class="icon share"></i>
              </div>
              <div class="text">发送给朋友</div>
            </div>
            <div class="item">
              <div class="icon-background">
                <i class="icon fans-disabled"></i>
              </div>
              <div class="text">当前页面未设置分享</div>
            </div>
            <div class="item">
              <div class="icon-background">
                <i class="icon favorite"></i>
              </div>
              <div class="text">收藏</div>
            </div>
          </div>
          <div class="scroll">
            <div class="item">
              <div class="icon-background">
                <i class="icon seeting"></i>
              </div>
              <div class="text">设置</div>
            </div>
            <div class="item">
              <div class="icon-background">
                <i class="icon reload"></i>
              </div>
              <div class="text">重新进入小程序</div>
            </div>
            <div class="item">
              <div class="icon-background">
                <i class="icon link"></i>
              </div>
              <div class="text">复制短链</div>
            </div>
          </div>
        </div>
        <div class="foot">
          <div class="btn" @click="$emit('close')">取消</div>
        </div>
      </div>
    </div>
  </teleport>
</template>
<script lang="ts" setup>
defineProps({
  show: {
    type: Boolean,
    default: false
  }
});
defineEmits(['close'])

</script>
<style lang="scss" scoped>
.shareDialog {
  display: block;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 15;
  pointer-events: all;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    transition: all 0.3s;
    opacity: 1;
    z-index: 1000;
  }
  .more-show {
    border-radius: 12px 12px 0 0;
    background-color: #ededed;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    backface-visibility: hidden;
    z-index: 5000;
    transition: transform 0.35s;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .body {
      overflow-y: scroll;
      .title {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgba(0, 0, 0, 0.9);
        font-weight: 700;
        font-size: 14px;
        padding-left: 16px;
        .more {
          width: 10px;
          height: 20px;
          mask: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTInIGhlaWdodD0nMjQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTTEwLjE1NyAxMi43MTFMNC41IDE4LjM2OGwtMS40MTQtMS40MTQgNC45NS00Ljk1LTQuOTUtNC45NUw0LjUgNS42NGw1LjY1NyA1LjY1N2ExIDEgMCAwMTAgMS40MTR6JyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGZpbGwtb3BhY2l0eT0nLjknLz48L3N2Zz4=')
            no-repeat 50% 50%;
          mask-size: cover;
          background-color: black;
        }
      }
      .scroll {
        padding: 16px 12px;
        overflow-x: scroll;
        display: flex;
        scrollbar-width: none;
        position: relative;
        &:before {
          content: ' ';
          position: absolute;
          width: calc(100% - 12px);
          top: 0;
          right: 0;
          height: 1px;
          background-color: rgba(0, 0, 0, 0.1);
        }
        .item {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          margin-right: 12px;
          max-width: 62px;
          .icon-background {
            pointer-events: auto;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            text-decoration: none;
            height: 56px;
            width: 56px;
            display: flex;
            align-items: center;
            justify-content: center;
            vertical-align: middle;
            background-color: #fff;
            mask: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='56px' height='56px' viewBox='0 0 56 56' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 63.1 (92452) - https://sketch.com --%3E%3Ctitle%3EIcon Shape 2 Copy 10%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='画板' transform='translate(-44.000000, -77.000000)' fill='%23FFFFFF'%3E%3Cpath d='M80.4760667,77 C86.098,77 88.9082667,77 91.9346,77.9566667 C95.2386,79.1592667 97.8407333,81.7614 99.0433333,85.0654 C100,88.0912667 100,90.9024667 100,96.5239333 L100,113.476067 C100,119.098 100,121.908267 99.0433333,124.9346 C97.8407333,128.2386 95.2386,130.840733 91.9346,132.042867 C88.9082667,133 86.098,133 80.4760667,133 L63.5239333,133 C57.902,133 55.0912667,133 52.0654,132.042867 C48.7614,130.840733 46.1592667,128.2386 44.9566667,124.9346 C44,121.908267 44,119.098 44,113.476067 L44,96.5239333 C44,90.9024667 44,88.0912667 44.9566667,85.0654 C46.1592667,81.7614 48.7614,79.1592667 52.0654,77.9566667 C55.0912667,77 57.902,77 63.5239333,77 L80.4760667,77 Z' id='Icon-Shape-2-Copy-10'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
              50% 50% / cover no-repeat;
            .icon {
              display: inline-block;
              vertical-align: middle;
              background-size: cover;
              width: 32px;
              height: 32px;
            }
            .share {
              background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Eicons_filled_share%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='icons_filled_share' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='icon38' fill='%2307C160' fill-rule='nonzero'%3E%3Cpath d='M12.75,4.36643249 L12.75,7 L19.0010434,7 C19.5508697,7 20,7.44583866 20,7.99580851 L20,21.0041915 C20,21.5510798 19.5541613,22 19.0041915,22 L4.99580851,22 C4.44892021,22 4,21.5541613 4,21.0041915 L4,7.99580851 C4,7.44892021 4.44724809,7 4.99895656,7 L11.25,7 L11.25,4.37643471 L9.53050029,6.09619408 L8.47000027,5.03553391 L11.2978402,2.20705341 C11.688335,1.81649963 12.3215,1.81645183 12.7120537,2.20694664 C12.7120893,2.20698223 12.7121249,2.20701782 12.7121605,2.20705341 L12.7120537,2.20716017 L15.5400004,5.03553391 L14.4795004,6.09619408 L12.75,4.36643249 Z M11.25,7 L11.25,13.5 L12.75,13.5 L12.75,7 L11.25,7 Z' id='Combined-Shape'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            }
            .fans-disabled {
              background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='32px' height='32px' viewBox='0 0 32 32' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 63.1 (92452) - https://sketch.com --%3E%3Ctitle%3EIcons/Filled/friends%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='浮窗按钮规范' transform='translate(-193.000000, -191.000000)'%3E%3Cg id='Icons/Filled/friends__disable' transform='translate(193.000000, 191.000000)'%3E%3Crect id='矩形' x='0' y='0' width='32' height='32'%3E%3C/rect%3E%3Cg id='Group' transform='translate(2.000000, 2.000000)' fill='%23c9c9c9'%3E%3Cg id='Path'%3E%3Cpath d='M7.42758115,1.63536256 C4.60541305,3.13855421 2.358767,5.57968088 1.10343669,8.54273355 L1.1034349,8.54273355 L13.8605281,8.54273355 C13.9508135,8.53864899 14.0417363,8.53658537 14.133254,8.53658537 C14.1999823,8.53658537 14.2664763,8.53789488 14.3327109,8.54049234 L7.42758115,1.63536256 L7.42758115,1.63536256 Z'%3E%3C/path%3E%3Cpath d='M8.74387008,1.02004272 C10.3667455,0.36226557 12.1410286,0 14,0 C15.4256515,0 16.8015459,0.213114633 18.097561,0.609223788 L18.097561,0.609223788 L18.097561,10.3922801 C17.970259,10.244179 17.8356072,10.1033749 17.6942813,9.97045392 L8.74387008,1.02004272 L8.74387008,1.02004272 Z'%3E%3C/path%3E%3Cpath d='M0.607265757,9.90858721 C0.212408938,11.202801 0,12.5765975 0,14 C0,15.8621792 0.363546754,17.6394556 1.02355326,19.2647073 L1.02355326,19.2647073 L10.1470265,10.1412341 L10.1563052,10.1505129 C10.2398291,10.0671137 10.3260661,9.98643033 10.4148916,9.90858721 L0.607265757,9.90858721 L0.607265757,9.90858721 L0.607265757,9.90858721 Z'%3E%3C/path%3E%3Cpath d='M1.63958691,20.5802824 C3.14408201,23.4005643 5.58559862,25.6453995 8.54867331,26.8991095 L8.54867331,26.8991095 L8.54867331,14.4838602 C8.54065405,14.3678119 8.53658537,14.2508977 8.53658537,14.133254 C8.53658537,13.9753508 8.54272917,13.8192169 8.55479763,13.6650717 L1.63958691,20.5802824 L1.63958691,20.5802824 L1.63958691,20.5802824 Z'%3E%3C/path%3E%3Cpath d='M9.91452697,27.3945692 C11.2069708,27.7882457 12.5787341,28 14,28 C15.8620795,28 17.6392751,27.6364343 19.2644687,26.9764165 L19.2644687,26.9764165 L10.3430049,18.0549527 C10.192155,17.9221726 10.0491157,17.781675 9.91452697,17.6341978 L9.91452697,27.3945692 L9.91452697,27.3945692 L9.91452697,27.3945692 Z'%3E%3C/path%3E%3Cpath d='M20.5800242,26.3603633 C23.3983411,24.856856 25.642056,22.4176271 26.8963433,19.4574752 L26.8963452,19.4574749 L14.3792713,19.4574749 C14.297654,19.4614191 14.2156326,19.4634146 14.133254,19.4634146 C13.9752861,19.4634146 13.8190904,19.4572672 13.6648862,19.4452253 L20.5800242,26.3603633 L20.5800242,26.3603633 L20.5800242,26.3603633 Z'%3E%3C/path%3E%3Cpath d='M27.3925932,18.0916212 C27.7875366,16.7973465 28,15.4234789 28,14 C28,12.1411945 27.6377154,10.3669846 26.9799081,8.74412766 L26.9799081,8.74412766 L18.236518,17.4875178 C18.0585842,17.7031591 17.8644127,17.9052298 17.6561134,18.0916212 L27.3925932,18.0916212 L27.3925932,18.0916212 L27.3925932,18.0916212 Z'%3E%3C/path%3E%3Cpath d='M26.3645691,7.42785793 C24.8624055,4.60771809 22.423636,2.36211615 19.4634146,1.106179 L19.4634146,14 L19.4619523,14 C19.4629253,14.0442738 19.4634146,14.0886935 19.4634146,14.133254 C19.4634146,14.200054 19.4621026,14.2666188 19.4595036,14.3329234 L26.3645691,7.42785793 L26.3645691,7.42785793 L26.3645691,7.42785793 Z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            }
            .favorite {
              background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Eicons_filled_favorites%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='icons_filled_favorites' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Fav' fill='%2307C160'%3E%3Cpath d='M20.1991242,6.40020803 L12,11.1339746 L3.80085813,6.40019783 C3.82136925,6.38681955 3.8420775,6.37414138 3.86295784,6.36220591 L11.1370422,2.20424535 C11.6136406,1.93181552 12.3867187,1.93202094 12.8629578,2.20424535 L20.1370422,6.36220591 C20.1579176,6.37413857 20.1786199,6.38682047 20.1991242,6.40020803 Z M20.9896226,7.67586436 C20.9964541,7.72902115 21,7.7814606 21,7.83272697 L21,16.167273 C21,16.7069896 20.6132812,17.3655697 20.1370422,17.6377941 L12.8629578,21.7957547 C12.8269153,21.816357 12.7891771,21.8354002 12.75,21.8528844 L12.75,12.4330127 L20.9896226,7.67586436 Z M11.25,21.8528815 C11.210819,21.8353971 11.1730807,21.8163547 11.1370422,21.7957547 L3.86295784,17.6377941 C3.38635938,17.3653643 3,16.7024094 3,16.167273 L3,7.83272697 C3,7.7813482 3.00350454,7.72889226 3.01025723,7.675795 L11.25,12.4330127 L11.25,21.8528815 Z' id='Combined-Shape'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            }
            .seeting {
              mask: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Eicons_outlined_setting%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='icons_outlined_setting' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='icon26' fill='%23000000' fill-rule='nonzero'%3E%3Cpath d='M12.5630683,3.2 L11.4369317,3.2 L10.7924052,5.77810602 L10.1451926,5.97714227 C9.76740015,6.0933242 9.40218123,6.24492893 9.05375494,6.42967378 L8.45518089,6.74705359 L6.17560975,5.3793109 L5.3793109,6.17560975 L6.74705359,8.45518089 L6.42967378,9.05375494 C6.24492893,9.40218123 6.0933242,9.76740015 5.97714227,10.1451926 L5.77810602,10.7924052 L3.2,11.4369317 L3.2,12.5630683 L5.77810602,13.2075948 L5.97714227,13.8548074 C6.0933242,14.2325999 6.24492893,14.5978188 6.42967378,14.9462451 L6.74705359,15.5448191 L5.3793109,17.8243903 L6.17560975,18.6206891 L8.45518089,17.2529464 L9.05375494,17.5703262 C9.40218123,17.7550711 9.76740015,17.9066758 10.1451926,18.0228577 L10.7924052,18.221894 L11.4369317,20.8 L12.5630683,20.8 L13.2075948,18.221894 L13.8548074,18.0228577 C14.2325999,17.9066758 14.5978188,17.7550711 14.9462451,17.5703262 L15.5448191,17.2529464 L17.8243903,18.6206891 L18.6206891,17.8243903 L17.2529464,15.5448191 L17.5703262,14.9462451 C17.7550711,14.5978188 17.9066758,14.2325999 18.0228577,13.8548074 L18.221894,13.2075948 L20.8,12.5630683 L20.8,11.4369317 L18.221894,10.7924052 L18.0228577,10.1451926 C17.9066758,9.76740015 17.7550711,9.40218123 17.5703262,9.05375494 L17.2529464,8.45518089 L18.6206891,6.17560975 L17.8243903,5.3793109 L15.5448191,6.74705359 L14.9462451,6.42967378 C14.5978188,6.24492893 14.2325999,6.0933242 13.8548074,5.97714227 L13.2075948,5.77810602 L12.5630683,3.2 Z M15.5083849,5.36948567 L17.3408974,4.26997816 C17.7343732,4.03389271 18.2380315,4.09589589 18.5624999,4.42036431 L19.5796357,5.43750007 C19.9041041,5.76196849 19.9661073,6.26562685 19.7300218,6.6591026 L18.6305143,8.49161512 C18.8491215,8.90390529 19.0303999,9.33902209 19.1698454,9.79246134 L21.2425356,10.3106339 C21.6877026,10.4219257 22,10.8219088 22,11.2807764 L22,12.7192236 C22,13.1780912 21.6877026,13.5780743 21.2425356,13.6893661 L19.1698454,14.2075387 C19.0303999,14.6609779 18.8491215,15.0960947 18.6305143,15.5083849 L19.7300218,17.3408974 C19.9661073,17.7343732 19.9041041,18.2380315 19.5796357,18.5624999 L18.5624999,19.5796357 C18.2380315,19.9041041 17.7343732,19.9661073 17.3408974,19.7300218 L15.5083849,18.6305143 C15.0960947,18.8491215 14.6609779,19.0303999 14.2075387,19.1698454 L13.6893661,21.2425356 C13.5780743,21.6877026 13.1780912,22 12.7192236,22 L11.2807764,22 C10.8219088,22 10.4219257,21.6877026 10.3106339,21.2425356 L9.79246134,19.1698454 C9.33902209,19.0303999 8.90390529,18.8491215 8.49161512,18.6305143 L6.6591026,19.7300218 C6.26562685,19.9661073 5.76196849,19.9041041 5.43750007,19.5796357 L4.42036431,18.5624999 C4.09589589,18.2380315 4.03389271,17.7343732 4.26997816,17.3408974 L5.36948567,15.5083849 C5.1508785,15.0960947 4.9696001,14.6609779 4.83015464,14.2075387 L2.75746437,13.6893661 C2.31229737,13.5780743 2,13.1780912 2,12.7192236 L2,11.2807764 C2,10.8219088 2.31229737,10.4219257 2.75746437,10.3106339 L4.83015464,9.79246134 C4.9696001,9.33902209 5.1508785,8.90390529 5.36948567,8.49161512 L4.26997816,6.6591026 C4.03389271,6.26562685 4.09589589,5.76196849 4.42036431,5.43750007 L5.43750007,4.42036431 C5.76196849,4.09589589 6.26562685,4.03389271 6.6591026,4.26997816 L8.49161512,5.36948567 C8.90390529,5.1508785 9.33902209,4.9696001 9.79246134,4.83015464 L10.3106339,2.75746437 C10.4219257,2.31229737 10.8219088,2 11.2807764,2 L12.7192236,2 C13.1780912,2 13.5780743,2.31229737 13.6893661,2.75746437 L14.2075387,4.83015464 C14.6609779,4.9696001 15.0960947,5.1508785 15.5083849,5.36948567 Z M12,14.8 C13.5463973,14.8 14.8,13.5463973 14.8,12 C14.8,10.4536027 13.5463973,9.2 12,9.2 C10.4536027,9.2 9.2,10.4536027 9.2,12 C9.2,13.5463973 10.4536027,14.8 12,14.8 Z M12,16 C9.790861,16 8,14.209139 8,12 C8,9.790861 9.790861,8 12,8 C14.209139,8 16,9.790861 16,12 C16,14.209139 14.209139,16 12,16 Z' id='Combined-Shape'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
                no-repeat 50% 50%;
              mask-size: cover;
              background-color: #000;
            }
            .reload {
              mask: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Eicons_outlined_refresh%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='icons_outlined_refresh' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='common_icons_miniprogram' fill='%23000000' fill-rule='nonzero'%3E%3Cpath d='M18.363961,6.63603897 C19.9926407,8.26471863 21,10.5147186 21,13 C21,17.9705627 16.9705627,22 12,22 C7.02943725,22 3,17.9705627 3,13 C3,8.02943725 7.02943725,4 12,4 L12,5.2 C7.69217895,5.2 4.2,8.69217895 4.2,13 C4.2,17.307821 7.69217895,20.8 12,20.8 C16.307821,20.8 19.8,17.307821 19.8,13 C19.8,10.9020822 18.9695547,8.93868889 17.5154329,7.48456711 L18.363961,6.63603897 Z M11.5769476,5.2112774 C7.46584819,5.43100725 4.2,8.83411377 4.2,13 C4.2,17.307821 7.69217895,20.8 12,20.8 C16.307821,20.8 19.8,17.307821 19.8,13 C19.8,10.9020822 18.9695547,8.93868889 17.5154329,7.48456711 L18.363961,6.63603897 C19.9926407,8.26471863 21,10.5147186 21,13 C21,17.9705627 16.9705627,22 12,22 C7.02943725,22 3,17.9705627 3,13 C3,8.30954147 6.58809453,4.45712733 11.169206,4.03783519 L9.97989895,2.84852817 L10.8284271,2 L13.3033009,4.47487373 C13.498563,4.67013588 13.498563,4.98671837 13.3033009,5.18198052 L12.8083261,5.6769553 L10.8284271,7.65685425 L9.97989895,6.80832608 L11.5769476,5.2112774 Z' id='Combined-Shape'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
                no-repeat 50% 50%;
              mask-size: cover;
              background-color: #000;
            }
            .link {
              background-size: cover;
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24px' height='24px' viewBox='0 0 24 24' version='1.1'%3E%3Ctitle%3E0.图标/线型/icons_outlined_link%3C/title%3E%3Cg id='0.图标/线型/icons_outlined_link' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'%3E%3Cg id='Group' transform='translate(3.000000, 3.000000)' fill='%23000000'%3E%3Cpath d='M14.6568542,9 L13.8083261,8.15147186 L15.9296465,6.03015152 C17.0231145,4.9366835 17.0231145,3.16382156 15.9296465,2.07035354 C14.8361784,0.976885527 13.0633165,0.976885527 11.9698485,2.07035354 L8.08076118,5.95944084 C6.98729317,7.05290886 6.98729317,8.8257708 8.08076118,9.91923882 L7.23223305,10.767767 C5.67013588,9.20566979 5.67013588,6.67300987 7.23223305,5.1109127 L11.1213203,1.22182541 C12.6834175,-0.34027176 15.2160774,-0.34027176 16.7781746,1.22182541 C18.3402718,2.78392257 18.3402718,5.31658249 16.7781746,6.87867966 L14.6568542,9 Z M3.34314575,9 L4.19167389,9.84852814 L2.07035354,11.9698485 C0.976885527,13.0633165 0.976885527,14.8361784 2.07035354,15.9296465 C3.16382156,17.0231145 4.9366835,17.0231145 6.03015152,15.9296465 L9.91923882,12.0405592 C11.0127068,10.9470911 11.0127068,9.1742292 9.91923882,8.08076118 L10.767767,7.23223305 C12.3298641,8.79433021 12.3298641,11.3269901 10.767767,12.8890873 L6.87867966,16.7781746 C5.31658249,18.3402718 2.78392257,18.3402718 1.22182541,16.7781746 C-0.34027176,15.2160774 -0.34027176,12.6834175 1.22182541,11.1213203 L3.34314575,9 Z' id='Combined-Shape'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            }
          }
          .text {
            text-align: center;
            margin-top: 8px;
            color: rgb(0, 0, 0, 0.5);
            font-size: 10px;
          }
        }
      }
    }
    .foot {
      height: 58px;
      .btn {
        background-color: #fff;
        line-height: 58px;
        height: 58px;
        font-size: 17px;
        text-align: center;
        color: rgb(0, 0, 0, 0.9);
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
  }
}
</style>
