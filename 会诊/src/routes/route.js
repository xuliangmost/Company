import React,{Component} from "react"
import ReactDOM from "react-dom"
import {Router,Route,hashHistory} from "react-router"


import Header from "../common/header"
import Content from "../common/content"
import Left from "../common/left"
class PageBottom extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="pageBottom">
                <Left/>
                <Content/>
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
                <PageBottom/>
            </div>
        )
    }
}

ReactDOM.render(<Page/>,document.getElementById("app"));
