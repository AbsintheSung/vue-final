<script setup>
import { ref } from "vue";
/* eslint-disable */
const props = defineProps({
  allOrderInfo: {
    type: Array,
    default: () => {
      return [];
    },
  },
});
setTimeout(() => {
  console.log(props.allOrderInfo);
}, 1000);
/* eslint-enable */
const emits = defineEmits({
  sendCreateAtId: () => {
    return true;
  },
});
const orderOneId = ref("");
const test = (orderId, paid) => {
  if (orderId === orderOneId.value) {
    orderOneId.value = "";
  } else {
    orderOneId.value = orderId;
  }
  const data = {
    orderOneId: orderOneId.value,
    isPaid: paid,
  };
  emits("sendCreateAtId", data);
};
</script>
<template>
  <div class="accordion" id="accordionExample">
    <div class="card rounded-0" v-for="(item, index) in allOrderInfo" :key="item.id" @click="test(item.id, item.is_paid)">
      <div class="card-header bg-white border-0 py-3 collapsed" :id="`heading${index}`" data-bs-toggle="collapse" :data-bs-target="`#collapse${index}`" aria-expanded="true" :aria-controls="`#collapse${index}`">
        <p class="mb-0 position-relative custom-checkout-label">訂單編號:{{ item.id }}</p>
      </div>
      <div :id="`collapse${index}`" class="collapse" :aria-labelledby="`heading${index}`" data-bs-parent="#accordionExample">
        <div class="card-body bg-light ps-5 py-4">
          <div class="mb-2">
            <template v-for="info in item.products" :key="info.id">
              <p>購買商品 : {{ info.product.title }}</p>
              <p>付款狀態:{{ item.is_paid ? "已付款" : "未付款" }}</p>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
