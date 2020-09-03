<template>
  <div id="app">
    <div class="container mx-auto">
      <TheHeader />
      <TheInfoCard />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TheHeader from "./components/TheHeader.vue";
import TheInfoCard from "./components/cards/TheInfoCard.vue";

export default Vue.extend({
  name: "App",

  components: {
    TheHeader,
    TheInfoCard
  }
});
</script>
