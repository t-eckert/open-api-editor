<template>
  <div>
    <ControlPanel />
    <div class="overflow-auto">
      <ErrorCard
        v-for="(error, index) in errors"
        :key="index"
        :message="error.message"
      />
      <WarningCard
        v-for="(warning, index) in warnings"
        :key="index"
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

export default Vue.extend({
  name: "TheMonitor",

  components: {
    ControlPanel,
    ErrorCard,
    WarningCard,
    AboutPanel
  },

  data() {
    return {
      errors: [
        { message: "Error 1" },
        { message: "Error 2" },
        { message: "Error 3" },
        { message: "Error 4" },
        { message: "Error 5" }
      ],
      warnings: [
        { message: "Warning 1" },
        { message: "Warning 2" },
        { message: "Warning 3" },
        { message: "Warning 4" },
        { message: "Warning 5" }
      ]
    };
  }
});
</script>