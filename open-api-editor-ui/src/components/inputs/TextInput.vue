<template>
  <div>
    <div class="mb-1 w-full flex justify-between">
      <label
        :for="escapedLabel"
        class="block text-sm font-medium leading-5 text-gray-700"
        >{{ label }}</label
      >
      <div
        v-if="isOptional"
        class="block text-sm font-medium leading-5 text-gray-600"
      >
        Optional
      </div>
    </div>
    <div>{{ value }}</div>
    <div class="relative rounded-md shadow-sm">
      <input
        type="text"
        :value="value"
        @input="updateValue($event.target.value)"
        :id="escapedLabel"
        class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded leading-tight focus:outline-none focus:shadow-outline"
        :placeholder="placeholder"
        :aria-describedby="escapedLabel + '-description'"
      />
    </div>
    <p
      v-if="description"
      class="mt-2 text-sm text-gray-500"
      :id="escapedLabel + '-description'"
    >
      {{ description }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TextInput",

  props: {
    value: { type: String, required: true },
    label: { type: String, required: true },
    placeholder: String,
    description: String,
    isOptional: Boolean
  },

  computed: {
    escapedLabel(): string {
      return this.label.toLowerCase();
    }
  },

  methods: {
    updateValue(value: string) {
      this.$emit("update:value", value);
    }
  }
});
</script>
