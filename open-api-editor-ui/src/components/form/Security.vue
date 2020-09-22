<template>
  <div class="bg-white overflow-hidden shadow rounded-lg">
    <div
      class="flex justify-between items-center block px-2 sm:px-4 pt-2 pb-1 text-sm font-medium leading-5 text-gray-700 bg-gray-100 border-b border-gray-200"
    >
      <h2>Security</h2>
      <div @click="removeSecurity" class="pointer hover:bg-indigo-100">
        <svg
          class="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
    <div class="p-2 sm:p-4">
      <text-area
        v-model:value="security.description"
        label="Description"
        placeholder="A description of your security"
        class="mb-2"
        isOptional
      />
      <text-input
        v-model:value="security.scheme"
        label="Scheme"
        placeholder="Basic"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TextInput from "@/components/inputs/TextInput.vue";
import TextArea from "@/components/inputs/TextArea.vue";
import { security } from "@/state";

export default defineComponent({
  name: "Security",

  components: {
    TextInput,
    TextArea
  },

  props: {
    index: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      security: security[this.index]
    };
  },

  methods: {
    removeSecurity() {
      console.log("Not implemented");
    }
  }
});
</script>
