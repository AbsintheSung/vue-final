<script setup>
// 此頁跑動態路由
import Header from "@/layouts/Header.vue";
import Footer from "@/layouts/Footer.vue";
// import DetailSwiperard from "@/views/DetailPage/components/DetailSwiperCard.vue";
import ProductSwiper from "@/components/ProductSwiper.vue";
import DetailProductItem from "@/views/detail/components/DetailProductItem.vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
const route = useRoute();
const productId = route.params.productId;
const baseURL = import.meta.env.VITE_APP_API_URL;
const apiName = import.meta.env.VITE_APP_API_NAME;
const oneProductData = ref({});
const allProductData = ref([]);
const fetchOneProductData = async () => {
  try {
    const response = await axios(`${baseURL}/v2/api/${apiName}/product/${productId}`);
    oneProductData.value = response.data.product;
  } catch (error) {
    console.log(error);
  }
};
const fetchAllProductData = async () => {
  try {
    const response = await axios(`${baseURL}/v2/api/${apiName}/products/all`);
    allProductData.value = response.data.products;
  } catch (error) {
    console.log(error);
  }
};
onMounted(() => {
  fetchOneProductData();
  fetchAllProductData();
});
</script>
<template>
  <div class="container">
    <Header />
    <DetailProductItem :getOneProduct="oneProductData" />
    <ProductSwiper :allProductData="allProductData" />
  </div>
  <Footer />
</template>
<style scoped></style>
