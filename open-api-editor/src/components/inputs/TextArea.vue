<template>
  <div class="text-input">
    <label :for="'text-input-' + label">{{ label }}</label>
    <textarea />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TextArea",

  props: {
    label: String,
    placeholder: String,
    value: String
  },

  methods: {
    update() {
      this.$emit("input", {});
    }
  }
});
</script>
