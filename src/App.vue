<script setup>
import { RouterView } from "vue-router";
import "./assets/main.css";
import { onMounted, ref } from "vue";
import { useSoundStore } from "./stores/sound";

const soundStore = useSoundStore();
  

const showModal = ref(false);
onMounted(() => {
  setTimeout(() => {
    if(!soundStore.getSound()){
      showModal.value = true;
    }
  }, 2000);
  setTimeout(() => {
    showModal.value = false;
  }, 5000);
});
</script>

<template>
  <div class="absolute top-4 left-4">
    <div v-if="soundStore.getSound()" @click="soundStore.soundHandler()" class="relative z-50">
      <img src="/sound-on.svg" alt="sound" class="w-6 h-6" />
    </div>
    <div v-else id="click" @click="soundStore.soundHandler()" class="relative z-50">
      <img src="/sound-off.svg" alt="sound" class="w-6 h-6" />
    </div>
    <div
      :class="{
        'opacity-100 scale-100': showModal,
        'opacity-0 scale-95 pointer-events-none': !showModal,
      }"
      class="absolute transition opacity-0 duration-300 left-0 top-8 bg-[#F3F2ED] rounded-xl px-4 py-4"
    >
      <div
        class="border-[#F3F2ED] w-4 h-4 absolute -top-1 left-1 border-l-8 border-r-8 border-t-4 border-b-4 rotate-45"
      ></div>
      موسیقی
    </div>
  </div>
  <RouterView />
</template>
<style scoped></style>
