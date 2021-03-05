<template>
  <div>
    <el-tabs type="card" v-model="active" class="mx-3 my-3">
      <el-tab-pane label="系史" name="1">
        <Article />
      </el-tab-pane>
      <el-tab-pane label="特色" name="2">
        <Article />
      </el-tab-pane>
      <el-tab-pane label="教育目標" name="3">
        <Article />
      </el-tab-pane>
      <el-tab-pane label="核心能力" name="4">
        <Article />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Article from "./components/Article";
export default {
  components: { Article },
  data() {
    return {
      active: "1",
    };
  },
};
</script>
