<template>
  <div
    v-if="showWrap"
    class="wrap d-flex j-center"
    :class="showContent ? 'fadein' : 'fadeout'"
  >
    <span class="content">{{ text }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: '',
      showWrap: false,
      showContent: false
    };
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-100%);
  z-index: 1000;
  width: 750px;
  .content {
    max-width: 622px;
    box-sizing: border-box;
    font-size: 28px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    line-height: 1;
    border-radius: 8px;
    padding: 24px 50px;
    background: rgba(0, 0, 0, 0.55);
    display: inline-block;
    word-break: break-all;
  }
}
.fadein {
  animation: animate_in 0.25s;
}
.fadeout {
  animation: animate_out 0.25s;
  opacity: 0;
}
@keyframes animate_in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes animate_out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
