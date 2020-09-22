<template>
  <div class="flex items-center">
    <div
      class="mr-2 px-2 py-1 rounded-lg text-sm font-medium shadow bg-orange-100 text-orange-900"
      :class="isTooltipVisible ? 'visible' : 'invisible'"
    >
      Copy JSON to clipboard
    </div>
    <div
      @mouseover="isTooltipVisible = true"
      @mouseleave="isTooltipVisible = false"
      @click="copyToClipboard"
      class="rounded-full bg-orange-300 text-orange-700 p-4 shadow flex justify-center items-center cursor-pointer hover:bg-orange-400 hover:text-orange-800"
    >
      <svg
        class="h-8 w-8"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
        <path
          d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Action",

  data() {
    return {
      isTooltipVisible: false,
    };
  },

  methods: {
    copyToClipboard() {
      console.log("Not implemented");
    },
  },
});
</script>