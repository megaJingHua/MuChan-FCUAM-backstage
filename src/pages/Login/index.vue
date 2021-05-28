<template>
  <div>
    <el-row class="login" type="flex" dir="">
      <el-card>
        <img :src="require('@/assets/logo.png')" style="width: 50%" />
        <p class="px-2 py-2">逢甲大學應用數學系官網管理後台</p>
        <el-form ref="form" :model="form" label-width="50px">
          <el-form-item label="帳號">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密碼">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-button @click="login" type="danger" size="mini">登入</el-button>
        </el-form>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      form: {
        username: "ivan",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$store.commit("Login", this.form);
    },
  },
};
</script>
<style scoped>
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.el-card {
  text-align: center;
}
.el-form-item {
  margin: 0px;
}
</style>
