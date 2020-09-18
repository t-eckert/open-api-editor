<template>
  <section
    class="absolute z-10 w-full h-full flex justify-center items-center bg-indigo-100 bg-opacity-50"
  >
    <div class="w-128 bg-white overflow-hidden shadow rounded-lg">
      <div
        class="block px-4 pt-2 pb-1 text-sm font-medium leading-5 text-gray-700 bg-gray-100 border-b border-gray-200"
      >
        <h2>Feedback</h2>
      </div>
      <div class="p-4 sm:p-6">
        <div class="mb-4">
          <text-area
            v-model:value="feedback"
            placeholder="Tell me what you think."
          />
        </div>
        <div class="flex justify-end">
          <button
            @click="submit"
            class="mr-4 px-3 py-2 rounded-lg block font-medium leading-5 text-gray-900 bg-indigo-200 hover:bg-indigo-300"
          >
            Submit
          </button>
          <button
            @click="cancel"
            class="block px-3 py-2 font-medium leading-5 text-gray-900"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TextArea from "@/components/inputs/TextArea.vue";
import { ui } from "@/state";

export default defineComponent({
  name: "Information",

  components: {
    TextArea
  },

  data() {
    return {
      feeback: ""
    };
  },

  methods: {
    submit(): void {
      ui.feedbackModal = "hidden";
    },
    cancel(): void {
      ui.feedbackModal = "hidden";
    }
  }
});
</script>