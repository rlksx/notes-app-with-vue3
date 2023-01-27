<template>
  <header
    style="border-bottom-width: 3px"
    class="pt-12 pb-4 text-6xl flex items-center justify-between dark:text-beige-200 dark:border-beige-200 text-beige-900 border-beige-900"
  >
    <h1>Notes</h1>
    <button
      @click="$emit('overlay')"
      class="border-4 p-1 dark:hover:border-beige-900 border-beige-200 rounded-full transform duration-150 ease-in-out m-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-10 h-10 dark:text-beige-200 dark:hover:text-beige-900"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </button>
  </header>
</template>
