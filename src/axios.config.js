import axios from "axios";

const base_url = `https://demoprog4.perxclm2.com/public/portal/sigma-prime/`;

// const base_url = `http://demoprogram.perxclm2.com/public/portal/sigma-prime/`;
const access_token = localStorage.getItem("access_token");

axios.defaults.baseURL = base_url;
axios.defaults.timeout = 20000;
axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Access-Control-Allow-Methods"] =
  "GET,PUT,POST,DELETE,PATCH,OPTIONS";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

const pages = {
  productAPI: `/mock-server/product-demo1.json`,
  auction: `auction/sigma-prime/`,
  states: `states`,
  countries: `countries`,
  cities: `cities`,
  survey: `survey`,
};
axios.interceptors.request.use(
  (request) => {
    if (!request.url.includes("pages/login")) {
      const access_token = localStorage.getItem("access_token");
      request.headers.common["Authorization"] = `Bearer ${access_token}`;
    }

    if (request.url.includes(pages.productAPI)) {
      if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
        request.url = `http://localhost:3001${request.url}`;
      } else {
        const origin = window.location.origin;
        // const path = "demo_perx2_season/portals/customer";
        request.url = `${origin}${request.url}`;
      }
    }

    if (
      request.url.includes(pages.states) ||
      request.url.includes(pages.cities) ||
      request.url.includes(pages.countries) ||
      request.url.includes(pages.survey) ||
      request.url.includes(pages.auction)
    ) {
      // const base_url = `http://demoprogram.perxclm2.com/public/portal/`;
      const base_url = `https://demoprog4.perxclm2.com/public/portal/sigma-prime/`;

      request.url = `${base_url}${request.url}`;
    }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const guest = ["/pages/login", "/forgot-password", "/reset-password"];

axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    var pathname = window.location.pathname;

    if (error.response && error.response.status === 401) {
      if (!guest.includes(pathname)) {
        window.location.href = "/pages/login?login_failed=true";
      }
    }

    return Promise.reject(error);
  }
);
