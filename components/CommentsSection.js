/**
 * * Component: The comments section
 *
 * @param {}
 */

import { useState } from "react";
import styled from "styled-components";
import useLocalStorage from "use-local-storage";

export default function CommentsSection() {
  const maxCommentLength = 200;
  const [remainingCharacters, setRemainingCharacters] =
    useState(maxCommentLength);
  const [artpieceComments, setArtpieceComments] = useLocalStorage(
    "artpiece comments",
    []
  );

  function handleCommentSubmit(event) {
    event.preventDefault();

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const currentDay = new Date().getDate();

    setArtpieceComments([
      ...artpieceComments,
      {
        index: artpieceComments.length + 1,
        comment: event.target.elements.inputComment.value,
        date: `${currentDay}.${currentMonth}.${currentYear}`,
      },
    ]);
  }

  function handleRemainingCharacters(event) {
    setRemainingCharacters(maxCommentLength - event.target.value.length);
  }

  return (
    <>
      <Styled_Form onSubmit={handleCommentSubmit}>
        <Styled_Input
          onChange={handleRemainingCharacters}
          type="text"
          name="inputComment"
          placeholder="Write Comment"
          maxLength={maxCommentLength}
        />
        <Styled_RemainingCharacters>
          {remainingCharacters} / {maxCommentLength} left
        </Styled_RemainingCharacters>
        <Styled_SubmitButton type="submit">Submit Comment</Styled_SubmitButton>
      </Styled_Form>
      <Styled_CommentsList>
        {artpieceComments.map((artpieceComment, index) => {
          return (
            <Styled_CommentsListItem key={index}>
              {artpieceComment.comment}{" "}
              <Styled_Date>{artpieceComment.date}</Styled_Date>
            </Styled_CommentsListItem>
          );
        })}
      </Styled_CommentsList>
    </>
  );
}

const Styled_RemainingCharacters = styled.p`
  position: absolute;
  bottom: 20px;
  right: 0;
  font-size: 11px;
  margin: 0;
  text-align: right;
`;

const Styled_Date = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 10px;
  margin-bottom: 5px;
`;

const Styled_CommentsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
`;
const Styled_CommentsListItem = styled.li`
  position: relative;
  width: 300px;
  height: 70px;
  border-radius: 10px;
  border: 1px solid rgb(187, 187, 187);
  padding: 10px;
  font-size: 13px;
`;

const Styled_Input = styled.textarea`
  resize: none;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
`;

const Styled_Form = styled.form`
  position: relative;
  display: flex;
  width: 300px;
  height: 120px;
  flex-direction: column;
  align-items: center;
`;

const Styled_SubmitButton = styled.button`
  margin-top: 15px;
`;
