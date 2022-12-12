<script setup>
const props = defineProps({
  label: String,
});
</script>

<template>
  <button>{{ label }}</button>
</template>

<style scoped>
button {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  color: rgba(255, 255, 255, 0.87);
  background-color: #42b883;
  transition: background-color 300ms ease-in-out, transform 100ms ease-in-out;
}

button:hover {
  background-color: #33a06f;
}

button:active {
  background-color: #33a06f;
  transform: translateY(0.5px);
}
</style>
