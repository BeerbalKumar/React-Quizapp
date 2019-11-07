import React from "react"
import Logo from '../quizapp.svg'



export default class Navbar extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <div>

<nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo"><img src={Logo} alt="Quiz app" width="40px" align="center"/>Quiz App</a>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">

        <li>
        {this.props.btn}
        </li>
     
      </ul>
    </div>
  </nav>

  {/* <ul className="sidenav" id="mobile-demo">
  <li><a className="waves-effect waves-light btn">login with facebook</a></li>
 
  </ul> */}
</div>
        )
    }
}