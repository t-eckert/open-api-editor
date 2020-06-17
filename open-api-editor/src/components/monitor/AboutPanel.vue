<template>
  <div class="bg-gray-100 p-4 rounded mb-2">
    <div v-if="isExpanded" class="mb-4">
      <p>A project by Thomas Eckert.</p>
      <p>Version {{ version }} released {{ released }}</p>
      <a>Source code</a>
    </div>
    <button v-if="isDonatable">Donate</button>
    <button
      @click="isExpanded = !isExpanded"
      class="px-4 py-1 font-medium bg-blue-200 rounded-sm border-gray-800"
    >
      About
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { version, released } from "@/main";

export default Vue.extend({
  name: "AboutPanel",

  data() {
    return {
      isDonatable: false,
      isExpanded: false,
      version,
      released,
    };
  },
});
</script>
