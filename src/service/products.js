import axios from "axios";
const getProductsUrl = "http://localhost:8080/api/products";
const updateAvailProductsUrl =
  "http://localhost:8080/api/products/updateProducts";

export const getProducts = () => {
  return axios
    .get(getProductsUrl)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateProducts = (products) => {
  return axios
    .put(updateAvailProductsUrl, {
      products: products,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
