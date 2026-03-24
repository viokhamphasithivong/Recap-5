import styled from "styled-components";
import Image from "next/image";

export const Styled_Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Styled_Image = styled(Image)`
  transition:
    width 1s ease-in-out,
    height 1s ease-in-out;
`;
