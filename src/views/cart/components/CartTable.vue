<script setup>
import { computed } from "vue";

const props = defineProps({
  allCartProducts: {
    type: Array,
    default: () => {
      return [];
    },
  },
});
const emits = defineEmits({
  addCartQuantity: (data) => {
    return true;
  },
  reduceCartQuantity: (data) => {
    return true;
  },
  delCart: (data) => {
    return true;
  },
});
const addCartQuantity = (productId, productQty) => {
  const product = {
    data: {
      product_id: productId,
      qty: productQty + 1,
    },
  };
  emits("addCartQuantity", product);
};
const reduceCartQuantity = (productId, productQty) => {
  const product = {
    data: {
      product_id: productId,
      qty: productQty - 1,
    },
  };
  emits("reduceCartQuantity", product);
};
const delCart = (productId) => {
  emits("delCart", productId);
};
const cartsData = computed(() => [...props.allCartProducts]);
</script>
<template>
  <table v-if="cartsData.length > 0" class="table">
    <thead>
      <tr>
        <th scope="col" class="border-0 ps-0">商品項目</th>
        <th scope="col" class="border-0">商品數量</th>
        <th scope="col" class="border-0">商品價格</th>
        <th scope="col" class="border-0">刪除</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-bottom border-top" v-for="cartItem in cartsData" :key="cartItem.product.id">
        <th scope="row" class="border-0 px-0 font-weight-normal py-4">
          <img :src="cartItem.product.imageUrl" alt="" style="width: 72px; height: 72px; object-fit: cover" />
          <p class="mb-0 fw-bold ms-3 d-inline-block">{{ cartItem.product.title }}</p>
        </th>
        <td class="border-0 align-middle" style="max-width: 160px">
          <div class="input-group pe-5">
            <div class="input-group-prepend">
              <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1">
                <FontAwesomeIcon :icon="['fas', 'minus']" @click="reduceCartQuantity(cartItem.id, cartItem.qty)" />
              </button>
            </div>
            <!-- <input type="text" class="form-control border-0 text-center my-auto shadow-none" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value="1" /> -->
            <p class="form-control border-0 text-center my-auto shadow-none">{{ cartItem.qty }}</p>
            <div class="input-group-append">
              <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2">
                <FontAwesomeIcon :icon="['fas', 'plus']" @click="addCartQuantity(cartItem.id, cartItem.qty)" />
              </button>
            </div>
          </div>
        </td>
        <td class="border-0 align-middle">
          <p class="mb-0 ms-auto">NT${{ cartItem.total }}</p>
        </td>
        <td class="border-0 align-middle"><FontAwesomeIcon :icon="['fas', 'times']" @click="delCart(cartItem.id)" /></td>
      </tr>
      <!-- <tr class="border-bottom">
        <th scope="row" class="border-0 px-0 font-weight-normal py-4">
          <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" alt="" style="width: 72px; height: 72px; object-fit: cover" />
          <p class="mb-0 fw-bold ms-3 d-inline-block">Lorem ipsum</p>
        </th>
        <td class="border-0 align-middle" style="max-width: 160px">
          <div class="input-group pe-5">
            <div class="input-group-prepend">
              <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1">
                <i class="fas fa-minus"></i>
              </button>
            </div>
            <input type="text" class="form-control border-0 text-center my-auto shadow-none" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value="1" />
            <div class="input-group-append">
              <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2">
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </td>
        <td class="border-0 align-middle"><p class="mb-0 ms-auto">NT$12,000</p></td>
        <td class="border-0 align-middle"><i class="fas fa-times"></i></td>
      </tr> -->
    </tbody>
  </table>
  <!-- <div class="input-group w-50 mb-3">
    <input type="text" class="form-control rounded-0 border-bottom border-top-0 border-start-0 border-end-0 shadow-none" placeholder="Coupon Code" aria-label="Recipient's username" aria-describedby="button-addon2" />
    <div class="input-group-append">
      <button class="btn btn-outline-dark border-bottom border-top-0 border-start-0 border-end-0 rounded-0" type="button" id="button-addon2"><FontAwesomeIcon :icon="['fas', 'paper-plane']" /></button>
    </div>
  </div> -->
</template>
<style scoped></style>
