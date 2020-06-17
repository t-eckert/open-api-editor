<template>
  <div>
    <ControlPanel />
    <div class="overflow-auto">
      <ErrorCard
        v-for="(error, index) in errors"
        :key="'error-' + index"
        :message="error.message"
      />
      <WarningCard
        v-for="(warning, index) in warnings"
        :key="'warning-' + index"
        :message="warning.message"
      />
    </div>
    <AboutPanel />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ControlPanel from "@/components/monitor/ControlPanel.vue";
import ErrorCard from "@/components/monitor/ErrorCard.vue";
import WarningCard from "@/components/monitor/WarningCard.vue";
import AboutPanel from "@/components/monitor/AboutPanel.vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "TheMonitor",

  components: {
    ControlPanel,
    ErrorCard,
    WarningCard,
    AboutPanel,
  },

  computed: mapState(["errors", "warnings"]),
});
</script>
