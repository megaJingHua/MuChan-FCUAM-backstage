<template>
  <div>
    <el-row class="border my-2 mx-3 px-2 py-3">
      <el-table :data="tableData" stripe>
        <el-table-column prop="date" label="日期" width="120" align="center">
        </el-table-column>
        <el-table-column prop="title" label="標題" width="400" align="center">
        </el-table-column>
        <el-table-column prop="context" label="內容" align="center"> </el-table-column>
        <el-table-column>
          <el-row type="flex" justify="center">
            <el-button type="success" size="mini" @click="dialogEdit = true"
              >編輯</el-button
            >
            <el-button type="danger" size="mini" @click="eventDelete()">刪除</el-button>
          </el-row>
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
    <!-- 編輯 -->
    <el-dialog title="編輯" :visible.sync="dialogEdit" width="60%">
      <el-form
        :model="dynamicValidateForm"
        ref="dynamicValidateForm"
        class="demo-dynamic"
        label-width="80px"
      >
        <el-form-item prop="title" label="標題">
          <el-input v-model="dynamicValidateForm.title"></el-input>
        </el-form-item>
        <el-form-item prop="context" label="內容">
          <el-input type="textarea" v-model="dynamicValidateForm.context"></el-input>
        </el-form-item>

        <el-form-item prop="img" label="圖片"
          ><el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <el-form-item prop="file" label="檔案">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
          >
            <el-button size="small" type="primary">點擊上傳</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <div style="text-align: center">
            <el-button type="success" @click="submitForm('dynamicValidateForm')"
              >儲存</el-button
            >
            <el-button type="danger" @click="dialogEdit = false">取消</el-button>
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
        label-width="80px"
      >
        <el-form-item prop="title" label="標題">
          <el-input v-model="dynamicValidateForm.title"></el-input>
        </el-form-item>
        <el-form-item prop="context" label="內容">
          <el-input type="textarea" v-model="dynamicValidateForm.context"></el-input>
        </el-form-item>

        <el-form-item prop="img" label="圖片"
          ><el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <el-form-item prop="file" label="檔案">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
          >
            <el-button size="small" type="primary">點擊上傳</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <div style="text-align: center">
            <el-button type="success" @click="submitForm('dynamicValidateForm')"
              >儲存</el-button
            >
            <el-button type="danger" @click="dialogAdd = false">取消</el-button>
          </div>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2021-02-23",
          title: "臺灣最佳大學排行榜",
          context:
            "《遠見》雜誌7月1日公布2019「臺灣最佳大學排行榜」，逢甲大學在綜合類大學中位居全國十一；其中私校前五名當中，逢甲大學是唯一沒有醫學相關科系的綜合大學，在評比上能名列前茅，實屬難得。此外，校長互評辦學績效部分，逢甲大學更獲選為私校第一，辦學聲望廣受肯定。",
        },
      ],
      dialogEdit: false,
      dialogAdd: false,
      dynamicValidateForm: {},
      imageUrl: "",
      dialogImageUrl: "",
      dialogVisible: false,
      fileList: [],
    };
  },
  methods: {
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
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file) {
      return this.$confirm(`確定移除 ${file.name}？`);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
