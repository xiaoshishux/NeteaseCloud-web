<template>
  <div class="mvdet">
    <el-row :gutter="20">
      <el-col :offset="2" :span="15">
        <el-card>
          <div class="info">
            <h4></h4>
            <a href=""><i></i></a>
          </div>
          <!-- mv 展示 -->
          <div class="mv_show">
            <video src=""></video>
          </div>
          <div class="emj">
            <i class="iconfont icon-qingdankushoucang"></i>
            <i class="iconfont icon-iconfenxiang"></i>
          </div>
        </el-card>
        <!-- 评论 -->
        <!-- 分页 -->
      </el-col>
      <!-- mv 简介 -->
      <el-col :span="5">
        <el-crad>
          <div class="desc">
            <h4>MV 简介</h4>
            <div>发布时间：</div>
            <div>播放次数：</div>
            <p></p>
          </div>
          <!-- 相关推荐 -->
          <div class="more">
            <div class="desc">
              <h4>相关推荐</h4>
              <ul>
                <li>
                  <a href="">
                    <img src="" alt="" />
                    <i></i>
                  </a>
                  <div>
                    <p></p>
                    <p></p>
                    <p></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </el-crad>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "MvDet",
  components: {},
  props: {},
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

<style scoped lang="less"></style>
