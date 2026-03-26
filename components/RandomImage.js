import useSWR from "swr";
import Image from "next/image";
import styled from "styled-components";
import { Poppins } from "next/font/google";
import Link from "next/link";
import LikeButton from "./LikeButton.js";
import { useArtStore } from "@/stores/artpieceStore.js";
import { useEffect } from "react";
import { useState } from "react";

export default function RandomImage({
  artpiecesData,
  randomNumber,
  toggleFavourite,
}) {
  if (!artpiecesData) return null;
  return (
    <>
      <ImageStyled>
        <LikeButton
          artpiece={artpiecesData[randomNumber]}
          onToggleFavourite={() => toggleFavourite(randomNumber)}
        />

        <Image
          src={artpiecesData[randomNumber].imageSource}
          alt={artpiecesData[randomNumber].name}
          fill
          size="auto"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </ImageStyled>
    </>
  );
}

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const ImageStyled = styled.div`
  position: relative;
  width: 700px;
  height: 500px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow:
    rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;
