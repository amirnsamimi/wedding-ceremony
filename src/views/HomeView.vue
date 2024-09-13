<script setup></script>

<template>
  <div
    class="relative flex justify-between items-start md:items-center min-h-screen min-w-screen h-full w-full overflow-hidden"
  >
    <img
      src="/17901171.png"
      class="w-full md:w-2/3 lg:w-1/2 md:h-full absolute bottom-0 rotate-180 object-contain md:translate-x-[25%] md:rotate-90"
      alt=""
    />
    <div class="w-full h-full grid justify-center items-center">
      <div
        style="direction: ltr"
        class="p-12 relative grid top-0 right-0 text-center w-full text-[6rem] md:text-[8rem] lg:text-[8rem] h-full leading-tight justify-center items-center"
      >
        <h1 class="mr-24">Rashin</h1>
        <span class="text-[1rem] md:text-[1rem]"> AND </span>
        <h2 class="ml-24">Amir</h2>
      </div>
      <nav class="p-4 flex gap-4 w-full justify-center">
        <RouterLink class="bg-[#F3F2ED] px-4 py-2 rounded-xl" to="/engagement"
          >عقد</RouterLink
        >
        <RouterLink class="bg-[#F3F2ED] px-4 py-2 rounded-xl" to="/location">لوکیشن</RouterLink>
      </nav>
    </div>
  </div>
</template>

<style scoped>
h1,
h2 {
  font-family: "Alex Brush", cursive;
  color: #b6a781;
}
span {
  font-family: "yek";
}
h3 {
  font-family: "nas";
  color: #b6a781;
}
</style>
