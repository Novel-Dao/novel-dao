<template>
  <el-steps :active="active" finish-status="success">
    <el-step title="作品信息" />
    <el-step title="作品状态" />
    <el-step title="完成" />
  </el-steps>

  <el-form :model="form" label-width="120px">
    <div v-show="active === 0">
      <el-form-item label="作品名">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="封面">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="原著">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="语言">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="中文" name="type" />
          <el-checkbox label="英文" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="作品介绍">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
    </div>
    <div v-show="active === 1">
      <el-form-item label="频道">
        <el-radio-group v-model="form.resource">
          <el-radio label="男生" />
          <el-radio label="女生" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="作品类型">
        <el-select v-model="form.region" placeholder="请选择作品类型">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="状态">
        <el-radio-group v-model="form.resource">
          <el-radio label="公开" />
          <el-radio label="私密" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="作品等级">
        <el-radio-group v-model="form.resource">
          <el-radio label="1级" />
          <el-radio label="2级" />
          <el-radio label="3级" />
          <el-radio label="4级" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="标签（可多选）">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="乡村" name="type" />
          <el-checkbox label="爱情" name="type" />
          <el-checkbox label="独家" name="type" />
          <el-checkbox label="玄幻" name="type" />
          <el-checkbox label="神话" name="type" />
        </el-checkbox-group>
      </el-form-item>
    </div>
    <div v-show="active === 2">
      <el-result icon="success" title="作品发布成功">
        <template #extra>
          <el-button type="primary">确定</el-button>
        </template>
      </el-result>
    </div>
  </el-form>
  <el-button v-show="active !== 2" style="margin-top: 12px" @click="next">
    下一步
  </el-button>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";

const active = ref(0);

const next = () => {
  console.log(active.value);
  if (active.value++ > 2) active.value = 0;
};

const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "1",
  desc: "",
});
</script>

<style scoped></style>
