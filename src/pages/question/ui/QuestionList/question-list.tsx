import { QuestionRow, useGetQuestionsQuery } from "@/entities/question";

export const QuestionList = () => {
  const { data: questions, isLoading } = useGetQuestionsQuery({page: 12});

  if (isLoading) {
    return <p>Загрузка вопросов ...</p>;
  }
  return (
    <div>
      {questions &&
        questions.data.map((question) => (
          <QuestionRow key={question.id} question={question} />
        ))}
    </div>
  );
};
