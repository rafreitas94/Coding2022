<script setup>
import { onMounted, reactive, ref, computed, watch } from "vue";
import Button from "./components/Button.vue";
import { count, doubleCount, addCount } from "./lib/counter";

const myStyles = reactive({
  color: "blue",
  "background-color": "red",
});

const otherStyles = reactive({
  "font-size": "32px",
  "background-color": "green",
});

onMounted(() => console.log("mounted"));

watch(
  count, 
  (newCount, oldCount) => console.log(`Novo Valor: ${newCount} - Valor antigo: ${oldCount}`)
);
</script>

<template>
  <div>
    <Button :applyClass="true" @meu-evento="addCount">
      Count: {{ count }}
    </Button>
    <p>Meu contador é: {{ count }}</p>
    <p :style="[myStyles, otherStyles]">
      Duas vezes o meu contador: {{ doubleCount }}
    </p>
  </div>
</template>

<style></style>
