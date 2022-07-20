<template>
  <div
    class="container"
    :style="{ width: size + 'px', height: size + 'px' }"
  >
    <div class="lds-default">
      <div
        class="lds lds1"
        :style="{ background: color }"
      />
      <div
        class="lds lds2"
        :style="{ background: color }"
      />
      <div
        class="lds lds3"
        :style="{ background: color }"
      />
      <div
        class="lds lds4"
        :style="{ background: color }"
      />
      <div
        class="lds lds5"
        :style="{ background: color }"
      />
      <div
        class="lds lds6"
        :style="{ background: color }"
      />
      <div
        class="lds lds7"
        :style="{ background: color }"
      />
      <div
        class="lds lds8"
        :style="{ background: color }"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      default: 100,
      type: Number
    },
    color: {
      default: '#333',
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}

.lds-default {
  position: relative;
  width: 100%;
  height: 100%;
}

.lds {
  display: inline-block;
  width: 20%;
  height: 20%;
  border-radius: 100%;
  background: #333;
  position: absolute;
  transform: scale(0.5);
  animation: lds-default 1.04s ease infinite;
}

.lds1 {
  left: 0;
  top: 50%;
  margin-top: -10%;
  animation-delay: 0.13s;
}

.lds2 {
  left: 12%;
  top: 12%;
  animation-delay: 0.26s;
}

.lds3 {
  left: 50%;
  top: 0;
  margin-left: -10%;
  animation-delay: 0.39s;
}

.lds4 {
  top: 12%;
  right: 12%;
  animation-delay: 0.52s;
}

.lds5 {
  right: 0;
  top: 50%;
  margin-top: -10%;
  animation-delay: 0.65s;
}

.lds6 {
  right: 12%;
  bottom: 12%;
  animation-delay: 0.78s;
}

.lds7 {
  bottom: 0;
  left: 50%;
  margin-left: -10%;
  animation-delay: 0.91s;
}

.lds8 {
  bottom: 12%;
  left: 12%;
  animation-delay: 1.04s;
}

@keyframes lds-default {
  0% {
    transform: scale(1.2);
    opacity: 1;
  }

  100% {
    transform: scale(0.5);
    opacity: 0.5;
  }
}
</style>
