/**
 * Handle context state change
 * @return { bool }
 */
export const isStateHandled = function(state) {
  // console.log('STATE DATA ', state.data)
  if (state.data !== null) {
    if (state.data.status === 1 ) {
      return { status: true, message: state.data.message };
    }

    if (state.data.status === 0 ) {
      return { status: false, message: state.data.message };
    }
  }
};

export function formatNumber(num) {
  num = Math.round(num);
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

/**
 * Is Internet Explorer?
 * @return { bool }
 */
export const isIEBrowser = function() {
  let sUsrAg = navigator.userAgent;
  if (sUsrAg.indexOf("Trident") > -1) return true;
  return false;
};

/**
 * Is Firefox Explorer?
 * @return { bool }
 */
export const isFirefoxBrowser = function() {
  let sUsrAg = navigator.userAgent;
  if (sUsrAg.indexOf("Firefox") > -1) return true;
  return false;
};

/**
 * Is Edge Explorer?
 * @return { bool }
 */
export const isEdgeBrowser = function() {
  let sUsrAg = navigator.userAgent;
  if (sUsrAg.indexOf("Edge") > -1) return true;
  return false;
};

/**
 * Is Safari?
 * @return { bool }
 */
export const isSafari = function() {
  let sUsrAg = navigator.userAgent;
  if (sUsrAg.indexOf("Safari") !== -1 && sUsrAg.indexOf("Chrome") === -1)
    return true;
  return false;
};

/**
 * handle Sticky Header
 * @param { Element } stickyHeader
 * @param { Number } limit
 * @param { String } addClass
 */
function stickyHandler(stickyHeader, limit, addClass = "fixed") {
  if (window.pageYOffset >= limit && window.outerWidth >= 992) {
    if (!stickyHeader.parentElement.classList.contains("sticky-wrapper")) {
      let wrapper = document.createElement("div");
      wrapper.className = "sticky-wrapper";
      if (!stickyHeader.parentElement.classList.contains("sticky-header")) {
        stickyHeader.parentElement.insertBefore(wrapper, stickyHeader);
      } else {
        stickyHeader.parentElement.parentElement.insertBefore(
          wrapper,
          stickyHeader
        );
      }
      wrapper.setAttribute(
        "style",
        "height:" + stickyHeader.offsetHeight + "px"
      );
      wrapper.insertAdjacentElement("beforeend", stickyHeader);
    }
    if (!stickyHeader.classList.contains(addClass)) {
      stickyHeader.parentElement.setAttribute(
        "style",
        "height:" + stickyHeader.offsetHeight + "px"
      );
      stickyHeader.classList.add(addClass);
    }
  } else {
    stickyHeader.classList.remove(addClass);
    if (stickyHeader.classList.contains(addClass))
      stickyHeader.classList.remove(addClass);
    if (stickyHeader.parentElement.classList.contains("sticky-wrapper")) {
      stickyHeader.parentElement.removeAttribute("style");
    }
  }
}

let stickyOffset = -1;
let stickyTop = -1;
/**
 * initialize stickyoffset
 */
export function initStickyOffset() {
  stickyOffset = -1;
  stickyTop = -1;
}

/**
 * definePolyfills
 */
export const definePolyfills = () => {
  if (typeof Object.values != "function") {
    Object.defineProperty(Object, "values", {
      value: function values(obj) {
        if (obj === null) {
          throw new TypeError("Cannot convert undefined or null to object");
        }

        let res = [];

        Object.keys(obj).map(function(key) {
          res.push(obj[key]);
          return 1;
        });

        return res;
      },
    });
  }

  if (window.Element && !Element.prototype.closest) {
    Element.prototype.closest = function(s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i,
        el = this;

      do {
        i = matches.length;
        while (--i >= 0 && matches.item(i) !== el) {}
      } while (i < 0 && (el = el.parentElement));
      return el;
    };
  }

  if (!Element.prototype.index) {
    Element.prototype.index = function(s) {
      let self = this;
      let children = self.parentElement.children;
      for (let i = 0; i < children.length; i++) {
        if (self === children[i]) return i;
      }
      return 0;
    };
  }
};

/**
 * Scroll Top
 */
export function scrollTop() {
  document.querySelector("#scroll-top").addEventListener("click", function(e) {
    if (isIEBrowser() || isEdgeBrowser() || isFirefoxBrowser() || isSafari()) {
      let pos = window.pageYOffset;
      let timer = setInterval(() => {
        if (pos <= 0) clearInterval(timer);
        window.scrollBy(0, -40);
        pos -= 40;
      }, 1);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    e.preventDefault();
  });

  window.addEventListener(
    "scroll",
    function() {
      if (document.querySelector("#scroll-top")) {
        if (window.pageYOffset > 600) {
          document.querySelector("#scroll-top").classList.add("fixed");
        } else {
          document.querySelector("#scroll-top").classList.remove("fixed");
        }
      }
    },
    { passive: true }
  );
}

/**
 * initialize layout
 */
export function init() {
  let stickyContent = document.querySelector(".main .sticky-header");
  if (stickyContent && stickyContent.classList.contains("fixed"))
    stickyContent.classList.remove("fixed");

  setTimeout(() => {
    if (document.querySelector(".sticky-header")) {
      window.addEventListener("scroll", stickyInit, { passive: true });
    }
  }, 800);
}

/**
 * sticky initialization for base
 */
export function stickyInit() {
  if (document.querySelector(".sticky-header")) {
    let stickyHeader1 = document.querySelector("header .sticky-header");
    if (stickyHeader1) {
      stickyHandler(stickyHeader1, 300);
    }

    if (document.querySelector("header.sticky-header")) {
      stickyHandler(document.querySelector("header.sticky-header"), 300);
    }

    let stickyHeader2 = document.querySelector(".main .sticky-header");
    if (stickyHeader2) {
      if (
        !stickyHeader2.classList.contains("fixed") &&
        (stickyOffset === -1 || stickyOffset === 0)
      )
        stickyOffset =
          stickyHeader2.getBoundingClientRect().top +
          window.pageYOffset +
          stickyHeader2.offsetHeight;
      stickyHandler(stickyHeader2, stickyOffset, "fixed");
    }
  }
}

/**
 * find item of array
 * @param { Array } items
 * @param { Int } id
 */
export function findIndex(items = [], id) {
  let res = false;
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === id) {
      res = true;
      break;
    }
  }
  return res;
}

