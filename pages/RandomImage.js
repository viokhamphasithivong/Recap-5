import useSWR from "swr";
import Image from "next/image";
import styled from "styled-components";
import { Poppins } from "next/font/google";
import Link from 'next/link'

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});
const fetcher = (url) => fetch(url).then((response) => response.json());

const ImageStyled = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 5px 7px 15px 2px rgba(0, 0, 0, 0.25);
  border: 10px solid white;
`;

const GalleryCard = styled.section`
  background: white;
  margin: 20px 0;
  color: grey;
  border-radius: 5px;
  border: 2px solid white;

  width: 250px;
  ;
`;

const GalleryCardTitle = styled(GalleryCard)`
  font-size: 1rem;
  line-height: 1.3;
  font-weight: 400;
  margin: 0.5rem 0;

  padding: 0 1rem;
  font-style: italic;
  width: 100%;
`;
const GalleryCardArtist = styled(GalleryCard)`
  font-size: 0.8rem;
  line-height: 1;
  font-weight: 200;
  margin: 0.5rem 0;

  gap: 10px;
  width: 100%;
  padding: 0 1rem;
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
        <GalleryCardTitle>{data[randomNumber].name}</GalleryCardTitle>
        <GalleryCardArtist>
          {data[randomNumber].artist}, {data[randomNumber].year}
          <Link href="/overview">Overview</Link>
        </GalleryCardArtist>
      </GalleryCard>
    </>
  );
}
