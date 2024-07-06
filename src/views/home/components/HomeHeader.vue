<script setup>
import HomeBackgroundImg from "@/assets/images/home_bg2.png";
</script>
<template>
  <div class="position-relative">
    <div class="position-absolute" style="top: 0; bottom: 0; left: 0; right: 0; background-position: center center; opacity: 0.1" :style="{ backgroundImage: `url(${HomeBackgroundImg})` }"></div>
    <div class="container d-flex flex-column" style="min-height: 100vh">
      <slot></slot>
      <div class="row justify-content-center my-auto">
        <div class="col-md-4 text-center">
          <h2>專業技能線上平台</h2>
          <p class="text-muted mb-0">就是標榜帶你學到會</p>
          <button class="btn btn-dark rounded-0 mt-6">點我進入</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
