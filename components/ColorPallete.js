/**
 * * Art piece details component
 * shows additional indormation for the selected artpiece
 *
 * @param {Array of colors} props.colors - An Array of colors that will make up the color pallate
 *
 */

import styled from "styled-components";

export default function ColorPallete({ colors }) {
  return (
    <Styled_List>
      {colors.map((color, index) => {
        if (index >= 7) return;
        return <Styled_ListItem key={color + index} $color={color} />;
      })}
      <Styled_ListItem />
    </Styled_List>
  );
}

const Styled_List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 10px;
`;

const Styled_ListItem = styled.li`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.$color || "transparent"};
`;
