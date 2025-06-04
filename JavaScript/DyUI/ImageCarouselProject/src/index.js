import "./styles.css"
import { createSliderComponent } from "./slider";

const app = document.querySelector(".app");
const { car, left, right, bubbles } = createSliderComponent();
const slideShow = document.createElement("div")
slideShow.classList.add("slide-show")

slideShow.append(left, car, right)
app.append(slideShow, bubbles);

