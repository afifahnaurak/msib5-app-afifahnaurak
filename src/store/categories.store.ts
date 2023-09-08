import { TCategory } from "../types/landing.type";
import { ref } from "vue";

export const categories = ref<TCategory[]>([
  {
    title: `Men's Fashion`,
    fileName: "Cat-1",
  },
  {
    title: `Women's Fashion`,
    fileName: "Cat-2",
  },
  {
    title: `Bicycle`,
    fileName: "Cat-3",
  },
  {
    title: `Handphone`,
    fileName: "Cat-4",
  },
  {
    title: `Hobbies And Collection`,
    fileName: "Cat-5",
  },
  {
    title: `Household`,
    fileName: "Cat-6",
  },
]);
