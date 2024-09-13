<script setup>
const officeopenGoogleMaps = () => {
  const googleMapsUrl = `https://www.google.com/maps?q=${35.7695431},${51.4595716}`;
  window.open(googleMapsUrl, "_blank");
};

const officeopenWaze = () => {
  const wazeUrl = `https://waze.com/ul?ll=${35.7695431},${51.4595716}&navigate=yes`;
  window.open(wazeUrl, "_blank");
};

const officeopenBalad = () => {
  const baladUrl = `balad://navigate?location=${35.7695431},${51.4595716}`;
  window.open(baladUrl, "_blank");
};

const officeopenNeshan = () => {
  const neshanUrl = `neshan://navigate/destination?lat=${35.7695431}&lng=${51.4595716}`;
  window.open(neshanUrl, "_blank");
};

const palaceopenGoogleMaps = () => {
  const googleMapsUrl = `https://www.google.com/maps?q=${35.7927804},${51.3563418}`;
  window.open(googleMapsUrl, "_blank");
};

const palaceopenWaze = () => {
  const wazeUrl = `https://waze.com/ul?ll=${35.7927804},${51.3563418}&navigate=yes`;
  window.open(wazeUrl, "_blank");
};

const palaceopenBalad = () => {
  const baladUrl = `balad://navigate?location=${35.7927804},${51.3563418}`;
  window.open(baladUrl, "_blank");
};

const palaceopenNeshan = () => {
  const neshanUrl = `neshan://navigate/destination?lat=${35.7927804}&lng=${51.3563418}`;
  window.open(neshanUrl, "_blank");
};
</script>
<template>
  <div class="wrapper">
    <nav class="p-4 flex gap-4 w-full justify-start">
      <RouterLink class="bg-[#F3F2ED] px-4 py-2 rounded-xl" to="/"
        >خانه</RouterLink
      >
      <RouterLink class="bg-[#F3F2ED] px-4 py-2 rounded-xl" to="/engagement"
        >عقد</RouterLink
      >
      <RouterLink class="bg-[#c4c2ba] px-4 py-2 rounded-xl" to="/location"
        >لوکیشن</RouterLink
      >
    </nav>
    <div class="px-12 pb-24 flex flex-col gap-8">
      <div class="flex flex-col gap-4">
        <div class="flex flex-col md:flex-row gap-4 justify-between">
          <div class="bg-[#bdc4ba] text-black px-4 py-2 w-max rounded-xl">
            لوکیشن شام:
          </div>
          <div class=" flex flex-wrap gap-4">
            <button
              class="bg-[#bdc4ba] text-black px-4 py-2 w-max rounded-xl"
              @click="palaceopenGoogleMaps"
            >
              Google Maps
            </button>
            <button
              class="bg-[#bdc4ba] text-black px-4 py-2 w-max rounded-xl"
              @click="palaceopenWaze"
            >
              Waze
            </button>
            <button
              class="bg-[#bdc4ba] text-black px-4 py-2 w-max rounded-xl"
              @click="palaceopenBalad"
            >
              بلد
            </button>
            <button
              class="bg-[#bdc4ba] text-black px-4 py-2 w-max rounded-xl"
              @click="palaceopenNeshan"
            >
              نشان
            </button>
          </div>
        </div>
        <div class="flex flex-col md:flex-row gap-4">
          <img src="/palace.jpg" class="w-full md:w-[300px]  h-auto rounded-xl" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.3552142575755!2d51.35658101317705!3d35.79324463133902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0805e1df5fff%3A0x5005dbbf6110316!2sEspinas%20Palace%20Hotel!5e0!3m2!1sen!2s!4v1726230264175!5m2!1sen!2s"
            class="w-full h-[300px] rounded-xl"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div class="flex flex-col  gap-4">
        <div class="flex flex-col md:flex-row gap-4 justify-between">
          <div class="bg-[#bdc4ba] text-black px-4 py-2 w-max rounded-xl">
            لوکیشن دفتر عقد:
          </div>
          <div class="flex flex-wrap gap-4">
            <button
              class="bg-[#bdc4ba] text-black px-4 py-2 w-max rounded-xl"
              @click="officeopenGoogleMaps"
            >
              Google Maps
            </button>
            <button
              class="bg-[#bdc4ba] text-black px-4 py-2 w-max rounded-xl"
              @click="officeopenWaze"
            >
              Waze
            </button>
            <button
              class="bg-[#bdc4ba] text-black px-4 py-2 w-max rounded-xl"
              @click="officeopenBalad"
            >
              بلد
            </button>
            <button
              class="bg-[#bdc4ba] text-black px-4 py-2 w-max rounded-xl"
              @click="officeopenNeshan"
            >
              نشان
            </button>
          </div>
        </div>
        <div class="flex flex-col-reverse md:flex-row gap-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321.9170157786129!2d51.45912019177055!3d35.769675793762076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e05bfd7902c07%3A0xd4ba9685914a67a0!2z2KfYstiv2YjYp9isINi32YTYp9uM24wgdGFsYWVpX29mZmljZQ!5e0!3m2!1sen!2s!4v1726230318531!5m2!1sen!2s"
            class="w-full h-[300px] rounded-xl"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <img src="/office.png" class="w-full md:w-[300px]  h-auto rounded-xl" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  background-image: url("/17901180.jpg");

  background-repeat: no-repeat;
  background-size: cover;
}
</style>
