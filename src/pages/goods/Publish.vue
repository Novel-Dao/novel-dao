<template>
  <van-action-sheet v-model:show="show" @close="close" title="发布商品">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="formData.title"
          name="title"
          label="商品名称"
          placeholder="请输入商品名称"
          :rules="[{ required: true, message: '请输入商品名称' }]"
        />
        <van-field
          v-model="formData.price"
          label="价格"
          type="number"
          placeholder="请输入价格"
          clickable
        />
        <van-field
          v-model="formData.describe"
          rows="5"
          autosize
          label="商品描述"
          type="textarea"
          placeholder="请输入商品描述"
          show-word-limit
          maxlength="300"
        />
        <van-field name="uploader" label="文件上传">
          <template #input>
            <van-uploader
              v-model="file"
              :after-read="afterRead"
              :max-count="1"
              :max-size="500 * 1024"
              @oversize="onOversize"
            />
          </template>
        </van-field>
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </van-action-sheet>
</template>
<script lang="ts" setup>
import { ref, watch } from "vue";
import { UploaderFileListItem } from "vant/lib/uploader/types";
import { NFTStorage, File, Blob } from "nft.storage";
import { showToast } from "vant";

const show = ref(false);
const price = ref<number>();
const file = ref<UploaderFileListItem[]>([]);
const props = defineProps<{ show: boolean }>();
const emits = defineEmits(["changeShow"]);
const close = () => {
  emits("changeShow", false);
};
watch(props, (value, oldValue, onCleanup) => {
  show.value = props.show;
});
const client = new NFTStorage({
  token: import.meta.env.VITE_NFT_STORAGE_TOKEN,
});
const formData = ref({
  url: "",
  title: "",
  describe: "",
  price: "",
});
const onOversize = (file: File) => {
  console.log(file);
  showToast("文件大小不能超过 500kb");
};
const afterRead = async (f: any) => {
  console.log(f);
  f.status = "uploading";
  f.message = "上传中...";
  try {
    const cid = await client.storeBlob(
      new Blob([<BlobPart>f.file], { type: f.file?.type })
    );
    console.log(cid);
    f.status = "done";
    f.message = "";
    formData.value.url = `https://${cid}.ipfs.nftstorage.link`;
  } catch (e) {
    console.log(e);
    f.status = "failed";
    f.message = "上传失败";
  }
};

const onSubmit = () => {
  console.log(formData.value);
};
</script>

<style lang="scss" scoped></style>
