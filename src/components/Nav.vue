<template>
  <el-menu class="el-menu-demo" mode="horizontal">
    <el-row type="flex" class="row-bg" justify="space-between" align="middle">
      <el-menu-item index="1" @click="changePage('/')"
        >逢甲大學應用數學系官網管理後台</el-menu-item
      >
      <el-menu-item index="2" @click="signOut">登出</el-menu-item>
    </el-row>
  </el-menu>
</template>

<script>
export default {
  methods: {
    changePage(router) {
      window.scrollTo(0, 0);
      this.drawer = false;
      if (this.$route.path !== router) {
        this.$router.push({ path: router });
      }
    },
    signOut() {
      this.$store.commit("SignOut");
    },
  },
};
</script>
