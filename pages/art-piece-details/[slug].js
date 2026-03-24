/**
 *
 * * Art piece details component
 *
 * shows additional indormation for the selected artpiece
 *
 *
 * @param {}
 *
 *
 */

import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";
import Image from "next/image";
import ColorPallete from "@/components/color-pallete";
import ArtpieceDesc from "@/components/artpiece-desc";

export default function ArtPieceDetails({ selectedArtpiece }) {
  const router = useRouter();
  const slug = router.query;

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

  if (!data && !selectedArtpiece) return <p>--- is loading ---</p>;
  if (!selectedArtpiece)
    selectedArtpiece = data.find((dataElement) => dataElement.slug == slug);

  console.log("selectedArtpiece: ", selectedArtpiece);

  return (
    <>
      <h1>{selectedArtpiece.name}</h1>
      <Image
        src={selectedArtpiece.imageSource}
        alt="art piece image"
        width={500}
        height={500}
      />
      <ColorPallete colors={selectedArtpiece.colors} />
      <ArtpieceDesc
        artist={selectedArtpiece.artist}
        year={selectedArtpiece.year}
        genre={selectedArtpiece.genre}
      />
    </>
  );
}
