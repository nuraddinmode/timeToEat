import { SmallRadio } from "@shared/components/SmallRadio";
import { questionChapters } from "./consts";
import type { chapterKeys } from "./types";
import { useState } from "react";
import styled from "styled-components";
import { Device } from "@shared/styles/media";
import Arrow from "@assets/icons/arrowVector.svg?component";
import { Colors } from "@shared/styles/Colors";

const Root = styled.div`
  padding-right: 20px;
  padding-left: 20px;

  @media ${Device.Tablet} {
    gap: 40px;
  }
  @media ${Device.Laptop} {
    padding-right: 60px;
    padding-left: 60px;
    margin-bottom: 110px;
  }
`;

const Chapters = styled.div`
  display: flex;
  gap: 30px;
  overflow-x: auto;
  margin-bottom: 30px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.h1`
  color: ${Colors.black};
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;

  @media ${Device.Laptop} {
    font-size: 48px;
    margin-bottom: 32px;
  }
`;

const QuestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media ${Device.Laptop} {
    gap: 20px;
  }
`;

const QuestionContainer = styled.div`
  border-radius: 30px;
  background: ${Colors.white};
  overflow: hidden;
`;

const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  cursor: pointer;
`;

const QuestionTitle = styled.h3`
  color: ${Colors.secondary};
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 700;
  user-select: none;

  @media ${Device.Laptop} {
    font-size: 24px;
  }
`;

const AnswerWrapper = styled.div<{ $open: boolean }>`
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? "1fr" : "0fr")};
  transition: grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1);
`;

const AnswerInner = styled.div`
  overflow: hidden;
`;

const Answer = styled.div`
  padding: 0 30px 30px 30px;
  color: ${Colors.secondary};
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  user-select: none;
`;

const StyledArrow = styled(Arrow)<{ $open: boolean }>`
  transition: transform 0.3s ease;
  transform: rotate(${({ $open }) => ($open ? "180deg" : "0deg")});
`;

const Questions = () => {
  const [selectedChapter, setSelectedChapter] =
    useState<chapterKeys>("payment");

  const [openQuestionId, setOpenQuestionId] = useState<number | null>(null);

  const currentChapter = questionChapters.find(
    (chapter) => chapter.key === selectedChapter,
  );

  const handleToggle = (id: number) => {
    setOpenQuestionId((prev) => (prev === id ? null : id));
  };

  const handleChapterChange = (key: chapterKeys) => {
    setSelectedChapter(key);
    setOpenQuestionId(null);
  };

  return (
    <Root>
      <Title>Частые вопросы</Title>

      <Chapters>
        {questionChapters.map(({ id, chapter, key }) => (
          <SmallRadio
            key={id}
            text={chapter}
            isActive={selectedChapter === key}
            onClick={() => handleChapterChange(key)}
          />
        ))}
      </Chapters>

      <QuestionsWrapper>
        {currentChapter?.questions.map(({ id, question, answer }) => {
          const isOpen = openQuestionId === id;

          return (
            <QuestionContainer key={id}>
              <QuestionHeader onClick={() => handleToggle(id)}>
                <QuestionTitle>{question}</QuestionTitle>
                <StyledArrow $open={isOpen} />
              </QuestionHeader>

              <AnswerWrapper $open={isOpen}>
                <AnswerInner>
                  <Answer>{answer}</Answer>
                </AnswerInner>
              </AnswerWrapper>
            </QuestionContainer>
          );
        })}
      </QuestionsWrapper>
    </Root>
  );
};

export { Questions };
