<template>
  <div id="app">
    <TheNavBar />
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
import TheNavBar from "./components/TheNavBar.vue";

export default Vue.extend({
  name: "App",

  components: {
    TheHeader,
    TheInfoCard,
    TheNavBar
  }
});
</script>
