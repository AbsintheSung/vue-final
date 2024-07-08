<script setup>
/* eslint-disable */
const props = defineProps({
  onepProductImg: {
    type: Array,
    default: () => {
      return [];
    },
  },
});
/* eslint-enable */
</script>
<template>
  <div class="col-md-7">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item" v-for="(item, index) in onepProductImg" :key="item" :class="{ active: index === 0 }">
          <img :src="item" class="d-block w-100" :alt="`圖片-${index}`" style="height: 500px; object-fit: fill" />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden"></span>
      </button>
    </div>
  </div>
</template>
<style scoped></style>
