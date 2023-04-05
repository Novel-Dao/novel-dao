<template>
  <van-grid :border="false" :column-num="2" :gutter="10" :center="false">
    <van-grid-item
      class="item-text van-haptics-feedback"
      v-for="data in item"
      :to="`/detail/${data.id}`"
    >
      <van-image class="cover" radius="10" :src="data.cover" />
      <h5 class="van-multi-ellipsis--l2">{{ data?.title }}</h5>
      <span class="price">￥{{ data.price }}</span>
    </van-grid-item>
  </van-grid>
</template>

<script lang="ts" setup>
interface IGoodsItem {
  id: number;
  title: string;
  cover: string;
  price: string;
}

interface IGoodsItems {
  item: IGoodsItem[];
}

defineProps<IGoodsItems>();
</script>

<style lang="scss" scoped>
.item-text {
  .cover {
    border: 1px solid #1a1a1a;
  }

  h5 {
    margin: 8px 0;
  }

  .price {
    color: rgba(255, 99, 128, 1);
    font-weight: bold;
  }
}
</style>
