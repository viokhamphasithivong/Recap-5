import useSWR from "swr";
import Image from "next/image";
import styled from "styled-components";
import { Poppins } from "next/font/google";
import Link from "next/link";

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
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: 10px solid white;
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
    </>
  );
}
