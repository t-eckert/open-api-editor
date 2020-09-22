<template>
  <section class="m-1 sm:m-0">
    <div class="z-10 mb-2 pt-4 sticky top-0 bg-white bg-opacity-75">
      <div class="container mx-auto flex justify-between">
        <h2 class="text-xl">Paths</h2>
        <button
          @click="addPath"
          class="px-3 py-2 rounded-lg block font-medium leading-5 text-gray-900 bg-indigo-200 hover:bg-indigo-300"
        >
          Add path
        </button>
      </div>
    </div>
    <div class="mb-4 container mx-auto grid gap-4 grid-cols-2">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Paths",

  methods: {
    addPath() {
      console.log("Not implemented");
    }
  }
});
</script>