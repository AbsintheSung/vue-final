<script setup>
import Header from "@/layouts/Header.vue";
import Footer from "@/layouts/Footer.vue";
import ProductSwiper from "@/components/ProductSwiper.vue";
import CartTable from "@/views/cart/components/CartTable.vue";
import CartItem from "@/views/cart/components/CartItme.vue";
import CaartCoupon from "@/views/cart/components/CaartCoupon.vue";
import axios from "axios";
import { ref, onMounted } from "vue";
const baseURL = import.meta.env.VITE_APP_API_URL;
const apiName = import.meta.env.VITE_APP_API_NAME;
const allProductData = ref([]);
const allCartProducts = ref([]);
const fetchCartsData = async () => {
  const response = await axios(`${baseURL}/v2/api/${apiName}/cart`);
  allCartProducts.value = response.data.data.carts;
};
const fetchAllProductData = async () => {
  try {
    const response = await axios(`${baseURL}/v2/api/${apiName}/products/all`);
    allProductData.value = response.data.products;
  } catch (error) {
    console.log(error);
  }
};
const handleAddCart = async (cartData) => {
  try {
    const response = await axios.put(`${baseURL}/v2/api/${apiName}/cart/${cartData.data.product_id}`, cartData);
    if (response.status === 200) {
      await fetchCartsData();
    }
  } catch (error) {
    console.log(error);
  }
};
const handleReduceCart = async (cartData) => {
  if (cartData.data.qty <= 0) {
    return;
  }
  try {
    const response = await axios.put(`${baseURL}/v2/api/${apiName}/cart/${cartData.data.product_id}`, cartData);
    if (response.status === 200) {
      await fetchCartsData();
    }
  } catch (error) {
    console.log(error);
  }
};
onMounted(() => {
  fetchAllProductData();
  fetchCartsData();
});
</script>
<template>
  <div class="container">
    <Header />
    <div class="mt-3">
      <h3 class="mt-3 mb-4">Lorem ipsum</h3>
      <div class="row">
        <div class="col-md-8">
          <CartTable :allCartProducts="allCartProducts" @addCartQuantity="handleAddCart" @reduceCartQuantity="handleReduceCart" />
          <CaartCoupon />
        </div>
        <div class="col-md-4">
          <CartItem />
        </div>
      </div>
      <div class="my-5">
        <ProductSwiper :allProductData="allProductData" />
      </div>
    </div>
  </div>
  <Footer />
</template>
<style scoped></style>
