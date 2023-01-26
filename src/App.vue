<template>
  <div class="container mx-auto space-y-8 lg:px-32 md:px-32 px-20">
    <!-- header -->
    <HeaderNotes />

    <!-- Main -->
    <MainNotes />
  </div>
</template>

<script>
import HeaderNotes from "./components/HeaderNotes.vue";
import MainNotes from "./components/MainNotes.vue";

export default {
  name: "App",
  components: {
    HeaderNotes,
    MainNotes,
  },
};
</script>
<style></style>
