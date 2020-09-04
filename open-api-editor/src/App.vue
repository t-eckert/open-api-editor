<template>
  <div id="app">
    <TheNavBar />
    <div class="container mx-auto">
      <TheHeader />
      <TheInfoCard class="mb" />
      <div class="flex">
        <h2>Servers</h2>
        <button>Add server</button>
      </div>
      <div class="mb">
        <ServerCard v-for="(server, index) in servers" :key="index" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TheHeader from "./components/TheHeader.vue";
import TheInfoCard from "./components/cards/TheInfoCard.vue";
import TheNavBar from "./components/TheNavBar.vue";
import ServerCard from "./components/cards/ServerCard.vue";

export default Vue.extend({
  name: "App",

  components: {
    TheHeader,
    TheInfoCard,
    TheNavBar,
    ServerCard
  },

  data() {
    return {
      servers: [{}]
    };
  }
});
</script>
