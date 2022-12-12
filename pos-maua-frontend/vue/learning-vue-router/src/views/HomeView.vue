<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<template>
  <h1>Olá Home!</h1>
  <button @click="count++">Count: {{ count }}</button>
</template>

<style></style>
