<template>
  <el-menu>
    <el-menu-item index="2" @click="changePage('/menu-manager')">
      <i class="el-icon-menu"></i>
      <span slot="title">Meun</span>
    </el-menu-item>
    <el-menu-item index="3" @click="changePage('/footer-manager')">
      <i class="el-icon-menu"></i>
      <span slot="title">頁底</span>
    </el-menu-item>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-edit-outline"></i>
        <span slot="title">首頁管理</span>
      </template>
      <el-menu-item-group>
        <span slot="title"></span>
        <el-menu-item index="1-1">首頁</el-menu-item>
        <el-menu-item index="1-2">給高中生</el-menu-item>
        <el-menu-item index="1-3">給大學生</el-menu-item>
        <el-menu-item index="1-4">給研究生</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    
    <el-menu-item index="5" @click="changePage('/about-manager')">
      <i class="el-icon-document"></i>
      <span slot="title">關於本系管理</span>
    </el-menu-item>
    <el-menu-item index="6" @click="changePage('/recruit-manager')">
      <i class="el-icon-document"></i>
      <span slot="title">招生管理</span>
    </el-menu-item>

    <el-menu-item index="7" @click="changePage('/article-manager')">
      <i class="el-icon-edit"></i>
      <span slot="title">文章編輯</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
      icon: "el-icon-more",
    };
  },
  methods: {
    changePage(router) {
      window.scrollTo(0, 0);
      this.drawer = false;
      if (this.$route.path !== router) {
        this.$router.push({ path: router });
      }
    },
  },
};
</script>
