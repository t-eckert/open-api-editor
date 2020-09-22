<template>
  <div>
    <div
      class="pt-4 px-2 mb-4 sm:pt-10 md:mb-16 w-full flex justify-between text-gray-900"
    >
      <h1 class="text-xl font-semibold">Open API Editor</h1>
      <button
        @click="ui.feedbackModal = 'visible'"
        class="px-2 py-1 rounded-lg block font-medium leading-5 text-gray-800 hover:bg-indigo-200 hover:text-gray-900"
      >
        About
      </button>
    </div>
    <div class="pl-2 md:pl-16 mb-16">
      <p class="mb-12 text-xl md:text-3xl text-gray-900">
        The <em>Open API Editor</em> helps you<br />build and maintain<br />your
        Open API documents<br />without needing to know the specification.
      </p>
      <div class="flex justify-center">
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