import styled from "styled-components";

export default function ArtpieceDesc({ artist, year, genre }) {
  return (
    <StyledArticle>
      <StyledWrapper>
        <StyledP>{artist}</StyledP>
        <StyledP>&nbsp;-&nbsp;{year}</StyledP>
      </StyledWrapper>
      <StyledP>{genre}</StyledP>
    </StyledArticle>
  );
}

const StyledArticle = styled.article``;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledP = styled.p``;
