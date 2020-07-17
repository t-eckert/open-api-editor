<template>
  <div class="sidebar__contact-editor">
    <h2>Contact</h2>
    <p>
      Contact information for the exposed API.
    </p>
    <div class="label-input-group">
      <label for="contact__name">Name</label>
      <input
        :value="name"
        @input="setName"
        type="text"
        id="contact__name"
        placeholder="Winona Corgi"
      />
    </div>
    <div class="label-input-group">
      <label for="">URL</label>
      <input type="text" />
    </div>
    <div class="label-input-group">
      <label for="">Email</label>
      <input type="text" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>
