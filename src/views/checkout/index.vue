<script setup>
import ProgressLine from "@/components/ProgressLine.vue";
import CheckHeader from "@/layouts/CheckHeader.vue";
import ProductItme from "@/components/ProductItem.vue";
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
        <form>
          <p>Contact information</p>
          <div class="mb-0">
            <label for="ContactMail" class="text-muted mb-0">Email</label>
            <input type="email" class="form-control" id="ContactMail" aria-describedby="emailHelp" placeholder="example@gmail.com" />
          </div>
          <p class="mt-4">Shipping address</p>
          <div class="mb-2">
            <label for="ContactName" class="text-muted mb-0">Name</label>
            <input type="text" class="form-control" id="ContactName" placeholder="Carmen A. Rose" />
          </div>
          <div class="mb-2">
            <label for="ContactPhone" class="text-muted mb-0">Phone</label>
            <input type="text" class="form-control" id="ContactPhone" placeholder="Password" />
          </div>
          <div class="mb-2">
            <label for="ContactMessage" class="text-muted mb-0">Message</label>
            <textarea class="form-control" rows="3" id="ContactMessage" placeholder="message ... "></textarea>
          </div>
        </form>
        <div class="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100">
          <router-link to="/products" class="text-dark mt-md-0 mt-3">
            <FontAwesomeIcon class="me-2" :icon="['fas', 'chevron-left']" />
            Lorem ipsum
          </router-link>
          <router-link to="/checkoutinfo" class="btn btn-dark py-3 px-7">Lorem ipsum</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
