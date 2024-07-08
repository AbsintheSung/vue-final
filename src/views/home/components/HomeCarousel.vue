<script setup>
// import { ref } from "vue";
const props = defineProps({
  courseData: {
    type: Array,
    default: () => {
      return [];
    },
  },
});
</script>
<template>
  <div class="bg-light mt-7">
    <div class="container">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div v-for="(courseItem, index) in props.courseData" :key="courseItem.id" class="carousel-item" :class="{ active: index === 0 }">
            <div class="row justify-content-center py-7">
              <div class="col-md-6 text-center">
                <h3>
                  <router-link :to="`/detail/${courseItem.id}`">{{ courseItem.title }}</router-link>
                </h3>
                <p class="my-5">{{ courseItem.description }}</p>
                <p>
                  <small>—{{ courseItem.content }}—</small>
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
