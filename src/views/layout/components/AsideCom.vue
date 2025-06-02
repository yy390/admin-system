<script lang="ts" setup>
import { ref, watch } from 'vue'
import { House, User, Setting } from '@element-plus/icons-vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
// 当前激活的菜单项
const activeIndex = ref('')
// 监听路由变化更新激活项
watch(() => route.path, (newPath) => {
  activeIndex.value = newPath
}, { immediate: true })
const handleMenuSelect = (index: string) => {
  router.push(index)
}
</script>
<template>
  <el-row class="tac">
    <el-col>
      <el-menu 
        :default-active="activeIndex"
        :unique-opened="true"
        @select="handleMenuSelect"
      >
        <el-menu-item index="/home">
          <el-icon><House /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-sub-menu index="/user">
          <template #title>
            <el-icon><User /></el-icon>
            <span>用户</span>
          </template>
          <el-menu-item index="/user/add">新增用户</el-menu-item>
          <el-menu-item index="/user/list">用户列表</el-menu-item>
          <el-menu-item index="/user/disablelist">封禁用户列表</el-menu-item>
        </el-sub-menu>
        
        <el-sub-menu index="/group">
          <template #title>
            <el-icon><User /></el-icon>
            <span>群组</span>
          </template>
          <el-menu-item index="/group/grouplist">群列表</el-menu-item>
          <el-menu-item index="/group/groupdisablelist">封禁群列表</el-menu-item>
        </el-sub-menu>
        
        <el-sub-menu index="/message">
          <template #title>
            <el-icon><User/></el-icon>
            <span>消息</span>
          </template>
          <el-menu-item index="/message/sendmsglist">消息记录</el-menu-item>
          <el-menu-item index="/message/prohibitwords">违禁词列表</el-menu-item>
        </el-sub-menu>
        
        <el-sub-menu index="/report">
          <template #title>
            <el-icon><User /></el-icon>
            <span>举报</span>
          </template>
          <el-menu-item index="/report/user">举报用户</el-menu-item>
          <el-menu-item index="/report/group">举报群聊</el-menu-item>
        </el-sub-menu>
        
        <el-sub-menu index="/setting">
          <template #title>
            <el-icon><User /></el-icon>
            <span>设置</span>
          </template>
          <el-menu-item index="/setting/currencysetting">
            <el-icon><Setting /></el-icon>
            通用设置
          </el-menu-item>
          <el-menu-item index="/setting/updatepwd">修改登录密码</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<style scoped>
.el-menu {
  border-right: none;
}

/* 高亮当前选中项 */
.el-menu-item.is-active {
  color: #409EFF !important;
  background-color: #ecf5ff !important;
}
</style>