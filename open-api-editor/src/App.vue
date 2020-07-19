<template>
  <div id="app">
    <div class="app__layout app__layout__sidebar-visible">
      <TheSidebar />
      <ThePalette />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TheSidebar from "./components/TheSidebar.vue";
import ThePalette from "./components/ThePalette.vue";

export default Vue.extend({
  name: "App",

  components: {
    TheSidebar,
    ThePalette
  }
});
</script>
