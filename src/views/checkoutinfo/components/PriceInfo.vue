<script setup>
import { computed } from "vue";

const props = defineProps({
  totalPrice: {
    type: Number,
  },
});
const totalPrice = computed(() => props.totalPrice);
</script>
<template>
  <div class="border p-4 mb-4">
    <table class="table mt-4 border-top border-bottom text-muted">
      <tbody>
        <tr>
          <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">Subtotal</th>
          <td class="text-end border-0 px-0 pt-4">NT${{ totalPrice }}</td>
        </tr>
        <tr>
          <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">Payment</th>
          <td class="text-end border-0 px-0 pt-0 pb-4">ApplePay</td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-between mt-4">
      <p class="mb-0 h4 fw-bold">Total</p>
      <p class="mb-0 h4 fw-bold">NT${{ totalPrice }}</p>
    </div>
  </div>
</template>
<style scoped></style>
