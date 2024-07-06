<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

const num = ref(10);
const swiperOptions = {
  modules: [Mousewheel, Pagination],
  slidesPerView: 1, // 滾動時候 只切換一張
  mousewheel: true, // 設置滾輪滾動
  loop: true,
  spaceBetween: 15, // 滑動速度
  breakpoints: {
    // 當視窗寬度大於等於 1024px
    1024: {
      slidesPerView: 3,
    },
    // 當視窗寬度介於 768px 到 1023px 之間
    768: {
      slidesPerView: 2,
    },
    // 當視窗寬度小於 768px
    0: {
      slidesPerView: 1,
    },
  },
};
</script>
<template>
  <h3 class="fw-bold">Lorem ipsum dolor sit amet</h3>
  <swiper class="" :loop="true" v-bind="swiperOptions">
    <swiper-slide v-for="item in num" :key="item">
      <div class="card border-0 mb-4 position-relative position-relative">
        <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="..." />
        <a href="#" class="text-dark"> </a>
        <div class="card-body p-0">
          <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
          <p class="card-text mb-0">
            NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
          </p>
          <p class="text-muted mt-3"></p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<style scoped></style>
