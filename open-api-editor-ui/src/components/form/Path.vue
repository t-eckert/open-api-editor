<template>
  <div class="bg-white overflow-hidden shadow rounded-lg">
    <div
      class="flex justify-between items-center block px-4 pt-2 pb-1 text-sm font-medium leading-5 text-gray-700 bg-gray-100 border-b border-gray-200"
    >
      <h2>{{ path.path || "Path" }}</h2>
      <div @click="removePath" class="pointer hover:bg-indigo-100">
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
    <div class="p-2 sm:p-4 grid grid-cols-2 gap-4">
      <div>
        <text-input
          v-model:value="path.path"
          label="Path"
          placeholder="/books"
          class="mb-2"
        />
        <text-area
          v-model:value="path.summary"
          label="Summary"
          placeholder="A short summary of the path."
        />
      </div>
      <div>
        <text-area
          v-model:value="path.description"
          label="Description"
          placeholder="A short description of your Open API document."
          class="mb-2"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TextInput from "@/components/inputs/TextInput.vue";
import TextArea from "@/components/inputs/TextArea.vue";
import { paths } from "@/state";

export default defineComponent({
  name: "Path",

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
      path: paths[this.index]
    };
  },

  methods: {
    removePath() {
      console.log("Not implemented");
    }
  }
});
</script>
