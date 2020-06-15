<template>
  <div class="bg-gray-100 p-4 rounded mb-2 border-t-8 border-yellow-500">
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "WarningCard",

  props: {
    message: String
  }
});
</script>
