import type { RouteObject } from "react-router-dom";
import { QuestionList } from "@/pages/question/ui/question-list.tsx";
import { QuestionCard } from "@/entities/question";

export const config: RouteObject[] = [
  {
    path: "/",
    element: <QuestionList />,
  },
  {
    path: ":id",
    element: <QuestionCard />,
  },
];
