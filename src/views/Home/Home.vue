<template>
  <div class="home">
    <banner-img :bannerInfo="banner"></banner-img>
    <new-songs :getArea="newSongsInfo"></new-songs>
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
      newSongsInfo: [], //全部新碟的数据
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
      this.banner = res.banners;
    },

    // 获取新碟数据
    async getNewSongRef() {
      const res = await getNewSong(this.queryInfo);
      // console.log(res);
      this.newSongsInfo = res.data.albums;
      this.pageInfo.total = res.data.total;
    },
    handleSizeChange(pageSize) {
      this.queryInfo.limit = pageSize;
      this.getNewSongsRef();
    },
    handleCurrentChange(pagenum) {
      this.pageInfo.pageNum = pagenum;
      this.queryInfo.offset =
        (this.pageInfo.pageNum - 1) * this.queryInfo.limit;
      this.getNewSongsRef();
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
