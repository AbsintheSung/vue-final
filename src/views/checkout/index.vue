<script setup>
import ProgressLine from "@/components/ProgressLine.vue";
import CheckHeader from "@/layouts/CheckHeader.vue";
import ProductItme from "@/components/ProductItem.vue";
import CheckoutForm from "@/views/checkout/components/CheckoutForm.vue";
</script>
<template>
  <div class="container">
    <CheckHeader>
      <ProgressLine />
    </CheckHeader>

    <div class="row justify-content-center">
      <div class="col-md-10">
        <h3 class="fw-bold mb-4 pt-3">Checkout</h3>
      </div>
    </div>
    <div class="row flex-row-reverse justify-content-center pb-5">
      <div class="col-md-4">
        <ProductItme />
      </div>
      <div class="col-md-6">
        <CheckoutForm />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
