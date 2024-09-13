import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSoundStore = defineStore('sound', () => {
  const sound = ref(false);
  const musicUrl = "/esh.mp3";
  const audio = new Audio(musicUrl);
  //move it to app vue
  const soundHandler = () => {
    sound.value = !sound.value;
    audio.currentTime = 62;
    if (sound.value) {
      audio.play();
    } else {
      audio.pause();
    }

    
  };
  function getSound() {
    return sound.value
  }
  return { getSound ,soundHandler }
})
