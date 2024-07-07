<script setup>
import Header from "@/layouts/Header.vue";
import Footer from "@/layouts/Footer.vue";
import ProductCard from "@/views/products/components/ProductCard.vue";
import ProductType from "@/views/products/components/ProductType.vue";
import { ref, onMounted, computed } from "vue";
import axios from "axios";
const baseURL = import.meta.env.VITE_APP_API_URL;
const apiName = import.meta.env.VITE_APP_API_NAME;
const productData = ref([]);
const totalType = computed(() => {
  return [...new Set(productData.value.map((item) => item.category))];
});

const fetchProductData = async () => {
  try {
    const response = await axios(`${baseURL}/v2/api/${apiName}/products/all`);
    productData.value = response.data.products;
  } catch (error) {
    console.log(error);
  }
};
onMounted(() => {
  fetchProductData();
});
</script>
<template>
  <div class="container">
    <Header />
  </div>

  <div class="position-relative d-flex align-items-center justify-content-center" style="min-height: 400px">
    <div class="position-absolute" style="top: 0; bottom: 0; left: 0; right: 0; background-image: url(https://images.unsplash.com/photo-1480399129128-2066acb5009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80); background-position: center center; opacity: 0.1"></div>
    <h2 class="fw-bold">Lorem ipsum.</h2>
  </div>

  <div class="container mt-md-5 mt-3 mb-7">
    <div class="row">
      <ProductType :totalType="totalType" />
      <ProductCard />
    </div>
  </div>

  <Footer />
</template>
<style scoped></style>