/**
 * find Product by id in array of products
 * @param { Array } products
 * @param { String } id
 */
export function findProductById(products, id) {
  return products.filter(
    (item) => isNaN(id) === false && item.id === parseInt(id)
  )[0];
}

/**
 * find Blog by id in array of products
 * @param { Array } blogs
 * @param { String } id
 */
export function findBlogById(blogs, id) {
  return blogs.filter(
    (item) => isNaN(id) === false && item.id === parseInt(id)
  )[0];
}

/**
 * execute isotope grid
 * @param { Function Pointer } isotope
 * @param { Function Pointer } imagesLoaded
 */
export function isotopeLoad(isotope, imagesLoaded) {
  let grids = document.querySelectorAll(".grid");
  for (let i = 0; i < grids.length; i++) {
    let grid = grids[i];

    let iso = new isotope(grid, {
      itemSelector: ".grid-item",
      layoutMode: "masonry",
      percentPosition: true,
      getSortData: {
        "md-order": "[data-md-order] parseInt",
      },
      sortReorder: true,
      masonry: {
        columnWidth: ".grid-sizer",
      },
    });

    let imgLoad = imagesLoaded(grid, { background: true });
    imgLoad.on("done", function(instance, image) {
      if (window.innerWidth < 768 && window.innerWidth > 400) {
        iso.arrange({ sortBy: "md-order" });
      }

      iso.layout();
    });

    if (grids[i].parentElement.classList.contains("featured-section")) {
      let links = document.querySelectorAll(".filter-button-group .nav-link");
      function isotopeImage(e) {
        e.preventDefault();
        let filterValue = e.currentTarget.getAttribute("data-filter");
        iso.arrange({
          filter: filterValue,
        });
        e.currentTarget.parentElement.parentElement
          .querySelector(".active")
          .classList.remove("active");
        e.currentTarget.classList.add("active");
        // setTimeout( () => {
        //     appearAnimate();
        // }, 400 );
      }
      for (let j = 0; j < links.length; j++) {
        links[j].addEventListener("click", isotopeImage);
      }
    }
    function isoArrange() {
      iso.arrange({
        sortBy:
          window.innerWidth < 768 && window.innerWidth > 400
            ? "md-order"
            : "original-order",
      });
    }
    window.addEventListener("resize", isoArrange);
  }
}

/**
 * Remove all XSS attacks potential
 * @param { String } html
 * @return { Object }
 */
