<template>
  <div class="card">
    <div class="card__header">
      <h2 class="text-secondary">Server</h2>
    </div>
    <div class="card__body">
      <TextInput
        label="URL"
        placeholder="https://development.gigantic-server.com/v1"
      />
      <TextArea label="Description" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TextInput from "@/components/inputs/TextInput.vue";
import TextArea from "@/components/inputs/TextArea.vue";

export default Vue.extend({
  name: "ServerCard",

  components: {
    TextInput,
    TextArea
  }
});
</script>