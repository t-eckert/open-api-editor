<template>
  <div class="bg-gray-100 p-4 rounded max-h-full">
    <div class="flex justify-between mb-2">
      <h1>Open API Editor {{ version }}</h1>
      <div class="flex">
        <div
          @click="toggleFormat()"
          class="px-4 py-1 rounded-sm cursor-pointer"
          :class="{ 'bg-green-400': isYAML() }"
        >
          YAML
        </div>
        <div
          @click="toggleFormat()"
          class="px-4 py-1 rounded-sm cursor-pointer"
          :class="{ 'bg-green-400': isJSON() }"
        >
          JSON
        </div>
      </div>
    </div>
    <div class="editor-wrapper p-2 bg-white">
      <DocumentEditor
        class="document-editor"
        v-model="doc"
        :language="language"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DocumentEditor from "@/components/editor/DocumentEditor.vue";
import { version } from "@/main";

enum Format {
  YAML = "YAML",
  JSON = "JSON",
}

export default Vue.extend({
  name: "TheEditor",

  components: {
    DocumentEditor,
  },

  data() {
    return {
      version,
      format: Format.YAML,
    };
  },

  methods: {
    isYAML() {
      return this.format === Format.YAML;
    },
    isJSON() {
      return this.format === Format.JSON;
    },
    toggleFormat() {
      if (this.isJSON()) {
        this.format = Format.YAML;
      } else {
        this.format = Format.JSON;
      }
    },
  },

  computed: {
    doc: {
      get(): string {
        return this.$store.state.doc;
      },
      set(value: string) {
        this.$store.commit("SET_DOC", value);
        this.$store.dispatch("updateSuggestions");
        this.$store.dispatch("updateMonitor");
      },
    },
    language: {
      get(): string {
        return this.format.toString().toLowerCase();
      },
    },
  },
});
</script>

<style lang="scss">
.document-editor {
  height: calc(100vh - 7rem);
  width: 100%;
}
</style>
