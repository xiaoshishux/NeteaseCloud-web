<template>
  <div class="songdet">
    <el-row :gutter="20">
      <el-col :offset="2" :span="15">
        <el-card>
          <div class="contain">
            <!-- 转盘 -->
            <div class="avatar">
              <div class="cover">
                <img :src="songDet.al.picUrl" alt="" />
                <span class="mask"></span>
              </div>
            </div>
            <div class="wrop">
              <!-- 歌曲 -->
              <h4>
                <span>{{ songDet.name }}</span>
                <i class="iconfont icon-MV" v-if="songDet.mv"></i>
              </h4>
              <p class="s_name">
                歌手：
                <span v-for="item in songDet.ar" :key="item.id"
                  >{{ item.name }}
                  <i></i>
                </span>
              </p>
              <p class="s_name">
                所属专辑：
                <span
                  >{{ songDet.al.name }}
                  <i></i>
                </span>
              </p>
              <!-- 按钮 -->
              <!-- 歌词 -->
              <div :class="className">
                <div v-html="lrc"></div>
                <a
                  href="#"
                  class="rc_on"
                  @click.prevent="onShow"
                  v-if="showText"
                  >展开</a
                >
                <a href="#" class="rc_on" @click.prevent="onClose" v-else
                  >收起</a
                >
              </div>
            </div>
          </div>
          <!-- 评论 -->
          <album-coment :albumComentsObj="songComments"></album-coment>
        </el-card>
        <!-- 评论分页 -->
      </el-col>
      <el-col :span="5">
        <!-- 相似歌单 -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getSongsDet, getLyric } from "@/api/Sing.js";
import AlbumComent from "../../coments/AlbumComent.vue";
import { getSongComment } from "../../../api/comment";
export default {
  name: "SongDet",
  components: {
    AlbumComent,
  },
  props: {},
  data() {
    return {
      // 歌曲详细
      songDet: {
        // 专辑
        al: {},
      },
      className: "rc", // 歌词样式类名
      lrc: "", // 歌词
      showText: true, // 歌词展开收起按钮 文字
      querIfon: {
        // 歌曲评论请求 查询参数
        id: this.$store.state.songId,
        limit: 20,
        offset: 0,
        before: null,
      },
      songComments: {}, // 歌曲评论
    };
  },
  computed: {},
  watch: {},
  created() {
    this.getSongsDetRef();
  },
  mounted() {},
  methods: {
    // 获取歌曲详情
    async getSongsDetRef() {
      const { data: res } = await getSongsDet(this.$store.state.songId);
      // console.log(res);
      this.songDet = res.songs[0];
      this.getLyricRef();
      this.getSongCommentRef();
    },
    // 获取歌词
    async getLyricRef() {
      const { data: res } = await getLyric(this.$store.state.songId);
      // console.log(res);
      this.lrc = res.lrc.lyric
        .split("\n")
        .map((item) => item.slice(11))
        .join("<br>");
    },
    // 获取歌曲评论
    async getSongCommentRef() {
      const { data: res } = await getSongComment(this.queryInfo);
      console.log(res);
      this.songComments = res;
    },
    // 监听歌词展开按钮事件
    onShow() {
      this.className = "rc_s";
      this.showText = false;
    },
    // 监听歌词收起按钮事件
    onClose() {
      this.className = "rc";
      this.showText = true;
    },
  },
};
</script>

<style scoped lang="less">
.contain {
  margin: 30px;
  &::after {
    content: "";
    clear: both;
    display: block;
    overflow: hidden;
  }
}

.avatar {
  position: relative;
  float: left;
  width: 198px;
  height: 198px;
}
.cover {
  width: 198px;
  height: 198px;
  img {
    width: 130px;
    height: 130px;
    margin: 34px;
  }
  .mask {
    position: absolute;
    top: -4px;
    left: -4px;
    width: 206px;
    height: 205px;
    background: url("../../../assets/coverall.png") no-repeat;
    background-position: -140px -580px;
  }
}
.wrop {
  float: left;
  margin: 0 50px;
  h4 {
    font-size: 26px;
    i {
      margin-left: 10px;
      font-size: 24px;
      color: red;
      cursor: pointer;
    }
  }
  .s_name,
  .al_name {
    margin: 20px 0;
    span {
      color: #0c73c2;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .rc {
    position: relative;
    height: 320px;
    overflow: hidden;
    margin-top: 50px;
    line-height: 2;
  }
  .rc_s {
    position: relative;
    margin-top: 50px;
    line-height: 2;
  }
  .rc_on {
    position: absolute;
    left: 400px;
    bottom: 0px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
