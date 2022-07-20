<template>
  <popup
    v-show="visible"
    :bg-color="mask ? '' : 'transparent'"
    :mask-click="maskClick"
    @handleMaskClick="handleMaskClick"
  >
    <transition name="fade">
      <div
        v-if="visible"
        class="modal-content"
      >
        <div
          class="content-container"
          :style="containerStyle ? containerStyle : ''"
        >
          <div
            v-if="title"
            class="title"
          >
            <span>{{ title }}</span>
            <img
              v-if="closeIcon"
              class="icon-close"
              src="../../asset/images/icon_close.png"
              @click.stop="hide"
            >
          </div>
          <div
            v-if="contentFormatter"
            class="content"
            :style="contentStyle ? contentStyle : ''"
            v-html="contentFormatter"
          />
          <slot name="content" />
          <div
            v-if="btn"
            class="btn"
            @click.stop="handleClick"
          >
            {{ btn }}
          </div>
          <slot name="btn" />
        </div>
      </div>
    </transition>
  </popup>
</template>

<script>
import popup from '../popup/popup.vue';
export default {
  name: 'Modal',
  components: {
    popup
  },
  props: {
    content: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    btn: {
      type: String,
      default: ''
    },
    contentStyle: {
      type: String,
      default: ''
    },
    containerStyle: {
      type: String,
      default: ''
    },
    onClickHandle: {
      type: Function,
      default: () => {}
    },
    closeIcon: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: false,
      animate: true,
      maskClick: false, // 能否点击背景关闭
      mask: true // 是否需要展示背景
    };
  },
  computed: {
    contentFormatter() {
      if (!this.content) return '';
      return this.content.replace(/\n/g, '<br/>');
    }
  },

  methods: {
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    },
    handleClick() {
      this.onClickHandle && this.onClickHandle();
    },
    handleMaskClick() {
      // this.maskClick && this.hide() && this.$emit('afterClose');
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.modal-content {
  position: fixed;
  background: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, calc(-50% - 44px));
  width: 684px;
  box-sizing: border-box;
  padding: 40px 32px;
  border-radius: 32px;
  .content-container {
    .icon-close {
      position: absolute;
      right: 0px;
      bottom: 32px;
      width: 48px;
      height: 48px;
    }
    .content {
      padding-top: 38px;
      font-size: 32px;
      font-weight: 400;
      color: #333333;
      line-height: 44px;
      text-align: center;
      max-height: 560px;
      overflow-y: auto;
    }
    .title {
      font-size: 32px;
      font-weight: bold;
      color: #333333;
      line-height: 32px;
      text-align: center;
      position: relative;
      padding-bottom: 32px;
      border-bottom: 1px solid #ebedf0;
    }
  }
  .btn {
    width: 622px;
    height: 90px;
    background: #f31d35;
    border-radius: 45px;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 32px;
    font-weight: bold;
    color: #ffffff;
    line-height: 44px;
    margin-top: 64px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
