<script setup lang="ts">
import { categories } from "../../store/categories.store";
import { flashsale, latestproduct, foryou } from "../../store/products.store";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

const modules = [Navigation, Autoplay];
</script>

<template>
  <div class="bg-white">
    <div class="bg-gradient-to-b from-primary from-30%">
      <div class="flex justify-between">
        <div class="my-auto mx-auto pl-32">
          <div class="text-5xl font-poppins font-semibold text-secondary">
            Welcome to GITS Commerce
          </div>
          <p class="max-w-sm text-gray-600 my-6 font-poppins">
            Morpheme is a next-gen financial technology company in the process
            of reinventing banking.
          </p>
          <button
            class="font-poppins flex justify-evenly gap-2 mt-6 bg-sky-600 py-3 px-4 text-sm text-white border-sky-600 font-medium hover:bg-sky-800 rounded-md"
          >
            <img src="/src/assets/Cart.svg" width="20" />
            Start Shopping
          </button>
        </div>
        <div>
          <img src="/src/assets/Landing.png" width="800" />
        </div>
      </div>
    </div>
    <div class="flex justify-between my-6 md:mx-32">
      <div class="font-poppins font-bold text-secondary text-lg">
        Categories
      </div>
      <div
        class="flex justify-evenly gap-2 text-sky-600 font-poppins font-bold text-sm"
      >
        <div class="mt-1">View All</div>
        <img src="/src/assets/Arrow-Right.svg" width="20" />
      </div>
    </div>
    <div class="px-32 pb-20 flex justify-between">
      <div
        class="place-items-center text-center"
        v-for="item in categories"
        :key="item.title"
      >
        <img
          :src="`/src/assets/cat/${item.fileName}.svg`"
          width="90"
          class="mx-7 text-center"
        />
        <div class="mt-4 font-poppins font-medium w-[150px]">
          {{ item.title }}
        </div>
      </div>
    </div>
    <div class="bg-slate-50 py-12 font-poppins">
      <div class="flex justify-between mb-6 mx-auto px-32">
        <div class="flex justify-evenly gap-2">
          <div class="font-bold text-secondary text-lg">Flash Sale</div>
          <div class="font-medium text-white bg-red-500 rounded-md py-1 px-2">
            00 : 12 : 12
          </div>
        </div>
        <div
          class="flex justify-evenly gap-2 text-sky-600 font-poppins font-bold text-sm"
        >
          <div class="mt-1.5">View All</div>
          <img src="/src/assets/Arrow-Right.svg" width="20" />
        </div>
      </div>
      <div class="px-24">
        <Swiper
          :modules="modules"
          :slides-per-view="5"
          :space-between="25"
          :loop="true"
          :navigation="{ enabled: true, nextEl: '.swiper-button-next' }"
          :autoplay="{
            delay: 7000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }"
        >
          <SwiperSlide v-for="item in flashsale" :key="item.title">
            <div
              class="h-auto w-auto border-solid border border-slate-200 rounded-lg overflow-hidden"
            >
              <div class="p-2 bg-gray-100">
                <img
                  :src="`/src/assets/${item.fileName}.png`"
                  width="200"
                  class="items-center"
                />
              </div>
              <div
                class="flex-start box-border h-auto p-4 border-0 bg-white text-secondary"
              >
                <div
                  class="box-border w-16 text-center text-xs font-medium bg-gray-100 rounded-full py-1 px-2"
                >
                  {{ item.label }}
                </div>
                <div class="mt-3 text-sm">{{ item.title }}</div>
                <div class="flex justify-between mt-2">
                  <div class="font-semibold">Rp {{ item.price }}</div>
                  <div class="mt-1 text-[11px] text-gray-400">
                    {{ item.size }} ML
                  </div>
                </div>
                <div class="flex justify-start">
                  <div class="line-through text-[10px] text-gray-400 mt-1 mr-1">
                    Rp {{ item.discprice }}
                  </div>
                  <div
                    class="box-border w-auto text-center text-[10px] text-red-600 font-semibold bg-red-50 rounded-full py-1 px-2"
                  >
                    -{{ item.disc }}%
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div
            class="swiper-button-next w-8 h-8 bg-gray-400 absolute z-10 right-0 top-[165px] rounded-full mr-2 mb-12"
          >
            <img src="src/assets/Right.svg" />
          </div>
        </Swiper>
      </div>
    </div>
    <div class="flex justify-between mt-16 mb-6 mx-auto px-32">
      <div class="font-poppins font-bold text-secondary text-lg">
        Latest Product
      </div>
      <div
        class="flex justify-evenly gap-2 text-sky-600 font-poppins font-bold text-sm"
      >
        <div class="mt-1">View All</div>
        <img src="/src/assets/Arrow-Right.svg" width="20" />
      </div>
    </div>
    <div class="px-24 ml-8">
      <div
        class="flex-start box-border h-auto w-[263px] p-4 border-0 bg-sky-500 rounded-2xl text-secondary font-poppins"
      >
        <div class="self-stretch text-2xl text-white mt-4">Discount</div>
        <div class="self-stretch text-5xl font-bold text-white leading-[60px]">
          More and More
        </div>
        <div class="text-2xl text-white mt-12">Up To</div>
        <div class="text-5xl font-bold text-yellow-300 mt-2 mb-4">50%</div>
      </div>
      <div class="pl-44 mt-[-380px]">
        <Swiper
          :modules="modules"
          :slides-per-view="4"
          :space-between="25"
          :loop="true"
          :navigation="{ enabled: true, nextEl: '.swiper-button-next' }"
          :autoplay="{
            delay: 7000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }"
        >
          <SwiperSlide v-for="item in latestproduct" :key="item.title">
            <div
              class="h-auto w-auto border-solid border border-slate-200 rounded-lg overflow-hidden"
            >
              <div class="p-2 bg-gray-100">
                <img
                  :src="`/src/assets/${item.fileName}.png`"
                  width="200"
                  class="items-center"
                />
              </div>
              <div
                class="flex-start box-border h-auto p-4 border-0 bg-white text-secondary"
              >
                <div
                  class="box-border w-16 text-center text-xs font-medium bg-gray-100 rounded-full py-1 px-2"
                >
                  {{ item.label }}
                </div>
                <div class="mt-3 text-sm">{{ item.title }}</div>
                <div class="flex justify-between mt-2">
                  <div class="font-semibold">Rp {{ item.price }}</div>
                  <div class="mt-1 text-[11px] text-gray-400">
                    {{ item.size }} ML
                  </div>
                </div>
                <div class="flex justify-start">
                  <div class="line-through text-[10px] text-gray-400 mt-1 mr-1">
                    Rp {{ item.discprice }}
                  </div>
                  <div
                    class="box-border w-auto text-center text-[10px] text-red-600 font-semibold bg-red-50 rounded-full py-1 px-2"
                  >
                    -{{ item.disc }}%
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div
            class="swiper-button-next w-8 h-8 bg-gray-400 absolute z-10 right-0 top-[165px] rounded-full mr-2 mb-12"
          >
            <img src="src/assets/Right.svg" />
          </div>
        </Swiper>
      </div>
    </div>
    <div class="flex justify-between mt-24 mx-auto px-32">
      <div class="font-poppins font-bold text-secondary text-lg">Promo</div>
    </div>
    <div
      class="mx-32 my-4 box-border md:box-content h-36 w-auto p-4 bg-gray-300 border border-solid border-slate-200 rounded-3xl"
    ></div>
    <div class="flex justify-between mt-16 mb-6 mx-auto px-32">
      <div class="font-poppins font-bold text-secondary text-lg">
        Latest Product
      </div>
      <div
        class="flex justify-evenly gap-2 text-sky-600 font-poppins font-bold text-sm"
      >
        <div class="mt-1">View All</div>
        <img src="/src/assets/Arrow-Right.svg" width="20" />
      </div>
    </div>
    <div class="px-24 ml-8">
      <div
        class="flex-start box-border h-auto w-[263px] p-4 border-0 bg-sky-500 rounded-2xl text-secondary font-poppins"
      >
        <div class="self-stretch text-2xl text-white mt-4">Discount</div>
        <div class="self-stretch text-5xl font-bold text-white leading-[60px]">
          More and More
        </div>
        <div class="text-2xl text-white mt-12">Up To</div>
        <div class="text-5xl font-bold text-yellow-300 mt-2 mb-4">50%</div>
      </div>
      <div class="pl-44 mt-[-380px]">
        <Swiper
          :modules="modules"
          :slides-per-view="4"
          :space-between="25"
          :loop="true"
          :navigation="{ enabled: true, nextEl: '.swiper-button-next' }"
          :autoplay="{
            delay: 7000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }"
        >
          <SwiperSlide v-for="item in latestproduct" :key="item.title">
            <div
              class="h-auto w-auto border-solid border border-slate-200 rounded-lg overflow-hidden"
            >
              <div class="p-2 bg-gray-100">
                <img
                  :src="`/src/assets/${item.fileName}.png`"
                  width="200"
                  class="items-center"
                />
              </div>
              <div
                class="flex-start box-border h-auto p-4 border-0 bg-white text-secondary"
              >
                <div
                  class="box-border w-16 text-center text-xs font-medium bg-gray-100 rounded-full py-1 px-2"
                >
                  {{ item.label }}
                </div>
                <div class="mt-3 text-sm">{{ item.title }}</div>
                <div class="flex justify-between mt-2">
                  <div class="font-semibold">Rp {{ item.price }}</div>
                  <div class="mt-1 text-[11px] text-gray-400">
                    {{ item.size }} ML
                  </div>
                </div>
                <div class="flex justify-start">
                  <div class="line-through text-[10px] text-gray-400 mt-1 mr-1">
                    Rp {{ item.discprice }}
                  </div>
                  <div
                    class="box-border w-auto text-center text-[10px] text-red-600 font-semibold bg-red-50 rounded-full py-1 px-2"
                  >
                    -{{ item.disc }}%
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div
            class="swiper-button-next w-8 h-8 bg-gray-400 absolute z-10 right-0 top-[165px] rounded-full mr-2 mb-12 items-center"
          >
            <img src="src/assets/Right.svg" />
          </div>
        </Swiper>
      </div>
    </div>
    <div class="flex justify-between mt-24 mb-6 mx-auto px-32 font-poppins">
      <div class="font-poppins font-bold text-secondary text-lg">For You</div>
      <div
        class="flex justify-evenly gap-2 text-sky-600 font-poppins font-bold text-sm"
      >
        <div class="mt-1">View All</div>
        <img src="/src/assets/Arrow-Right.svg" width="20" />
      </div>
    </div>
    <div class="px-32 grid grid-cols-5 gap-4 font-poppins">
      <div
        class="h-auto w-auto border-solid border border-slate-200 rounded-lg overflow-hidden"
        v-for="item in foryou"
        :key="item.title"
      >
        <div class="p-2 bg-gray-100">
          <img
            :src="`/src/assets/${item.fileName}.png`"
            width="200"
            class="items-center"
          />
        </div>
        <div
          class="flex-start box-border h-auto p-4 border-0 bg-white text-secondary"
        >
          <div
            class="box-border w-16 text-center text-xs font-medium bg-gray-100 rounded-full py-1 px-2"
          >
            {{ item.label }}
          </div>
          <div class="mt-3 text-sm">{{ item.title }}</div>
          <div class="flex justify-between mt-2">
            <div class="font-semibold">Rp {{ item.price }}</div>
            <div class="mt-1 text-[11px] text-gray-400">{{ item.size }} ML</div>
          </div>
          <div class="flex justify-start">
            <div class="line-through text-[10px] text-gray-400 mt-1 mr-1">
              Rp {{ item.discprice }}
            </div>
            <div
              class="box-border w-auto text-center text-[10px] text-red-600 font-semibold bg-red-50 rounded-full py-1 px-2"
            >
              -{{ item.disc }}%
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-20 py-12 items-center h-[150px] bg-gray-900 font-poppins">
      <div class="flex justify-between">
        <div>
          <div class="mx-32 text-white text-base font-semibold leading-[30px]">
            Join our newsletter
          </div>
          <div class="mx-32 text-gray-200 text-sm font-normal leading-normal">
            Join over 4,000+ startups already growing with Morpheme.
          </div>
        </div>
        <div class="flex-row">
          <div class="flex justify-evenly mr-32 gap-3">
            <form
              class="h-8 w-52 bg-white pt-[9px] px-2 rounded-md text-gray-500 text-xs font-normal leading-tight"
            >
              Enter your email
            </form>
            <button
              class="h-8 w-20 px-2 rounded-md bg-sky-600 hover:bg-sky-700 pt-0.5 text-center text-white text-xs font-normal leading-tight"
            >
              Subscribe
            </button>
          </div>
          <div class="mr-32 my-2 text-white">
            <img src="/src/assets/Info.svg" />
          </div>
        </div>
      </div>
    </div>
    <div class="py-12 items-center h-[420px] bg-slate-800 font-poppins">
      <div class="flex justify-between">
        <div>
          <div class="flex flex-start mx-32 gap-x-2">
            <img src="src/assets/Content.svg" width="30" />
            <img src="src/assets/Gits2.png" width="110" />
          </div>
          <div
            class="ml-32 mt-6 w-64 text-gray-200 text-sm font-normal leading-normal"
          >
            Design amazing digital experiences that create more happy in the
            world.
          </div>
        </div>
        <div class="text-white ml-20 mr-44 mb-8">
          <div
            class="grow shrink basis-0 h-60 justify-start items-start gap-16 flex"
          >
            <div
              class="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex"
            >
              <div
                class="self-stretch text-gray-300 text-sm font-medium leading-tight"
              >
                Product
              </div>
              <div
                class="self-stretch h-[204px] w-[85px] flex-col justify-start items-start gap-3 flex"
              >
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="justify-center items-center gap-2 flex">
                    <div
                      class="text-gray-200 text-base font-medium leading-normal"
                    >
                      Overview
                    </div>
                  </div>
                </div>
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="justify-center items-center gap-2 flex">
                    <div
                      class="text-gray-200 text-base font-medium leading-normal"
                    >
                      Features
                    </div>
                  </div>
                </div>
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="justify-center items-center gap-2 flex">
                    <div
                      class="text-gray-200 text-base font-medium leading-normal"
                    >
                      Solutions
                    </div>
                  </div>
                  <div
                    class="px-2 py-0.5 bg-white bg-opacity-10 rounded-2xl border border-white border-opacity-30 justify-start items-center flex"
                  >
                    <div
                      class="text-center text-white text-xs font-sm leading-[15px]"
                    >
                      New
                    </div>
                  </div>
                </div>
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="justify-center items-center gap-2 flex">
                    <div
                      class="text-gray-200 text-base font-medium leading-normal"
                    >
                      Tutorials
                    </div>
                  </div>
                </div>
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="justify-center items-center gap-2 flex">
                    <div
                      class="text-gray-200 text-base font-medium leading-normal"
                    >
                      Pricing
                    </div>
                  </div>
                </div>
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="justify-center items-center gap-2 flex">
                    <div
                      class="text-gray-200 text-base font-medium leading-normal"
                    >
                      Releases
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex"
            >
              <div
                class="self-stretch text-gray-300 text-sm font-medium leading-tight"
              >
                Company
              </div>
              <div
                class="self-stretch h-[204px] w-[74px] flex-col justify-start items-start gap-3 flex"
              >
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="justify-center items-center gap-2 flex">
                    <div
                      class="text-gray-200 text-base font-medium leading-normal"
                    >
                      About us
                    </div>
                  </div>
                </div>
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="justify-center items-center gap-2 flex">
                    <div
                      class="text-gray-200 text-base font-medium leading-normal"
                    >
                      Careers
                    </div>
                  </div>
                </div>
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="justify-center items-center gap-2 flex">
                    <div
                      class="text-gray-200 text-base font-medium leading-normal"
                    >
                      Press
                    </div>
                  </div>
                </div>
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="justify-center items-center gap-2 flex">
                    <div
                      class="text-gray-200 text-base font-medium leading-normal"
                    >
                      News
                    </div>
                  </div>
                </div>
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="justify-center items-center gap-2 flex">
                    <div
                      class="text-gray-200 text-base font-medium leading-normal"
                    >
                      Media kit
                    </div>
                  </div>
                </div>
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="justify-center items-center gap-2 flex">
                    <div
                      class="text-gray-200 text-base font-medium leading-normal"
                    >
                      Contact
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex -mr-2"
            >
              <div
                class="self-stretch text-gray-300 text-sm font-medium leading-tight"
              >
                Resources
              </div>
              <div
                class="self-stretch h-[204px] w-[93px] flex-col justify-start items-start gap-3 flex"
              >
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="justify-center items-center gap-2 flex">
                    <div
                      class="text-gray-200 text-base font-medium leading-normal"
                    >
                      Blog
                    </div>
                  </div>
                </div>
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="justify-center items-center gap-2 flex">
                    <div
                      class="text-gray-200 text-base font-medium leading-normal"
                    >
                      Newsletter
                    </div>
                  </div>
                </div>
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="justify-center items-center gap-2 flex">
                    <div
                      class="text-gray-200 text-base font-medium leading-normal"
                    >
                      Events
                    </div>
                  </div>
                </div>
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="justify-center items-center gap-2 flex">
                    <div
                      class="text-gray-200 text-base font-medium leading-normal"
                    >
                      Help centre
                    </div>
                  </div>
                </div>
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="justify-center items-center gap-2 flex">
                    <div
                      class="text-gray-200 text-base font-medium leading-normal"
                    >
                      Tutorials
                    </div>
                  </div>
                </div>
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="justify-center items-center gap-2 flex">
                    <div
                      class="text-gray-200 text-base font-medium leading-normal"
                    >
                      Support
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex"
            >
              <div
                class="self-stretch text-gray-300 text-sm font-medium leading-tight"
              >
                Social
              </div>
              <div
                class="self-stretch h-[204px] w-[65px] flex-col justify-start items-start gap-3 flex"
              >
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="justify-center items-center gap-2 flex">
                    <div
                      class="text-gray-200 text-base font-medium leading-normal"
                    >
                      Twitter
                    </div>
                  </div>
                </div>
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="justify-center items-center gap-2 flex">
                    <div
                      class="text-gray-200 text-base font-medium leading-normal"
                    >
                      LinkedIn
                    </div>
                  </div>
                </div>
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="justify-center items-center gap-2 flex">
                    <div
                      class="text-gray-200 text-base font-medium leading-normal"
                    >
                      Facebook
                    </div>
                  </div>
                </div>
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="justify-center items-center gap-2 flex">
                    <div
                      class="text-gray-200 text-base font-medium leading-normal"
                    >
                      GitHub
                    </div>
                  </div>
                </div>
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="justify-center items-center gap-2 flex">
                    <div
                      class="text-gray-200 text-base font-medium leading-normal"
                    >
                      AngelList
                    </div>
                  </div>
                </div>
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="justify-center items-center gap-2 flex">
                    <div
                      class="text-gray-200 text-base font-medium leading-normal"
                    >
                      Dribbble
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex"
            >
              <div
                class="self-stretch text-gray-300 text-sm font-medium leading-tight"
              >
                Legal
              </div>
              <div
                class="self-stretch h-[204px] w-[65px] flex-col justify-start items-start gap-3 flex"
              >
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="justify-center items-center gap-2 flex">
                    <div
                      class="text-gray-200 text-base font-medium leading-normal"
                    >
                      Terms
                    </div>
                  </div>
                </div>
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="justify-center items-center gap-2 flex">
                    <div
                      class="text-gray-200 text-base font-medium leading-normal"
                    >
                      Privacy
                    </div>
                  </div>
                </div>
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="justify-center items-center gap-2 flex">
                    <div
                      class="text-gray-200 text-base font-medium leading-normal"
                    >
                      Cookies
                    </div>
                  </div>
                </div>
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="justify-center items-center gap-2 flex">
                    <div
                      class="text-gray-200 text-base font-medium leading-normal"
                    >
                      Licenses
                    </div>
                  </div>
                </div>
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="justify-center items-center gap-2 flex">
                    <div
                      class="text-gray-200 text-base font-medium leading-normal"
                    >
                      Settings
                    </div>
                  </div>
                </div>
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="justify-center items-center gap-2 flex">
                    <div
                      class="text-gray-200 text-base font-medium leading-normal"
                    >
                      Contact
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-32 pt-6 flex-col justify-start items-start gap-8 flex">
        <div
          class="self-stretch pt-6 border-t border-slate-600 justify-start items-center gap-8 inline-flex"
        >
          <div
            class="grow shrink basis-0 text-gray-500 text-base font-normal leading-normal"
          >
            © 2077 Morpheme UI. All rights reserved.
          </div>
          <div class="justify-start items-center gap-6 flex">
            <div class="w-6 h-6 relative">
              <img src="/src/assets/Twitter.svg" />
            </div>
            <div class="w-6 h-6 justify-center items-center flex">
              <img src="/src/assets/Linkedin.svg" />
            </div>
            <div class="w-6 h-6 relative">
              <img src="/src/assets/Facebook.svg" />
            </div>
            <div class="w-6 h-6 relative">
              <img src="/src/assets/Github.svg" />
            </div>
            <div class="w-6 h-6 relative">
              <img src="/src/assets/Peace.svg" />
            </div>
            <div class="w-6 h-6 relative">
              <img src="/src/assets/Ball.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.swiper {
  padding: 0 24px;
  overflow: hidden;
}
</style>
