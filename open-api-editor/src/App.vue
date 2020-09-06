<template>
  <div id="app">
    <NavBar />
    <div class="container mx-auto">
      <Header />
      <InfoCard class="mb" />
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
import Header from "./components/Header.vue";
import InfoCard from "./components/cards/InfoCard.vue";
import NavBar from "./components/NavBar.vue";
import ServerCard from "./components/cards/ServerCard.vue";

export default Vue.extend({
  name: "App",

  components: {
    Header,
    InfoCard,
    NavBar,
    ServerCard
  },

  data() {
    return {
      servers: [{}]
    };
  }
});
</script>
