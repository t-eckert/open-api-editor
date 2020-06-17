<template>
  <div class="bg-gray-100 p-4 rounded">
    <h1>The Palette</h1>
    <pre>{{ suggestions }}</pre>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "ThePalette",

  computed: mapGetters(["suggestions"]),
});
</script>
