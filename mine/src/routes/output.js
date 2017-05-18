import React,{Component} from "react"
import ReactDOM from "react-dom"
import Header from "../common/header"
import api from "../common/API"
import Left from "../common/left"
import {Router,Route,hashHistory} from "react-router"
import checked from "../tools/checked"
import Mine from "../js/mine/mine"
import Check from "../js/mine/check"
class PageBottom extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
     checked.checked();
    }

    render(){
      let pageHeight=document.body.clientHeight-60;
      let style={"height":pageHeight};
        return(
            <div style={style} className="pageBottom">
                <Left/>
              <div className="content">
                {this.props.children}
              </div>

            </div>
        )
    }
}

class Page extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="page">
              <Header/>
              <Router history={hashHistory}>

                <Route path="/content" component={PageBottom} >
                  <Route path="/mine" component={Mine}/>
                  <Route path="/check" component={Check}/>
                </Route>
              </Router>
            </div>
        )
    }
}
ReactDOM.render(<Page/>,document.getElementById("app"));
