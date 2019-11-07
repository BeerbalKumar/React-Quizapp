import React from 'react'
import Description from './description'

export default class Result extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
    static getDerivedStateFromProps(props,state){
        let result = (100/props.questions.length)*props.right;
        console.log(result);
        if(result>=60){
         return {
             result:result,
             greet:"Congratulations"
         }
        }
        else{
            return {
            result:result,
            greet:"Sorry you are failed"
            }  
        }
    }
    render(){
        return(
        <Description
        style={{
            backgroundColor:"lightGrey",
            marginTop:"30px",
            color:"#4267b2",
            textAlign:"center",
            padding:"10px"
        }}
        >
            <h5>{this.state.greet}</h5>
          <h5>Result:{this.state.result}</h5>
          <h5>Right Questions:{this.props.right}</h5>
          <button  className="btn waves-effect waves-light" type="submit" name="action" onClick={()=>this.props.retake()}>Retake</button> &nbsp; &nbsp; &nbsp; 
          <button  className="btn waves-effect waves-light" type="submit" name="action" onClick={()=>this.props.logout()}>Logout</button>

        </Description>
        )
    }
}