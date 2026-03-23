import RandomImage from "./RandomImage.js"
import styled from "styled-components";
import { Italiana } from "next/font/google";

const italiana = Italiana({
  weight: '400',
  subsets: ['latin'],
})

const Styled = styled.div`
  display: grid;
  justify-content: center;
  background: lightgrey;
`;

export default function HomePage() {
  return (
    <Styled>
      <h1>Artgallery App</h1>
      <RandomImage/>
    </Styled>
  );
}
