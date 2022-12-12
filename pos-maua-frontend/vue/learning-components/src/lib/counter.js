export const count = ref(0);

export const doubleCount = computed(() => count.value * 2);

export function addCount(event) {
  console.log(event);
  count.value++;
}
