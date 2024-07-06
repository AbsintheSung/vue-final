<script setup>
import Header from "@/layouts/Header.vue";
import HomeHeader from "@/views/home/components/HomeHeader.vue";
import HomeInfoCard from "@/views/home/components/HomeInfoCard.vue";
import HomeCarousel from "@/views/home/components/HomeCarousel.vue";
import HomeLine from "@/views/home/components/HomeLine.vue";
import Footer from "@/layouts/Footer.vue";
</script>
<template>
  <HomeHeader>
    <Header />
  </HomeHeader>

  <HomeInfoCard />

  <HomeCarousel />

  <HomeLine />
  <Footer />
</template>
<style scoped></style>
