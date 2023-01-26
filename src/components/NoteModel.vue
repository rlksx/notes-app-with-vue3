<template>
  <div
    class="w-full h-full absolute z-10 bg-black bg-opacity-40 flex flex-col items-center justify-center"
  >
    <div class="-translate-y-16 flex flex-col">
      <textarea
        class="rounded-t-3xl bg-beige-200 text-beige-900 outline-none px-6 py-4 shadow-md text-lg"
        name="note"
        id="note"
        cols="40"
        rows="6"
      ></textarea>
      <button
        style="border-top-width: 3px"
        class="bg-beige-900 text-beige-200 rounded-b-3xl l p-1 border-beige-900 hover:bg-beige-200 hover:text-beige-900 transform duration-200 ease-in-out"
      >
        Add Note
      </button>
    </div>
  </div>
</template>
