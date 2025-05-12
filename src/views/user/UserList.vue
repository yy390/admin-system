<script lang="ts" setup>
import { ref } from 'vue'
import { Setting } from '@element-plus/icons-vue'
import ConTitle from './components/ConTitle.vue'
const tableData = ref([{}])
</script>
<template>
  <ConTitle>用户列表</ConTitle>
  <el-table border :data="tableData">
    <el-table-column fixed="left">
      <template #default>
        <el-icon>
          <Setting />
        </el-icon>
      </template>
    </el-table-column>
    <!-- <el-table-column fixed="left" prop="name"/> -->
    <el-table-column fixed="left" prop="name" label="昵称" />
    <el-table-column fixed="left" prop="phone" label="手机号" />
    <el-table-column prop="username" label="用户" />
    <el-table-column prop="address" label="头像" />
    <el-table-column prop="uid" label="用户ID" />
    <el-table-column prop="online" label="用户状态" />
    <el-table-column prop="short_no" label="悟空号" />
    <el-table-column prop="sex" label="性别" />
    <el-table-column prop="register_time" label="注册时间" />
    <el-table-column prop="device_name" label="登录设备" />
    <el-table-column prop="device_model" label="登录设备型号" />
    <el-table-column prop="status" label="在线状态" />
    <el-table-column prop="gitee_uid" label="最后离线时间" />
    <el-table-column fixed="right" prop="github_uid" label="操作" />
  </el-table>
</template>
<style lang="scss" scoped>
.el-table {
  flex: 1;
  height: calc(100vh - 80px);
  background-color: palegoldenrod;
  // height: 200px;
}
</style>
