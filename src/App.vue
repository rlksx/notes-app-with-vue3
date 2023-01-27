<script setup>
import { ref } from "vue";
import HeaderPage from "./components/HeaderPage.vue";
import Notebook from "./components/Notebook.vue";
import NoteModel from "./components/NoteModel.vue";

const modelOverlay = ref(false);
const openModel = () => (modelOverlay.value = true);
const closeModel = () => (modelOverlay.value = false);
</script>

<template>
  <!-- NoteModel -->
  <NoteModel v-show="modelOverlay" @overlay="closeModel" />

  <div class="container mx-auto space-y-8 lg:px-32 md:px-32 px-20">
    <!-- header -->
    <HeaderPage @overlay="openModel" />

    <!-- Main -->
    <Notebook />
  </div>
</template>
