<template>
  <div class="card">
    <div class="card-header">
      <h2 class="text-secondary">Information</h2>
    </div>
    <div class="card-body grid col-auto gap">
      <div>
        <TextInput
          label="Title"
          placeholder="The title of the API"
          :value="info.title"
        />
        <ContactSection />
      </div>
      <div>
        <TextInput label="API Version" placeholder="1.0.0" value="" />
        <TextArea label="Description" />
        <TextInput label="Terms of Service" />
        <LicenseSection />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import ContactSection from "@/components/sections/ContactSection.vue";
import LicenseSection from "@/components/sections/LicenseSection.vue";
import TextArea from "@/components/inputs/TextArea.vue";
import TextInput from "@/components/inputs/TextInput.vue";

export default Vue.extend({
  name: "InfoCard",

  components: {
    ContactSection,
    LicenseSection,
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
