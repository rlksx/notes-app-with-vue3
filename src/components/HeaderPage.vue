<template>
  <header
    style="border-bottom-width: 3px"
    class="pt-12 pb-4 text-6xl flex items-center justify-between text-beige-900 border-beige-900"
  >
    <h1>Notes</h1>
    <button
      @click="$emit('overlay')"
      class="border-4 p-1 border-beige-900 rounded-full"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-10 h-10"
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
