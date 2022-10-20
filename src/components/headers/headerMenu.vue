<template>
  <div>
    <div class="container">
      <el-row>
        <!-- logo -->
        <el-col :span="4" :offset="2" class="col1">
          <h1 class="logo">
            <a href="/">neteasecloud-web</a>
          </h1>
        </el-col>
        <!-- 菜单栏 -->
        <el-col :span="8">
          <el-menu
            :default-active="activeIndex2"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#DFDFDF"
            active-text-color="#fff"
          >
            <el-menu-item index="/home">
              <router-link to="/home" tag="div" class="link-div"
                >发现音乐</router-link
              >
            </el-menu-item>
            <el-menu-item index="/mymusic">
              <router-link to="/mymusic" tag="div" class="link-div"
                >我的音乐</router-link
              >
            </el-menu-item>
            <el-menu-item index="/singer">
              <router-link to="/singer" tag="div" class="link-div"
                >歌手</router-link
              >
            </el-menu-item>
            <el-menu-item index="/singlist">
              <router-link to="/singlist" tag="div" class="link-div"
                >歌单</router-link
              >
            </el-menu-item>
            <el-menu-item index="/rank">
              <router-link to="/rank" tag="div" class="link-div"
                >排行</router-link
              >
            </el-menu-item>
          </el-menu>
        </el-col>
        <!-- 搜索登录 -->
        <el-col :span="8" class="colInput">
          <search></search>
          <div class="login">登录</div>
          <div>
            <img src="" alt="" />
            <span></span>

            <!-- 用户信息 -->
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 发现音乐 我的音乐 歌手 歌单 MV -->
    <router-view></router-view>
    <!-- 登录对话框 -->
    <login-dialog v-show="isShow" @ctrClose="ctrClosed"></login-dialog>
  </div>
</template>

<script>
import Search from "../headers/search/Search.vue";
import LoginDialog from "./login/login.vue";
export default {
  name: "HeadersMenu",
  components: {
    Search,
    LoginDialog,
  },
  props: {},
  data() {
    return {
      activeIndex2: "1",
      isShow: false, // 登录弹框显示与隐藏
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    // 登录框 叉号事件
    ctrClosed() {
      this.isShow = false;
    },
  },
};
</script>

<style scoped lang="less">
.container {
  height: 69px;
  background-color: #545c64;
  height: 100%;
}
h1 {
  width: 176px;
  background: url(../../assets/spring/1.png) no-repeat;
  a {
    display: block;
    height: 69px;
    width: 157px;
    font-size: 0;
  }
}
.el-menu {
  border-bottom: none;
}
.el-menu-item {
  padding: 0 30px;
  height: 69px;
  line-height: 69px;
}

.el-input {
  widows: 300px;
}

.colInput {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 69px;
  .login {
    margin: 0 30px;
    &:hover {
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
