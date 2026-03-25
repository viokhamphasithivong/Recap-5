import Link from "next/link";
import styled from "styled-components";
import { Sparkles, Images, BookHeart } from "lucide-react";

const NavigationBarStyled = styled.li`
  width: 80px;
  height: 200px;
  border-radius: 50px;

  align-content: space-between;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  background: white;
  
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export default function NavigationBar() {
  return (
    <NavigationBarStyled>
      <Link href="/pages/index.js">
        {" "}
        <Sparkles size="2rem" />
      </Link>
      <Link href="/overview">
        <Images size="2rem" />
      </Link>
      <Link href="/overview">
        <BookHeart size="2rem" />
      </Link>
    </NavigationBarStyled>
  );
}

//<Link href="/art-piece-details/red-and-blue selected" Artpiece={object}> Overview</Link>
