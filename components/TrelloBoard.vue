<script setup lang="ts">
import { nanoid } from "nanoid";
import type { Column } from "~/types";

const columns = ref<Column[]>([
  {
    title: "Backlog",
    id: nanoid(),
    tasks: [
      { id: nanoid(), title: "Add GET endpoint", createdAt: new Date() },
      { id: nanoid(), title: "Set up GitHub actions", createdAt: new Date() },
      {
        id: nanoid(),
        title: "Fix CSS layout in Cart sidebar",
        createdAt: new Date(),
      },
    ],
  },
  {
    title: "Ready For Dev",
    id: nanoid(),
    tasks: [],
  },
  {
    title: "In Progress",
    id: nanoid(),
    tasks: [],
  },
  {
    title: "In QA",
    id: nanoid(),
    tasks: [],
  },
  {
    title: "Done",
    id: nanoid(),
    tasks: [],
  },
]);
</script>

<template>
  <div class="flex gap-4 overflow-x-auto items-start">
    <div
      v-for="column in columns"
      :id="column.id"
      class="column bg-transparent border border-gray-300/50 p-5 rounded min-w-[250px]"
    >
      <header class="text-white text-xl font-semibold">{{ column.title }}</header>
      <TrelloBoardTask
        v-for="task in column.tasks"
        :key="task.id"
        :task="task"
        class="mt-4"
      />
      <footer>
        <button class="bg-transparent text-gray-300/50 text-sm p-2 mt-4 rounded  hover:text-white transition-all">+ Add New Task</button>
      </footer>
    </div>
  </div>
</template>
