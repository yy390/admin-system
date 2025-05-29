<template>
  <div style="display: flex; align-items: center">
    <el-popover placement="right" :width="400" trigger="click">
      <template #reference>
        <el-button style="margin-right: 16px">时间</el-button>
      </template>
      <el-calendar>
    <template #date-cell="{ data }">
      <p :class="data.isSelected ? 'is-selected' : ''">
        {{ data.day.split('-').slice(1).join('-') }}
        {{ data.isSelected ? '✔️' : '' }}
      </p>
    </template>
  </el-calendar>
    </el-popover>
  </div>
</template>

<script lang="ts" setup>
</script>
<style scoped lang="scss">
.el-butten{
    height: 32px;
}
</style>
