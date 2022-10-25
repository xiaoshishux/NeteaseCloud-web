<template>
  <div class="home">
    <banner-img :bannerInfo="banner"></banner-img>
    <new-songs @getArea="getAreaInfo"></new-songs>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageInfo.pageNum"
        :page-sizes="[30, 60, 100, 200]"
        :page-size="queryInfo.limit"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageInfo.total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import BannerImg from "../../components/banner/BannerImg.vue";
import NewSongs from "../homeChildren/newSongs.vue";
// import newSongInfo from "../homeChildren/newSongInfo.vue";
import { getBannerImg, getNewSong } from "../../api/home";
export default {
  name: "HomeIndex",
  components: {
    BannerImg,
    NewSongs,
    // newSongInfo,
  },
  props: {},
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      queryInfo: {
        //请求参数
        limit: 30,
        offset: 0,
        area: "",
      },
      newSongsInfo: {}, //全部新碟的数据
      banner: [], //轮播图的数据

      pageInfo: {
        pageNum: 1, //当前页码
        total: 0, //总页码
      },
    };
  },
  computed: {},
  watch: {},
  created() {
    this.getBannerImgRef();
    this.getNewSongRef();
  },
  mounted() {},
  methods: {
    // 获取 banner 图数据
    async getBannerImgRef() {
      const { data: res } = await getBannerImg();
      // console.log(res);
      if (res.code !== 200) {
        return this.$message.error("获取 banner 图失败");
      }
      this.banner = res.banners;
    },

    // 获取新碟数据
    async getNewSongRef() {
      const { data: res } = await getNewSong(this.queryInfo);
      // console.log(res);
      if (res.code !== 200) {
        return this.$message.error("新碟列表请求失败");
      }
      // this.newSongsInfo = res.data.albums;
      this.$store.state.resSongs = res.albums;
      this.pageInfo.total = res.total;
    },
    // 监听页面数据个数事件
    handleSizeChange(pageSize) {
      this.queryInfo.limit = pageSize;
      this.getNewSongRef();
    },
    // 监听当前页面改变事件
    handleCurrentChange(pagenum) {
      this.pageInfo.pageNum = pagenum;
      this.queryInfo.offset =
        (this.pageInfo.pageNum - 1) * this.queryInfo.limit;
      this.getNewSongRef();
    },

    // 获取newSongs 子组件 传来的地区切换数据
    getAreaInfo(areaInfo) {
      console.log(areaInfo);
      this.queryInfo.area = areaInfo;
      // 将请求数据的偏移量重置为 0
      this.queryInfo.offset;
      this.getNewSongRef();
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}
</style>
