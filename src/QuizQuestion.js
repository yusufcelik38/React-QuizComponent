import React,{Component} from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component{
    handleClick(buttonText){

    }
    showNextQuestion(){

    }
    render(){
return(      <main>
    <section>
      <p>{this.props.quiz_question.instruction_text}</p>
    </section>
    <section className="buttons">
      <ul>
          {this.props.quiz_question.answer_options.map((answer_option,index)=>{
              return         <QuizQuestionButton
              key={index} button_text={answer_option}

              clickHandler={this.handleClick.bind(this) } showNextQuestionHandler={this.showNextQuestion.bind(this)}

               />

          })}
      </ul>
    </section>
  </main>)
    }
}
export default QuizQuestion