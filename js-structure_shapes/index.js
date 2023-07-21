console.clear();

import { getRandomColor } from "./utils/randomColor.js";
import { Circle } from "./utils/Circle/Circle.js";
import { Square } from "./utils/Square/Square.js";
import { Pentagon } from "./utils/Pentagon/Pentagon.js";

const root = document.getElementById("root");

const circle = Circle();
const square = Square();
const pentagon = Pentagon();

root.append(circle, square, pentagon);
