<script setup>
import { computed } from "vue";

const props = defineProps({
  priceInfo: {
    type: Object,
    default: () => {
      return {};
    },
  },
  allCartProducts: {
    type: Array,
    default: () => {
      return [];
    },
  },
});

const priceTotal = computed(() => {
  const { final_total: finalTotal, total } = props.priceInfo;
  return { finalTotal, total };
});
</script>
<template>
  <div class="border p-4 mb-4">
    <h4 class="fw-bold mb-4">Order Detail</h4>
    <table class="table text-muted border-bottom">
      <tbody>
        <tr>
          <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">Subtotal</th>
          <td class="text-end border-0 px-0 pt-4">NT${{ priceTotal.total }}</td>
        </tr>
        <tr>
          <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">Payment</th>
          <td class="text-end border-0 px-0 pt-0 pb-4">ApplePay</td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-between mt-4">
      <p class="mb-0 h4 fw-bold">Total</p>
      <p class="mb-0 h4 fw-bold">NT${{ priceTotal.finalTotal }}</p>
    </div>
    <a href="./checkout.html" class="btn btn-dark w-100 mt-4">Lorem ipsum</a>
  </div>
</template>
<style scoped></style>
