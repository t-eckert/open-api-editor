<template>
  <div class="header">
    <div class="header-top-bar">
      <h1>Open API Editor</h1>
      <button @click="openFeedbackModal">Feedback</button>
    </div>
    <div class="header-intro">
      <p>
        The Open API Editor helps you build and maintain your Open API documents
        without needing to know the specification.
      </p>
      <div>
        <button @click="startNewDocument">Start new document</button>
        <button @click="pasteDocument">Paste document</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",

  methods: {
    openFeedbackModal() {
      // TODO
      console.log("Not implemented");
    },
    startNewDocument() {
      // TODO
      console.log("Not implemented");
    },
    pasteDocument() {
      // TODO
      console.log("Not implemented");
    }
  }
});
</script>