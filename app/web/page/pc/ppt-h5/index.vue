<template>
  <div
    v-watermark="options"
    class="home"
  >
    <div class="header">
      <a
        href="/"
        class="logo"
      />
      <div class="user">
        <a-button
          block
          shape="round"
          type="primary"
          :loading="loading"
          @click="onChangeToHtml"
        >
          <a-icon type="user" />
          登录注册
        </a-button>
        <a-button
          block
          shape="round"
          type="danger"
          :loading="loading"
          @click="onChangeToHtml"
        >
          退出
        </a-button>
      </div>
    </div>
    <div class="banner">
      <canvas id="canvas" />
    </div>
    <div class="upload">
      <a-upload-dragger
        type="drag"
        name="file"
        list-type="picture-card"
        :multiple="true"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        support-server-render
        @change="handleChange"
      >
        <p class="ant-upload-drag-icon">
          <a-icon type="inbox" />
        </p>
        <p class="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p class="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </a-upload-dragger>
    </div>
    <div class="change-btn">
      <a-button
        block
        type="primary"
        :loading="loading"
        @click="onChangeToHtml"
      >
        转换
      </a-button>
    </div>
    <div class="footer">
      <div class="content">
        <div class="join-us">
          加入我们
        </div>
        <div class="contact-us">
          联系我们
        </div>
        <div class="follow-us">
          关注我们
        </div>
      </div>
      <div class="record-info">
        <span class="copyright">© 2008-2022 问就是大公司 版权所有</span>
        <div class="archival-info">
          闽B2-20040192-1 闽网文(2018)8421-380号
          违法和不良信息举报电话：400-990-9696 网络文化经营
          互联网药品信息服务资格证书（闽） 非经营性-2018-0058
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/utils/common/canvas.js';
import { Icon, Upload, Button } from 'ant-design-vue';

export default {
  components: {
    aUploadDragger: Upload,
    aIcon: Icon,
    aButton: Button,
  },
  data() {
    return {
      options: {
        //水印
        text: '游客',
        font: '20px 微软雅黑',
        textColor: '#bcbcbc',
        width: 200, //水印文字的水平间距
        height: 100, //水印文字的高度间距（低于文字高度会被替代）
        extRotate: -30, //-90到0， 负数值，不包含-90
      },
      loading: false,
    };
  },
  mounted() {
    console.log('result:', this.activityInfo);
  },
  methods: {
    onChangeToHtml() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    handleChange(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}
.header {
  width: 100%;
  height: 60px;
  padding: 0 20px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    width: 100px;
  }
  .user {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    button {
      width: 120px;
      &:last-child {
        width: 80px;
        margin-left: 15px;
      }
    }
  }
}
.banner {
  height: 300px;
  background: rgb(30, 30, 30);
}
.upload {
  max-width: 70%;
  margin: 50px auto;
}
.change-btn {
  width: 180px;
  margin: 20px auto 40px;
}
.footer {
  width: 100%;
  height: 100%;
  padding: 40px 10%;
  background: #f7f7f7;
  .content {
    display: flex;
    width: 50%;
    div {
      flex: 1;
      font-size: 18px;
      color: gray;
      font-weight: 500;
    }
  }
}
.record-info {
  padding-top: 50px;
  .copyright {
    color: gray;
  }
  .archival-info {
    padding-top: 20px;
    max-width: 1066px;
    font-size: 14px;
    color: #b4b4b4;
    line-height: 1.88;
  }
}
</style>