<template>
  <div class="bg-white overflow-hidden shadow rounded-lg">
    <div
      class="flex justify-between items-center block px-4 pt-2 pb-1 text-sm font-medium leading-5 text-gray-700 bg-gray-100 border-b border-gray-200"
    >
      <h2>{{ server.url || "Server" }}</h2>
      <div class="flex items-center cursor-pointer">
        <span
          class="text-xs uppercase mr-1 text-gray-600"
          :class="isRemoveVisible ? 'visible' : 'invisible'"
          >Remove {{ server.url || "server" }}</span
        >
        <span
          @click="removeServer"
          @mouseover="isRemoveVisible = true"
          @mouseleave="isRemoveVisible = false"
          class="pointer hover:bg-indigo-100"
        >
          <svg
            class="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
      </div>
    </div>
    <div class="p-2 sm:p-4">
      <text-input
        v-model:value="server.url"
        label="Url"
        placeholder="https://server.com"
        class="mb-2"
      />
      <text-area
        v-model:value="server.description"
        label="Description"
        placeholder="A description of your server"
        isOptional
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TextInput from "@/components/inputs/TextInput.vue";
import TextArea from "@/components/inputs/TextArea.vue";
import { servers } from "@/state";
import { removeServer } from "@/functions";

export default defineComponent({
  name: "Information",

  components: {
    TextInput,
    TextArea
  },

  props: {
    index: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      server: servers[this.index],
      isRemoveVisible: false
    };
  },

  methods: {
    removeServer() {
      removeServer(this.index);
    }
  }
});
</script>
