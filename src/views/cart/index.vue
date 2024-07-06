<script setup>
import Header from "@/layouts/Header.vue";
import Footer from "@/layouts/Footer.vue";
import ProductSwiper from "@/components/ProductSwiper.vue";
import CartTable from "@/views/cart/components/CartTable.vue";
import CartItem from "@/views/cart/components/CartItme.vue";
</script>
<template>
  <div class="container">
    <Header />
    <div class="mt-3">
      <h3 class="mt-3 mb-4">Lorem ipsum</h3>
      <div class="row">
        <div class="col-md-8">
          <CartTable />
        </div>
        <div class="col-md-4">
          <CartItem />
        </div>
      </div>
      <div class="my-5">
        <ProductSwiper />
      </div>
    </div>
  </div>
  <Footer />
</template>
<style scoped></style>
