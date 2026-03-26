/**
 * * Art piece details component
 * shows additional indormation for the selected artpiece
 *
 *
 * @param {object} props.selectedArtpiece - The full object of the artpiece with should contain imageSource, colors, slug and name
 *
 *
 */

import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";
import Image from "next/image";
import ColorPallete from "@/components/ColorPallete";
import ArtpieceDesc from "@/components/ArtpieceDesc";
import CommentsSection from "@/components/CommentsSection";

import { useState } from "react";
import {
  Styled_Container,
  Styled_Image,
  Styled_Layout,
  Header,
} from "@/styles/ArtPieceDetails.styles";
import { useEffect } from "react";

import NavigationBar from "@/components/NavigationBar";

import { useArtStore } from "@/stores/artpieceStore";

export default function ArtPieceDetails({}) {
  const router = useRouter();
  const { slug } = router.query;

  const constantImageHeight = 500;
  const constantImageWidth = 500;

  const [imageSize, setImageSize] = useState({
    width: constantImageWidth,
    height: constantImageHeight,
  });

  const [selectedArtpiece, setSelectedArtpiece] = useState(null);

  const { artpiecesData, setArtpiecesData, toggleFavourite } = useArtStore();

  function handleImageEnlargement(event) {
    setImageSize((prev) => {
      if (
        prev.width == constantImageWidth &&
        prev.height == constantImageHeight
      ) {
        return {
          width: selectedArtpiece.dimensions.width,
          height: selectedArtpiece.dimensions.width,
        };
      } else {
        return {
          width: constantImageWidth,
          height: constantImageHeight,
        };
      }
    });
  }

  //--< data detcher
  const fetcher = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }
    return res.json();
  };

  const { data, error, isLoading } = useSWR(
    selectedArtpiece ? null : "https://example-apis.vercel.app/api/art",
    fetcher
  );

  useEffect(() => {
    if (data && artpiecesData.length === 0) setArtpiecesData(data);
  }, [data, artpiecesData]);

  useEffect(() => {
    if (!selectedArtpiece && artpiecesData && slug)
      setSelectedArtpiece(
        artpiecesData.find((artpiece) => artpiece.slug == slug)
      );
  }, [selectedArtpiece, data, slug]);

  if (error) return <p>artwork could not be retrieved :p</p>;

  if (!selectedArtpiece) return <p>--- is loading ---</p>;

  return (
    <Styled_Layout>
      <Header>Artgallery.Details.</Header>
      <Styled_Container>
        <h1>{selectedArtpiece.name}</h1>
        <Styled_Image
          onClick={handleImageEnlargement}
          src={selectedArtpiece.imageSource}
          alt="art piece image"
          width={imageSize.width}
          height={imageSize.height}
        />
        <ColorPallete colors={selectedArtpiece.colors} />
        <ArtpieceDesc artworkObject={selectedArtpiece} />
        <CommentsSection />
      </Styled_Container>
      <NavigationBar />
    </Styled_Layout>
  );
}
