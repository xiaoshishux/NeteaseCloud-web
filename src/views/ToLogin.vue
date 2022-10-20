<template>
  <div class="tologin">
    <login @ctrLoginBtn="ctrLogin"></login>
  </div>
</template>

<script>
import Login from "../components/headers/login/login.vue";
export default {
  name: "ToLogin",
  components: {
    Login,
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 通过 login 传的事件 再次传到 headerMenu 组件 来显示登录后头像等信息
    ctrLogin() {
      this.$emit("emitLogin");
    },
  },
};
</script>

<style scoped lang="less"></style>
