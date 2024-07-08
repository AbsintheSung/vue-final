<script setup>
// import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
const props = defineProps({
  allProductData: {
    type: Array,
    default: () => {
      return [];
    },
  },
});
// const num = ref(10);
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
console.log(props.allProductData);
</script>
<template>
  <h3 class="fw-bold">Lorem ipsum dolor sit amet</h3>
  <template v-if="allProductData.length === 0"></template>
  <swiper v-else class="" :loop="true" v-bind="swiperOptions">
    <swiper-slide v-for="item in allProductData" :key="item">
      <div class="card border-0 mb-4 position-relative position-relative">
        <img :src="item.imageUrl" class="card-img-top rounded-0" style="height: 250px" alt="..." />
        <a href="#" class="text-dark"></a>
        <div class="card-body p-0">
          <h4 class="mb-0 mt-3">
            <router-link :to="`/`">{{ item.title }}</router-link>
          </h4>
          <p class="card-text mb-0">
            NT${{ item.price }}
            <span class="text-muted">
              <del>NT${{ item.origin_price }}</del>
            </span>
          </p>
          <p class="text-muted mt-3"></p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<style scoped></style>
