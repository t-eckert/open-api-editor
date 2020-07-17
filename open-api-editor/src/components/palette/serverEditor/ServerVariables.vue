<template>
  <div class="server-variable-section">
    <table>
      <thead>
        <tr>
          <th>Enum</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(variable, index) in variables" :key="'variable-' + index">
          <td>
            <div
              v-for="(enumeration, index) in variable.enumerations"
              :key="'enumeration-' + index"
            >
              {{ enumeration }}
            </div>
          </td>
          <td>{{ variable.defaultValue }}</td>
          <td>{{ variable.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      variables: [
        {
          enumerations: ["blue", "red"],
          defaultValue: "blue",
          description: "The color",
        },
      ],
    };
  },
});
</script>
