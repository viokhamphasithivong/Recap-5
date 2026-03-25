/**
 * * Component: Art piece details
 * shows additional indormation for the selected artpiece
 *
 * @param {object} props.artworkObject - Object of a single artwrok with artist, year and genre
 */

import styled from "styled-components";

export default function ArtpieceDesc({ artworkObject }) {
  return (
    <Styled_Article>
      <Styled_Wrapper>
        <Styled_P>Artist: {artworkObject.artist}</Styled_P>
        <Styled_P>&nbsp;-&nbsp;{artworkObject.year}</Styled_P>
        <Styled_P>&nbsp;-&nbsp;{artworkObject.genre}</Styled_P>
      </Styled_Wrapper>
    </Styled_Article>
  );
}

const Styled_Article = styled.article``;

const Styled_Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Styled_P = styled.p``;
