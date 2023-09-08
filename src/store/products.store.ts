import { TProducts } from "../types/landing.type";
import { ref } from "vue";

function IProducts(fileName: string) {
  return {
    title: "UX review presentations",
    fileName,
    label: "Label",
    price: "36.000",
    size: 450,
    discprice: "40.000",
    disc: 10,
  };
}

export const flashsale = ref<TProducts[]>([
  IProducts("Bottle"),
  IProducts("Shoes"),
  IProducts("Bottle"),
  IProducts("Bottle"),
  IProducts("Bottle"),
  IProducts("Bottle"),
  IProducts("Shoes"),
  IProducts("Bottle"),
  IProducts("Bottle"),
  IProducts("Bottle"),
]);

export const latestproduct = ref<TProducts[]>([
  IProducts("Bottle"),
  IProducts("Bottle"),
  IProducts("Bottle"),
  IProducts("Bottle"),
  IProducts("Shoes"),
  IProducts("Bottle"),
  IProducts("Bottle"),
  IProducts("Bottle"),
]);

export const foryou = ref<TProducts[]>([
  IProducts("Bottle"),
  IProducts("Bottle"),
  IProducts("Bottle"),
  IProducts("Bottle"),
  IProducts("Bottle"),
  IProducts("Bottle"),
  IProducts("Bottle"),
  IProducts("Bottle"),
  IProducts("Bottle"),
  IProducts("Bottle"),
  IProducts("Bottle"),
  IProducts("Bottle"),
  IProducts("Bottle"),
  IProducts("Bottle"),
  IProducts("Bottle"),
]);
