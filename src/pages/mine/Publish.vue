<template>
  <van-nav-bar
    title="我的发布"
    fixed
    safe-area-inset-top
    placeholder
    left-arrow
    @click-left="onClickLeft"
  />
  <van-row class="container" justify="space-around">
    <van-col span="24">
      <van-notice-bar mode="closeable">向左滑动进行编辑操作</van-notice-bar>
      <van-swipe-cell v-for="n in 2">
        <van-card
          price="2.00"
          desc="描述信息"
          title="商品标题"
          class="goods-card"
          thumb="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <template #right>
          <van-button
            square
            text="编辑"
            type="primary"
            class="delete-button van-haptics-feedback"
          />
          <van-button
            square
            text="删除"
            type="danger"
            class="delete-button van-haptics-feedback"
          />
        </template>
      </van-swipe-cell>
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
