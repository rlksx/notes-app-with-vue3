<template>
  <div
    class="h-64 bg-beige-900 dark:bg-beige-200 rounded-3xl px-5 py-4 flex flex-col justify-between dark:text-stone-900 text-beige-200"
  >
    <p class="lg:text-lg break-words overflow-hidden">
      <textarea
        v-model="text"
        cols="30"
        rows="10"
        class="h-full w-full resize-none outline-none bg-beige-200 whitespace-nowrap"
        @keyup.prevent.enter="updateNote"
        @focusin="checkModalIn"
        @focusout="checkModalout"
      ></textarea>
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
          class="w-5 h-5 text-beige-200 hover:text-beige-900"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
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

const text = ref(props.note.text);
const updateNote = () => {
  const payload = {
    id: props.note.id,
    data: {
      text: text.value,
    },
  };
  store.dispatch("putNote", payload);
};

const checkModalIn = () => {

}
</script>
