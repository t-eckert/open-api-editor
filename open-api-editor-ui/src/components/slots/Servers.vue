<template>
  <section>
    <div class="mb-4 flex w-full justify-between">
      <h2 class="text-xl">Servers</h2>
      <button
        @click="addServer"
        class="px-3 py-2 rounded-lg block font-medium leading-5 text-gray-900 bg-indigo-200 hover:bg-indigo-300"
      >
        Add server
      </button>
    </div>
    <div class="grid gap-4 grid-cols-3">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { addServer } from "@/functions";

export default defineComponent({
  name: "Servers",

  methods: {
    addServer() {
      addServer();
    }
  }
});
</script>