<template>
  <div class="card">
    <div class=""></div>
    <TextInput
      label="Title"
      placeholder="The title of the API"
      :value="info.title"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import TextInput from "@/components/inputs/TextInput.vue";

export default Vue.extend({
  name: "TheInfoCard",

  components: {
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
