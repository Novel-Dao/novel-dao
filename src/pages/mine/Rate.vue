<template>
  <van-nav-bar
    title="我的评价"
    fixed
    safe-area-inset-top
    placeholder
    left-arrow
    @click-left="onClickLeft"
  />
  <van-row class="container" justify="space-around">
    <van-col span="24">
      <van-cell-group v-for="n in 10">
        <van-cell
          title="商品名称"
          label="描述信息描述信息描述信息描述信息描述信息"
        >
          <template #value>
            <van-rate v-model="rate" readonly allow-half />
          </template>
        </van-cell>
      </van-cell-group>
      <van-divider>没有更多了</van-divider>
    </van-col>
  </van-row>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const onClickLeft = () => history.back();
const rate = ref(3.5);
</script>

<style lang="scss" scoped>
.container {
  .goods-card {
    background-color: white;
  }

  .delete-button {
    height: 100%;
  }
}
</style>
