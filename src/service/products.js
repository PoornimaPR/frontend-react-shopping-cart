import axios from "axios";

export const getProducts = () => {
  return axios
    .get("http://localhost:8080/api/products")
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateProducts = (products) => {
  return axios
    .put("http://localhost:8080/api/products/updateProducts", {
      products: products,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
