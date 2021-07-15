import axios from "axios";

const API_URL = process.env.PUBLIC_URL;

// API to get products from mock server
export const getProducts = function() {
  let URL = "";
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    URL = API_URL + "/mock-server/product-demo1.json";
  } else {
    URL = `/mock-server/product-demo1.json`;
  }
  return axios
    .get(URL)
    .then(function(response) {
      console.log("API", API_URL);
      console.log(response);
      return response.data;
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
};
