<template>
  <div>
    <el-row class="border my-2 mx-3 px-2 py-3">
      <el-table :data="tableData" stripe>
        <el-table-column label="影片" align="center">
          <template slot-scope="scope">
            <iframe
              width="1110"
              height="400"
              :src="scope.row.url"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div style="display:flex; justify-content: center;align-items: center;">
              <p style="margin-bottom:0px">影片網址：{{ scope.row.url }}</p>
              <el-button style="margin:5px" type="danger" size="mini" @click="eventDelete()">刪除</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <el-row type="flex" justify="center" style="padding-top:10px">
        <el-button type="success" @click="onSubmit">儲存</el-button>
        <el-button type="danger" @click="colseform()">取消</el-button>
      </el-row>
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

        <el-form-item prop="img" label="圖片">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
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

        <el-form-item prop="img" label="圖片">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
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
          url: "https://www.youtube.com/embed/2qEOLdii3B4",
        },
        {
          url: "https://www.youtube.com/embed/d24cO1piE_I",
        },
        {
          url: "https://www.youtube.com/embed/OXiHfaqJGVU",
        },
      ],
      dialogEdit: false,
      dialogAdd: false,
      dynamicValidateForm: {},
      imageUrl: "",
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
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
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
