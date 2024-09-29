<script setup lang="ts">
const a = 1;
const name = "Kuba";
</script>

<template>
  <div class="p-10 h-[100vh] bg-black overflow-auto">
    <h1 class="mb-10">
      <img
        src="https://vueschool.io/img/logo/vueschool_logo_multicolor_negative.svg"
        alt="Vue logo"
        class="h-[40px] mr-4"
      />
    </h1>
    <TrelloBoard />
  </div>
</template>
