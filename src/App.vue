<template>
  <!-- NoteModel -->
  <NoteModel v-if="this.modelOverlay"/>

  <div class="container mx-auto space-y-8 lg:px-32 md:px-32 px-20">
    <!-- header -->
    <HeaderPage @close="closeModel" />

    <!-- Main -->
    <Notebook />
  </div>
</template>

<script>
import HeaderPage from "./components/HeaderPage.vue";
import Notebook from "./components/Notebook.vue";
import NoteModel from "./components/NoteModel.vue";

export default {
  name: "App",

  data() {
    return {
      modelOverlay: false,
    };
  },

  components: {
    HeaderPage,
    Notebook,
    NoteModel,
  },

  methods: {
    closeModel() {
      console.log("oiin");
      this.modelOverlay = true;
    },
  },
};
</script>
