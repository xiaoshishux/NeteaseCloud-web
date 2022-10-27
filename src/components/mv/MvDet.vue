<template>
  <div class="mvdet">
    <el-row :gutter="20">
      <el-col :offset="2" :span="15">
        <el-card>
          <div class="info">
            <h4>{{ mvInfo.name }}</h4>
            <a href="#" v-for="(item, i) in mvInfo.artists" :key="item.id"
              >{{ item.name
              }}<i>{{ i === mvInfo.artists.length - 1 ? "" : "/" }}</i></a
            >
          </div>
          <!-- mv 展示 -->
          <div class="mv-show">
            <video :src="mvUrl" controls></video>
          </div>
          <div class="emj">
            <i class="iconfont icon-qingdankushoucang">{{ mvInfo.subCount }}</i>
            <i class="iconfont icon-iconfenxiang">{{ mvInfo.shareCount }}</i>
          </div>
        </el-card>
        <!-- 评论 -->
        <album-coment :albumComentsObj="comments"></album-coment>
        <!-- 分页 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageNum"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="this.queryInfo.limit"
          layout="total, sizes, prev, pager, next, jumper"
          :total="this.comments.total"
        >
        </el-pagination>
      </el-col>
      <!-- mv 简介 -->
      <el-col :span="5">
        <el-card>
          <div class="desc">
            <h4>MV 简介</h4>
            <div>发布时间：{{ mvInfo.publishTime }}</div>
            <div>播放次数：{{ mvInfo.playCount | counFormate }}</div>
            <p>{{ mvInfo.desc }}</p>
          </div>
          <!-- 相关推荐 -->
          <div class="more">
            <div class="desc">
              <h4>相关推荐</h4>
              <ul>
                <li v-for="item in mvs" :key="item.id">
                  <a href="">
                    <img :src="item.cover" alt="" />
                    <i>{{ item.playCount | counFormate }}</i>
                  </a>
                  <div>
                    <p>{{ item.name }}</p>
                    <p>{{ item.duration | secondFormate }}</p>
                    <p>by{{ item.artistName }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getMvDet, getMvUrl, getMvComment, getSimiMv } from "../../api/mv";
import AlbumComent from "../coments/AlbumComent.vue";
export default {
  name: "MvDet",
  components: {
    AlbumComent,
  },
  props: {},
  data() {
    return {
      // mv 信息
      mvInfo: {
        artists: [],
      },
      mvUrl: "", // mv 地址
      queryInfo: {
        id: this.$store.state.mvId,
        limit: 20,
        offset: 0,
        before: null,
      },
      comments: {}, // 评论数据
      pageNum: 1, //当前页
      mvs: [], //相关MV
    };
  },
  computed: {},
  watch: {},
  created() {
    this.getMvDetRef();
    this.getMvUrlRef();
    this.getMvCommentRef();
    this.getSimiMvRef();
  },
  mounted() {},
  methods: {
    // 获取 mv 详情
    async getMvDetRef() {
      const { data: res } = await getMvDet(this.$store.state.mvId);
      console.log(res);
      this.mvInfo = res.data;
    },
    // 获取 mv 播放地址
    async getMvUrlRef() {
      const { data: res } = await getMvUrl(this.$store.state.mvId);
      // console.log(res);
      this.mvUrl = res.data.url;
    },
    // 获取 mv 评论
    async getMvCommentRef() {
      const { data: res } = await getMvComment(this.queryInfo);
      // console.log(res);
      if (res.total >= 5000) {
        this.queryInfo.before = res.comments[res.comments.length - 1].time;
      }
      this.comments = res;
    },
    // 获取相关 mv
    async getSimiMvRef() {
      const { data: res } = await getSimiMv(this.$store.state.mvId);
      // console.log(res);
      this.mvs = res.mvs;
    },
    handleSizeChange(pagesize) {
      this.queryInfo.limit = pagesize;
      this.getMvCommentRef();
    },
    handleCurrentChange(pagenum) {
      this.pageNum = pagenum;
      this.queryInfo.offset = (pagenum - 1) * this.queryInfo.limit;
      this.getMvCommentRef();
    },
  },
};
</script>

<style scoped lang="less">
.info {
  display: flex;
  justify-content: center;
  align-items: center;
  h4 {
    margin-right: 20px;
    font-size: 24px;
  }
  a {
    text-decoration: none;
    color: #0c73c2;
    &:hover {
      text-decoration: underline;
    }
  }
}

.mv-show {
  display: flex;
  justify-content: center;
  margin: 30px 0;
}

video {
  width: 768px;
  height: 432px;
  box-shadow: 0 0 10px;
  border-radius: 10px;
}

.emj {
  display: flex;
  justify-content: center;
  i {
    width: 80px;
    height: 30px;
  }
}

.desc {
  h4 {
    font-weight: 600;
    line-height: 2;
    border-bottom: 1px solid #000;
    margin-bottom: 20px;
  }
  div {
    margin: 5px 0;
    color: #666;
  }
  p {
    margin: 20px 0;
    line-height: 1.5;
    font-size: 14px;
  }
}
.more {
  h4 {
    font-weight: 600;
  }
  li {
    display: flex;
    justify-content: left;
    align-items: center;
    a {
      position: relative;
      width: 96px;
      height: 54px;
      color: #fff;
      img {
        width: 100%;
        height: 100%;
      }
      i {
        position: absolute;
        right: 0;
        top: 0;
      }
    }
    div {
      margin-left: 10px;
      p {
        margin: 0;
        font-size: 14px;
      }
      P:first-child {
        color: #000;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
