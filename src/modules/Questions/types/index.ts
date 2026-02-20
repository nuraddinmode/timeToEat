export type chapterKeys = "products" | "programs" | "payment" | "storage";

export type Question = {
  id: number;
  question: string;
  answer: string;
};

export type QuestionChapter = {
  id: number;
  chapter: string;
  key: chapterKeys;
  questions: Question[];
};
