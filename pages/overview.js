import useSWR from "swr";
import Image from "next/image";
import styled from "styled-components";



const fetcher = (url) => fetch(url).then((response) => response.json());

const ImageStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  gap: 20px;
  justify-content: center;
  overflow: hidden;
  background: lightgrey;
`;

const ImageBox = styled.div`
  width: 300px;
  height: 400px;
  position: relative;
  border-radius: 10px;
  box-shadow: 5px 7px 15px 2px rgba(0, 0, 0, 0.25);
  border: 10px solid white;
`;

const GalleryCard = styled.section`
  position: absolute;
  bottom: 10px;
  left: 10px;

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

export default function RandomImage() {
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
