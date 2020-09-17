<template>
  <div class="bg-white overflow-hidden shadow rounded-lg">
    <div
      class="block px-4 py-2 text-sm font-medium leading-5 text-gray-700 bg-gray-100 border-b border-gray-200"
    >
      <h2>Information</h2>
    </div>
    <div class="p-4 sm:p-6 grid grid-cols-2 gap-4">
      <div>
        <div>{{ title }}</div>
        <text-input
          v-model:value="title"
          label="Title"
          placeholder="The title of the API"
          class="mb-2"
        />
        <text-input label="Version" placeholder="1.0.0" class="mb-4" />
        <div class="bg-gray-100 rounded-lg p-2">
          <div class="flex justify-between">
            <h3 class="mb-2 text-sm font-medium leading-5 text-gray-700">
              Contact information
            </h3>
            <div class="block text-sm font-medium leading-5 text-gray-600">
              Optional
            </div>
          </div>
          <text-input label="Name" placeholder="Bill Posters" class="mb-2" />
          <text-input
            label="Email"
            placeholder="bill.posters@gmail.com"
            class="mb-2"
          />
          <text-input
            label="Website"
            placeholder="billposters.com"
            class="mb-2"
          />
        </div>
      </div>
      <div>
        <text-area label="Description" class="mb-2" />
        <text-input
          label="Terms of service"
          placeholder="https://tos.com"
          isOptional
          class="mb-4"
        />
        <div class="bg-gray-100 rounded-lg p-2">
          <div class="flex justify-between">
            <h3 class="mb-2 text-sm font-medium leading-5 text-gray-700">
              License
            </h3>
            <div class="block text-sm font-medium leading-5 text-gray-600">
              Optional
            </div>
          </div>
          <text-input label="Name" placeholder="MIT" />
          <text-input label="URL" placeholder="https://mitlicense.com" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TextInput from "@/components/inputs/TextInput.vue";
import TextArea from "@/components/inputs/TextArea.vue";
import { title } from "@/state";

export default defineComponent({
  name: "Information",

  components: {
    TextInput,
    TextArea
  },

  data() {
    return {
      title
    };
  }
});
</script>
