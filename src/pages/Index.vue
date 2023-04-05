<template>
  <van-nav-bar title="智客二手市场" fixed safe-area-inset-top placeholder />
  <swipe />
  <van-row justify="space-around">
    <van-col span="24">
      <div class="title">热销推荐</div>
      <goods-item
        :count="6"
        :item="[
          {
            id: 1,
            title: `和你在一起网红玩具盲盒手办福袋盲袋扭蛋摆件和你在一起网红玩具盲盒手办福袋盲袋扭蛋摆件`,
            cover: `https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg`,
            price: `20.00`,
          },
          {
            id: 2,
            title: `和你在一起网红玩具盲盒手办福袋盲袋扭蛋摆件和你在一起网红玩具盲盒手办福袋盲袋扭蛋摆件`,
            cover: `https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg`,
            price: `33.00`,
          },
          {
            id: 2,
            title: `和你在一起网红玩具盲盒手办福袋盲袋扭蛋摆件和你在一起网红玩具盲盒手办福袋盲袋扭蛋摆件`,
            cover: `https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg`,
            price: `33.00`,
          },
          {
            id: 2,
            title: `和你在一起网红玩具盲盒手办福袋盲袋扭蛋摆件和你在一起网红玩具盲盒手办福袋盲袋扭蛋摆件`,
            cover: `https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg`,
            price: `33.00`,
          },
          {
            id: 2,
            title: `和你在一起网红玩具盲盒手办福袋盲袋扭蛋摆件和你在一起网红玩具盲盒手办福袋盲袋扭蛋摆件`,
            cover: `https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg`,
            price: `33.00`,
          },
          {
            id: 2,
            title: `和你在一起网红玩具盲盒手办福袋盲袋扭蛋摆件和你在一起网红玩具盲盒手办福袋盲袋扭蛋摆件`,
            cover: `https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg`,
            price: `33.00`,
          },
          {
            id: 2,
            title: `和你在一起网红玩具盲盒手办福袋盲袋扭蛋摆件和你在一起网红玩具盲盒手办福袋盲袋扭蛋摆件`,
            cover: `https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg`,
            price: `33.00`,
          },
          {
            id: 2,
            title: `和你在一起网红玩具盲盒手办福袋盲袋扭蛋摆件和你在一起网红玩具盲盒手办福袋盲袋扭蛋摆件`,
            cover: `https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg`,
            price: `33.00`,
          },
        ]"
      />
    </van-col>
  </van-row>
  <van-divider>到底了</van-divider>
  <van-sticky :offset-bottom="120" position="bottom" v-if="isLogin">
    <van-button
      type="success"
      icon="plus"
      round
      class="btn-plus"
      @click="addGoods"
    />
  </van-sticky>
  <publish v-model:show="show" @change-show="close" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Swipe from "../components/Swipe.vue";
import GoodsItem from "../components/GoodsItem.vue";
import Publish from "./goods/Publish.vue";
import { useEthereumStore } from "../store/Store";

/**
 * 打开发布商品弹窗
 */
const show = ref(false);
const addGoods = () => {
  show.value = true;
};
/**
 * 关闭发布商品弹窗
 * @param val
 */
const close = (val: boolean) => {
  show.value = val;
};
//未登录时隐藏发布商品按钮
const isLogin = ref(false);
let ethereumStore = useEthereumStore();
let ethereumClient = ethereumStore.initClient();
ethereumClient.watchAccount((data) => {
  isLogin.value = data.isConnected;
});
</script>

<style lang="scss" scoped>
.title {
  color: rgba(16, 16, 16, 1);
  font-size: 18px;
  line-height: 20px;
  margin: 10px;

  div {
    width: 8px;
    height: 18px;
    border-radius: 10px;
    line-height: 20px;
    float: left;
    background-color: rgba(255, 99, 128, 1);
  }
}

.btn-plus {
  position: absolute;
  right: 1rem;
}
</style>
