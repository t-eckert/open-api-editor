<template>
  <div class="">
    <div class="label-input-group">
      <label for="">Enum</label>
      <input type="text" v-bind="variable.enumeration" />
    </div>
    <div class="label-input-group">
      <label for="">Default</label>
      <input type="text" v-bind="variable.defaultValue" />
    </div>
    <div class="label-input-group">
      <label for="">Description</label>
      <textarea
        name=""
        id=""
        cols="30"
        rows="3"
        v-bind="variable.description"
      ></textarea>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { OpenAPIV3 } from "@/open-api-engine/src";

export default Vue.extend({
  props: {
    variable: {},
  },
});
</script>
