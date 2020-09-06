<template>
  <nav>
    <div class="nav-container">
      <div class="nav-sections">
        <div><a class="nav-link" href="">Info</a></div>
        <div><a class="nav-link" href="">Servers</a></div>
        <div><a class="nav-link" href="">Paths</a></div>
        <div><a class="nav-link" href="">Security</a></div>
        <div><a class="nav-link" href="">Tags</a></div>
      </div>
      <div class="nav-sections">
        <div class="nav-link">Components</div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NavBar"
});
</script>