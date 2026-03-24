import Link from "next/link";
import styled from "styled-components";

const NavigationBarStyled = styled.section`
  width: 90px; /* FIX */
  height: 150px;
  border-radius: 20px;
  box-shadow: 5px 7px 15px 2px rgba(0, 0, 0, 0.25);
  border: 10px solid white;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function NavigationBar() {
  return (
    <NavigationBarStyled>
      <Link href="/overview">Overview</Link>
    </NavigationBarStyled>
  );
}

// <Link href="/art-piece-details/red-and-blue selectedArtpiece={object}>Overview</Link>
