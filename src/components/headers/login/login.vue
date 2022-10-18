<template>
  <div class="login">
    <div class="mask"></div>
    <div class="loginBox">
      <h2>
        <span>登录</span>
        <span>×</span>
      </h2>
      <!-- 二维码登录 -->
      <!-- <p class="qrStatus">二维码不存在或已过期，请刷新</p>
      <div class="qr">
        <img src="" alt="" />
        <span class="iconfont icon-qiehuan"></span>
        <span class="iconfont icon-shuaxin1"></span>
      </div> -->
      <!-- 密码登录 -->
      <div class="login">
        <el-form
          ref="loginRef"
          :rules="loginRules"
          :model="LoginForm"
          label-width="70px"
        >
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="LoginForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="LoginForm.password"
              type="password"
              show-password
            ></el-input>
          </el-form-item>
          <div class="btn">
            <el-button type="primary" size="mini" @click="loginBtn"
              >登录</el-button
            >
          </div>
          <span class="iconfont icon-erweima"></span>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { loginPh } from "../../../api/login.js";
export default {
  name: "LoginIndex",
  components: {},
  props: {},
  data() {
    // 自定义验证手机规则
    var checkPhone = (rule, value, cb) => {
      //验证手机号的正则表达式
      const regMobile =
        /^(0|86|17951)?(13[0-9]|15[0123456789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
      if (regMobile.test(value)) {
        return cb();
      }
      cb(new Error("请输入合法手机号"));
    };
    return {
      // 登录表单数据
      LoginForm: {
        phone: null,
        password: "",
      },

      // 登录表单验证规则
      loginRules: {
        phone: [
          { required: true, message: "请输入手机", trigger: "blur" },
          { validator: checkPhone, trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "用户名长度在6~15个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 手机号登录
    loginBtn() {
      // 请求前进行表单预验证
      this.$refs.loginRef.validate((valid) => {
        if (!valid) {
          return this.$message.info("请检查手机号或密码后重试");
        }
        this.getLoginInfo();
      });
    },
    // 获取登录信息
    async getLoginInfo() {
      // 发送登录请求
      const { data: res } = await loginPh(
        this.LoginForm.phone,
        this.$md5(this.LoginForm.password)
      );
      console.log(res);
      if (res.code !== 200) {
        return this.$message.error("登录失败");
      }
    },
  },
};
</script>

<style scoped lang="less">
.mask {
  width: 100%;
  height: 100%;
  position: absolute;
  top: -100px;
  z-index: 99998;
}
.loginBox {
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, 50%);
  z-index: 99999;
  width: 500px;
  height: 350px;
  background-color: #fff;
  box-shadow: 0 0 1px;

  h2 {
    position: relative;
    background-color: #2d2d2d;
    cursor: move;
    &::after {
      content: "";
      display: block;
      clear: both;
    }
    span:first-child {
      float: left;
      height: 16px;
      margin: 15px 20px;
      color: #fff;
    }
    span:last-child {
      position: absolute;
      top: 8px;
      right: 20px;
      color: #888;
      font-size: 25px;
      cursor: pointer;
    }
  }
}

.el-form {
  margin: 40px 40px;
  .el-form-item {
    width: 400px;
    margin-bottom: 40px;
  }
  .btn {
    float: right;
  }
  span {
    position: absolute;
    bottom: 30px;
    right: 50px;
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
