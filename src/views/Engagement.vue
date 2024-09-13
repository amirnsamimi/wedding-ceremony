<script setup>
import dayjs from "dayjs";

const today = dayjs();
const weddingDay = dayjs("2024-09-22").diff(today, "days");
</script>
<template>
  <nav class="p-4 flex gap-4 w-full justify-start">
    <RouterLink class="bg-[#F3F2ED] px-4 py-2 rounded-xl" to="/"
      >خانه</RouterLink
    >
    <RouterLink class="bg-[#c4c2ba] px-4 py-2 rounded-xl" to="/engagement"
      >عقد</RouterLink
    >
    <RouterLink class="bg-[#F3F2ED] px-4 py-2 rounded-xl" to="/location">لوکیشن</RouterLink>
  </nav>
  <div
    class="relative flex flex-col  mb-0 items-start min-h-screen min-w-screen  w-full overflow-hidden"
  >
    <img
      src="/17901178.png"
      class="w-2/3 lg:w-1/3 absolute top-0 left-0 object-contain"
      alt=""
    />
    <img
      src="/17901180.png"
      class="w-2/3 md:w-1/3 absolute -right-16 top-1/2 md:top-1/3 -rotate-45 object-contain"
      alt=""
    />
    <div class="w-full h-full min-h-screen  grid justify-start items-start">
      <div
        class="px-12  relative grid top-0 right-0 md:right-24 text-center md:text-right w-full h-full leading-normal justify-start items-start"
      >
        <h2 class="text-[1rem] md:text-[1.5rem] mt-32 md:mt-0">
          به نام خالق عشق
        </h2>
        <h1 class="text-[2rem] md:text-[3rem] mt-0 md:mr-12">راشین و امیر</h1>
        <p class="text-[1rem] mt-0 md:mr-24">
          در آغاز زندگی مشترکمان حضورتان در جشن عقدمان یادگار است و خاطره ای
          ماندگار
        </p>
        <div class="flex justify-center mt-0 items-center">
          <div class="date-text ml-12 text-[1.5rem] w-[50px] text-center">
            شنبه
          </div>
          <div class="date-time leading-10 text-[2rem] md:text-[4rem]">
            31
            <div
              class="text-[0.75rem] flex flex-col justify-center items-center md:text-[1.25rem]"
            >
              1403
            </div>
          </div>

          <div class="date-text mr-12 text-[1.5rem] w-[50px] text-center">
            شهریور
          </div>
        </div>
        <div class="flex justify-center  md:mt-12 text-center items-center">
          <div
            class="date-time   text-center text-[2rem] justify-center items-center w-full flex flex-col md:text-[4rem]"
          >
           <div class="bg-[#F3F2ED] text-[#b6a781] rounded-full w-12 h-12 md:w-24 md:h-24">{{ weddingDay }} </div>  <span class="text-base  text-nowrap"> روز باقی مانده </span>
          </div>
        </div>
      </div>
    </div>
 
    <div class=" grid justify-end w-full min-h-max mb-24">
      <div
        class="px-12 relative grid bottom-0 left-0 md:left-24 text-center md:text-right w-full h-max gap-6  justify-start items-start"
      >
        <h4 class="text-[1rem] md:text-[1.5rem]  ">میزبانی عقد:</h4>
        <p class="text-[1rem]">
          خیابان پاسداران، بین بوستان دهم و گلستان یکم، رو به روی کلانتری پاسداران،
          دفتر ازدواج طلایی ,ساعت ۱۷:۱۵
        </p>
        <h4 class="text-[1rem] md:text-[1.5rem] ">میزبانی شام:</h4>
        <p class="text-[1rem]">
          سعادت آباد، انتهای بزرگراه یادگار امام، میدان بهرود، هتل اسپیناس
          پالاس، رستوران دیبا، ساعت ۱۹:۳۰
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
h2,
h1 {
  font-family: "nas";
}
h1 {
  color: #b6a781;
}
.date-text {
  font-family: "nas";
  border-bottom: #b6a781 1px solid;
  border-top: #b6a781 1px solid;
  padding-block: 0.5rem;
}
.date-time {
  font-family: "yek";
  color: #b6a781;
}
</style>
