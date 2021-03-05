<template>
  <div>
    <el-tabs type="card" v-model="active" class="mx-3 my-3">
      <el-tab-pane label="本系亮點" name="1">
        <Article />
      </el-tab-pane>
      <el-tab-pane label="最新消息" name="2">
        <Article />
      </el-tab-pane>
      <el-tab-pane label="選課通知" name="3">
        <Article />
      </el-tab-pane>
      <el-tab-pane label="學術演講" name="4">
        <Article />
      </el-tab-pane>
      <el-tab-pane label="獎學金" name="5">
        <Article />
      </el-tab-pane>
      <el-tab-pane label="招生資訊" name="6">
        <Article />
      </el-tab-pane>
      <el-tab-pane label="課程列表" name="7">
        <Article />
      </el-tab-pane>
      <el-tab-pane label="學分學程" name="8">
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
