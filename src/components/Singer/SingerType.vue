<template>
  <div class="SingerType">
    <el-card>
      <div>
        <p>热门歌手</p>
        <ul>
          <li>
            <span class="iconfont icon-biaoqianA01_fenlei-02"></span>
            <span>热门歌手</span>
          </li>
        </ul>
      </div>
      <div v-for="(item1, index1) in singerTypeValue.info" :key="index1">
        <p>{{ item1.name }}</p>
        <ul>
          <li v-for="(item2, index2) in item1.singerTypeInfo" :key="index2">
            <span class="iconfont icon-biaoqianA01_fenlei-02"></span>
            <span>{{ item2.name }}</span>
          </li>
        </ul>
      </div>
    </el-card>
  </div>
</template>

<script>
import singerTypeValue from "../../utils/singerTypeInfo"; // 导入歌手分类数据
export default {
  name: "SingerType",
  components: {},
  props: {},
  data() {
    return {
      // 歌手分类数据对象
      singerTypeValue,
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
.el-card div {
  border-bottom: 1px solid #000;
}
li,
p {
  margin: 20px 0;
  span {
    margin: 0 10px;
  }
}

li {
  cursor: pointer;
  &:hover span:last-child {
    text-decoration: underline;
  }
}
p {
  font-size: 20px;
  font-weight: 600;
}
</style>
