<template>
  <div class="section">
    <div class="section-body">
      <h2 class="text-secondary">License</h2>
      <TextInput label="Name" placeholder="Bill Posters" value="" />
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
  name: "TheLicenseSection",

  components: {
    TextInput
  }
});
</script>