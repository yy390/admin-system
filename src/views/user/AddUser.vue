<script lang="ts" setup>
import ContainTitle from '../components/ContainTitle.vue'
import { ref } from 'vue'
const form = ref()
const formModel = ref({
  name: '',
  phone: '',
  password: '',
  gender: ''
})
const rules = {
  name: [{ required: true, message: '请输入用户昵称', trigger: 'blur' }],
  phone: [
    { required: true, message: '请输入正确的手机号', trigger: 'blur' },
    {
      pattern: /^1[3-9]\d{9}$/,
      message: '请输入正确的11位手机号',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^\S{6,15}$/,
      message: '密码是6 -15位非空字符',
      trigger: 'blur'
    }
  ]
}
const register = async () => {
  await form.value.validate()
  console.log('开始注册', formModel.value)
}
</script>
<template>
  <div class="contain">
    <ContainTitle>添加用户</ContainTitle>
    <div class="main">
      <el-form
        :rules="rules"
        ref="form"
        :model="formModel"
        label-width="auto"
        style="max-width: 600px"
      >
        <el-form-item label="区号：">
          <el-select placeholder="0086">
            <el-option label="0086" value="0086" style="color: #e4633b" />
          </el-select>
        </el-form-item>
        <el-form-item label="手机号：" prop="phone">
          <el-input v-model="formModel.phone" />
        </el-form-item>
        <el-form-item label="性别：">
          <el-radio-group v-model="formModel.gender">
            <el-radio value="男">男</el-radio>
            <el-radio value="女">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="用户昵称：" prop="name">
          <el-input v-model="formModel.name" />
        </el-form-item>
        <el-form-item label="登录密码：" prop="password">
          <el-input
            v-model="formModel.password"
            type="password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item label=" ">
          <el-button @click="register" type="primary">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.contain {
  height: 100vh;
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
  padding: 12px;
  // background-color: paleturquoise;
  // height: calc(100vh - 51px);
  .el-form {
    width: 540px;
    // height: 282px;

    .el-form-item {
      font-size: 15px;
      height: 32px;
      line-height: 24px;
      padding-left: 33px;
      margin-bottom: 18px;
      color: rgb(48, 49, 51);
      .el-select {
        width: 420px;
        --el-color-primary: #e4633b;
      }
      .el-radio-group {
        --el-color-primary: #e4633b;
      }
      .el-input {
        border-color: none;
        width: 420px;
        --el-input-focus-border-color: #e4633b;
      }

      .el-button {
        width: 420px;
        border-color: #e4633b;
        background-color: #e4633b;
      }
    }
  }
}
</style>
