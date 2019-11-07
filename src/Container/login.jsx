import React from 'react'
import Navbar from './../Components/navbar'
import Description from './../Components/description'
import Button from './../Components/button'
import Facebook from './../facebook.png'



export default class Login extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
 <Navbar onClick={this.props.onClick} btn={
     <Button value="login with facebook" img={Facebook} onClick={this.props.onClick} />
 }/>
 <Description style={{
     backgroundColor:"lightGrey",
     marginTop:"30px",
     color:"#4267b2",
     textAlign:"center",
     padding:"50px"
 }}>
 <h1>Welcome to Saylani Quizz</h1>
     </Description>     
            </div>
        )
    }
}