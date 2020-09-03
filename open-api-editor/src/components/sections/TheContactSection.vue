<template>
  <div class="section">
    <div class="section__body">
      <h2 class="text-secondary">Contact information</h2>
      <TextInput label="Name" placeholder="Bill Posters" value="" />
      <TextInput label="Email" placeholder="bill.posters@gmail.com" value="" />
      <TextInput
        label="Website"
        placeholder="https://billposters.com"
        value=""
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TextInput from "@/components/inputs/TextInput.vue";
import { component } from "vue/types/umd";

export default Vue.extend({
  name: "TheContactSection",

  components: {
    TextInput
  }
});
</script>