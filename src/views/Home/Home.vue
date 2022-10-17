<template>
  <div class="home">
    <banner-img :bannerInfo="banner"></banner-img>
    <new-songs></new-songs>
  </div>
</template>

<script>
import BannerImg from "../../components/banner/BannerImg.vue";
import NewSongs from "../homeChildren/newSongs.vue";
import { getBannerImg } from "../../api/home";
export default {
  name: "HomeIndex",
  components: {
    BannerImg,
    NewSongs,
  },
  props: {},
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      banner: [], //轮播图的数据
    };
  },
  computed: {},
  watch: {},
  created() {
    this.getBannerImgRef();
  },
  mounted() {},
  methods: {
    async getBannerImgRef() {
      const { data: res } = await getBannerImg();
      console.log(res);
      this.banner = res.banners;
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.g-topbar {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 99;
  zoom: 1;
}
</style>
