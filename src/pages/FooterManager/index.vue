<template>
  <div>
    <el-tabs type="card" v-model="active" class="mx-3 my-3">
      <el-tab-pane label="頁底管理" name="first">
        <el-row class="border my-2 mx-3 px-2 py-3">
          <el-table :data="tableData" stripe>
            <el-table-column
              prop="name"
              label="欄位"
              width="180"
              align="center"
            >
            </el-table-column>
            <el-table-column prop="view" label="內容"> </el-table-column>
          </el-table>
          <el-button
            size="mini"
            class="my-2"
            type="success"
            style="width: 100%"
            @click="dialogFormVisible = true"
            >編輯</el-button
          >
        </el-row>
      </el-tab-pane>
    </el-tabs>

    <el-dialog title="編輯" :visible.sync="dialogFormVisible" width="60%">
      <el-form ref="form" :model="form" label-width="90px">
        <div v-for="(item, i) in tableData" :key="i">
          <el-form-item :label="item.name">
            <el-input v-model="item.context"></el-input>
          </el-form-item>
        </div>
        <el-row type="flex" class="row-bg" justify="center">
          <el-button type="success" @click="onSubmit">儲存</el-button>
          <el-button type="danger" @click="dialogFormVisible = false"
            >取消</el-button
          >
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "first",
      form: {
        title: "",
        email: "",
        service_hours: "",
        copyright: "",
        updated: "",
        phone: "",
        address: "",
        facebook: "",
      },
      tableData: [
        {
          name: "網頁名稱",
          role: "title",
          view:"",
          context:"",
        },
        {
          name: "聯絡信箱",
          role: "email",
          view:"",
          context:"",
        },
        {
          name: "服務時間",
          role: "service_hours",
          view:"",
          context:"",
        },
        {
          name: "版權歸屬",
          role: "copyright",
          view:"",
          context:"",
        },
        {
          name: "更新時間",
          role: "updated",
          view:"",
          context:"",
        },
        {
          name: "連絡電話",
          role: "address",
          view:"",
          context:"",
        },
        {
          name: "地址",
          role: "address",
          view:"",
          context:"",
        },
        {
          name: "facebook",
          role: "facebook",
          view:"",
          context:"",
        },
        {
          name: "手機",
          role: "phone",
          view:"",
          context:"",
        },
      ],
      dialogFormVisible: false,
    };
  },
  mounted() {
    this.getFooter();
  },
  methods: {
    onSubmit() {
      this.$axios("post", "/footer", this.tableData)
        .then(() => {
          this.getFooter();
          this.dialogFormVisible = false;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getFooter() {
      this.$axios("get", "/footer")
        .then((res) => {
          this.form = res.data;
          this.changeDataForm(res.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    changeDataForm(data) {
      this.tableData.map((d) => {
        d.view = data[d.role];
        d.context = data[d.role];
        return d;
      });
    },
  },
};
</script>