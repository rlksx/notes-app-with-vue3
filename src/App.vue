<template>
  <div class="container mx-auto space-y-8 lg:px-32 md:px-32 px-20">
    <!-- header -->
    <Header />

    <!-- Main -->
    <Notebook />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Notebook from "./components/Notebook.vue";

export default {
  name: "App",
  components: {
    Header,
    Notebook,
  },
};
</script>
<style></style>
