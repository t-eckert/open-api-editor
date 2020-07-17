<template>
  <div class="sidebar sidebar__layout">
    <div class="sidebar__header">
      <h1>Open API Editor</h1>
      <!-- <button>Hide</button> -->
    </div>
    <InfoEditor />
    <!-- <OpenApiVersionEditor /> -->
    <ContactEditor />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import InfoEditor from "@/components/sidebar/InfoEditor.vue";
import OpenApiVersionEditor from "@/components/sidebar/OpenApiVersionEditor.vue";
import ContactEditor from "@/components/sidebar/ContactEditor.vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "TheSidebar",

  components: {
    OpenApiVersionEditor,
    InfoEditor,
    ContactEditor,
  },
});
</script>
