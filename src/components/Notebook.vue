<template>
  <main class="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-8 gap-6">
    <Note />
  </main>
</template>

<script>
import Note from "./Note.vue";

export default {
  components: {
    Note,
  },
};
</script>
