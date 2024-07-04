<script setup>
import Header from "@/layouts/Header.vue";
import Footer from "@/layouts/Footer.vue";
import CartSwiper from "@/views/CartPage/components/CartSwiper.vue";
import CartTable from "@/views/CartPage/components/CartTable.vue";
import CartItem from "@/views/CartPage/components/CartItme.vue";
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
        <CartSwiper />
      </div>
    </div>
  </div>
  <Footer />
</template>
<style scoped></style>