export const removeXSSAttacks = (html) => {
  const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

  // Removing the <script> tags
  while (SCRIPT_REGEX.test(html)) {
    html = html.replace(SCRIPT_REGEX, "");
  }

  // Removing all events from tags...
  html = html.replace(/ on\w+="[^"]*"/g, "");

  return {
    __html: html,
  };
};

/**
 * Filter Product
 * @param { Array } products
 * @param { String } type
 * @param { String } demo
 * @param { Int } format
 */
export function productFilter(products, type = "arrivals") {
  switch (type) {
    case "arrivals":
      return products.filter((product) => product.new === true);

    case "sale":
      return products.filter((product) => product.sale === true);

    case "featured":
      return products.filter((product) => product.featured === true);

    case "top":
      return products
        .filter((product) => product.top > 5)
        .sort(function(a, b) {
          return b.top - a.top;
        });

    case "latest":
      return products
        .filter((product) => product.date)
        .sort(function(a, b) {
          return Date.parse(b.date) - Date.parse(a.date);
        });

    case "rated":
      return products
        .filter((product) => product.rating)
        .sort(function(a, b) {
          return b.rating - a.rating;
        });

    case "all":
      return products;

    default:
      return products;
  }
}

/**
 * Filter by category
 * @param { Array } products
 * @param { String } category
 * @param { Int } format
 */
export function categoryFilter(products, category = "all") {
  return products.filter((product) =>
    category === "all" ? true : product.category.indexOf(category) !== -1
  );
}

/**
 * Get the variant product price min-max price
 * @param { Array } variants
 * @param { String } set
 */
export function getPrice(variants, set = "max") {
  let xVal = [];
  variants.map((variant) => {
    let max = variant.type.reduce((a, b) => {
      let price1 = a.salePrice ? a.salePrice : a.price;
      let price2 = b.salePrice ? b.salePrice : b.price;
      if (set === "max") {
        return price1 > price2 ? a : b;
      } else {
        return price1 < price2 ? a : b;
      }
    });
    xVal.push(max.salePrice ? max.salePrice : max.price);
    return 1;
  });
  if (set === "max") {
    return xVal.reduce((a, b) => Math.max(a, b));
  } else {
    return xVal.reduce((a, b) => Math.min(a, b));
  }
}

/**
 * In the Shop Page, function that uses the to filter the products
 * @param { Array } products
 * @param { Array } filter
 * @param { String } current demo-1, demo-2, etc
 */
export function shopFilterProducts(products, filter) {
  let filterProduct = products.filter((product) => {
    let maxPrice,
      minPrice = 0;
    maxPrice = minPrice = product.salePrice ? product.salePrice : product.price;

    if (product.variants) {
      maxPrice = getPrice(product.variants);
      minPrice = getPrice(product.variants, "min");
    }

    let categoriesFlag = 0,
      i;
    if (filter.category && filter.category !== "") {
      if (product.category) {
        categoriesFlag = product.category.indexOf(filter.category) >= 0 ? 1 : 0;
      } else {
        categoriesFlag = 0;
      }
    } else categoriesFlag = 1;

    let sizeFlag = 0;
    if (filter.size && filter.size.length > 0) {
      if (product.size) {
        for (i = 0; i < filter.size.length; i++) {
          sizeFlag |= product.size.indexOf(filter.size[i]) >= 0 ? 1 : 0;
        }
      } else {
        sizeFlag = 0;
      }
    } else sizeFlag = 1;

    let brandFlag = 0;
    if (filter.brand && filter.brand.length > 0) {
      if (product.brand) {
        for (i = 0; i < filter.brand.length; i++) {
          brandFlag |= product.brand.indexOf(filter.brand[i]) >= 0 ? 1 : 0;
        }
      } else {
        brandFlag = 0;
      }
    } else brandFlag = 1;

    let colorFlag = 0;
    if (filter.color && filter.color.length > 0) {
      if (product.color) {
        for (i = 0; i < filter.color.length; i++) {
          colorFlag |= product.color.indexOf(filter.color[i]) >= 0 ? 1 : 0;
        }
      } else {
        colorFlag = 0;
      }
    } else colorFlag = 1;

    return (
      filter.value &&
      product.format === 1 &&
      minPrice > filter.value.min &&
      maxPrice < filter.value.max &&
      categoriesFlag &&
      sizeFlag &&
      brandFlag &&
      colorFlag
    );
  });

  if (filter.sortBy === "popularity") {
    filterProduct.sort((a, b) => b.top - a.top);
  } else if (filter.sortBy === "rating") {
    filterProduct.sort((a, b) => b.rating - a.rating);
  } else if (filter.sortBy === "date") {
    filterProduct.sort(
      (a, b) => new Date(b.date).getTime() - new Date(b.date).getTime()
    );
  } else if (filter.sortBy === "price") {
    filterProduct.sort((a, b) => {
      let minPrice1,
        minPrice = 0;
      minPrice = a.salePrice ? a.salePrice : a.price;
      minPrice1 = b.salePrice ? b.salePrice : b.price;

      if (a.variants) {
        minPrice = getPrice(a.variants, "min");
      }
      if (b.variants) {
        minPrice1 = getPrice(b.variants, "min");
      }
      return minPrice - minPrice1;
    });
  } else if (filter.sortBy === "price-desc") {
    filterProduct.sort((a, b) => {
      let maxPrice,
        maxPrice1 = 0;
      maxPrice = a.salePrice ? a.salePrice : a.price;
      maxPrice1 = b.salePrice ? b.salePrice : b.price;

      if (a.variants) {
        maxPrice = getPrice(a.variants);
      }
      if (b.variants) {
        maxPrice1 = getPrice(b.variants);
      }
      return maxPrice1 - maxPrice;
    });
  }
  return filterProduct;
}

