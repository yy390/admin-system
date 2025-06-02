<script lang="ts" setup>
// import { ref } from 'vue'
import AsideCom from './AsideCom.vue'
import HeaderCom from './HeaderCom.vue'
import TabsboxCom from './TabsboxCom.vue'
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <div class="title">
          <img src="../../../assets/logo.png" />
          <span>唐僧叨叨后台管理</span>
        </div>
        <AsideCom></AsideCom>
      </el-aside>
      <el-container>
        <el-header>
          <HeaderCom></HeaderCom>
          <div class="userMessage">
            dfdfbs
            <span style="background-color: pink;">sda</span>
          </div>
        </el-header>
        <div class="tabs-box">
          <TabsboxCom></TabsboxCom>
        </div>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>
          <a href="https://github.com"> 2023 © 唐僧叨叨. </a>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.common-layout {
  height: 100vh;
  box-sizing: border-box;
  .title {
    height: 55px;
    display: flex;
    object-fit: contain;
    align-items: center;
    border-bottom: 1px solid #e3e6ec;
    img {
      width: 28px;
      height: 28px;
      margin-right: 6px;
      vertical-align: middle;
    }
    span {
      font-size: 20px;
      height: 32px;
    }
  }
  .el-aside {
    height: 100vh;
    width: 210px;
    box-sizing: border-box;
    border-right: 1px solid #e3e6ec;
  }
  .el-header {
    height: 56px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e3e6ec;
    .userMessage {
      display: flex;
      align-items: center;
    }
  }
  .tabs-box {
    box-sizing: border-box;
    height: 40px;
    padding: 0 12px;
    border-bottom: 1px solid #e3e6ec;
  }
  .el-main {
    padding: 1px;
    height: calc(100vh - 130px);
    background-color: #f2f3f5;
  }
  .el-footer {
    height: 34px;
    border-top: 1px solid #e3e6ec;
    text-align: center;
    a {
      color: rgb(144, 147, 153);
      text-decoration-line: none;
    }
  }
}
</style>
