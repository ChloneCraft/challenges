import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const lights = [
  { id: "Living Room", isOn: false },
  { id: "Kitchen", isOn: false },
  { id: "Bedroom", isOn: false },
  { id: "Bathroom", isOn: false },
  { id: "Garage", isOn: false },
  { id: "Porch", isOn: false },
  { id: "Garden", isOn: false },
  { id: "Office", isOn: false },
];

export const lightsState = atom({
  key: "lightsState", // unique ID (with respect to other atoms/selectors)
  default: lights, // default value (aka initial value)
});
