<script setup>
import { defineRule, Form, Field, ErrorMessage, configure } from "vee-validate";
import { all } from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";
import { ref, nextTick } from "vue";
const userInputInit = {
  userEmail: "",
  userName: "",
  userphone: "",
  userAddress: "",
  userMessage: "",
};
const userInput = ref({ ...userInputInit });
setLocale("zh_TW"); // 設置 繁體中文
configure({
  generateMessage: (context) => {
    const defaultMessage = localize({
      zh_TW: zhTW,
    })(context);
    const keyName = context.field;
    return defaultMessage.replace(`${keyName} `, "");
  },
  validateOnInput: true,
});
const schema = {
  email: "required|email",
  userName: "required",
  phone: "required|numeric",
  address: "required",
};

Object.entries(all).forEach(([name, rule]) => {
  defineRule(name, rule);
});
const handleFormConfirm = async (validate, resetForm) => {
  const response = await validate();
  if (response.valid) {
    nextTick(() => {
      userInput.value = { ...userInputInit };
      resetForm();
      console.log("跳轉");
    });
  }
};
</script>
<template>
  <Form :validation-schema="schema" v-slot="{ validate, resetForm }">
    <p>Contact information</p>
    <div class="mb-2">
      <label for="ContactMail" class="text-muted mb-0">Email</label>
      <Field name="email" type="email" class="form-control" id="ContactMail" aria-describedby="emailHelp" placeholder="example@gmail.com" v-model="userInput.userEmail" />
      <ErrorMessage name="email" />
    </div>
    <div class="mb-2">
      <label for="ContactName" class="text-muted mb-0">Name</label>
      <Field name="userName" type="text" class="form-control" id="ContactName" placeholder="Carmen A. Rose" v-model="userInput.userName" />
      <ErrorMessage name="userName" />
    </div>
    <div class="mb-2">
      <label for="ContactPhone" class="text-muted mb-0">Phone</label>
      <Field name="phone" type="text" class="form-control" id="ContactPhone" placeholder="0911123123" v-model="userInput.userphone" />
      <ErrorMessage name="phone" />
    </div>
    <div class="mb-2">
      <label for="ContactAddress" class="text-muted mb-0">Address</label>
      <Field name="address" type="text" class="form-control" id="ContactAddress" placeholder="高雄市三民區" v-model="userInput.userAddress" />
      <ErrorMessage name="address" />
    </div>
    <div class="mb-2">
      <label for="Message" class="text-muted mb-0">Message</label>
      <Field as="textarea" name="Message" type="text" class="form-control" id="ContactAddress" placeholder="留言處" v-model="userInput.userMessage" />
      <ErrorMessage name="Message" />
    </div>
    <div class="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100">
      <router-link to="/products" class="text-dark mt-md-0 mt-3">
        <FontAwesomeIcon class="me-2" :icon="['fas', 'chevron-left']" />
        回商品頁
      </router-link>
      <button @click.prevent="handleFormConfirm(validate, resetForm)" class="btn btn-dark py-3 px-7">確認</button>
    </div>
  </Form>
</template>
<style scoped></style>
