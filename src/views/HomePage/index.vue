<script setup>
import Header from "@/layouts/Header.vue";
import HomeHeader from "@/views/HomePage/components/HomeHeader.vue";
import HomeProductCard from "@/views/HomePage/components/HomeProductCard.vue";
import HomeCarousel from "@/views/HomePage/components/HomeCarousel.vue";
import HomeLine from "@/views/HomePage/components/HomeLine.vue";
import Footer from "@/layouts/Footer.vue";
</script>
<template>
  <HomeHeader>
    <Header />
  </HomeHeader>

  <HomeProductCard />

  <HomeCarousel />

  <HomeLine />
  <Footer />
</template>
<style scoped></style>
