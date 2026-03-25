import useSWR from "swr";
import Image from "next/image";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { HeartPlus } from "lucide-react";
import { Poppins } from "next/font/google";
import NavigationBar from "./NavigationBar.js"

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const fetcher = (url) => fetch(url).then((response) => response.json());

const ImageStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns:repeat(auto-fit, 300px);
  gap: 20px;
  justify-content: center;
  overflow: hidden;
  background: lightgrey;
  min-height: 100vh;
  padding: 2rem 6rem;
   border-radius: 10px;
`;

const ImageBox = styled.div`
  width: 300px;
  height: 400px;
  position: relative;
  border-radius: 10px; 
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  padding: 5px; /* 👈 wichtig */
  overflow: hidden; /* 👈 verhindert Überlaufen */
`;

const GalleryCard = styled.section`
  position: absolute;
  bottom: 10px;
  left: 10px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  background: rgba(255, 255, 255, 0.8);
 
  border-radius: 5px;

  color: black;
  width: 75%;
  margin: 10px 0;
`;

const GalleryCardTitle = styled.h4`
  font-size: 1rem;

  font-weight: 400;
  margin: 0 0;
  padding: 1rem 1rem 0.5rem ;
  font-style: italic;
  width: 100%;`

const GalleryCardArtist = styled.p`
  font-size: 0.8rem;
  margin: 0 0;
  font-weight: 200;

  width: 100%;

  padding: 0.5rem 0 1rem 1rem;
`;
const StyledButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
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
    #ff7f00,
    #ffff00,
    #00ff00,
    #0000ff,
    #4b0082
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  background-clip: text;
  color: transparent;
`;
const Wrapper=styled.div`
background: lightgrey;
padding: 20px;
display:grid;
grid-template-columns: 2fr 1fr;
grid-template:
"header header"
"image nav"
`

export default function RandomImage() {
  const [favourites, setFavourites] = useState([]);

  function handleFavourite(item) {
    setFavourites((prev) => {
      const exists = prev.find((fav) => fav.id === item.id);
      if (exists) return prev;
      return [...prev, item];
    });
  }

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <p>Error while loading</p>;
  if (isLoading || !data) return <p>Loading</p>;

  return (
    <Wrapper>
    <Header className={poppins.className}>Artgallery.Overview.</Header>
    
    <ImageStyled>
      
      {data.map((item) => (
        <ImageBox key={item.id}>
          <StyledButton onClick={() => handleFavourite(item)}>
            <HeartPlus />
          </StyledButton>
          <Image
            src={item.imageSource}
            alt={item.name}
            fill
            style={{ objectFit: "cover", objectPosition: "center",borderRadius: "10px" }}
          />
          <GalleryCard>
            <GalleryCardTitle> {`"${item.name}"`}</GalleryCardTitle>
            <GalleryCardArtist>
              {item.artist}, {item.year}
            </GalleryCardArtist>
          </GalleryCard>
        </ImageBox>
      ))}
      
    </ImageStyled>
    <NavigationBar />
  </Wrapper>
)}
