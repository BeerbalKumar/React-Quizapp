import React from 'react';
import './App.css';
import { getUser, loginfacebook, check ,Timer,Logout} from './config/functions'
import Questions from './Components/questions'
import PaperSheet from './Components/description'
import Login from './Container/login'
import RouterBasic from './config/router'

class App extends React.Component {
  constructor() {


    super();
    this.state = {
      // questions:"",
      counter: 0,
      answers: "",
      login: false,
      right:0,
      result:false,
      time: 600
    }
  }

  login = async () => {
    let user = await loginfacebook()
    console.log(user);

    this.setState({
      login: true,
      userName:user.name,
      userPhoto:user.img

    })
  }
  async componentDidMount() {
    let { counter, question } = this.state
    let questions = await getUser()
    console.log(questions);

    let user= await check()
    this.setState({
      login: true,
      userName:user.name,
      userPhoto:user.img

    })
    

    console.log(questions.results[0].correct_answer)
    console.log(questions.results[0].question);
    questions.results[0].incorrect_answers.push(questions.results[0].correct_answer);
    console.log(questions.results[0].incorrect_answers);
    this.setState({
      answers: questions.results[0].incorrect_answers,
      question: questions.results[0].question,
      questions: questions.results
    })
  }

  next = (val) => {
    let { counter, question, questions } = this.state

if(counter === questions.length-1){
   this.setState({
     result:true
   })
}
else{
    questions[counter + 1].incorrect_answers.push(questions[counter+1].correct_answer);
    console.log(questions[counter + 1].incorrect_answers);
    this.setState({
      answers: questions[counter + 1].incorrect_answers,
      question: questions[counter + 1].question,
      counter: counter + 1
    })

    console.log( questions[counter].correct_answer)
    if(val === questions[counter].correct_answer){
      alert()
      let {right} =this.state
      this.setState({
        right: right+1
      })
    }
  }
  }
// Timer
  timerShow = (res) => {
    setInterval(async () => {
      try {
        let time = await Timer(this.state.time);
        console.log(time)
        if (time === '0:00') {
          this.setState({
            result: true,
          })
          clearInterval()
        }
        else {
          this.setState({
            Time: time,
            start: false,
            time : this.state.time -1
          })
        }

      }
      catch (error) {
        console.log(error)
      }
    }, 1000)

  }
 logout = async()=>{
await Logout();
await this.setState({
  login: false,
  result:false,
  counter:0,
  time: 600
})
}
retake=()=>{
 this.setState({
   result:false,
   time: 600,
   counter:0
 })
}
  render() {
    let { counter, question, questions, answers, login,right } = this.state

    console.log(this.state.time)



    return (
      <div>
        {login ? <Questions timerShow={this.timerShow} name={this.state.userName} img={this.state.userPhoto}
         onClick={this.next} counter={counter} question={question} answers={answers} timer={this.state.Time}
         result={this.state.result}
         right={this.state.right} questions={questions} logout={this.logout} retake={this.retake} /> :
          <Login onClick={this.login} />
        }


      </div>
    )
  }
}

export default App;
