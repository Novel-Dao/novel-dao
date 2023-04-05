<template>
  <van-nav-bar
    title="提交订单"
    fixed
    safe-area-inset-top
    placeholder
    left-arrow
    @click-left="onClickLeft"
  />
  <van-contact-card
    type="edit"
    :tel="tel"
    :name="name"
    @click="chooseAddress"
  />
  <van-action-sheet v-model:show="show" title="选择收货地址">
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @select="selectAddress"
    />
  </van-action-sheet>

  <van-action-sheet v-model:show="showAdd" title="添加收货地址">
    <van-address-edit
      :address-info="addressInfo"
      :show-area="false"
      show-set-default
    />
  </van-action-sheet>

  <van-card
    num="2"
    price="2.00"
    desc="描述信息"
    title="商品标题"
    thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
  />
  <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
</template>

<script lang="ts" setup>
import { AddressEditInfo, AddressListAddress } from "vant";
import { ref } from "vue";
import { useRouter } from "vue-router";

const tel = ref("13000000000");
const name = ref("张三");
const chosenAddressId = ref("1");
const list = [
  {
    id: "1",
    name: "张三",
    tel: "13000000000",
    address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
    isDefault: true,
  },
  {
    id: "2",
    name: "李四",
    tel: "1310000000",
    address: "浙江省杭州市拱墅区莫干山路 50 号",
  },
];
const show = ref(false);
const showAdd = ref(false);
const addressInfo = ref<AddressEditInfo>({
  tel: "",
  name: "",
  city: "",
  county: "",
  country: "",
  province: "",
  areaCode: "",
  isDefault: false,
  addressDetail: "",
});

const onClickLeft = () => history.back();
/**
 * 添加收货地址方法
 */
const onAdd = () => {
  //清空添加收货地址表单
  addressInfo.value = <AddressEditInfo>{};
  showAdd.value = true;
};
/**
 * 修改收货地址
 * @param item
 */
const onEdit = (item: AddressListAddress) => {
  console.log(item);
  addressInfo.value.name = item.name;
  addressInfo.value.tel = item.tel.toString();
  addressInfo.value.addressDetail = item.address;
  addressInfo.value.isDefault = item.isDefault;
  showAdd.value = true;
};
const selectAddress = (item: AddressListAddress) => {
  tel.value = item.tel.toString();
  name.value = item.name;
  show.value = false;
};
const chooseAddress = () => {
  show.value = true;
};
const router = useRouter();

const onSubmit = () => {
  // showToast("提交订单");
  router.replace({ path: "/order/state" });
};
</script>

<style scoped></style>
