import type { Question } from "@/entities/question";
import { useState } from "react";

type Props = {
  question: Question;
};

export const QuestionRow = ({ question }: Props) => {
  const { title, rate, complexity, imageSrc, shortAnswer } = question;

  const [open, setOpen] = useState(false);

  const handleToggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <h1 onClick={handleToggleOpen}>{title}</h1>

      {open && (
        <>
          <div>
            <p>Рейтинг: {rate}</p>
          </div>

          <div>
            <p>Сложность: {complexity}</p>
          </div>

          {imageSrc && <img src={imageSrc} alt="" />}

          <p>{shortAnswer}</p>
          <p>Подробнее</p>
        </>
      )}
    </div>
  );
};
