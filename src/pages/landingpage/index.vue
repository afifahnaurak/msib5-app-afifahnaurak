<script setup lang="ts">
import { categories } from "../../store/categories.store";
import { flashsale, latestproduct, foryou } from "../../store/products.store";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

const modules = [Navigation, Autoplay];
</script>

<template>
  <div class="bg-white pb-20">
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
    <div class="flex justify-between my-6 mx-32 md:mx-32">
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
    <div class="px-32 pb-20 flex justify-between flex-wrap">
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
  </div>
</template>

<style scoped>
.swiper {
  padding: 0 24px;
  overflow: hidden;
}
</style>
