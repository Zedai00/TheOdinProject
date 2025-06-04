export function createSliderComponent() {
  const images = importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));
  const width = 400;
  let count = 0;

  const car = document.createElement("div");
  car.classList.add("car");

  const slider = document.createElement("div");
  slider.classList.add("slider");

  images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    slider.append(img);
  });

  car.append(slider);

  const left = document.createElement("div");
  left.classList.add("left");
  left.textContent = "<";

  const right = document.createElement("div");
  right.classList.add("right");
  right.textContent = ">";

  const bubbles = document.createElement("div");
  bubbles.classList.add("bubbles");

  const bubbleList = images.map((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("bubble");
    if (i === 0) dot.classList.add("active");
    bubbles.append(dot);
    return dot;
  });

  function updateSlide() {
    slider.style.transform = `translateX(-${count * width}px)`;

    bubbleList.forEach((b, i) => {
      b.classList.toggle("active", i === count);
    });
  }

  left.addEventListener("click", () => {
    count = (count - 1 + images.length) % images.length;
    updateSlide();
  });

  right.addEventListener("click", () => {
    count = (count + 1) % images.length;
    updateSlide();
  });

  function importAll(r) {
    return r.keys().map(r);
  }

  setInterval(() => {
    count = (count + 1) % images.length;
    updateSlide();
  }, 5000)

  return { car, left, right, bubbles };
}

