import useSWR from "swr";

import styled from "styled-components";

import Link from "next/link";

const fetcher = (url) => fetch(url).then((response) => response.json());

const InfoCardStyled = styled.section`
  background: white;
  margin: 20px 0;
  color: grey;
  border-radius: 5px;
  border: 2px solid white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 250px;
`;

const GalleryCardTitle = styled.h4`
  font-size: 1rem;
  line-height: 1.3;
  font-weight: 400;
  margin: 0.5rem 0;

  padding: 0 1rem;
  font-style: italic;
  width: 100%;
`;
const GalleryCardArtist = styled.h5`
  font-size: 0.8rem;
  line-height: 1;
  font-weight: 200;
  margin: 0.5rem 0;

  gap: 10px;
  width: 100%;
  padding: 0 1rem;
`;

export default function InfoCard() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <p>Error while loading</p>;
  if (isLoading || !data) return <p>Loading</p>;

  const randomNumber = Math.floor(Math.random() * data.length);

  return (
    <>
      <InfoCardStyled>
        <GalleryCardTitle>{data[randomNumber].name}</GalleryCardTitle>
        <GalleryCardArtist>
          {data[randomNumber].artist}, {data[randomNumber].year}
        </GalleryCardArtist>
      </InfoCardStyled>
    </>
  );
}
