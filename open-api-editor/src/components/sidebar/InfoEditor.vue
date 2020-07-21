<template>
  <div class="">
    <div class="label-input-group">
      <label for="info__title">Title</label>
      <input
        :value="info.title"
        @input="updateTitle"
        type="text"
        id="info__title"
        name="info__title"
        placeholder="The title of the API"
      />
    </div>
    <div class="label-input-group">
      <label for="info__description">Description</label>
      <textarea
        :value="info.description"
        @input="updateDescription"
        name="info__description"
        id="info__description"
        rows="5"
        placeholder="This is my API. Let me tell you about it."
      ></textarea>
    </div>
    <div class="label-input-group">
      <label for="into__version">Version</label>
      <input
        :value="info.version"
        @input="updateVersion"
        type="text"
        id="info__version"
        name="info__version"
        placeholder="1.0.0"
      />
    </div>
    <div class="label-input-group">
      <label for="info__license">License</label>
      <select name="info__license" id="info__license">
        <option
          v-for="(license, index) in licenses"
          :key="'info__license-' + index"
          >{{ license.Name }}</option
        >
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import licenses from "@/constants/licenses";
import { mapState } from "vuex";

export default Vue.extend({
  data() {
    return {
      licenses,
    };
  },

  computed: {
    ...mapState(["info"]),
  },

  methods: {
    createDescription() {
      this.$store.commit("CREATE_DESCRIPTION");
    },
    updateTitle(e: any) {
      this.$store.commit("UPDATE_TITLE", e.target.value);
    },
    updateDescription(e: any) {
      this.$store.commit("UPDATE_DESCRIPTION", e.target.value);
    },
    updateVersion(e: any) {
      this.$store.commit("UPDATE_VERSION", e.target.value);
    },
  },
});
</script>
