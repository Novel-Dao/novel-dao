<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
        >
          <el-menu-item index="0">Novel Dao</el-menu-item>
          <div class="flex-grow" />
          <el-sub-menu index="2">
            <template #title>昵称</template>
            <el-menu-item index="2-2">退出登录</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-header>
      <el-container style="height: 100vh">
        <el-aside width="200px">
          <el-menu
            router
            default-active="dashboard"
            class="el-menu-vertical-demo"
          >
            <el-menu-item index="dashboard"> 首页 </el-menu-item>

            <el-sub-menu index="2">
              <template #title>
                <el-icon>
                  <location />
                </el-icon>
                <span>作品管理</span>
              </template>
              <el-menu-item index="/writer/novel/list"> 作品列表 </el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
