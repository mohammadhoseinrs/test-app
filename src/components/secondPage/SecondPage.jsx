import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './SecondPage.css'
import Animated from './../../animated'

const quuizQuestion={
    questionsText:'Sis asagidaki hangi dogal cevrede olusmaz?',
    answerOptions:
    localStorage.getItem('hotelistan')?JSON.parse(localStorage.getItem('hotelistan'))
    :
    [
      {id:1,answer:'1',isCorrect:false , selected:false},
      {id:2,answer:'2',isCorrect:false , selected:false},
      {id:3,answer:'3',isCorrect:true , selected:false},
      {id:4,answer:'4',isCorrect:false , selected:false},
    ],
    showAnswerButton:false

}
export default function SecondPage() {
  const [question,setQuestion]=useState(quuizQuestion)
  const [qusetionarray,setQuestionArray]=useState(quuizQuestion.answerOptions)
  const [choosenAnswer,setChoosenAnswer]=useState(null)
  const [answer,setanswer]=useState(false)

  const answerHandler=(isCorrect , id)=>{
    const newarray=[...quuizQuestion.answerOptions]
    newarray.forEach(question=>{
      if(question.id===id){
        return question.selected = !question.selected
      }
      question.selected=false
    })
    setQuestionArray(newarray)
    if(isCorrect){
      return setChoosenAnswer(true)
    }
      setChoosenAnswer(false)
  }
  
  


  return (
    <Animated>
    <section className='secondPage'>
        <div className="questionsText">
          {question.questionsText}
        </div>
        <div className="questionsAnswer">
          {qusetionarray.map(answer=>(
            <button 
            key={answer.id}
            className={answer.selected ? 'answer__selected':'answer__btn'}
            onClick={()=>answerHandler(answer.isCorrect,answer.id)}>
              {answer.answer}
            </button>
          ))}
        </div>
        <div className="correctAnswer">
          <button
           className='correctAnswer__button'
           onClick={()=>setanswer(true)}
          >cevap ver</button>
          {answer ? choosenAnswer ? (<p className='correctAnswer__alert'>correct</p>):(<p className='wrongAnser'>
            Maalesef cevabiniz yanlis! Cevabiniz:'3' olmaliydi.
          </p>):('')}
            <Link className='data__table__link' to='/datatable'>data table page</Link>
        </div>
    </section>
    </Animated>
  )
}

