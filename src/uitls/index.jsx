import axios from "axios";

const productionUrl = "hhttps://api.istomshop.ru/";

export const customFetch = axios.create({
  baseURL: productionUrl,
});
