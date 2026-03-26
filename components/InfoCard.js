import useSWR from "swr";

import styled from "styled-components";

import Link from "next/link";

const InfoCardStyled = styled.section`
  background: white;

  color: black;
  border-radius: 5px;

  box-shadow:
    rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  width: 250px;
`;

const GalleryCardTitle = styled.h4`
  font-size: 1rem;

  font-weight: 400;
  margin: 0 0;
  padding: 1rem 1rem 0.5rem;
  font-style: italic;
  width: 100%;
`;
const GalleryCardArtist = styled.h5`
  font-size: 0.8rem;
  margin: 0 0;
  font-weight: 200;

  width: 100%;

  padding: 0.5rem 0 1rem 1rem;
`;

export default function InfoCard({ artpiecesData, randomNumber }) {
  if (!artpiecesData) return null;
  return (
    <>
      <InfoCardStyled>
        <GalleryCardTitle>{artpiecesData[randomNumber].name}</GalleryCardTitle>
        <GalleryCardArtist>
          {artpiecesData[randomNumber].artist}
          {artpiecesData[randomNumber].year}
        </GalleryCardArtist>
      </InfoCardStyled>
    </>
  );
}
