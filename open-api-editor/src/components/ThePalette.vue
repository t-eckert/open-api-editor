<template>
  <div class="palette__layout">
    <h1 class="display-1">{{ info.title || "Welcome to your API" }}</h1>
    <div class="palette__servers__section">
      <h1 class="text-secondary">Servers</h1>
      <div class="palette__servers__editor-cards">
        <ServerEditorCard />
      </div>
      <button>Add server</button>
    </div>
    <div class="palette__paths__section">
      <h1 class="text-secondary">Paths</h1>
      <div class="palette__paths__editor-cards">
        <PathEditorCard v-for="path in paths" :key="path.id" :id="path.id" />
      </div>
      <button @click="createPath()">Add path</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ServerEditorCard from "@/components/palette/ServerEditorCard.vue";
import PathEditorCard from "@/components/palette/PathEditorCard.vue";
import { mapState, mapGetters, mapMutations } from "vuex";

export default Vue.extend({
  name: "ThePalette",

  components: { ServerEditorCard, PathEditorCard },

  computed: { ...mapState(["info", "servers", "paths"]) },

  methods: {
    createPath() {
      this.$store.commit("CREATE_PATH");
    },
  },
});
</script>
