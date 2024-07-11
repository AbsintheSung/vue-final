<script setup>
import { defineRule, Form, Field, ErrorMessage, configure } from "vee-validate";
import { all } from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";
import { ref, nextTick } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const baseURL = import.meta.env.VITE_APP_API_URL;
const apiName = import.meta.env.VITE_APP_API_NAME;
const router = useRouter();
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
  console.log(response);
  if (response.valid) {
    await sendFormData(resetForm);
  }
};
const resetAllFormData = (restFn) => {
  nextTick(() => {
    userInput.value = { ...userInputInit };
    restFn();
    router.push("/checkoutinfo");
    // console.log("跳轉");
  });
};

const sendFormData = async (restFn) => {
  const orderData = {
    data: {
      user: {
        name: userInput.value.userName,
        email: userInput.value.userEmail,
        tel: userInput.value.userphone,
        address: userInput.value.userAddress,
      },
      message: userInput.value.userMessage,
    },
  };
  try {
    const response = await axios.post(`${baseURL}/v2/api/${apiName}/order`, orderData);
    if (response.status === 200) {
      console.log(response);
      resetAllFormData(restFn);
      console.log("測試");
    }
  } catch (error) {
    console.log(error);
  }
};
</script>
<template>
  <Form :validation-schema="schema" v-slot="{ validate, resetForm, errors }">
    <p>Contact information</p>
    <div class="mb-3">
      <label for="ContactMail" class="text-muted mb-1">Email</label>
      <Field name="email" type="email" class="form-control" :class="{ 'is-invalid': errors.email, 'is-valid': !errors.email && userInput.userEmail }" id="ContactMail" aria-describedby="emailHelp" placeholder="example@gmail.com" v-model="userInput.userEmail" />
      <ErrorMessage name="email" class="invalid-feedback" />
    </div>
    <div class="mb-3">
      <label for="ContactName" class="text-muted mb-1">Name</label>
      <Field name="userName" type="text" class="form-control" :class="{ 'is-invalid': errors.userName, 'is-valid': !errors.userName && userInput.userName }" id="ContactName" placeholder="Carmen A. Rose" v-model="userInput.userName" />
      <ErrorMessage name="userName" />
    </div>
    <div class="mb-3">
      <label for="ContactPhone" class="text-muted mb-1">Phone</label>
      <Field name="phone" type="text" class="form-control" :class="{ 'is-invalid': errors.phone, 'is-valid': !errors.phone && userInput.userphone }" id="ContactPhone" placeholder="0911123123" v-model="userInput.userphone" />
      <ErrorMessage name="phone" />
    </div>
    <div class="mb-3">
      <label for="ContactAddress" class="text-muted mb-1">Address</label>
      <Field name="address" type="text" class="form-control" :class="{ 'is-invalid': errors.address, 'is-valid': !errors.address && userInput.userAddress }" id="ContactAddress" placeholder="高雄市三民區" v-model="userInput.userAddress" />
      <ErrorMessage name="address" />
    </div>
    <div class="mb-3">
      <label for="Message" class="text-muted mb-1">Message</label>
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
