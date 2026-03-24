import RandomImage from "./RandomImage.js"
import styled from "styled-components";
import { Poppins } from "next/font/google";
import NavigationBar from "./navigation.js";
const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
})

const Styled = styled.div`
  display: grid;
  grid-template-columns: 1fr; 
  gap: 20px;
justify-content=center;
  background: lightgrey;
  padding: 20px;
`;

export default function HomePage() {
  return (
    <Styled>
       <h1 className={poppins.className}>Artgallery App</h1>
    
  

      <RandomImage />
     
      
    </Styled>
  );
}
