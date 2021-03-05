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
            <el-table-column prop="context" label="內容"> </el-table-column>
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
        <el-form-item label="網頁名稱">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="聯絡信箱">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="服務時間">
          <el-input v-model="form.service_hours"></el-input>
        </el-form-item>
        <el-form-item label="版權歸屬">
          <el-input v-model="form.copyright"></el-input>
        </el-form-item>
        <el-form-item label="更新時間">
          <el-input v-model="form.updated"></el-input>
        </el-form-item>
        <el-form-item label="連絡電話">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>

        <el-form-item label="地址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>

        <el-form-item label="FaceBook">
          <el-input v-model="form.facebook"></el-input>
        </el-form-item>

        <el-row type="flex" class="row-bg" justify="center">
          <el-button type="success" @click="onSubmit">儲存</el-button>
          <el-button type="danger" @click="colseform()">取消</el-button>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
import * as base from "@/baseurl.json";
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
          context: "上海市普陀区金沙江路 1518 弄",
        },
        {
          name: "聯絡信箱",
          context: "上海市普陀区金沙江路 1517 弄",
        },
        {
          name: "服務時間",
          context: "上海市普陀区金沙江路 1519 弄",
        },
        {
          name: "版權歸屬",
          context: "上海市普陀区金沙江路 1516 弄",
        },
        {
          name: "更新時間",
          context: "上海市普陀区金沙江路 1516 弄",
        },
        {
          name: "連絡電話",
          context: "上海市普陀区金沙江路 1516 弄",
        },
        {
          name: "地址",
          context: "上海市普陀区金沙江路 1516 弄",
        },
        {
          name: "facebook",
          context: "上海市普陀区金沙江路 1516 弄",
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
      let datas = [];
      datas.push({ role: "title", context: this.form.title });
      datas.push({ role: "email", context: this.form.email });
      datas.push({ role: "service_hours", context: this.form.service_hours });
      datas.push({ role: "copyright", context: this.form.copyright });
      datas.push({ role: "updated", context: this.form.updated });
      datas.push({ role: "address", context: this.form.address });
      datas.push({ role: "facebook", context: this.form.facebook });
      datas.push({ role: "phone", context: this.form.phone });

      axios
        .post(base.baseurl + "footer", { data: datas })
        .then(() => {
          this.getFooter();
          this.dialogFormVisible = false;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    colseform() {
      this.dialogFormVisible = false;
      this.getFooter();
    },
    getFooter() {
      axios
        .get(base.baseurl + "footer")
        .then((res) => {
          this.form = res.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
};
</script>