<template>
  <div>
    <AddOpenApiVersionCard />
    <pre>{{ suggestions }}</pre>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AddOpenApiVersionCard from "@/components/palette/AddOpenApiVersionCard.vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "ThePalette",

  components: { AddOpenApiVersionCard },

  computed: mapGetters(["suggestions"])
});
</script>
