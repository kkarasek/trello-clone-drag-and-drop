<script setup lang="ts">
import { nextTick } from "vue";
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

const newColumnRef = ref<HTMLInputElement | null>(null);

const createColumn = async () => {
  const column: Column = {
    id: nanoid(),
    title: "",
    tasks: [],
  };

  columns.value.push(column);
  await nextTick();
  (
    document.querySelector(".column:last-of-type input") as HTMLInputElement
  )?.focus();
};
</script>

<template>
  <div class="flex items-start gap-4 overflow-x-auto">
    <draggable
      v-model="columns"
      group="columns"
      item-key="id"
      handle="#drag-handle"
      :animation="150"
      class="flex gap-4 items-start"
    >
      <template #item="{ element: column }: { element: Column }">
        <div
          class="column bg-transparent border border-gray-300/50 p-5 rounded min-w-[250px] min-h-[300px]"
        >
          <header class="flex gap-1 text-white text-xl font-semibold">
            <DragHandle />
            <span id="column-title" class="sr-only">Column Title</span>
            <input
              type="text"
              v-model="column.title"
              class="w-full bg-transparent focus-visible:outline-none"
              @keyup.enter="($event.target as HTMLInputElement).blur()"
              @keydown.backspace="column.title === '' ? columns = columns.filter(c => c.id !== column.id) : null"
              aria-labelledby="column-title"
            />
          </header>
          <draggable
            v-model="column.tasks"
            :group="{ name: 'tasks', pull: altKey ? 'clone' : true }"
            item-key="id"
            :animation="150"
          >
            <template #item="{ element: task }: { element: Task }">
              <div>
                <TrelloBoardTask
                  :task="task"
                  @delete-task="
                    column.tasks = column.tasks.filter((t) => t.id !== $event)
                  "
                />
              </div>
            </template>
          </draggable>
          <footer>
            <TrelloBoardNewTask @add-task="column.tasks.push($event)" />
          </footer>
        </div>
      </template>
    </draggable>
    <AddColumnButton @add-column="createColumn" />
  </div>
</template>
