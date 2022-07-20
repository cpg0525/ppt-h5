<template>
  <popup
    v-show="visible"
    :mask-click="false"
  >
    <div class="container">
      <img
        src="../../asset/images/share_target.png"
        alt=""
        srcset=""
        class="share-target"
      >
      <div class="content d-flex flex-column a-center j-center">
        <div class="text">
          请点击这里
        </div>
        <div class="text">
          分享给微信好友
        </div>
        <div
          class="btn d-flex a-center j-center"
          @click.stop="close"
        >
          我知道啦
        </div>
      </div>
    </div>
  </popup>
</template>

<script>
import popup from '../popup/popup.vue';
export default {
  name: 'Share',
  components: {
    popup
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    close() {
      this.$share.hide();
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  box-sizing: border-box;
  padding-top: 10px;
  .share-target {
    width: 220px;
    height: 220px;
    position: relative;
    left: 420px;
  }
  .content {
    margin-top: 30px;

    .text {
      font-size: 40px;
      font-weight: bold;
      color: #ffffff;
      line-height: 56px;
    }
    .btn {
      width: 350px;
      height: 90px;
      background: rgba(255, 255, 255, 0);
      border-radius: 45px;
      border: 1px solid #ffffff;
      font-size: 32px;
      font-weight: bold;
      color: #ffffff;
      line-height: 44px;
      margin-top: 40px;
    }
  }
}
</style>
