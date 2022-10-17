<template>
  <div class="location">
    <el-input v-model="input" placeholder="请输入内容">
      <template v-slot:append>
        <el-button icon="el-icon-search"></el-button>
      </template>
    </el-input>
  </div>
</template>

<script>
export default {
  name: "SearchIndex",
  components: {},
  props: {},
  data() {
    return {
      input: "",
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
.location {
  position: relative;
}
</style>
