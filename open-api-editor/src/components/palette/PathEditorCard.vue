<template>
  <div class="card path-editor-card">
    <div class="paths-editor-card__header">
      <h1>Path</h1>
      <button @click="deletePath()">X</button>
    </div>
    <div class="label-input-group">
      <label :for="`paths__${id}__path`">Path</label>
      <div>
        <span>/&nbsp;</span>
        <input
          :value="path"
          @input="path"
          type="text"
          :id="`paths__${id}__path`"
          placeholder="{posts}"
        />
      </div>
    </div>
    <div class="label-input-group">
      <!-- If summary is set here, it overwrites the summaries in the operation objects -->
      <label for="">Summary</label>
      <input type="text" />
    </div>
    <div class="path-editor-card__operation-object-buttons">
      <button @click="createOperation('GET')" class="button__get">GET</button>
      <button @click="createOperation('POST')" class="button__post">
        POST
      </button>
      <button @click="createOperation('PUT')" class="button__put">PUT</button>
      <button @click="createOperation('PATCH')" class="button__patch">
        PATCH
      </button>
      <button @click="createOperation('DELETE')" class="button__delete">
        DELETE
      </button>
    </div>
    <div>
      <OperationEditorSection
        v-for="(operation, index) in operations"
        :key="'operation-' + index"
        :operation="operation"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import OperationEditorSection from "@/components/palette/pathEditor/OperationEditorSection.vue";
import Verb from "@/constants/enums/Verb";

export default Vue.extend({
  components: {
    OperationEditorSection
  },

  props: {
    index: Number
  },

  data() {
    return {
      variables: [{ enumeration: "", defaultValue: "", description: "" }],
      operations: []
    };
  },

  methods: {
    createOperation(verb: Verb) {
      console.log(verb);
      // this.$store.commit("CREATE_OPERATION", { verb });
    },
    deletePath() {
      this.$store.commit("DELETE_PATH", this.index);
    }
  }
});
</script>