/* outerHeight */
function outerHeight(self) {
  return (
    parseInt(window.getComputedStyle(self).getPropertyValue("margin-bottom")) +
    parseInt(window.getComputedStyle(self).getPropertyValue("margin-top")) +
    parseInt(self.offsetHeight)
  );
}

/* width */
function width(self) {
  return (
    parseInt(self.clientWidth) -
    parseInt(window.getComputedStyle(self).getPropertyValue("padding-left")) -
    parseInt(window.getComputedStyle(self).getPropertyValue("padding-right"))
  );
}

/**
 *
 * @param { node } self
 */
function maxChildHeight(self) {
  let children = self.children;
  let maxHeight = -1;
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    let height = 0;
    for (let j = 0; j < child.children.length; j++) {
      height += outerHeight(child.children[j]);
    }
    if (maxHeight < height) maxHeight = height;
  }
  return maxHeight;
}

/**
 * get the raw offsetTop
 * @param { Node  } stickySidebar
 */
function getRowTop(stickySidebar) {
  let position = stickySidebar.style.position;
  let top = stickySidebar.style.top;
  let bottom = stickySidebar.style.bottom;
  let width = stickySidebar.style.width;
  stickySidebar.style.position = "";
  stickySidebar.style.top = "";
  stickySidebar.style.bottom = "";
  stickySidebar.style.width = "";
  stickyTop = stickySidebar.getBoundingClientRect().top + window.pageYOffset;
  stickySidebar.style.position = position;
  stickySidebar.style.top = top;
  stickySidebar.style.bottom = bottom;
  stickySidebar.style.width = width;
  return stickyTop;
}

/**
 * utils to handle sticky content
 */
export const setStickyValues = function(height = 82) {
  if (isIEBrowser()) {
    let stickyContent = document.querySelector(".sticky-sidebar");
    if (!stickyContent) return;
    stickyContent.style.position = "relative";
    stickyContent.style.top = "0";
  }
};

/**
 * sticky Box
 */
