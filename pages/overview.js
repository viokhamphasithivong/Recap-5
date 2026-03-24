import useSWR from "swr";
import Image from "next/image";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { HeartPlus } from "lucide-react";

const fetcher = (url) => fetch(url).then((response) => response.json());

const ImageStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  gap: 20px;
  justify-content: center;
  overflow: hidden;
  background: lightgrey;
  min-height: 100vh;
`;

const ImageBox = styled.div`
  width: 300px;
  height: 400px;
  position: relative;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: 10px solid white;
`;

const GalleryCard = styled.section`
  position: absolute;
  bottom: 10px;
  left: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: rgba(255, 255, 255, 0.4);
  padding: 0 10px;
  border-radius: 5px;

  color: black;
  width: 150px;
  margin: 10px 0;
`;

const GalleryCardTitle = styled.h4`
  font-size: 1rem;
  line-height: 1.3;
  font-weight: 400;
  font-style: italic;
`;
const GalleryCardArtist = styled.p`
  font-size: 0.8rem;
  line-height: 1;
  font-weight: 200;

  gap: 10px;
  width: 100%;
`;
const StyledButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
`;

export default function RandomImage() {

const [favourites, setFavourites]= useState([])

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
    <ImageStyled>
      {data.map((item) => (
        <ImageBox key={item.id}>
          <StyledButton onClick={() => handleFavourite(item)}>
            <HeartPlus  />
          </StyledButton>
          <Image
            src={item.imageSource}
            alt={item.name}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
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
  );
}
