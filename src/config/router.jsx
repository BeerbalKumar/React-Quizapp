import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Description from './../Components/description'

export default class RouterBasic extends React.Component{
    render(){
        return(
            <Router>
 <div>
     <Route path="/Description" Component={Description}/>
 </div>

            </Router>
        )
    }
}