<script setup>
import homeItem1 from "@/assets/images/home_item1.png";
import homeItem2 from "@/assets/images/home_item2.png";
import homeItem3 from "@/assets/images/home_item3.png";
// import homeItem4 from "@/assets/images/home_item4.png";
const infoData = [
  { id: 1, title: "優良經銷商", content: "追求信用第一.服務第一.包裝第一", imgUrl: homeItem1 },
  { id: 2, title: "優良經銷商", content: "追求信用第一.服務第一.包裝第一", imgUrl: homeItem2 },
  { id: 3, title: "優良經銷商", content: "追求信用第一.服務第一.包裝第一", imgUrl: homeItem3 },
];
</script>
<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-4 mt-md-4" v-for="infoItem in infoData" :key="infoItem.id">
        <div class="card border-0 mb-4">
          <img :src="infoItem.imgUrl" class="card-img-top rounded-0" alt="..." />
          <div class="card-body text-center">
            <h4>{{ infoItem.title }}</h4>
            <div class="d-flex justify-content-between">
              <p class="card-text text-muted mb-0 mx-auto">{{ infoItem.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
