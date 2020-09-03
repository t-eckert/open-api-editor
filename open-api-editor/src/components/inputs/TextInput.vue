<template>
  <div class="text-input">
    <label :for="'text-input-' + label">{{ label }}</label>
    <input
      :value="value"
      @input="update"
      type="text"
      :id="'text-input-' + label"
      :name="'text-input-' + label"
      :placeholder="placeholder"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TextInput",

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
