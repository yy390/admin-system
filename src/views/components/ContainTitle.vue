<script lang="ts" setup></script>
<template>
  <div class="title">
    <p><slot></slot></p>
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
  p {
    font-size: 15px;
    font-weight: 600;
    height: 24px;
    line-height: 24px;
    width: 60px;
    color: rgb(48, 49, 51);
  }
}
</style>
