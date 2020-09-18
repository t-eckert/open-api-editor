import { reactive, ref } from "vue";

export const ui = reactive({
  feedbackModal: "hidden"
})

export const title = ref("");
export const version = ref("");
export const contactInformation = reactive({
  name: "",
  email: "",
  website: "",
});
export const description = ref("");
export const termsOfService = ref("");
export const license = reactive({
  name: "",
  url: "",
});