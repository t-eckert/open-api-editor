<template>
  <div class="palette__layout">
    <h1 class="display-1">{{ info.title || "Welcome to your API" }}</h1>
    <div class="palette__servers__section">
      <h1 class="text-secondary">Servers</h1>
      <div class="palette__servers__editor-cards">
        <ServerEditorCard
          v-for="(server, index) in servers"
          :key="'server-editor-card' + index"
          :index="index"
        />
      </div>
      <button @click="createServer()">Add server</button>
    </div>
    <div class="palette__paths__section">
      <h1 class="text-secondary">Paths</h1>
      <div class="palette__paths__editor-cards">
        <PathEditorCard
          v-for="(path, index) in paths"
          :key="'path-editor-card-' + index"
          :index="index"
        />
      </div>
      <button @click="createPath()">Add path</button>
    </div>
    <div class="palette__components__section">
      <h1 class="text-secondary">Components</h1>
      <p>
        Components are reusable objects which can be used throughout your API
        definition
      </p>
      <button>Add schema</button>
      <button>Add response</button>
      <button>Add parameter</button>
      <button>Add example</button>
      <button>Add request body</button>
      <button>Add header</button>
      <button>Add security scheme</button>
      <button>Add link</button>
      <button>Add callback</button>
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
    createServer() {
      this.$store.commit("CREATE_SERVER");
    },
    createPath() {
      this.$store.commit("CREATE_PATH");
    },
  },
});
</script>
