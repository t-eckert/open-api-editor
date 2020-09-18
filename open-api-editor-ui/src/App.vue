<template>
  <div>
    <div class="-z-10 absolute w-full h-192 bg-red-100"></div>
    <feedback v-if="ui.feedbackModal === 'visible'" />
    <div class="container mx-auto">
      <splash class="mb-4" />
      <information class="mx-16 mb-8" />
      <servers>
        <server />
      </servers>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Feedback from "@/components/modals/Feedback.vue";
import Splash from "@/components/Splash.vue";
import Information from "@/components/form/Information.vue";
import Servers from "@/components/slots/Servers.vue";
import Server from "@/components/form/Server.vue";
import { ui } from "@/state";

export default defineComponent({
  name: "App",

  components: {
    Feedback,
    Splash,
    Information,
    Servers,
    Server
  },

  data() {
    return { ui };
  }
});
</script>
