<script setup>
const props = defineProps({
  modelValue: String,
})

const emit = defineEmits(['update:modelValue', 'enter'])

function handleInput(event) {
    console.log('Input value: ' + event.target.value)
    console.log('Model value: ' + props.modelValue)
    emit('update:modelValue', event.target.value)
}
</script>

<template>
  <input :value="modelValue" @input="handleInput" @keyup.enter="$emit('enter')">
</template>

<style scoped>
input {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  transition: background-color 300ms ease-in-out;
}

input:hover {
  background-color: #eee;
}
</style>
