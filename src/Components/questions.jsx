import React from 'react'
import {getUser,loginfacebook} from './../config/functions'
import Description from './description'
import Navbar from './navbar'
import Button from './button.jsx'
import Result from './result'



export default class Questions extends React.Component{
    constructor(){
     super();
     this.state={
       start:false,
       ansValue:"",
       result:false
     }
    }

    render(){
      let {counter,question,answers} = this.props;
      console.log(this.state.ansValue)
      console.log(answers);
      console.log(question)
      console.log(counter);
      
        return(
            <div>
              <Navbar btn={<Button value={this.props.name} img={this.props.img} />} />
              {this.state.start?
              <div>
                {
                  this.props.result?
                  <Result right={this.props.right} questions={this.props.questions} logout={this.props.logout}
                  retake={this.props.retake}
                  />
                  :
                  <div>
              <h6>
                {this.props.timer}
                <br/>
              {counter+1+"."+question}
              </h6>

     {answers&&answers.map((val,i)=>{

         return <div>
         
           <p>        
          <label>
            <input className="with-gap" name="group3" type="radio" value={val} onChange={(e)=>this.setState({ansValue:e.target.value})}/>
            <span>{val}</span>
          </label>
          <br/>

        </p>
      
        </div>
        
     })}
          
                  <button onClick={()=>this.props.onClick(this.state.ansValue)} className="btn waves-effect waves-light" type="submit" name="action">Next
          <i className="material-icons right">send</i>
        </button>
        </div>
                }
        </div>
        :  
                       <Description
                       style={{
                         backgroundColor:"lightGrey",
                         marginTop:"30px",
                         color:"#4267b2",
                         textAlign:"center",
                         padding:"30px"
                     }}
                       >
                         <h3>Description</h3>
                         <h5>Questions:10</h5>
                         <h5>Quizz Duration:10 minute</h5>
                         <h5>Passing Score : 60%</h5>
                         <button onClick={()=>{this.setState({start:true});this.props.timerShow()}} className="btn waves-effect waves-light" type="submit" name="action">Start Quizz
                    
                  </button>
                         </Description>
            }
 
                
            </div>
        )
    }
    
} 