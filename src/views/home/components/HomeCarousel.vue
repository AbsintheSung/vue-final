<script setup>
import { ref } from "vue";

const carouselItems = ref([
  {
    title: "Lorem ipsum 1",
    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    author: "Lorem ipsum dolor sit amet 1",
  },
  {
    title: "Lorem ipsum 2",
    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    author: "Lorem ipsum dolor sit amet 2",
  },
  {
    title: "Lorem ipsum 3",
    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    author: "Lorem ipsum dolor sit amet 3",
  },
]);
</script>
<template>
  <div class="bg-light mt-7">
    <div class="container">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div v-for="(item, index) in carouselItems" :key="index" class="carousel-item" :class="{ active: index === 0 }">
            <div class="row justify-content-center py-7">
              <div class="col-md-6 text-center">
                <h3>{{ item.title }}</h3>
                <p class="my-5">{{ item.content }}</p>
                <p>
                  <small>—{{ item.author }}—</small>
                </p>
              </div>
            </div>
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
  </div>
</template>
<style scoped></style>
