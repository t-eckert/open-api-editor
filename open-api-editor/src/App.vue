<template>
  <div id="app" class="bg-gray-400 h-screen">
    <div class="grid grid-cols-4 p-2 gap-2 h-full">
      <ThePalette />
      <TheEditor class="col-span-2" />
      <TheMonitor />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ThePalette from "./components/ThePalette.vue";
import TheEditor from "./components/TheEditor.vue";
import TheMonitor from "./components/TheMonitor.vue";

export default Vue.extend({
  name: "App",

  components: {
    ThePalette,
    TheEditor,
    TheMonitor
  }
});
</script>
