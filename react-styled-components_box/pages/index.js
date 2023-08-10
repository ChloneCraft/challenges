import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "../components/BoxWithStyledComponents/BoxWithStyledComponents.jsx";
import styled from "styled-components";

export default function HomePage() {
  return (
    <StyledContainer>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents isBlack={false} />
      <BoxWithStyledComponents isBlack={true} />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
`;
