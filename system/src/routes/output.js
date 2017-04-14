import React,{Component} from "react"
import ReactDOM from "react-dom"
import Header from "../common/header"
import Left from "../common/left"

import {Router,Route,hashHistory} from "react-router"
import UsrMgmt from "../js/usrmgmt/usrMgmt"
import AddUsrMgmt from "../js/usrmgmt/addUsrMgmt"
import EditUsrMgmt from "../js/usrmgmt/editUsrMgmt"
import RoleMgmt from "../js/rolemgmt/rolemgmt"
import EditRolemgmt from "../js/rolemgmt/editRoleMgmt"
import AddRolemgmt from "../js/rolemgmt/addRoleMgmt"
import GiveAuthorization from "../js/rolemgmt/giveAuthorization"
import Memuauthority from "../js/memuauthority/memuauthority"
import MenuAuthorization from "../js/memuauthority/menuAuthorization"
import EditMemuauthority from "../js/memuauthority/editMmemuauthority"


import checked from "../tools/checked"

class PageBottom extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
       checked.checked()
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

                  <Route path="/usrmgmt/usrmgmt" component={UsrMgmt}/>
                  <Route path="/usrmgmt/addUsrmgmt" component={AddUsrMgmt}/>
                  <Route path="/usrmgmt/editUsrmgmt/:id" component={EditUsrMgmt}/>


                  <Route path="/rolemgmt/rolemgmt" component={RoleMgmt}/>
                  <Route path="/rolemgmt/addRolemgmt" component={AddRolemgmt}/>
                  <Route path="/rolemgmt/editRolemgmt/:id" component={EditRolemgmt}/>
                  <Route path="/rolemgmt/giveAuthorization" component={GiveAuthorization}/>


                  <Route path="/memuauthority/memuauthority" component={Memuauthority}/>
                  <Route path="/memuauthority/menuAuthorization" component={MenuAuthorization}/>
                  <Route path="/memuauthority/editMemuauthority" component={EditMemuauthority}/>

                </Route>


              </Router>

            </div>
        )
    }
}







ReactDOM.render(<Page/>,document.getElementById("app"));
