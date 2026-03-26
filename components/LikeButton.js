import styled from "styled-components";
import { HeartPlus, HeartMinus } from "lucide-react";

const StyledButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  box-shadow:
    rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
`;

export default function LikeButton({ artpiece, onToggleFavourite }) {
  return (
    <StyledButton onClick={() => onToggleFavourite()}>
      {artpiece.isFavourite ? (
        <HeartMinus color="black" />
      ) : (
        <HeartPlus color="red" />
      )}
    </StyledButton>
  );
}
