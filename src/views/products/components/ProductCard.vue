<script setup>
import ProductPages from "@/views/products/components/ProductPages.vue";
const props = defineProps({
  productData: {
    type: Array,
    default: () => {
      return [];
    },
  },
});
</script>
<template>
  <div class="col-md-8">
    <div class="row">
      <div class="col-md-6" v-for="item in props.productData" :key="item.id">
        <div class="card border-0 mb-4 position-relative position-relative">
          <img :src="item.imageUrl" class="card-img-top rounded-0" alt="..." style="height: 300px; object-fit: fill" />
          <a href="#" class="text-dark">
            <i class="far fa-heart position-absolute" style="right: 16px; top: 16px"></i>
          </a>
          <div class="card-body p-0">
            <h4 class="mb-0 mt-3">
              <router-link to="/detail">{{ item.title }}</router-link>
            </h4>
            <p class="card-text mb-0">
              NT${{ item.origin_price }}
              <span class="text-muted">
                <del>NT${{ item.price }}</del>
              </span>
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
