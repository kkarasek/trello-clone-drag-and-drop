<script setup lang="ts">
import type { Task, ID } from "~/types";

const props = defineProps<{
  task: Task;
}>();

const emit = defineEmits<{
  (e: "delete-task", payload: ID): void;
}>();

const focused = ref(false);

onKeyStroke("Backspace", (e) => {
  if (focused.value) {
    e.preventDefault();
    emit("delete-task", props.task.id);
  }
});
</script>

<template>
  <div
    :title="task.createdAt.toLocaleDateString()"
    class="task bg-gray-300/50 shadow-sm max-w-[250px] rounded p-2 mt-4 cursor-pointer"
    @focus="focused = true"
    @blur="focused = false"
    tabindex="0"
  >
    <span class="text-white text-sm">{{ task.title }}</span>
  </div>
</template>

<style>
.sortable-ghost .task {
  position: relative;
}

.sortable-ghost .task::after {
  content: "";
  @apply absolute inset-0 bg-zinc-900 rounded;
}

.task:focus,
.task.focus-visible {
  @apply outline-white  !important;
  outline: outline auto 1px;
}
</style>
