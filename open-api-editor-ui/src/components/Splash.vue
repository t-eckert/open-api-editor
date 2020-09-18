<template>
  <div>
    <div class="w-full flex justify-between pt-10 mb-16">
      <h1 class="text-xl">Open API Editor</h1>
      <button
        @click="ui.feedbackModal = 'visible'"
        class="px-2 py-1 rounded-lg block font-medium leading-5 text-gray-800 hover:bg-indigo-200 hover:text-gray-900"
      >
        Feedback
      </button>
    </div>
    <div class="ml-16 mb-16">
      <p class="mb-6 text-3xl">
        The <em>Open API Editor</em> helps you<br />build and maintain<br />your
        Open API documents<br />without needing to know the specification.
      </p>
      <div class="flex">
        <button
          @click="startNewDocument"
          class="mr-4 px-3 py-2 rounded-lg block font-medium leading-5 text-gray-900 bg-indigo-200 hover:bg-indigo-300"
        >
          Start new document
        </button>
        <button
          @click="pasteDocument"
          class="block px-3 py-2 font-medium leading-5 text-gray-900"
        >
          Paste document
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ui } from "@/state";

export default defineComponent({
  name: "Splash",

  data() {
    return {
      ui,
    };
  },
});
</script>