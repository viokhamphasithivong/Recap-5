import useSWR from "swr";
import Image from "next/image";
import { Poppins } from "next/font/google";
import styled from "styled-components";

import { useState, useEffect } from "react";
import NavigationBar from "../components/NavigationBar.js";
import Link from "next/link";
import LikeButton from "../components/LikeButton.js";
import useLocalStorage from "use-local-storage";

import { create } from "zustand";
import { persist } from "zustand/middleware";

import { useArtStore } from "../stores/artpieceStore.js";
import { Database } from "lucide-react";

export default function Overview() {
  const fetcher = (url) => fetch(url).then((response) => response.json());

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  const { artpiecesData, setArtpiecesData, toggleFavourite } = useArtStore();

  useEffect(() => {
    if (data && artpiecesData.length === 0) setArtpiecesData(data);
  }, [data]);

  if (error) return <p>Error while loading</p>;
  if (artpiecesData.length === 0) return <p>Loading</p>;

  return (
    <Wrapper>
      <Header className={poppins.className}>Artgallery.Overview.</Header>
      <TextBlock>
        <SecondTitle className={poppins.className}>
          Pick your Favourite Art Pieces.
        </SecondTitle>
        <Paragraph>
          You can click the Heart Button if you like it. Click it again if not!
          After you selected your Favourites, go to the Favourites tab in the
          Navigationbar where you can check them in detail.
        </Paragraph>
      </TextBlock>
      <ImageStyled>
        {artpiecesData.map((artpiece, index) => (
          <ImageBox key={index}>
            <LikeButton
              artpiece={artpiece}
              onToggleFavourite={() => toggleFavourite(index)}
            />

            <Link href={`./art-piece-details/${artpiece.slug}`}>
              <Image
                src={artpiece.imageSource}
                alt={artpiece.name}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: "10px",
                }}
              />
            </Link>
            <GalleryCard>
              <GalleryCardTitle> {`"${artpiece.name}"`}</GalleryCardTitle>
              <GalleryCardArtist>
                {artpiece.artist}, {artpiece.year}
              </GalleryCardArtist>
            </GalleryCard>
          </ImageBox>
        ))}
      </ImageStyled>
      <NavigationBar />
    </Wrapper>
  );
}

// STYLES --------------------------------------------------------------------------

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const ImageStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
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
  box-shadow:
    rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  padding: 5px;
  overflow: hidden;
`;

const GalleryCard = styled.section`
  position: absolute;
  bottom: 10px;
  left: 10px;
  box-shadow:
    rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
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
  padding: 1rem 1rem 0.5rem;
  font-style: italic;
  width: 100%;
`;

const GalleryCardArtist = styled.p`
  font-size: 0.8rem;
  margin: 0 0;
  font-weight: 200;

  width: 100%;

  padding: 0.5rem 0 1rem 1rem;
`;

const Header = styled.h1`
  grid-area: header;
  font-size: 4rem;
  font-weight: bold;
  font-style: italic;
  margin: 0;

  /* Regenbogen-Gradient */
  background: linear-gradient(
    40deg,
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
const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    "text image nav"
    "text infocard infocard";
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 20px;
  background: var(--background-color);
  padding: 20px;
  min-height: 100vh;
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
