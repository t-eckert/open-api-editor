<template>
  <div class="bg-gray-100 p-4 rounded max-h-full">
    <div class="flex justify-between mb-2">
      <h1>Open API Editor</h1>
      <div class="flex">
        <div class="px-1">YAML</div>
        <div class="px-1">JSON</div>
        <div class="px-1">XML</div>
      </div>
    </div>
    <div class="editor-wrapper p-2 bg-white">
      <DocumentEditor
        class="document-editor"
        v-model="document"
        language="yaml"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DocumentEditor from "@/components/editor/DocumentEditor.vue";

export default Vue.extend({
  name: "TheEditor",

  components: {
    DocumentEditor,
  },

  data() {
    return {
      document: `openapi: "3.0.0"`,
    };
  },
});
</script>

<style lang="scss">
.document-editor {
  height: calc(100vh - 6rem);
  width: 100%;
}
</style>
