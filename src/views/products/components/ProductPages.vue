<script setup>
import { inject } from "vue";
const paginationInfo = inject("paginationInfo", {});
const nextPages = inject("nextPages");
const prevPages = inject("prevPages");
const pickPages = inject("pickPages");
</script>
<template>
  <nav class="d-flex justify-content-center">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="prevPages(paginationInfo)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="pageItem in paginationInfo.total_pages" :key="pageItem" :class="{ active: pageItem === paginationInfo.current_page }">
        <a class="page-link" href="#" @click.prevent="pickPages(paginationInfo, pageItem)">{{ pageItem }}</a>
      </li>
      <!-- <li class="page-item active"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li> -->
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="nextPages(paginationInfo)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<style scoped></style>
