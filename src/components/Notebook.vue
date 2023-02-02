<template>
  <main class="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-8 gap-6">
    <Note v-for="note in store.state.notebook" :key="note.id" :note="note" />
  </main>
</template>

<script setup>
import Note from "./Note.vue";
import { useStore } from "vuex";

const store = useStore();
</script>
