<template>
  <div>
    <el-tabs type="card" v-model="active" class="mx-3 my-3">
      <el-tab-pane label="圖文欄" name="first">
        <Graphic />
      </el-tab-pane>
      <el-tab-pane label="影片輪播" name="second">
        <Video />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Graphic from "./components/Graphic";
import Video from "./components/Video";
export default {
  components: { Graphic, Video },
  data() {
    return {
      active: "first",
    };
  },
};
</script>
