<template>
  <!-- NoteModel -->
  <NoteModel v-show="this.modelOverlay" @overlay="closeModel"/>

  <div class="container mx-auto space-y-8 lg:px-32 md:px-32 px-20">
    <!-- header -->
    <HeaderPage @overlay="openModel" />

    <!-- Main -->
    <Notebook />
  </div>
</template>

<script>
import HeaderPage from "./components/HeaderPage.vue";
import Notebook from "./components/Notebook.vue";
import NoteModel from "./components/NoteModel.vue";
import { ref } from "vue";

export default {
  name: "App",

  setup() {
    const modelOverlay = ref(false);
    const openModel = () => (modelOverlay.value = true);
    const closeModel = () => (modelOverlay.value = false);

    return {
      modelOverlay,
      openModel,
      closeModel
    };
  },

  components: {
    HeaderPage,
    Notebook,
    NoteModel,
  },
};
</script>
