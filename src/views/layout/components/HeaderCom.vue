<!-- Breadcrumb.vue -->
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ArrowRight } from '@element-plus/icons-vue'
import { ref, watchEffect } from 'vue'

const route = useRoute()
const breadList = ref<string[]>([])

watchEffect(() => {
  const matched = route.matched
    .filter((item) => item.meta?.title)
    .map((item) => item.meta.title as string)

  breadList.value = [...matched]
})
</script>

<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="(item, index) in breadList"
      :key="index"
      :to="index === 0 ? '/' : undefined"
    >
      {{ item }}
    </el-breadcrumb-item>
  </el-breadcrumb>
  
</template>

<style scoped>
.el-breadcrumb {
  margin: 16px 0;
  font-size: 14px;
  width: 400px;
  background-color: pink;
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

</style>
