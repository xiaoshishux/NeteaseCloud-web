<template>
  <div class="Rank">
    <el-row :gutter="20">
      <el-col :offset="2" :span="5">
        <rank-list @getToplistDet="getToplistDet"></rank-list>
      </el-col>
      <el-col :span="15">
        <!-- 评论组件 -->
        <my-song-show :playListInfoAttr="toplist"></my-song-show>
        <album-coment :albumComentsObj="toplistComments"></album-coment>
        <!-- 分页 -->
        <div class="box">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="this.pageNum"
            :page-sizes="[20, 40, 80, 160]"
            :page-size="this.queryInfo.limit"
            layout="total, sizes, prev, pager, next, jumper"
            :total="this.toplistComments.total"
          >
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import RankList from "@/components/rank/RankList.vue";
import MySongShow from "@/components/song/MySongShow.vue";
import AlbumComent from "@/components/coments/AlbumComent.vue";
import { getPlaylistDet } from "@/api/Sing";
import { getPlayComment } from "@/api/comment";

export default {
  name: "RankIndex",
  components: {
    RankList,
    MySongShow,
    AlbumComent,
  },
  props: {},
  data() {
    return {
      // 榜单详情
      toplist: {
        // 榜单名称
        playlist: {
          // 作者信息
          creator: {},
          // 歌曲
          tracks: [],
        },
      },
      // 榜单评论查询参数
      queryInfo: {
        id: "",
        limit: 20,
        offset: 0,
        before: null,
      },
      // 榜单评论数据对象
      toplistComments: {
        // 评论数量
        total: null,
        comments: [],
        hotComments: [],
      },
      pageNum: 1, //当前页
    };
  },
  computed: {},
  watch: {},
  created() {
    // this.getToplistCommentRef();
  },
  mounted() {},
  methods: {
    // 页面评论数量改变事件
    handleSizeChange(pagesize) {
      this.queryInfo.limit = pagesize;
      this.getToplistCommentRef();
    },
    // 当前页改变事件
    handleCurrentChange(pagenum) {
      this.pageNum = pagenum;
      this.queryInfo.offset = (pagenum - 1) * this.queryInfo.limit;
      this.getToplistCommentRef();
    },
    // 获取榜单详情
    async getToplistDet(id) {
      const { data: res } = await getPlaylistDet(id);
      //   console.log(res);
      this.toplist = res;
      this.queryInfo.id = id; //19723756
      this.getToplistCommentRef();
    },
    // 获取榜单评论
    async getToplistCommentRef() {
      const { data: res } = await getPlayComment(this.queryInfo);
      console.log(res);
      this.toplistComments = res;
      // 超 5000 评论 获取下一页数据
      if (res.total > 5000) {
        this.queryInfo.before = res.comments[res.comments.length - 1].time;
      }
    },
  },
};
</script>

<style scoped lang="less">
.box {
  display: flex;
  justify-content: center;
}
</style>
