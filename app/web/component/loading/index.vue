<template>
  <div
    v-if="isShow"
    class="mask"
  >
    <div :class="{ loading: true, loadingBg: isShowBg }">
      <div class="content">
        <Indicator
          :size="30"
          :color="isShowBg ? '#fff' : '#000'"
        />
      </div>
      <span :style="isShowBg ? 'color:#fff' : 'color:#000'">
        {{ text }}
      </span>
    </div>
  </div>
</template>
<script>
import Indicator from './indicator.vue';
export default {
  components: {
    Indicator
  },
  data() {
    return {
      isShow: false,
      isShowBg: true,
      text: '加载中'
    };
  }
};
</script>
<style lang="scss" scoped>
.mask {
  position: fixed;
  z-index: 1100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.loading {
  position: fixed;
  top: 50%;
  left: 50%;
  padding-bottom: 20px;
  transform: translate(-50%, -130%);
  text-align: center;
  font-size: 20px;
  border-radius: 5px;
}
.loadingBg {
  background: rgba(0, 0, 0, 0.4);
}
.content {
  margin: 0 auto;
  padding: 30px 50px 20px;
}
</style>
