<template>
  <div>
    <el-tabs type="card" v-model="active" class="mx-3 my-3">
      <el-tab-pane label="Menu管理" name="first">
        <el-row class="border my-2 mx-3 px-2 py-3">
          <el-table :data="tableData" stripe>
            <el-table-column prop="level1" label="第一層" width="180" align="center">
            </el-table-column>
            <el-table-column prop="level2" label="第二層" width="180" align="center">
            </el-table-column>
            <el-table-column prop="" label="">
              <template slot-scope="scope">
                <div v-if="scope.row.level1">
                  <el-button type="success" size="mini" @click="dialogEdit = true"
                    >編輯</el-button
                  >
                  <el-button type="danger" size="mini" @click="eventDelete()"
                    >刪除</el-button
                  >
                </div>
              </template>
            </el-table-column>
          </el-table>

          <el-button
            size="mini"
            type="warning"
            @click="dialogAdd = true"
            class="my-2"
            style="width: 100%"
            >+ 新增</el-button
          >
        </el-row>
      </el-tab-pane>
    </el-tabs>
    <!-- 編輯 -->
    <el-dialog title="編輯" :visible.sync="dialogEdit" width="60%">
      <el-form
        :model="dynamicValidateForm"
        ref="dynamicValidateForm"
        class="demo-dynamic"
      >
        <p>第一層</p>
        <el-form-item prop="level1">
          <el-input v-model="dynamicValidateForm.email"></el-input>
        </el-form-item>
        <p>第二層</p>
        <el-form-item
          v-for="(domain, index) in dynamicValidateForm.domains"
          :key="domain.key"
          :prop="'domains.' + index + '.value'"
        >
          <div style="display: flex">
            <el-input v-model="domain.value"></el-input>
            <el-button type="danger" size="mini" @click.prevent="removeDomain(domain)"
              >刪除</el-button
            >
          </div>
        </el-form-item>
        <el-form-item>
          <div style="text-align: center">
            <el-button
              size="mini"
              type="warning"
              @click="addDomain"
              class="my-2"
              style="width: 100%"
              >+ 新增第二層</el-button
            >
            <el-row class="pt-4">
              <el-button type="success" @click="submitForm('dynamicValidateForm')"
                >儲存</el-button
              >
              <el-button type="danger" @click="dialogEdit = false">取消</el-button>
            </el-row>
          </div>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 新增 -->
    <el-dialog title="新增" :visible.sync="dialogAdd" width="60%">
      <el-form
        :model="dynamicValidateForm"
        ref="dynamicValidateForm"
        class="demo-dynamic"
      >
        <p>第一層</p>
        <el-form-item prop="level1">
          <el-input v-model="dynamicValidateForm.email"></el-input>
        </el-form-item>
        <p>第二層</p>
        <el-form-item
          v-for="(domain, index) in dynamicValidateForm.domains"
          :key="domain.key"
          :prop="'domains.' + index + '.value'"
        >
          <div style="display: flex">
            <el-input v-model="domain.value"></el-input>
            <el-button type="danger" size="mini" @click.prevent="removeDomain(domain)"
              >刪除</el-button
            >
          </div>
        </el-form-item>
        <el-form-item>
          <el-button
            size="mini"
            type="warning"
            @click="addDomain"
            class="my-2"
            style="width: 100%"
            >+ 新增第二層</el-button
          >
          <el-button type="success" @click="submitForm('dynamicValidateForm')"
            >儲存</el-button
          >
          <el-button type="danger" @click="dialogAdd = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamicValidateForm: {
        domains: [
          {
            value: "",
          },
        ],
        email: "",
      },
      active: "first",
      tableData: [
        {
          level1: "網頁名稱",
        },
        {
          level2: "聯絡信箱",
        },
        {
          level2: "服務時間",
        },
        {
          level2: "版權歸屬",
        },
        {
          level1: "更新時間",
        },
        {
          level2: "連絡電話",
        },
        {
          level1: "地址",
        },
        {
          level1: "facebook",
        },
      ],
      dialogEdit: false,
      dialogAdd: false,
    };
  },
  mounted() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: "",
        key: Date.now(),
      });
    },
    eventDelete() {
      this.$confirm("是否刪除?", "提示", {
        confirmButtonText: "確認",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // 刪除API
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>
<style scoped>
.el-form-item {
  margin-bottom: 6px;
}
</style>
