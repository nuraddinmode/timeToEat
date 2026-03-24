type chapterKeys = "products" | "programs" | "payment" | "storage";

type Question = {
  id: number;
  question: string;
  answer: string;
};

type QuestionChapter = {
  id: number;
  chapter: string;
  key: chapterKeys;
  questions: Question[];
};

export type { chapterKeys, Question, QuestionChapter };
