<template>
  <!-- NoteModel -->
  <NoteModel v-show="this.modelOverlay" @overlay="closeModel" />

  <div class="container mx-auto space-y-8 lg:px-32 md:px-32 px-20">
    <!-- header -->
    <HeaderPage @overlay="showModel" />

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

  props: {},

  methods: {
    showModel() {
      this.modelOverlay = true;
    },

    closeModel() {
      this.modelOverlay = false;
    },
  },
};
</script>
