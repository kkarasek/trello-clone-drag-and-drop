<script setup lang="ts">
import { nanoid } from "nanoid";
import draggable from "vuedraggable";

import type { Column, Task } from "~/types";

const columns = ref<Column[]>([
  {
    title: "Backlog 📦",
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
    title: "Ready For Dev 🚀",
    id: nanoid(),
    tasks: [],
  },
  {
    title: "In Progress 🛠",
    id: nanoid(),
    tasks: [],
  },
  {
    title: "In QA 🧪",
    id: nanoid(),
    tasks: [],
  },
  {
    title: "Done 🎉",
    id: nanoid(),
    tasks: [],
  },
]);

const altKey = useKeyModifier("Alt");
</script>

<template>
  <div>
    <draggable
      v-model="columns"
      group="columns"
      item-key="id"
      handle="#drag-handle"
      :animation="150"
      class="flex gap-4 overflow-x-auto items-start"
    >
      <template #item="{ element: column }: { element: Column }">
        <div
          class="column bg-transparent border border-gray-300/50 p-5 rounded min-w-[250px] min-h-[300px]"
        >
          <header class="text-white text-xl font-semibold">
            <DragHandle />
            {{ column.title }}
          </header>
          <draggable
            v-model="column.tasks"
            :group="{ name: 'tasks', pull: altKey ? 'clone' : true }"
            item-key="id"
            :animation="150"
          >
            <template #item="{ element: task }: { element: Task }">
              <div>
                <TrelloBoardTask :task="task" />
              </div>
            </template>
          </draggable>
          <footer>
            <NewTask @add-task="(task) => column.tasks.push(task)" />
          </footer>
        </div>
      </template>
    </draggable>
  </div>
</template>
