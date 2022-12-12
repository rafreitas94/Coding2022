<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

const count = ref(0)
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
