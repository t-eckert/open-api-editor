<template>
  <div class="palette__layout">
    <h1 class="display-1">{{ doc.info.title || "Welcome to your API" }}</h1>
    <div class="palette__servers__section">
      <h1>Servers</h1>
      <div class="palette__servers__editor-cards">
        <ServerEditorCard />
      </div>
      <button>Add server</button>
    </div>
    <div class="palette__paths__section">
      <h1>Paths</h1>
      <div class="palette__paths__editor-cards">
        <PathEditorCard />
      </div>
      <button>Add path</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ServerEditorCard from "@/components/palette/ServerEditorCard.vue";
import PathEditorCard from "@/components/palette/PathEditorCard.vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "ThePalette",

  components: { ServerEditorCard, PathEditorCard },

  computed: mapState(["doc"]),
});
</script>
