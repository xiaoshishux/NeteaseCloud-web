<template>
  <div class="SingerShow">
    <el-card>
      <div>
        <!-- 头部 -->
        <div class="header">
          <h4><slot name="title"> </slot></h4>
          <a href="#"><slot name="more"></slot></a>
        </div>
        <slot name="query"></slot>
        <!-- 内容 -->
        <div>
          <div>
            <ul class="content">
              <li v-for="item in ListInfoAttr" :key="item.id">
                <div class="cover" @click.prevent="saveSingerId(item.id)">
                  <img :src="item.img1v1Url" alt="" />
                </div>
                <p class="clearfix">
                  <a href="#" @click.prevent="saveSingerId(item.id)">{{
                    item.name
                  }}</a>
                  <a
                    href="#"
                    class="iconfont icon-icon--my"
                    @click.prevent="saveSingerId(item.id)"
                  ></a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "SingerShow",
  components: {},
  props: {
    ListInfoAttr: {
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
    // vuex歌手id处理函数
    ...mapMutations(["singerIdMutations"]),
    // 点击歌手储存歌手id
    saveSingerId(id) {
      this.singerIdMutations(id);
      // console.log(this.$store.state.singerId);
      this.$router.push("/singer/detail");
    },
  },
};
</script>

<style scoped lang="less">
.header {
  height: 50px;
  border-bottom: 2px solid red;
  margin-bottom: 30px;
  h4 {
    float: left;
    font-size: 24px;
    margin-bottom: 50px;
  }
  a {
    float: right;
    line-height: 50px;
    color: #333;
    text-decoration: none;
  }
}

.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.content li {
  position: relative;
  margin: 20px;
  width: 130px;
  height: 154px;
  .cover {
    width: 130px;
    height: 130px;
  }

  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  p {
    margin: 10px 0;
  }
  p a {
    color: #333;
    text-decoration: none;
    &:first-child:hover {
      text-decoration: underline;
    }
  }
  p a:last-child {
    float: right;
  }
}

.kk {
  height: 100%;
}
</style>
