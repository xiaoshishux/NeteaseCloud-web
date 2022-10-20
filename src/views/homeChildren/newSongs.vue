<template>
  <div class="newSongs">
    <el-row>
      <el-col :offset="2" :span="20">
        <el-card>
          <!-- 头部 -->
          <div class="header">
            <h3>
              <span>全部新碟</span>
            </h3>
            <div class="tip">
              <a>华语</a><span>|</span> <a>欧美</a><span>|</span> <a>韩国</a
              ><span>|</span>
              <a>日本</a>
            </div>
          </div>
          <!-- 内容 -->
          <ul>
            <li v-for="(item, index) in getArea" :key="index">
              <div class="cover">
                <img :src="item.picUrl" class="image" />
                <a
                  class="mask"
                  href="#"
                  @click.prevent="toggleNewSongInfo()"
                ></a>
                <p>{{ item.name }}</p>
                <p>{{ item.artist.name }}</p>
              </div>
            </li>
          </ul>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "NewSongs",
  components: {},
  props: {
    getArea: {
      type: Array,
      default() {
        return [];
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
  methods: {
    toggleNewSongInfo() {
      this.$router.push("/newSonInfo");
    },
  },
};
</script>

<style scoped lang="less">
.header {
  margin: 30px 30px 20px 30px;
  height: 40px;
  border-bottom: 2px solid red;
}
.header::after {
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
}

h3,
.tip a,
span {
  float: left;
}
.tip a {
  text-decoration-line: none;
  color: #000;
  font-size: 16px;
  cursor: pointer;
}

.tip a:hover {
  text-decoration: underline;
}
.header h3 span {
  font-size: 28px;
  color: #333;
}
.tip {
  float: left;
  margin: 12px 0 0 30px;
  span {
    margin: 0 20px;
    font-size: 12px;
    color: #d2c7c7;
  }
}

ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
ul li {
  padding: 0 30px 33px 30px;
  width: 153px;
  height: 178px;
  p {
    width: 153px;
    margin: 10px 0 10px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p:last-child {
    font-size: 12px;
  }
  .cover {
    position: relative;
    width: 130px;
    height: 130px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 153px;
  height: 130px;
  background: url("../../assets/coverall.png") no-repeat;
  background-position: 0 -845px;
}
</style>
