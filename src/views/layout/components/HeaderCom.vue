<!-- Breadcrumb.vue -->
<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
import { ref, watchEffect } from 'vue'
import { useRoute,useRouter } from 'vue-router'
import {useAdminAuthStore} from '@/stores' 
const userAdminStore = useAdminAuthStore()
const route = useRoute()
const router = useRouter()
const breadList = ref<string[]>([])
const handleCommand = (key:string)=>{
  if(key==='logout'){
    //退出
    //清楚token和user信息
    userAdminStore.removeToken()
    userAdminStore.setUser({})
    router.push('/login')
  }else{
    // 跳转
    router.push('/setting/updatepwd')
  }
}
watchEffect(() => {
  const matched = route.matched
    .filter((item) => item.meta?.title)
    .map((item) => item.meta.title as string)

  breadList.value = [...matched]
})
</script>

<template>
  <div class="main">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item
        v-for="(item, index) in breadList"
        :key="index"
        :to="index === 0 ? '/' : undefined"
      >
        {{ item }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <div class="userMessage">
      <i class="iconfont icon-a-16_ziti_zitidaxiao" />
      <i class="iconfont icon-wen-A" />
      <i class="iconfont icon-quanping_o" />
      <i class="iconfont icon-buju-01" />
      <el-dropdown
        placement="top-start"
        trigger="click"
        @command="handleCommand"
      >
        <el-button
          >超级管理员
          <img src="../../../assets/avatar.png" alt="avater" />
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              command="updatepwd"
              style="border-bottom: 1px solid #ebeef5"
              ><i class="iconfont icon-lock-line" /> 修改密码</el-dropdown-item
            >
            <el-dropdown-item
            command="logout"
              ><i class="iconfont icon-guanji" />退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  width: 100%;
  display: flex;
  justify-content: space-between; /* 左右对齐 */
  align-items: center;
  .el-breadcrumb {
    margin: 16px 0;
    font-size: 14px;
    :deep(.el-breadcrumb__inner) {
      font-weight: normal;
      &.is-link {
        color: black;
        &:hover {
          color: var(--el-color-primary);
        }
      }
    }
  }
  .userMessage {
    .iconfont {
      font-size: 25px;
      padding-left: 15px;
    }
    .el-dropdown {
      .el-button {
        border: none;
        --el-button-font-weight: none;
        --el-button-border-color: none;
        --el-button-bg-color: none;
        --el-button-text-color: none;
        --el-button-disabled-text-color: none;
        --el-button-disabled-bg-color: none;
        --el-button-disabled-border-color: none;
        --el-button-divide-border-color: none;
        --el-button-hover-text-color: none;
        --el-button-hover-bg-color: none;
        --el-button-hover-border-color: none;
        --el-button-active-text-color: none;
        --el-button-active-border-color: none;
        --el-button-active-bg-color: none;
        --el-button-outline-color: none;
      }
      img {
        width: 28px;
        height: 28px;
        margin-left: 16px;
      }
    }
  }
}
:deep(.el-dropdown-menu__item) {
  width: 150px;
}
</style>
