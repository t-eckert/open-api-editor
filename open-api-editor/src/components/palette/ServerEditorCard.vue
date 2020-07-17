<template>
  <div class="card server-editor-card">
    <div class="server-editor-card__header">
      <h1>Server</h1>
      <button>X</button>
    </div>
    <div class="label-input-group">
      <label for="">Url</label>
      <input type="text" />
    </div>
    <div class="label-input-group">
      <label for="">Description</label>
      <textarea name="" id="" rows="5"></textarea>
    </div>
    <div class="server-editor-card__variables">
      <ServerVariables />
    </div>
    <div>
      <ServerVariableEditorSection
        v-for="(variable, index) in variables"
        :key="'variable-' + index"
        :variable="variable"
      />
    </div>
    <button @click="createVariable()">Add variable</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ServerVariableEditorSection from "@/components/palette/serverEditor/ServerVariableEditorSection.vue";
import ServerVariables from "@/components/palette/serverEditor/ServerVariables.vue";

export default Vue.extend({
  components: { ServerVariableEditorSection, ServerVariables },

  data() {
    return {
      variables: [],
    };
  },

  methods: {
    createVariable() {
      console.log("New variable");
      // this.$store.commit("CREATE_VARIABLE", {});
    },
  },
});
</script>
