<template>
  <el-button @click="login">login</el-button>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

let router = useRouter();
const login = () => {
  router.push("/writer/novel");
};
</script>

<style scoped></style>
