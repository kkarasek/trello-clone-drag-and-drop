<script setup lang="ts">
import { nanoid } from "nanoid";
import type { Task } from "~/types";

const emit = defineEmits<{
  (e: "add-task", payload: Task): void;
}>();

const focused = ref(false);
const title = ref("");

const createTask = (e: Event) => {
  if (title.value.trim()) {
    e.preventDefault();
    emit("add-task", {
      id: nanoid(),
      title: title.value,
      createdAt: new Date(),
    });

    title.value = "";
  }
};
</script>

<template>
  <div>
    <textarea
      v-model="title"
      @keydown.tab="createTask"
      @keyup.enter="createTask"
      class="bg-transparent text-gray-300/50 text-sm p-2 mt-4 rounded text-white transition-all cursor-pointer"
      :class="{ 'h-7': !focused, 'h-20': focused }"
      style="outline: none !important; resize: none;"
      @focus="focused = true"
      @blur="focused = false"
      :placeholder="!focused ? '+ Add Task' : 'Title...'"
    >
    </textarea>
  </div>
</template>

<style scoped>

textarea:hover::placeholder {
  color: white
}
</style>

