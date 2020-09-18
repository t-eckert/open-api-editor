<template>
  <section>
    <div class="mb-4 flex w-full justify-between">
      <h2 class="text-xl">Servers</h2>
      <button
        class="px-3 py-2 rounded-lg block font-medium leading-5 text-gray-900 bg-indigo-200 hover:bg-indigo-300"
      >
        Add server
      </button>
    </div>
    <slot />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Servers"
});
</script>