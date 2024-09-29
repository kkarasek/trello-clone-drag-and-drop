<script setup lang="ts">
import type { Task } from "~/types";

defineProps<{
  task: Task;
}>();
</script>

<template>
  <div :title="task.createdAt.toLocaleDateString()" class="task bg-gray-300/50 shadow-sm max-w-[250px] rounded p-2 mt-4 cursor-pointer">
    <span class="text-white text-sm">{{ task.title }}</span>
  </div>
</template>
