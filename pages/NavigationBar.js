import Link from "next/link";
import styled from "styled-components";
import { Sparkles, Images,BookHeart   } from 'lucide-react';


const NavigationBarStyled = styled.li`
  width: 80px;
  height: 200px;
  border-radius: 50px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border: 3px solid white;
align-content: space-between;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  background: white;
  ;
`;



export default function NavigationBar() {
  return (
    <NavigationBarStyled>
      <Link href="/RandomImage"> <Sparkles size="2rem"/></Link>
      <Link href="/overview"><Images size="2rem"/></Link>
      <Link href="/overview"><BookHeart size="2rem"/></Link>
    </NavigationBarStyled>
  );
}


//<Link href="/art-piece-details/red-and-blue selected" Artpiece={object}> Overview</Link>