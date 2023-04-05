<template>
  <router-view />
  <van-tabbar :safe-area-inset-bottom="false" route placeholder>
    <van-tabbar-item icon="home-o" name="index" replace to="/index">
      首页
    </van-tabbar-item>
    <van-tabbar-item icon="friends-o" name="user" to="/user">
      我的
    </van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts" setup></script>

<style scoped></style>
