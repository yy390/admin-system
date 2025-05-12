<script lang="ts" setup>
import { ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { userLoginService } from '@/api/user'
import { useAdminAuthStore } from '@/stores/modules/user'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
const form = ref()
const formModel = ref({
  username: '',
  password: ''
})
const rules = {
  username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^\S{6,15}$/,
      message: '密码是6 -15位非空字符',
      trigger: 'blur'
    }
  ]
}
const userStore = useAdminAuthStore()
const router = useRouter()
const login = async () => {
  await form.value.validate()
  const res = await userLoginService(formModel.value)
  userStore.setToken(res.data.token)
  ElMessage.success('登录成功')
  router.push('/home')
}
</script>
<template>
  <div class="el-card">
    <el-form :model="formModel" :rules="rules" ref="form" class="el-card-body">
      <el-form-item class="title">
        <h3>唐僧叨叨后台管理</h3>
      </el-form-item>
      <el-form-item prop="username">
        <el-input
          v-model="formModel.username"
          :prefix-icon="User"
          placeholder="请输入账号"
          type="text"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="formModel.password"
          :prefix-icon="Lock"
          placeholder="请输入密码"
          type="password"
          show-password
        />
      </el-form-item>
      <el-form-item>
        <el-checkbox label="自动登录" value="false" />
      </el-form-item>
      <el-form-item>
        <el-button @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style lang="scss" scoped>
.el-card {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 442px;
  height: 433px;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 8px; // 圆角匹配
  background-color: #fff;
  .el-card-body {
    justify-content: space-around;
    height: 335px;
    padding: 48px;
    background-color: #fff;
    .title {
      display: block;
      height: 69px;
      h3 {
        margin: 0 auto;
        line-height: 45px;
        font-size: 37.5px;
        font-weight: 500;
        color: rgb(48, 49, 51);
      }
    }
    .el-form-item {
      margin-bottom: 22px;
      color: rgb(96, 98, 102);
      .el-input {
        height: 40px;
        line-height: 40px;
        font-style: 15px;
        font-weight: 400;
        --el-color-primary: #e4633b;
      }
      /* 复选框选中状态样式 */
      :deep(.el-checkbox) {
        // 选中状态
        &.is-checked {
          .el-checkbox__inner {
            background-color: #e4633b; // 橙色背景
            border-color: #e4633b; // 橙色边框
          }
          .el-checkbox__label {
            color: #e4633b; // 保持文字颜色不变
          }
        }
        &:hover .el-checkbox__inner {
          border-color: #e4633b;
        }
      }
      .el-button {
        font-size: 15px;
        width: 100%;
        height: 40px;
        color: white;
        line-height: 40px;
        background-color: #e4633b;
        border-color: #e4633b;
      }
    }
  }
}
.el-card::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: linear-gradient(to right bottom, #d8c3ea, #9dade3);
  opacity: 0.5;
  filter: blur(120px);
  box-shadow: 0 0 70px 70px rgba(0, 0, 0, 0.02);
  z-index: -999;
}
</style>
