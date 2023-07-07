const person = {
  isHuman: false,
};
const test = function () {};
const array = [1, "2", true];
const data = NaN;
console.log(typeof data);
switch (typeof data) {
  case "undefined":
    console.log("undefined!");
    break;
  case "object":
    if (data === null) {
      console.log("null!");
      break;
    } else if (Array.isArray(data)) {
      console.log("Array!");
      break;
    } else {
      console.log("Object!");
      break;
    }
  case "number":
    if (isNaN(data)) {
      console.log("Not a number!");
      break;
    } else {
      console.log("Number!");
      break;
    }
  case "string":
    console.log("String!");
    break;
  case "boolean":
    console.log("Boolean!");
    break;
  case "bigint":
    console.log("Bigint!");
    break;
  case "function":
    console.log("Function!");
    break;
  case "array":
    console.log("Array!");
    break;
  default:
    console.log("I have no idea!");
}
