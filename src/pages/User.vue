<template>
  <van-nav-bar title="个人中心" fixed safe-area-inset-top placeholder />
  <van-row class="container" justify="space-around">
    <van-col span="24">
      <van-col
        span="22"
        offset="1"
        style="margin: 1rem auto; text-align: center"
      >
        <w3m-core-button style="width: 100%" label="连接钱包" balance="show" />
      </van-col>
      <van-cell-group inset class="" v-if="showUserInfo">
        <van-cell title="我的发布" is-link to="/user/publish" />
        <van-cell title="我的订单" is-link to="/user/order" />
        <van-cell title="我的评价" is-link to="/user/rate" />
      </van-cell-group>
    </van-col>
  </van-row>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useEthereumStore } from "../store/Store";

let ethereumStore = useEthereumStore();
let ethereumClient = ethereumStore.initClient();
const showUserInfo = ref(false);
ethereumClient.watchAccount((data) => {
  showUserInfo.value = data.isConnected;
});
</script>

<style lang="scss" scoped>
.container {
  background-color: #f2f2f2;
  height: 90vh;

  .avatar {
    box-sizing: border-box;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: radial-gradient(
      79.05% 79.05% at 21.62% 20.95%,
      rgb(52, 199, 89) 34.38%,
      rgb(122, 245, 153) 100%
    );
  }

  .cell-group {
    margin-top: 1rem;
  }
}
</style>
