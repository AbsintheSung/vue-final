<script setup>
import ProgressLine from "@/components/ProgressLine.vue";
import CheckHeader from "@/layouts/CheckHeader.vue";
import ProductItme from "@/components/ProductItem.vue";
import CheckoutForm from "@/views/checkout/components/CheckoutForm.vue";
import axios from "axios";
import { onMounted, ref } from "vue";
const baseURL = import.meta.env.VITE_APP_API_URL;
const apiName = import.meta.env.VITE_APP_API_NAME;
const allCartInfo = ref([]);
const fetchCartsData = async () => {
  const response = await axios(`${baseURL}/v2/api/${apiName}/cart`);
  allCartInfo.value = response.data.data;
};
onMounted(() => {
  fetchCartsData();
});
</script>
<template>
  <div class="container">
    <CheckHeader>
      <ProgressLine />
    </CheckHeader>

    <div class="row justify-content-center">
      <div class="col-md-10">
        <h3 class="fw-bold mb-4 pt-3">Checkout</h3>
      </div>
    </div>
    <div class="row flex-row-reverse justify-content-center pb-5">
      <div class="col-md-4">
        <ProductItme :allCartInfo="allCartInfo" />
      </div>
      <div class="col-md-6">
        <CheckoutForm />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
