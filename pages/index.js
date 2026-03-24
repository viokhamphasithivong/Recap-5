
import RandomImage from "./RandomImage.js";
import styled from "styled-components";
import NavigationBar from "./NavigationBar.js";
import InfoCard from "./InfoCard.js";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const Layout = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    "text image nav"
    "text infocard nav";
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 20px;
  background: lightgrey;
  padding: 20px;
  min-height: 100vh;
  
`;

const Header = styled.h1`
  grid-area: header;
  font-size: 4rem;
  font-weight: bold;
  font-style: italic;
  margin: 0;

  /* Regenbogen-Gradient */
  background: linear-gradient(
    90deg,
    #ff0000,
    #ff7f00,
    #ffff00,
    #00ff00,
    #0000ff,
    #4b0082,
    #8b00ff
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  background-clip: text;
  color: transparent;
`;

const TextBlock = styled.div`
  grid-area: text;
`;

const SecondTitle = styled.h2`
  color: grey;
  font-size: 1.75rem;
  font-weight: 200;
  font-style: italic;
  margin: 0;
`;

const Paragraph = styled.p`
  color: #888888;
  font-size: 1rem;
  font-weight: lighter;
  margin-top: 10px;
`;

const ImageArea = styled.div`
  grid-area: image;
  align-content: center;
  justify-content: center;
`;

const NavArea = styled.div`
  grid-area: nav;
`;

const InfoArea = styled.div`
  grid-area: infocard;
`;

export default function HomePage() {
  return (
    <Layout>
      <Header className={poppins.className}>Artgallery.</Header>

      <TextBlock>
        <SecondTitle className={poppins.className}>
          Explore and Collect your Favourite Art Pieces.
        </SecondTitle>
        <Paragraph>
          Start by navigating to the Overview Tab. Choose from Various Artist
          around the Globe by selecting your Favourites and saving them at one
          Place.
        </Paragraph>
      </TextBlock>

      <ImageArea>
        <RandomImage />
      </ImageArea>

      <NavArea>
        <NavigationBar />
      </NavArea>

      <InfoArea>
        <InfoCard />
      </InfoArea>
    </Layout>
  );
}