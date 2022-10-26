<template>
  <div class="SingerIndex">
    <el-row :gutter="20">
      <el-col :offset="2" :span="4">
        <!-- 左侧歌手分类列表 -->
        <singer-type> </singer-type>
      </el-col>
      <el-col :span="16">
        <!-- 右侧歌手展示区域 -->
        <singer-show :ListInfoAttr="ListInfoImg" v-if="isShow_3">
          <template #title>热门歌手</template>
          <template #more> </template>
        </singer-show>
        <!-- ———————————————————————————————— -->
        <div v-if="isShow_2">
          <singer-show :ListInfoAttr="ListInfoImg">
            <template #title> {{ title }} </template>
            <template #query></template>
            <div class="letter-query" v-show="isShow_4">
              <a href="" class="letter_bgc"></a>
            </div>
          </singer-show>
        </div>
        <el-card v-show="isShow_1">
          <ul>
            <li class="bt" v-for="item in ListInfo" :key="item.id">
              <a href="#">{{ item.name }}</a>
              <a href="#" class="iconfont icon-icon--my"></a>
            </li>
          </ul>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SingerType from "../../components/Singer/SingerType.vue";
import SingerShow from "../../components/Singer/SingerShow.vue";
import { getHotSinger } from "@/api/singer";
export default {
  name: "SingerIndex",
  components: {
    SingerType,
    SingerShow,
  },
  props: {},
  data() {
    return {
      ListInfoImg: [], //  显示图片热门歌手
      ListInfo: [], //  不显示图片热门歌手
      // 展示歌手区域 显示隐藏
      isShow_1: true,
      isShow_2: false,
      isShow_3: true,
    };
  },
  computed: {},
  watch: {},
  created() {
    this.getSingerTypeRef();
    // this.getHotSingerRef();
  },
  mounted() {},
  methods: {
    // 获取 10 个热门歌手
    async getSingerTypeRef() {
      const { data: res } = await getHotSinger({ limit: 100 });
      // console.log(res);
      if (res.code !== 200) {
        return this.message.error("歌手列表获取失败");
      }
      this.ListInfoImg = res.artists.slice(0, 10);
      this.ListInfo = res.artists.slice(10);
    },
    // async getHotSingerRef() {
    //     const { data: res } = await getHotSinger();
    // },
  },
};
</script>

<style scoped lang="less">
.el-card {
  margin: 30px 0;
  background-color: #dad6d3;
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}

li {
  margin: 5px 0;
  width: 130px;
  height: 30px;
}
li a {
  text-decoration: none;
  color: #333;
  font-size: 14px;
  &:first-child:hover {
    text-decoration: underline;
  }
}

.letter-query {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 10px;
  a {
    padding: 2px 5px;
    text-decoration: none;
    font-size: 18px;
    color: #333;
    &:hover {
      text-decoration: underline;
    }
  }
  .letter_bgc {
    background-color: red;
    color: #fff;
  }
}
</style>
