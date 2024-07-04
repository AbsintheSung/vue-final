<script setup>
// 此頁跑動態路由
import Header from "@/layouts/Header.vue";
import Footer from "@/layouts/Footer.vue";
// import DetailSwiperard from "@/views/DetailPage/components/DetailSwiperCard.vue";
import ProductSwiper from "@/components/ProductSwiper.vue";
import DetailProductItem from "@/views/DetailPage/components/DetailProductItem.vue";
</script>
<template>
  <div class="container">
    <Header />
    <DetailProductItem />
    <ProductSwiper />
  </div>
  <Footer />
</template>
<style scoped></style>
