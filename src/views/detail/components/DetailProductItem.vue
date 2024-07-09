<script setup>
// import { computed } from "vue";
import DetailCarousel from "@/views/detail/components/DetailCarousel.vue";
import { ref, inject } from "vue";
/* eslint-disable */
const props = defineProps({
  getOneProduct: {
    type: Object,
    default: () => {
      return {};
    },
  },
});
/* eslint-enable */
const pruductQuantity = ref(1);
const addQuantity = () => {
  pruductQuantity.value++;
  console.log(pruductQuantity.value);
};
const reduceQuantity = () => {
  if (pruductQuantity.value === 1) {
    pruductQuantity.value = 1;
  } else {
    pruductQuantity.value--;
  }
  console.log(pruductQuantity.value);
};
// 使用 @blur 失去焦點才執行
const userInput = (event) => {
  const inputValue = event.target.value;
  pruductQuantity.value = inputValue.replace(/\D/g, "");
  if (pruductQuantity.value === "" || pruductQuantity.value === "0" || /^0+\d+$/.test(pruductQuantity.value)) {
    pruductQuantity.value = 1;
  }
};
const addProductCart = inject("addProductCart");
</script>
<template>
  <div class="row align-items-center">
    <DetailCarousel :onepProductImg="getOneProduct.imagesUrl" />
    <div class="col-md-5">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-white px-0 mb-0 py-3">
          <li class="breadcrumb-item"><router-link class="text-muted" to="/">Home</router-link></li>
          <li class="breadcrumb-item"><router-link class="text-muted" to="/products">Product</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">Detail</li>
        </ol>
      </nav>
      <h2 class="fw-bold h1 mb-1">{{ getOneProduct.title }}</h2>
      <p class="mb-0 text-muted text-end">
        <del>NT${{ getOneProduct.origin_price }}</del>
      </p>
      <p class="h4 fw-bold text-end">NT${{ getOneProduct.price }}</p>
      <div class="row align-items-center">
        <div class="col-6">
          <div class="input-group my-3 bg-light rounded">
            <div class="input-group-prepend">
              <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1" @click="reduceQuantity">
                <FontAwesomeIcon :icon="['fas', 'minus']" />
              </button>
            </div>
            <input type="text" class="form-control border-0 text-center my-auto shadow-none bg-light" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" min="1" v-model="pruductQuantity" @blur="userInput" />
            <div class="input-group-append">
              <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2" @click="addQuantity">
                <FontAwesomeIcon :icon="['fas', 'plus']" />
              </button>
            </div>
          </div>
        </div>
        <div class="col-6">
          <a href="#" @click.prevent="addProductCart(pruductQuantity)" class="text-nowrap btn btn-dark w-100 py-2">Lorem ipsum</a>
        </div>
      </div>
    </div>
  </div>
  <div class="row my-5">
    <div class="col-md-4">
      <p>{{ getOneProduct.description }}</p>
    </div>
    <div class="col-md-3">
      <p class="text-muted">
        {{ getOneProduct.content }}
      </p>
    </div>
  </div>
</template>
<style scoped></style>
