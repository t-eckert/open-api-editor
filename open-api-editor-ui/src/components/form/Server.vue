<template>
  <div class="bg-white overflow-hidden shadow rounded-lg">
    <div
      class="block px-4 pt-2 pb-1 text-sm font-medium leading-5 text-gray-700 bg-gray-100 border-b border-gray-200"
    >
      <h2>Server</h2>
    </div>
    <div class="p-4 sm:p-6 grid grid-cols-2 gap-4"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TextInput from "@/components/inputs/TextInput.vue";
import TextArea from "@/components/inputs/TextArea.vue";
import {} from "@/state";

export default defineComponent({
  name: "Information",

  components: {
    // TextInput,
    // TextArea
  },

  data() {
    return {};
  }
});
</script>
