import React,{useState} from 'react'
import "./Quiz.css"

const Quiz = () => {

    const questions = [
        {
            questionText: "Что не является языком прогроммирование?",
            answerOption: [
                {
                    id: 1,
                    answerText: "JavaScript",
                    isCorrect: false
                },
                {
                    id: 2,
                    answerText: "CSS",
                    isCorrect: true
                },
                {
                    id: 3,
                    answerText: "C#",
                    isCorrect: false,
                },
            ]
        },
        {
            questionText: "Какая компания разработала React ?",
            answerOption: [
                {
                    id: 4,
                    answerText: "Google",
                    isCorrect: false,
                },
                {
                    id: 5,
                    answerText: "Яндекс",
                    isCorrect: false,
                },
                {
                    id: 6,
                    answerText: "Facebook",
                    isCorrect: true,
                }
            ]
        },
        {
            questionText: "Когда день программиста ?",
            answerOption: [
                {
                    id: 7,
                    answerText: "13 сентября",
                    isCorrect: true,
                },
                {
                    id: 8,
                    answerText: "2 декабря",
                    isCorrect: false,
                },
                {
                    id: 9,
                    answerText: "11 апреля",
                    isCorrect: false,
                }
            ]
        },
    ]
    
    const [questionCurrent,setQuestionCurrent] = useState(0)
    const [score,setScore] = useState(0)
    const [showScore,setShowScore] = useState(false)


    const handleAnswerOptionClick =(isCorrect) => {
        if(isCorrect){
            setScore(score +1)
        }
        const nextQuestions = questionCurrent + 1;

        if(nextQuestions < questions.length){
            setQuestionCurrent(nextQuestions)
        } else{
            setShowScore(true)
        }
    }

    const refresh = () => {
        setQuestionCurrent(0)
        setScore(0)
        setShowScore(false)
    }





  return (
    <div className='quiz'>
        <div className="quiz_container">
        {
            showScore
            ?   <div className="score">
                    <p>Правильных ответов: {score} из {questions.length}</p>
                    <button
                    onClick={ () => refresh() }
                     className='again'>Пройти еще раз
                     </button>
                </div>

            : <>
                <div className="questions">
                        <div className="question_count">
                            <span>Вопрос {questionCurrent + 1}</span> / {questions.length}
                        </div>
                        <div className="question_text">
                            {questions[questionCurrent].questionText}
                        </div>
                </div>
                <div className="answers_question">
                        {questions[questionCurrent].answerOption.map(element =>(
                            <button
                                onClick={() => handleAnswerOptionClick(element.isCorrect)}
                                key={element.id}>
                                {element.answerText}
                            </button>
                        ))}
                </div>
             </>
        }
        </div>
    </div>
  )
}

export default Quiz