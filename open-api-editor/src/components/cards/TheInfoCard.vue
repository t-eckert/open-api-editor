<template>
  <div class="card">
    <div class="card__header">
      <h2 class="text-secondary">Information</h2>
    </div>
    <div class="card__body grid col-auto gap">
      <div>
        <TextInput
          label="Title"
          placeholder="The title of the API"
          :value="info.title"
        />
        <TheContactSection />
      </div>
      <div>
        <TextInput label="API Version" placeholder="1.0.0" value="" />
        <TextArea label="Description" />
        <TextInput label="Terms of Service" />
        <TheLicenseSection />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import TheContactSection from "@/components/sections/TheContactSection.vue";
import TheLicenseSection from "@/components/sections/TheLicenseSection.vue";
import TextArea from "@/components/inputs/TextArea.vue";
import TextInput from "@/components/inputs/TextInput.vue";

export default Vue.extend({
  name: "TheInfoCard",

  components: {
    TheContactSection,
    TheLicenseSection,
    TextArea,
    TextInput
  },

  computed: {
    ...mapState(["info"])
  },

  methods: {
    updateTitle(e: any) {
      this.$store.commit("UPDATE_TITLE", e.target.value);
    }
  }
});
</script>
