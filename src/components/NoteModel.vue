<script setup>
import { defineEmits, ref } from "vue";
import { useStore } from "vuex";

const emit = defineEmits(["overlay"]);
const store = useStore();
let newNote = ref("");
const addNote = () => {
  if (!newNote.value) return;

  store
    .dispatch("addNote", {
      text: newNote.value,
      date: new Date().toLocaleDateString(),
    })
    .finally(() => {
      newNote = "";
      emit("overlay");
    });
};
</script>

<template>
  <div
    class="w-full h-full absolute z-10 bg-black bg-opacity-40 flex flex-col items-center justify-center"
  >
    <div class="-translate-y-16 flex flex-col">
      <div class="flex items-start justify-end">
        <textarea
          v-model="newNote"
          class="rounded-t-3xl bg-beige-200 dark:text-stone-900 text-beige-900 outline-none px-6 py-4 shadow-md text-lg"
          name="note"
          id="note"
          cols="40"
          rows="6"
        ></textarea>
        <button
          @click="$emit('overlay')"
          class="absolute m-3 dark:text-stone-900 text-beige-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-5 h-5 dark:text-stone-900"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <button
        @click="addNote"
        style="border-top-width: 3px"
        class="bg-beige-900 dark:bg-stone-900 text-beige-200 rounded-b-3xl l p-1 dark:border-stone-900 border-beige-900 hover:bg-beige-200 hover:text-beige-900 transform duration-200 ease-in-out"
      >
        Add Note
      </button>
    </div>
  </div>
</template>
