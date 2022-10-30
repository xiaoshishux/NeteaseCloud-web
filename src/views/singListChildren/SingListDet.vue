<template>
  <div class="singlistdet">
    <el-row>
      <el-col :offset="2" :span="20">
        <my-song-show
          :playListInfoAttr="playListInfo"
          :playListCommentsAttr="playListComments"
        ></my-song-show>
        <album-coment :albumComentsObj="playListComments"></album-coment>
        <!-- 分页 -->
        <div class="box">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pagenum"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="queryInfo.limit"
            layout="total, sizes, prev, pager, next, jumper"
            :total="playListComments.total"
          >
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MySongShow from "../../components/song/MySongShow.vue";
import AlbumComent from "../../components/coments/AlbumComent.vue";
import { getPlaylistDet } from "../../api/Sing.js";
import { getPlayComment } from "../../api/comment.js";
export default {
  name: "SingListDet",
  components: {
    MySongShow,
    AlbumComent,
  },
  props: {},
  data() {
    return {
      currentPage4: 5,
      playListInfo: {
        //歌单详细信息
        playlist: {
          creator: {}, // 作者信息
          tracks: [], //歌曲
        },
      },
      // 歌单评论查询参数
      queryInfo: {
        id: this.$store.state.playListId,
        limit: 20,
        offset: 0,
        before: null,
      },
      // 歌单评论数据对象
      playListComments: {
        total: null,
        comments: [],
        hotComments: [],
      },
      pagenum: 1, //当前页
    };
  },
  computed: {},
  watch: {},
  created() {
    this.getPlaylistDetRef();
    this.getPlaylistCommentRef();
  },
  mounted() {},
  methods: {
    // 获取歌单详细
    async getPlaylistDetRef() {
      const { data: res } = await getPlaylistDet(this.$store.state.playListId);
      // console.log(res);
      this.playListInfo = res;
    },
    // 获取歌单评论
    async getPlaylistCommentRef() {
      // this.queryInfo.id = this.$store.state.playListId
      const { data: res } = await getPlayComment(this.queryInfo);
      // console.log(res);
      this.playListComments = res;
      // 超 5000 评论 获取下一页数据
      if (this.total > 5000) {
        this.queryInfo.before = res.comments[res.comments.length - 1].time;
      }
    },
    // 页面评论数量改变事件
    handleSizeChange(size) {
      this.queryInfo.limit = size;
      this.getPlaylistCommentRef();
    },
    // 当前页改变事件
    handleCurrentChange(pagenum) {
      this.pagenum = pagenum;
      this.queryInfo.offset = (pagenum - 1) * this.queryInfo.limit;
      this.getPlaylistCommentRef();
    },
  },
};
</script>

<style scoped lang="less">
.box {
  display: flex;
  justify-content: center;
  margin: 20px 0 50px 0;
  height: 100%;
}
</style>
