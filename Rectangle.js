class Rectangle {
  #holder;
  #x;
  #y;
  #w;
  #h;
  #borderRadius;
  #backgroundColor;
  #htmlRef;
  #counter = 0;

  constructor(holder, options = {}) {
    this.#holder = holder;
    this.#x = options.x || 100;
    this.#y = options.y || 100;
    this.#w = options.w || 300;
    this.#h = options.h || 150;
    this.#borderRadius = options.borderRadius || 15;
    this.#backgroundColor = this.#setRandomColor();
    this.#htmlRef = this.#init();
    this.#setStyling();
    this.#setUpEvents();
  }
  #init() {
    this.#holder.insertAdjacentHTML("beforeend", "<div></div>");
    return this.#holder.querySelector("div:last-child");
  }

  #setStyling() {
    this.#htmlRef.style.width = this.#w + "px";
    this.#htmlRef.style.height = this.#h + "px";
    this.#htmlRef.style.backgroundColor = this.#backgroundColor;
    this.#htmlRef.style.borderRadius = this.#borderRadius + "px";
    this.#htmlRef.style.position = "absolute";
    this.#htmlRef.style.left = this.#x + "px";
    this.#htmlRef.style.top = this.#y + "px";
  }

  #randomNum() {
    return Math.floor(Math.random() * 255);
  }

  #setRandomColor() {
    return `rgb(${this.#randomNum()}, ${this.#randomNum()}, ${this.#randomNum()})`;
  }

  #setUpEvents() {
    this.#htmlRef.onclick = () => {
      this.#counter++;
      if (this.#counter < 5) {
        this.#backgroundColor = this.#setRandomColor();
      } else {
        this.#backgroundColor = "black";
      }
      this.#setStyling();
    };
  }
}

export default Rectangle;
