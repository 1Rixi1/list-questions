import { baseApi } from "@/shared/api/api.ts";
import type {
  QuestionsRequest,
  QuestionsResponse,
} from "@/entities/question/model/type/question-shema.ts";

export const publicQuestions = baseApi.injectEndpoints({
  endpoints: ({ query }) => ({
    getQuestions: query<QuestionsResponse, QuestionsRequest>({
      query: ({ page = 1 }) => ({
        url: "questions/public-questions",
        params: {
          page,
        },
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetQuestionsQuery } = publicQuestions;
