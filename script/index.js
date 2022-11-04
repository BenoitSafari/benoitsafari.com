import { neon } from "./neon.js";

function init() {
  neon.init();
  const HTMLElements = {
    neon: document.getElementById("neon"),
    portfolio: document.getElementById("portfolio"),
    footer: document.getElementById("footer"),
  };
  Object.keys(HTMLElements).forEach((entry) => {
    if (!HTMLElements[entry]) {
      throw new Error(`Cannot find element requested in HTMLElements.${entry}.`);
    }
  });

  setTimeout(() => {
    HTMLElements["neon"].style.opacity = 1;
  }, 200);
  setTimeout(() => {
    HTMLElements["portfolio"].style.opacity = 1;
  }, 700);
  setTimeout(() => {
    HTMLElements["footer"].style.opacity = 1;
  }, 1000);
}

window.addEventListener("load", function () {
  try {
    init();
  } catch (error) {
    console.error(error);
  }
});
