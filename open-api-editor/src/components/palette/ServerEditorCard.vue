<template>
  <div class="card server-editor-card">
    <div class="server-editor-card__header">
      <h3 class="text-secondary">Server</h3>
      <unicon @click="deleteServer()" name="times" class="icon__times" />
    </div>
    <div class="label-input-group">
      <label :for="'server__' + index + '__url'">Url</label>
      <input
        :value="servers[index].url"
        @input="updateServerUrl"
        type="text"
        :name="'server__' + index + '__url'"
        :id="'server__' + index + '__url'"
        placeholder="https://server.com"
      />
    </div>
    <div class="label-input-group">
      <label :for="'server__' + index + '__description'">Description</label>
      <textarea
        :value="servers[index].description"
        @input="updateServerDescription"
        :name="'server__' + index + '__description'"
        :id="'server__' + index + '__description'"
        rows="3"
        placeholder="A description of my server."
      ></textarea>
    </div>
    <div class="server-editor-card__variables">
      <ServerVariables :index="index" />
    </div>
    <button @click="createVariable()">Add variable</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ServerVariableEditorSection from "@/components/palette/serverEditor/ServerVariableEditorSection.vue";
import ServerVariables from "@/components/palette/serverEditor/ServerVariables.vue";
import { mapState, mapGetters, mapMutations } from "vuex";

export default Vue.extend({
  props: { index: Number },

  components: { ServerVariableEditorSection, ServerVariables },

  computed: { ...mapState(["servers"]) },

  methods: {
    createVariable() {
      this.$store.commit("CREATE_VARIABLE", {});
    },
    deleteServer() {
      this.$store.commit("DELETE_SERVER", this.index);
    },
    updateServerUrl(e: any) {
      this.$store.commit("UPDATE_SERVER_URL", {
        url: e.target.value,
        index: this.index,
      });
    },
    updateServerDescription(e: any) {
      this.$store.commit("UPDATE_SERVER_DESCRIPTION", {
        description: e.target.value,
        index: this.index,
      });
    },
  },
});
</script>
