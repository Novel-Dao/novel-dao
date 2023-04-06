<template>
  <el-page-header :icon="null">
    <template #title>我的作品</template>
    <template #content>
      <div class="flex items-center">
        <span style="color: var(--el-text-color-regular); font-size: 10px">
          共 4 个作品
        </span>
      </div>
    </template>
    <template #extra>
      <div class="flex items-center">
        <el-button type="primary" class="ml-2" @click="addNovel">
          创建作品
        </el-button>
      </div>
    </template>
  </el-page-header>
  <hr />
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="image" label="作品">
      <template #default="{ row, column, $index }">
        <el-image
          style="width: 100px; height: 100px"
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        />
      </template>
    </el-table-column>
    <el-table-column prop="name" label="作品名称" />
    <el-table-column prop="state" label="状态" />
    <el-table-column prop="date" label="时间" />
    <el-table-column fixed="right" label="操作" width="120">
      <template #default>
        <el-button link type="primary" size="small"> 下架</el-button>
        <el-button link type="primary" size="small">发布</el-button>
        <el-button link type="primary" size="small">编辑</el-button>
        <el-button link type="primary" size="small" @click="chapter('1')">
          章节管理
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-row justify="center" style="margin-top: 20px">
    <el-col :span="6">
      <el-pagination
        small
        background
        layout="prev, pager, next"
        :total="50"
        class="mt-4"
      />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Home",
  },
];
let router = useRouter();
const chapter = (id: string) => {
  router.push(`/writer/novel/chapter/list/${id}`);
};
const addNovel = () => {
  router.push("/writer/novel/add");
};
</script>

<style scoped></style>
