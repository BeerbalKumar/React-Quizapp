import React from 'react'


export default class Button extends React.Component{
    constructor(){
super();
    }
    render(){
        return(
            <a className="waves-effect waves-light btn" onClick={()=>this.props.onClick()}>
          <img src={this.props.img} alt="facebook login" width="40px" height="25px" align="center"/>
          {this.props.value}
           </a>
        )
    }
}