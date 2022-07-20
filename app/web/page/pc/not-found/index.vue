<template>
  <layout title="404-我与外界失联了">
    <div class="container">
      <div class="content b-empty">
        <img class="img-error" src="@/asset/images/img_error.png" />
        <div class="s-e-t1">我与外界失联了</div>
      </div>
    </div>
  </layout>
</template>
<script type='babel'>
export default {
  components: {
  }
};
</script>
<style lang="scss" scoped>
html,
body,
#app {
  background: #fff;
  height: 100%;
}
.container {
  height: 100%;
  text-align: center;
  position: relative;
}
.loading-indicator {
  margin: 0 auto 18px;
  width: 60px;
  height: 60px;
}
.content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: #222;
  font-size: 28px;
  line-height: 28px;

  &.b-empty {
    transform: translate(-50%, -65%);
  }

  .img-empty {
    width: 340px;
    height: 316px;
  }
  .img-error {
    width: 340px;
    height: 268px;
  }
  .s-e-t1 {
    font-size: 28px;
    line-height: 28px;
    color: #222;
    padding: 8px 0 32px;
  }
  .s-e-t2 {
    font-size: 28px;
    color: #999;
  }
  .s-e-btn {
    color: #f31d35;
    font-size: 28px;
    height: 68px;
    line-height: 68px;
    width: 220px;
    text-align: center;
    border: 1px solid #f31d35;
    border-radius: 60px;
    margin: 0 auto;
  }

  .le-body {
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .img-login {
    width: 340px;
    height: 268px;
    margin: 0 auto;
  }
  .le-t1 {
    text-align: center;
    font-size: 28px;
    color: #222;
    line-height: 36px;
    margin: 24px 0 40px;
  }
  .le-btn {
    width: 686px;
    height: 90px;
    line-height: 90px;
    background: #f31d35;
    border-radius: 90px;
    text-align: center;
    margin: 0 auto;
    font-size: 32px;
    color: #fff;
  }
}
</style>
