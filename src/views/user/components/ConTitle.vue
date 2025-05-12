<script lang="ts" setup>
import { ref } from 'vue'
const input = ref()
</script>
<template>
  <div class="title">
    <p><slot></slot></p>
    <div class="mysearch">
      <el-input
        v-model="input"
        style="width: 220px"
        placeholder="uid/手机号/用户名"
      />
      <el-button type="primary">查询</el-button>
    </div>
  </div>
</template>
// flex: 1;
<style lang="scss" scoped>
.title {
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  border-bottom: 1px solid rgb(228, 231, 237);
  background-color: palegoldenrod;
  justify-content: space-between;
  p {
    font-size: 15px;
    font-weight: 600;
    height: 24px;
    line-height: 24px;
    width: 60px;
    color: rgb(48, 49, 51);
  }
  .mysearch {
    .el-input {
      margin-right: 16px;
    }

    .el-button {
      color: white;
      --el-button-bg-color: #e4633b;
      --el-button-border-color: #e4633b;
      --el-button-hover-bg-color: #ec9276;
      --el-button-hover-border-color: #ec9276;
      --el-button-active-bg-color: #a64b2f;
      --el-button-active-border-color: #a64b2f;
      --el-button-disabled-bg-color: #f2b19d;
      --el-button-disabled-border-color: #f2b19d;
    }
  }
}
</style>
