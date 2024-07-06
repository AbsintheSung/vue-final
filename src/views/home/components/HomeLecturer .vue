<script setup>
import lecturerItem1 from "@/assets/images/le_item4.png";
import lecturerItem2 from "@/assets/images/le_item1.png";
import lecturerItem3 from "@/assets/images/le_item7.png";
import lecturerItem4 from "@/assets/images/le_item6.png";
const lecturerData = [
  {
    id: 1,
    name: "C#大師",
    content: "前大型軟體公司架構師，擁有豐富的開發經驗和教學背景。我的理念在幫助學生從基礎到高級水平掌握C#，並能實際應用於軟體開發和應用程式設計",
    imgUrl: lecturerItem1,
  },
  {
    id: 2,
    name: "前端卷神",
    content: "10年前端開發經驗，致力於教授現代網頁開發技術。幫助學生建立堅實的前端基礎，探索最新的JavaScript框架和工具，並學習如何構建互動性強、優雅美觀的用戶界面。",
    imgUrl: lecturerItem2,
  },
  {
    id: 3,
    name: "正妹股神",
    content: "5年操盤經驗，曾在Fidelity Investments擔任基金經理，以其“找到普通人也能理解的投資機會”的理念而聞名，可以幫助學生理解各種投資工具和策略，從而在風險管理和資產增值方面取得成功",
    imgUrl: lecturerItem3,
  },
  {
    id: 4,
    name: "食神",
    content: "我是一位經驗豐富的餐飲管理者，致力於培養和訓練未來的餐飲業專業人才。我的職業生涯涵蓋了從基層員工到高階管理者的各個層面，並在不同的餐飲環境中取得了豐富的經驗和成功。",
    imgUrl: lecturerItem4,
  },
];
</script>
<template>
  <template v-for="(lecturerItem, index) in lecturerData" :key="lecturerItem.id">
    <div class="container my-7">
      <div v-if="index % 2 === 0" class="row">
        <div class="col-md-6">
          <img :src="lecturerItem.imgUrl" alt="" class="img-fluid" />
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4">{{ lecturerItem.name }}</h4>
          <p class="text-muted">{{ lecturerItem.content }}</p>
        </div>
      </div>
      <div v-else class="row flex-row-reverse justify-content-between mt-4">
        <div class="col-md-6">
          <img :src="lecturerItem.imgUrl" alt="" class="img-fluid" />
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4">{{ lecturerItem.name }}</h4>
          <p class="text-muted">{{ lecturerItem.content }}</p>
        </div>
      </div>
    </div>
  </template>
</template>
<style scoped></style>
