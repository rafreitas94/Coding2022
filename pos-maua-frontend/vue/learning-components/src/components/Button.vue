<script>
import { defineProps } from "vue";

defineProps({
  applyClass: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["meuEvento"]);
</script>

<template>
  <div>
    <button
      class="{ button: applyClass }"
      :class="{ button: applyClass }"
      @click="$emit('meuEvento')"
    >
      <slot></slot>
    </button>
  </div>
</template>

<style>
.base-button {
  border: 1px solid green;
}
.button {
  color: blue;
  background-color: bisque;
  border-radius: 50%;
}
</style>
