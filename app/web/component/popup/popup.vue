<template>
  <div
    class="mask"
    :style="{ backgroundColor: bgColor }"
    @click.stop="handleClick"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Popup',
  props: {
    bgColor: {
      type: String,
      default: 'rgba(0,0,0,.5)'
    },
    maskClick: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick() {
      this.$emit('handleMaskClick');
    }
  }
};
</script>

<style lang="scss" scoped>
.mask {
  /* width: 100vw;
    height: 100vh; */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999px;
  background: rgba(0, 0, 0, 0.55);
}
</style>
