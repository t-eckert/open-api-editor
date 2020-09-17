<template>
  <div class="container mx-auto mt-8">
    <splash class="mb-4" />
    <div class="mx-16">
      <information />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Splash from "@/components/Splash.vue";
import Information from "@/components/form/Information.vue";

export default defineComponent({
  name: "App",

  components: {
    Splash,
    Information
  }
});
</script>
