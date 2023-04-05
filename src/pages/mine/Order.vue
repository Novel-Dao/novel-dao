<template>
  <van-nav-bar
    title="我的订单"
    fixed
    safe-area-inset-top
    placeholder
    left-arrow
    @click-left="onClickLeft"
  />
  <van-row class="container" justify="space-around">
    <van-col span="24">
      <van-cell title="时间：2023-10-10" v-for="n in 2">
        <template #label>
          <van-card
            price="2.00"
            desc="描述信息"
            title="商品标题"
            class="goods-card"
            thumb="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          >
            <template #footer>
              <van-button type="success" plain size="small">评价</van-button>
            </template>
          </van-card>
        </template>
      </van-cell>
      <van-divider>没有更多了</van-divider>
    </van-col>
  </van-row>
</template>

<script lang="ts" setup>
const onClickLeft = () => history.back();
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