export const stickyContentHandle = () => {
  if (isIEBrowser()) {
    let stickySidebars = document.querySelectorAll(".sticky-sidebar");
    for (let i = 0; i < stickySidebars.length; i++) {
      let stickySidebar = stickySidebars[i];
      let scrollTop = window.pageYOffset;
      let originWidth = width(stickySidebar.parentElement);
      let offsetTop = 90;
      if (window.outerWidth >= 992) {
        stickyTop = getRowTop(stickySidebar);
        let parentBottom =
          outerHeight(stickySidebar.parentElement.parentElement) + stickyTop;
        if (
          scrollTop + 10 < stickyTop ||
          outerHeight(stickySidebar) >=
            maxChildHeight(stickySidebar.parentElement.parentElement)
        ) {
          stickySidebar.style.position = "";
          stickySidebar.style.top = "";
          stickySidebar.style.bottom = "";
          stickySidebar.style.width = "";
          continue;
        } else if (
          scrollTop > stickyTop &&
          scrollTop + window.innerHeight < parentBottom - 20 &&
          scrollTop + window.innerHeight >
            stickySidebar.clientHeight + stickyTop
        ) {
          stickySidebar.style.position = "fixed";
          if (
            maxChildHeight(stickySidebar.parentElement.parentElement) >
              stickySidebar.offsetHeight + 20 &&
            window.innerHeight > stickySidebar.offsetHeight
          ) {
            stickySidebar.style.bottom = "";
            stickySidebar.style.top = offsetTop + "px";
          } else {
            stickySidebar.style.bottom = "10px";
            stickySidebar.style.top = "";
          }

          stickySidebar.style.width = originWidth + "px";
          continue;
        } else if (scrollTop + window.innerHeight > parentBottom) {
          if (
            window.innerHeight > stickySidebar.offsetHeight &&
            maxChildHeight(stickySidebar.parentElement.parentElement) >
              stickySidebar.offsetHeight + 20 &&
            scrollTop + offsetTop + outerHeight(stickySidebar) <
              parentBottom - 20
          ) {
            stickySidebar.style.position = "fixed";
            stickySidebar.style.bottom = "";
            stickySidebar.style.top = offsetTop + "px";
          } else {
            let top =
              stickySidebar.parentElement.parentElement.offsetHeight -
              outerHeight(stickySidebar);
            stickySidebar.style.position = "absolute";
            stickySidebar.style.top = top + "px";
            stickySidebar.style.bottom = "";
          }
          stickySidebar.style.width = originWidth + "px";
          continue;
        } else if (scrollTop < stickySidebar.offsetTop + stickyTop + 30) {
          if (stickySidebar.style.position === "absolute") {
            stickySidebar.style.top = stickyTop + "px";
            stickySidebar.style.bottom = "";
            stickySidebar.style.width = originWidth + "px";
          }
          continue;
        }
      } else {
        stickySidebar.style.position = "";
        stickySidebar.style.top = "";
        stickySidebar.style.bottom = "";
        stickySidebar.style.width = "";
      }
    }
    let stickySliders = document.querySelectorAll(".sticky-slider");
    for (let i = 0; i < stickySliders.length; i++) {
      let stickySlider = stickySliders[i];
      let scrollTop = window.pageYOffset;
      let originWidth = width(stickySlider.parentElement);
      let offsetTop = 90;
      if (window.outerWidth >= 992) {
        stickyTop = getRowTop(stickySlider);
        let parentBottom =
          outerHeight(stickySlider.parentElement.parentElement) + stickyTop;
        if (
          scrollTop + 10 < stickyTop ||
          outerHeight(stickySlider) >=
            maxChildHeight(stickySlider.parentElement.parentElement)
        ) {
          stickySlider.style.position = "";
          stickySlider.style.top = "";
          stickySlider.style.bottom = "";
          stickySlider.style.width = "";
          continue;
        } else if (
          scrollTop > stickyTop &&
          scrollTop + window.innerHeight < parentBottom - 20 &&
          scrollTop + window.innerHeight > stickySlider.clientHeight + stickyTop
        ) {
          stickySlider.style.position = "fixed";
          if (
            maxChildHeight(stickySlider.parentElement.parentElement) >
              stickySlider.offsetHeight + 20 &&
            window.innerHeight > stickySlider.offsetHeight
          ) {
            stickySlider.style.bottom = "";
            stickySlider.style.top = offsetTop + "px";
          } else {
            stickySlider.style.bottom = "10px";
            stickySlider.style.top = "";
          }

          stickySlider.style.width = originWidth + "px";
          continue;
        } else if (scrollTop + window.innerHeight > parentBottom) {
          if (
            window.innerHeight > stickySlider.offsetHeight &&
            maxChildHeight(stickySlider.parentElement.parentElement) >
              stickySlider.offsetHeight + 20 &&
            scrollTop + offsetTop + outerHeight(stickySlider) <
              parentBottom - 20
          ) {
            stickySlider.style.position = "fixed";
            stickySlider.style.bottom = "";
            stickySlider.style.top = offsetTop + "px";
          } else {
            let top =
              stickySlider.parentElement.parentElement.offsetHeight -
              outerHeight(stickySlider);
            stickySlider.style.position = "absolute";
            stickySlider.style.top = top + "px";
            stickySlider.style.bottom = "";
          }
          stickySlider.style.width = originWidth + "px";
          continue;
        } else if (scrollTop < stickySlider.offsetTop + stickyTop + 30) {
          if (stickySlider.style.position === "absolute") {
            stickySlider.style.top = stickyTop + "px";
            stickySlider.style.bottom = "";
            stickySlider.style.width = originWidth + "px";
          }
          continue;
        }
      } else {
        stickySlider.style.position = "";
        stickySlider.style.top = "";
        stickySlider.style.bottom = "";
        stickySlider.style.width = "";
      }
    }
  }
};

