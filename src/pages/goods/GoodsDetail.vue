<template>
  <van-nav-bar
    title="商品详情"
    fixed
    safe-area-inset-top
    placeholder
    left-arrow
    @click-left="onClickLeft"
  />
  <van-image
    class="cover"
    fit="cover"
    src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
  />

  <van-row justify="space-around" class="detail">
    <van-col span="22">
      <h4 class="title">上古九尾狐狸修仙九尾狐</h4>
      <h3 class="price">￥999</h3>
      <h3>最新评价</h3>
      <van-cell>
        <template #title> 用户评价 </template>
        <template #label>
          <div class="van-multi-ellipsis--l2">
            用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价
          </div>
        </template>
        <template #value>
          <van-rate v-model="rate" readonly allow-half />
        </template>
      </van-cell>
      <h3>商品详情</h3>
      <div class="content">
        <van-image
          fit="cover"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <van-image
          fit="cover"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <van-image
          fit="cover"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
      </div>
      <van-divider>到底了</van-divider>
    </van-col>
  </van-row>

  <van-action-bar placeholder>
    <van-action-bar-icon icon="home-o" text="首页" to="/" />
    <van-action-bar-button
      type="danger"
      text="立即订阅"
      :to="`/order/${route.params.id}`"
    />
  </van-action-bar>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { ref } from "vue";

const onClickLeft = () => history.back();
let route = useRoute();
const rate = ref(3.5);
</script>

<style lang="scss" scoped>
.cover {
  position: fixed;
  z-index: -1;
}
.detail {
  border-radius: 15px 15px 0 0;
  margin-top: 240px !important;
  background-color: #fff;
  .title {
  }
  .price {
    color: rgba(255, 99, 128, 1);
  }
}
</style>
