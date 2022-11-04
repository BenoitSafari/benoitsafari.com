export const neon = {
  string: "<benoitsafari.com>",
  HTMLElements: {
    neon: document.getElementById("neon"),
    neonBack: document.getElementById("neon_back"),
    neonOuter: document.getElementById("neon_outer"),
    neonInner: document.getElementById("neon_inner"),
  },

  /**
   * @description
   * Map letters of a string to an HTML element in `<span>` tags.
   * @param [entry] The string that index HTMLElements.
   * @param [string] The string to be displayed in the neon sign.
   */
  mapLetters: function(entry, string) {
    if (typeof entry === "undefined") throw new Error("No entry provided");
    if (typeof string === "undefined") throw new Error("No string provided");
    if (string.length === 0) throw new Error("String is empty");

    return string.split("").map((char) => {
      const span = document.createElement("span");
      span.innerText = char;
      this.HTMLElements[entry].appendChild(span);
    });
  },

  /**
   * @description
   * Light up the neon sign.
   */
  toggleLights: function() {
    this.HTMLElements.neonOuter.childNodes.forEach((child) => {
      if (child.nodeName === "SPAN") {
        child.classList.toggle("lights-on");
      }
    });
    this.HTMLElements.neonInner.childNodes.forEach((child) => {
      if (child.nodeName === "SPAN") {
        child.classList.toggle("lights-on");
      }
    });
  },

  /**
   * @description
   * Initialize the neon sign.
   */
  init: function() {
    Object.keys(this.HTMLElements).forEach((entry) => {
      if (!this.HTMLElements[entry]) {
        throw new Error(`Cannot find element requested in neon.HTMLElements.${entry}.`);
      }

      switch (entry) {
      case "neonBack":
        this.HTMLElements[entry].innerText = this.string;
        break;
      case "neonOuter":
        this.mapLetters(entry, this.string);
        break;
      case "neonInner":
        this.mapLetters(entry, this.string);
        break;
      }

    });
    this.toggleLights();
  }
};

