<script setup>
import ProgressLine from "@/components/ProgressLine.vue";
import CheckHeader from "@/layouts/CheckHeader.vue";
import ProductItem from "@/components/ProductItem.vue";
import ProductInfo from "@/views/checkoutinfo/components/ProductInfo.vue";
</script>
<template>
  <div class="container">
    <CheckHeader>
      <ProgressLine />
    </CheckHeader>

    <div class="row justify-content-center">
      <div class="col-md-10">
        <h3 class="fw-bold mb-4 pt-3">Lorem ipsum</h3>
      </div>
    </div>
    <div class="row flex-row-reverse justify-content-center pb-5">
      <div class="col-md-4">
        <ProductItem />
      </div>
      <div class="col-md-6">
        <ProductInfo />

        <div class="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100">
          <router-link to="/checkout" class="text-dark mt-md-0 mt-3">
            <i class="fas fa-chevron-left me-2"></i>
            Lorem ipsum
          </router-link>
          <router-link to="/success" class="btn btn-dark py-3 px-7">Lorem ipsum</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
