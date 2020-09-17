<template>
  <div>
    <div class="w-full flex justify-between">
      <h1 class="">Open API Editor</h1>
      <button>Feedback about this page</button>
    </div>
    <p>
      The Open API Editor helps you build and maintain your Open API documents
      without needing to know the specification.
    </p>
    <div>
      <button @click="startNewDocument">Start new document</button>
      <button @click="pasteDocument">Paste document</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Splash",
});
</script>