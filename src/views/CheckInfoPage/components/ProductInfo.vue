<script setup></script>
<template>
  <div class="accordion" id="accordionExample">
    <div class="card rounded-0" v-for="(item, index) in 3" :key="item">
      <div class="card-header bg-white border-0 py-3 collapsed" :id="`heading${index}`" data-bs-toggle="collapse" :data-bs-target="`#collapse${index}`" aria-expanded="true" :aria-controls="`#collapse${index}`">
        <p class="mb-0 position-relative custom-checkout-label">Lorem ipsum</p>
      </div>
      <div :id="`collapse${index}`" class="collapse" :aria-labelledby="`heading${index}`" data-bs-parent="#accordionExample">
        <div class="card-body bg-light ps-5 py-4">
          <div class="mb-2">
            <p>該商品詳細資訊</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
