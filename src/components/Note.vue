<template>
  <div
    class="h-64 bg-beige-900 dark:bg-beige-200 rounded-3xl px-5 py-4 flex flex-col justify-between dark:text-stone-900 text-beige-200"
  >
    <p class="lg:text-lg break-words">
      {{ note.text }}
    </p>
    <div class="flex justify-between items-baseline">
      <p>{{ note.date }}</p>
      <button
        class="bg-beige-200 dark:bg-stone-900 rounded-full p-1.5 text-beige-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 dark:text-beige-200 p-0.5 dark:hover:text-beige-900"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const props = defineProps({
  note: Object,
});
</script>
