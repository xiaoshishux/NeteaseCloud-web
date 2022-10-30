<template>
  <div class="DetBtn">
    <p class="opt_btn">
      <el-button><i class="iconfont icon-bofang"></i>播放</el-button>
      <el-button><i class="iconfont icon-yinle"></i>收藏</el-button>
      <el-button><i class="iconfont icon-fenxiang1"></i>分享</el-button>
      <el-button><i class="iconfont icon-xiazai"></i>下载</el-button>
      <el-button
        ><i class="iconfont icon-xinxi"></i>评论
        <span>({{ totalAttr ? totalAttr : "0" }})</span>
      </el-button>
    </p>
  </div>
</template>

<script>
export default {
  name: "DetBtn",
  components: {},
  props: {
    // 歌曲评论数量
    totalAttr: null,
    // 歌单详细
    playListInfoAttr: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
.opt_btn {
  display: flex;
  justify-content: space-between;
}
</style>
