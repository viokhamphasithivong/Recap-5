import styled from "styled-components";

export default function ColorPallete({ colors }) {
  return (
    <StyledList>
      {colors.map((color, index) => {
        console.log("color: ", color, " colors: ", colors);
        if (index >= 7) return;
        return <StyledListItem key={color + index} $color={color} />;
      })}
      <StyledListItem />
    </StyledList>
  );
}

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 10px;
`;

const StyledListItem = styled.li`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.$color || "transparent"};
`;
