import React, { useState } from "react";
import "./quiz.css"

type Quiz = {
  id: number;
  name: string;
  questions: Question[];
};

type Question = {
  id: number;
  score: number;
  name: string;
  variants: Variant[];
};

type Variant = {
  id: number;
  name: string;
    isCorrect: boolean;
  opt:string
};

const quiz: Quiz = {
  id: 1,
  name: "Quiz #2",
  questions: [
    {
      id: 1,
      score: 100,
      name: "რას გვიბრუნებს useState ჰუკი?",
      variants: [
        { id: 1, name: "ობიექტს", isCorrect: false, opt:"A" },
        { id: 2, name: "მასივს", isCorrect: true,opt:"B" },
        { id: 3, name: "სტრინგს", isCorrect: false,opt:"C" },
        { id: 4, name: "ბულეანს", isCorrect: false, opt:"D" },
      ],
    },
    {
      id: 2,
      score: 100,
      name: "რეაქტში მონაცემები მოძრაობენ იერარქიულად",
      variants: [
        { id: 1, name: "ზემოდან ქვემოთ", isCorrect: true,opt:"A" },
        { id: 2, name: "ქვემოდან ზემოთ", isCorrect: false,opt:"B" },
        { id: 3, name: "ორივე მიმართულებით", isCorrect: false, opt:"C" },
      ],
    },
    {
      id: 3,
      score: 100,
      name: "useState-ის საწყის მნიშვნელობად შეგვიძლია გვქონდეს",
      variants: [
        { id: 1, name: "სტრინგი", isCorrect: false,opt:"A" },
        { id: 2, name: "ობიექტი", isCorrect: false,opt:"B" },
        { id: 3, name: "ნებისმიერი მონაცემის ტიპი", isCorrect: true,opt:"C" },
      ],
    },
    {
      id: 4,
      score: 100,
      name: "შეგვიძლია თუ არა useState ჰუკის გამოყენება if-ის შიგნით?",
      variants: [
        { id: 1, name: "კი", isCorrect: false,opt:"A" },
        { id: 2, name: "არა", isCorrect: true,opt:"B" },
      ],
    },
  ],
};

const QuizPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleAnswerClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }

    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="page-wrapper">
      <h1>{quiz.name}</h1>
      {!quizCompleted ? (
        <div className="quiz-card">
          <h2 className="question">{currentQuestion.name}</h2>
          <div>
            {currentQuestion.variants.map((variant) => (
            <div key={variant.id} className="answers">
                    <button className="question-button" onClick={() => handleAnswerClick(variant.isCorrect)}>
                        {/* <span>
                            {variant.opt}       
                        </span> */}
                           {variant.name} 
                        
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="results">
          <h2>Quiz Completed!</h2>
          <p>
            You got {correctAnswers} out of 4 questions
            correct!
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
