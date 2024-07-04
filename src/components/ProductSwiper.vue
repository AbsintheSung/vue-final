<script setup>
// import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

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
const props = defineProps({
  productCategory: {
    type: Object,
    default: () => {
      return {
        products: [
          {
            category: "測試分類-3",
            content: "測試的說明-12",
            description: "測試的描述-12",
            id: "-O0wlS9bFqst0cDNe-Eg",
            imageUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1924&q=80",
            is_enabled: 1,
            origin_price: 1000,
            price: 500,
            title: "測試的產品-12",
            unit: "個",
            num: 1,
          },
        ],
      };
    },
  },
});
// console.log("123", props.productCategory.products);
</script>
<template>
  <h3 class="fw-bold">Lorem ipsum dolor sit amet</h3>
  <swiper class="" :loop="true" v-bind="swiperOptions">
    <swiper-slide v-for="item in props.productCategory.products" :key="item.id">
      <div class="card border-0 mb-4 position-relative position-relative">
        <img :src="item.imageUrl" class="card-img-top rounded-0" alt="圖片" />
        <a href="#" class="text-dark"></a>
        <div class="card-body p-0">
          <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
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
