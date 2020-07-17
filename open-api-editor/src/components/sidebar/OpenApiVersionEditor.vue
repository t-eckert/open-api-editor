<template>
  <div class="">
    <h2>Open API Version</h2>
    <select name="open-api-version-selector" id="open-api-version-selector">
      <option v-for="version in versions" :key="version">{{ version }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return { versions: ["3.0.0", "3.0.1", "3.0.2", "3.0.3"] };
  }
});
</script>
