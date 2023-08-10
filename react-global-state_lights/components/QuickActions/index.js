import styled from "styled-components";
import Button from "../Button";
import { lightsState } from "../../pages/atoms";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions() {
  const [lights, setLights] = useRecoilState(lightsState);

  function handleOnOffLights(toTurnOn) {
    console.log("turn all on", toTurnOn);
    toTurnOn
      ? setLights(
          lights.map((light) => {
            return { ...light, isOn: true };
          })
        )
      : setLights(
          lights.map((light) => {
            return { ...light, isOn: false };
          })
        );
    console.log(lights);
  }
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          handleOnOffLights(false);
        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          handleOnOffLights(true);
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
