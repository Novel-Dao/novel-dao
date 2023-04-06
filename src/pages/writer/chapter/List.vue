<template>
  <el-page-header :icon="null">
    <template #title>
      <el-image
        style="width: 100px; height: 100px"
        src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
        :zoom-rate="1.2"
        :preview-src-list="srcList"
        :initial-index="4"
        fit="cover"
      />
    </template>
    <template #content>
      <div class="flex items-center">
        <div>神医神医</div>
        <span style="font-size: 12px"> 章节： 200章 </span>
      </div>
    </template>
    <template #extra>
      <div class="flex items-center">
        <el-button type="primary" class="ml-2" @click="back"> 返回 </el-button>
      </div>
    </template>
  </el-page-header>
  <hr />
  <el-button type="primary" size="small"> 添加章节 </el-button>
  <el-button type="primary" plain size="small"> 申请完结 </el-button>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column type="index" />
    <el-table-column prop="name" label="章节列表" />
    <el-table-column fixed="right" label="操作" width="180">
      <template #default>
        <el-button link type="primary" size="small">up </el-button>
        <el-button link type="primary" size="small">down</el-button>
        <el-button link type="primary" size="small">编辑</el-button>
        <el-button link type="primary" size="small">删除</el-button>
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
const back = () => {
  router.go(-1);
};
</script>

<style scoped></style>
