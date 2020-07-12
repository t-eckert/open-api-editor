<template>
  <div class="bg-gray-100 p-2 rounded">
    <div v-if="isExpanded" class="mb-4">
      <p>A project by Thomas Eckert.</p>
      <a>Source code</a>
    </div>
    <div class="flex items-baseline justify-between w-full">
      <button
        @click="isExpanded = !isExpanded"
        class="px-4 py-1 font-medium text-gray-800 hover:bg-gray-400 rounded-sm"
      >
        About
      </button>
      <div class="px-4">{{ version }}</div>
    </div>
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
      released
    };
  }
});
</script>