/**
 * Util for making parallax background
 */
export function setParallax() {
  let parallax = document.querySelector(".parallax");
  if (parallax) {
    let y = (parallax.offsetTop - window.pageYOffset) / 20 + 40;
    parallax.style.backgroundPositionY = `${y}%`;
  }
}

/**
 * count up
 */
export let elementCount = function() {
  let counterSections = document.querySelectorAll(".counters-section");
  for (let j = 0; j < counterSections.length; j++) {
    let counterSection = counterSections[j];

    if (
      window.innerHeight >=
      counterSection.querySelector(".count").getBoundingClientRect().top
    ) {
      let myTimer = setInterval(function() {
        let counts = counterSection.querySelectorAll(".count-wrapper .count");

        for (let i = 0; i < counts.length; i++) {
          let element = counts[i];
          if (
            !element.closest(".appear-animation") ||
            element.closest(".appear-animation.appear-animation-visible")
          ) {
            let from = parseInt(element.getAttribute("data-from"));
            let to = parseInt(element.getAttribute("data-to"));
            let cur = parseFloat(element.getAttribute("data-value"));
            cur = cur + parseFloat((to - from) / 30);
            if (cur >= to) {
              cur = to;
              window.clearInterval(myTimer);
            }
            element.setAttribute("data-value", cur);

            if (element.getAttribute("data-append"))
              element.innerText =
                cur.toFixed(0) + element.getAttribute("data-append");
            else element.innerText = cur.toFixed(0);
          }
        }
      }, 100);

      if (j === counterSections.length - 1)
        window.removeEventListener("scroll", elementCount);
    }
  }
};

/**
 * utils to set countto in about-2
 */
export const countTo = function() {
  let items = document.querySelectorAll(".count-to");

  if (items) {
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      let amount =
        parseInt(item.getAttribute("data-to"), 10) -
        parseInt(item.getAttribute("data-from"), 10);
      let time = parseInt(item.getAttribute("data-speed"), 10);
      let interval = parseInt(item.getAttribute("data-refresh-interval"), 10);
      let pt = 0;
      let height = item.parentElement.parentElement.parentElement.offsetTop;
      let flag = 0;

      document.addEventListener("scroll", countToScrollHandler, {
        passive: true,
      });

      function countToScrollHandler() {
        if (pt <= time && height >= window.pageYOffset) {
          if (0 === flag) {
            let timerId = setInterval(() => {
              if (pt >= time) {
                clearInterval(timerId);
              }

              item.innerHTML = parseInt((pt * amount) / time);
              pt = pt + interval;
            }, interval);
          }

          flag = 1;
        }
      }
    }
  }
};

/**
 * Active Each Nav
 * @param { Event }
 */
export function activeListNav(e) {
  for (let i = 7; i >= 0; i--) {
    if (!document.querySelector("#cat-" + i)) continue;
    if (
      document
        .querySelector("#cat-" + i + " .category-title")
        .getBoundingClientRect().top < 50 &&
      (document.querySelector("cat-" + (i + 1) + " .category-title")
        ? document
            .querySelector("cat-" + (i + 1) + " .category-title")
            .getBoundingClientRect().top > 0
        : true)
    ) {
      if (document.querySelector(".category-list-nav .nav-link.active")) {
        document
          .querySelector(".category-list-nav .nav-link.active")
          .classList.remove("active");
      }
      document
        .querySelector('[data-target="cat-' + i + '"]')
        .classList.add("active");
      break;
    }
  }
}

/**
 * get total Price of products in cart.
 * @param {Array} cartItems
 */
export const getCartTotal = (items) => {
  let total = 0;
  if (items) {
    for (let i = 0; i < items.length; i++) {
      total += parseInt(items[i].sum, 10);
    }
  }
  return total;
};

/**
 * get number of products in cart
 * @param {Array} cartItems
 * @return {Integer} total
 */
export const getQtyTotal = (items) => {
  let total = 0;
  if (items) {
    for (let i = 0; i < items.length; i++) {
      total += parseInt(items[i].qty, 10);
    }
  }
  return total;
};
