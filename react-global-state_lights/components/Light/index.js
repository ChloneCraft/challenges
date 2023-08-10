import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";
import { RecoilRoot, atom, selector, useRecoilState } from "recoil";
import { lightsState } from "../../pages/atoms";

export default function Light({ name }) {
  const [lights, setLights] = useRecoilState(lightsState);

  function handleToggle(lightID) {
    setLights(
      lights.map((light) =>
        light.id !== lightID ? light : { ...light, isOn: !light.isOn }
      )
    );
  }

  const thisLight = lights.find((light) => light.id === name);
  // console.log(thisLight.isOn);

  return (
    <LightButton
      type="button"
      onClick={() => {
        handleToggle(name);
      }}
      isOn={thisLight.isOn}
    >
      <Icon isOn={thisLight.isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{thisLight.isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
