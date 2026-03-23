import useSWR from "swr";
import Image from "next/image";
import styled from "styled-components";

const fetcher = (url) => fetch(url).then((response) => response.json());

const ImageStyled = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 5px 7px 15px 2px rgba(0,0,0,0.25);
  border: 10px solid white;
`;

const GalleryCard = styled.section`
  width: 200px;
  background: white;
  margin: 20px 0;
  color: grey;
  border-radius: 5px;
  border: 2px solid white;
  padding: 5px;
`;

export default function RandomImage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <p>Error while loading</p>;
  if (isLoading || !data) return <p>Loading</p>;

  const randomNumber = Math.floor(Math.random() * data.length);

  return (
    <>
      <ImageStyled>
        <Image
          src={data[randomNumber].imageSource}
          alt={data[randomNumber].name}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </ImageStyled>

      <GalleryCard>
        <ul>
          {data[randomNumber].name}
          {data[randomNumber].artist}
          {data[randomNumber].year}
        </ul>
      </GalleryCard>
    </>
  );
}