<script setup>
import Header from "@/layouts/Header.vue";
import Footer from "@/layouts/Footer.vue";
import ProductCard from "@/views/products/components/ProductCard.vue";
import ProductType from "@/views/products/components/ProductType.vue";
import { ref, onMounted, provide, readonly } from "vue";
import axios from "axios";
const baseURL = import.meta.env.VITE_APP_API_URL;
const apiName = import.meta.env.VITE_APP_API_NAME;
const productData = ref([]);
const totalType = ref([]);
const paginationInfo = ref({});
provide("paginationInfo", readonly(paginationInfo));
const nextPages = (pageInfo) => {
  const { category: cateGory, current_page: currentPage, has_next: hasNext } = pageInfo;
  if (!hasNext) {
    return;
  }
  const temp = cateGory === "" ? "全部商品" : cateGory;
  console.log("發送", temp, currentPage);
};
const prevPages = (pageInfo) => {
  const { category: cateGory, current_page: currentPage, has_pre: hasPre } = pageInfo;
  if (!hasPre) {
    return;
  }
  const temp = cateGory === "" ? "全部商品" : cateGory;
  console.log("發送", temp, currentPage);
};
const pickPages = (pageInfo, handlePages) => {
  const { category: cateGory, current_page: currentPage } = pageInfo;
  if (handlePages === currentPage) {
    return;
  }
  console.log("發送", cateGory, currentPage, handlePages);
};
provide("nextPages", nextPages);
provide("prevPages", prevPages);
provide("pickPages", pickPages);

const fetchProductData = async () => {
  try {
    const response = await axios(`${baseURL}/v2/api/${apiName}/products`);
    productData.value = response.data.products;
    paginationInfo.value = response.data.pagination;
    totalType.value = ["所有商品", ...new Set(productData.value.map((item) => item.category))];
  } catch (error) {
    console.log(error);
  }
};
const handleProductType = async (type) => {
  if (type === "所有商品") {
    try {
      const response = await axios(`${baseURL}/v2/api/${apiName}/products`);
      productData.value = response.data.products;
      paginationInfo.value = response.data.pagination;
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const response = await axios(`${baseURL}/v2/api/${apiName}/products`, {
        params: {
          category: type,
        },
      });
      productData.value = response.data.products;
      paginationInfo.value = response.data.pagination;
    } catch (error) {
      console.log(error);
    }
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
      <ProductType :totalType="totalType" @sendType="handleProductType" />
      <ProductCard :productData="productData" />
    </div>
  </div>

  <Footer />
</template>
<style scoped></style>
