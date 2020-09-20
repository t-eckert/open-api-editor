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
      <form
        name="feedback"
        method="POST"
        data-netlify="true"
        class="p-4 sm:p-6"
      >
        <div class="mb-1 w-full flex justify-between">
          <label
            for="feedback"
            class="block text-sm font-medium leading-5 text-gray-700"
            >Feedback</label
          >
        </div>
        <div class="relative rounded-md shadow-sm">
          <textarea
            id="escapedLabel"
            rows="3"
            class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Let me know what you think"
            aria-describedby=""
          />
        </div>
        <div class="flex justify-end">
          <button
            type="submit"
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
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ui } from "@/state";

export default defineComponent({
  name: "Feedback",

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