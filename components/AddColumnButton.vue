<script setup lang="ts">
const emit = defineEmits<{
  (e: "add-column"): void;
}>();

const handleClick = () => {
  emit("add-column");
};
</script>

<template>
  <button
    @click="handleClick"
    class="p-2 text-gray-300/50 whitespace-nowrap transition-all hover:text-white"
  >
    + Add Column
  </button>
</template>
