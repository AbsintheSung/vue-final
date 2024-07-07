<script setup>
import { ref, onMounted } from "vue";
import Header from "@/layouts/Header.vue";
import HomeHeader from "@/views/home/components/HomeHeader.vue";
import HomeInfoCard from "@/views/home/components/HomeInfoCard.vue";
import HomeCarousel from "@/views/home/components/HomeCarousel.vue";
// import HomeLecturer from "@/views/home/components/HomeLecturer .vue";
import Footer from "@/layouts/Footer.vue";
import axios from "axios";

const baseURL = import.meta.env.VITE_APP_API_URL;
const apiName = import.meta.env.VITE_APP_API_NAME;

const courseData = ref([]);
const fetchCourseData = async () => {
  try {
    const response = await axios(`${baseURL}/v2/api/${apiName}/products/all`);
    courseData.value = response.data.products;
  } catch (error) {
    console.log(error);
  }
};
onMounted(() => {
  fetchCourseData();
});
</script>
<template>
  <HomeHeader>
    <Header />
  </HomeHeader>

  <HomeInfoCard />

  <HomeCarousel :courseData="courseData" />

  <!-- <HomeLecturer /> -->
  <Footer />
</template>
<style scoped></style>
