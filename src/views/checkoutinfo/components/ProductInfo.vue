<script setup>
const props = defineProps({
  allOrderInfo: {
    type: Array,
    default: () => {
      return [];
    },
  },
});
setTimeout(() => {
  console.log(props.allOrderInfo);
}, 1000);
</script>
<template>
  <div class="accordion" id="accordionExample">
    <div class="card rounded-0" v-for="(item, index) in allOrderInfo" :key="item.id">
      <div class="card-header bg-white border-0 py-3 collapsed" :id="`heading${index}`" data-bs-toggle="collapse" :data-bs-target="`#collapse${index}`" aria-expanded="true" :aria-controls="`#collapse${index}`">
        <p class="mb-0 position-relative custom-checkout-label">訂單編號:{{ item.create_at }}</p>
      </div>
      <div :id="`collapse${index}`" class="collapse" :aria-labelledby="`heading${index}`" data-bs-parent="#accordionExample">
        <div class="card-body bg-light ps-5 py-4">
          <div class="mb-2">
            <template v-for="info in item.products" :key="info.id">
              <p>購買商品 : {{ info.product.title }}</p>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
