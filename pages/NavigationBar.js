import Link from "next/link";
import styled from "styled-components";


const NavigationBarStyled = styled.li`
  width: 90px;
  height: 150px;
  border-radius: 50px;
  box-shadow: 5px 7px 15px 2px rgba(0, 0, 0, 0.25);
  border: 10px solid white;
align-content: space-between;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;



export default function NavigationBar() {
  return (
    <NavigationBarStyled>
      <Link href="/RandomImage">Spotlight</Link>
      <Link href="/overview">Overview</Link>
      <Link href="/overview">Favourites</Link>
    </NavigationBarStyled>
  );
}


//<Link href="/art-piece-details/red-and-blue selected" Artpiece={object}> Overview</Link>