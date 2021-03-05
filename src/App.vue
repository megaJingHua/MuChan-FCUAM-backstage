<template>
  <div>
    <div id="app">
      <div v-if="!isLogin">
        <Login />
      </div>
      <div v-else>
        <Nav />
        <el-row>
          <el-col :span="4">
            <Sidebar />
          </el-col>
          <el-col :span="20">
            <router-view />
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
import Login from "@/pages/Login"
export default {
  name: "App",
  components: { Nav, Sidebar, Login },
  computed: {
    isLogin() {
      // 在這邊吐回state裡面的isLoading
      return this.$store.state.login;
    },
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}

#app {
  position: relative;
  font-family: "FZLanTingHeiS-R-GB", "arial", "Hiragino Sans GB", "Microsoft Yahei",
    "微软雅黑", "宋体", "Tahoma", "Arial", "Helvetica", "STHeiti";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  letter-spacing: 1.4px;
}
</style>
