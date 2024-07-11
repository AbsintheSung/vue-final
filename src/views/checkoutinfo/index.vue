<script setup>
import ProgressLine from "@/components/ProgressLine.vue";
import CheckHeader from "@/layouts/CheckHeader.vue";
// import ProductItem from "@/components/ProductItem.vue";
import ProductInfo from "@/views/checkoutinfo/components/ProductInfo.vue";
import PriceInfo from "@/views/checkoutinfo/components/PriceInfo.vue";
import axios from "axios";
import { computed, onMounted, ref } from "vue";
const baseURL = import.meta.env.VITE_APP_API_URL;
const apiName = import.meta.env.VITE_APP_API_NAME;
// const allCartInfo = ref([]);
const allOrderInfo = ref([]);
const totalPrice = ref(0);
const createId = ref("");
// const fetchCartsData = async () => {
//   const response = await axios(`${baseURL}/v2/api/${apiName}/cart`);
//   allCartInfo.value = response.data.data;
// };
const fetchOrderData = async () => {
  const response = await axios(`${baseURL}/v2/api/${apiName}/orders`);
  allOrderInfo.value = response.data.orders;
  console.log(response.data.orders);
  response.data.orders.forEach((item) => {
    totalPrice.value = totalPrice.value + item.total;
  });
  // console.log(response.data.orders);
};
const oneOrder = computed(() => {
  return allOrderInfo.value.filter((item) => {
    return item.create_at === createId.value;
  });
});
const getCreateId = async (id) => {
  if (id.value === "") {
    createId.value = "";
    return;
  }
  createId.value = id.value;
  try {
    await axios(`${baseURL}/v2/api/${apiName}/order/${createId.value}`);
  } catch (error) {
    console.log(error);
  }
};
const handleOrder = async () => {
  if (createId.value !== "") {
    const response = await axios.post(`${baseURL}/v2/api/${apiName}/pay/${createId.value}`);
    console.log(response);
    // console.log("發送結帳api");
  } else {
    console.log("請選擇要結帳的訂單");
  }
  // console.log(createId.value);
};
onMounted(() => {
  // fetchCartsData();
  fetchOrderData();
});
</script>
<template>
  <div class="container">
    <CheckHeader>
      <ProgressLine />
    </CheckHeader>

    <div class="row justify-content-center">
      <div class="col-md-10">
        <h3 class="fw-bold mb-4 pt-3">Lorem ipsum</h3>
      </div>
    </div>
    <div class="row flex-row-reverse justify-content-center pb-5">
      <div class="col-md-4">
        <PriceInfo :totalPrice="oneOrder" />
      </div>
      <div class="col-md-6">
        <ProductInfo :allOrderInfo="allOrderInfo" @sendCreateAtId="getCreateId" />

        <div class="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100">
          <!-- <router-link to="/checkout" class="text-dark mt-md-0 mt-3">
            <i class="fas fa-chevron-left me-2"></i>
            Lorem ipsum
          </router-link> -->
          <!-- <router-link to="/success" class="btn btn-dark py-3 px-7">Lorem ipsum</router-link> -->
          <button class="btn btn-dark py-3 px-7 ms-auto" @click="handleOrder">確認結帳</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
