<script setup>
import ProductPages from "@/views/ProductPage/components/ProductPages.vue";

// console.log(import.meta.env.VITE_APP_API_URL);
</script>
<template>
  <div class="col-md-8">
    <div class="row">
      <div class="col-md-6" v-for="item in 6" :key="item">
        <div class="card border-0 mb-4 position-relative position-relative">
          <img src="https://images.unsplash.com/photo-1591843336741-9f1238f66758?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80" class="card-img-top rounded-0" alt="..." />
          <a href="#" class="text-dark">
            <i class="far fa-heart position-absolute" style="right: 16px; top: 16px"></i>
          </a>
          <div class="card-body p-0">
            <h4 class="mb-0 mt-3"><a href="./detail.html">Lorem ipsum</a></h4>
            <p class="card-text mb-0">
              NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
            </p>
            <p class="text-muted mt-3"></p>
          </div>
        </div>
      </div>
    </div>
    <ProductPages />
  </div>
</template>
<style scoped></style>
