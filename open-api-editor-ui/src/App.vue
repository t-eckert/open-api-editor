<template>
  <div>
    <div class="-z-10 absolute w-full h-192 bg-red-100"></div>
    <About v-if="ui.feedbackModal === 'visible'" />
    <div class="container mx-auto">
      <Splash class="mb-2 sm:mb-4" />
      <Information class="mx-2 md:mx-16 mb-8" />
    </div>
    <div>
      <Servers class="mb-8">
        <Server
          v-for="(server, index) in servers"
          :key="index"
          :index="index"
        />
      </Servers>
      <Paths class="mb-8">
        <Path v-for="(server, index) in paths" :key="index" :index="index" />
      </Paths>
      <Securities class="mb-8">
        <Security
          v-for="(server, index) in security"
          :key="index"
          :index="index"
        />
      </Securities>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import About from "@/components/modals/About.vue";
import Splash from "@/components/Splash.vue";
import Information from "@/components/form/Information.vue";
import Servers from "@/components/slots/Servers.vue";
import Server from "@/components/form/Server.vue";
import Paths from "@/components/slots/Paths.vue";
import Path from "@/components/form/Path.vue";
import Securities from "@/components/slots/Securities.vue";
import Security from "@/components/form/Security.vue";
import Footer from "@/components/Footer.vue";
import { title, ui, servers, paths, security } from "@/state";

export default defineComponent({
  name: "App",

  components: {
    About,
    Splash,
    Information,
    Servers,
    Server,
    Paths,
    Path,
    Securities,
    Security,
    Footer
  },

  data() {
    return { title, ui, servers, paths, security };
  },

  watch: {
    title: function() {
      document.title = title.value || "Open API Editor";
    }
  }
});
</script>
