import React,{Component} from "react"
import ReactDOM from "react-dom"
import Header from "../common/header"
import Left from "../common/left"
import Content from "../common/content"
import api from "../common/API"
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
import Log from "../js/log/log"
let serverD=api().serverAdress;
const jwtDecode = require('jwt-decode');
let auth=[
  {
    id:1,
    route:"#/usrmgmt/usrmgmt"
  },
  {
    id:1,
    route:"#/usrmgmt/addUsrmgmt"
  },
  {
    id:1,
    route:"#/usrmgmt/editUsrmgmt"
  },
  {
    id:2,
    route:"#/rolemgmt/rolemgmt"
  },
  {
    id:2,
    route:"#/rolemgmt/addRolemgmt"
  },
  {
    id:2,
    route:"#/rolemgmt/editRolemgmt"
  },
  {
    id:3,
    route:"#/memuauthority/memuauthority"
  },
  {
    id:5,
    route:"#/log/log"
  }
];
let reg = /^[0-9]+.?[0-9]*$/;
function matches(str) {
  let ar=str.split("/");
  if(reg.test(ar[ar.length-1])){
    return true
  }
}
function spl(str) {
  let ar=str.split("/");
  ar.splice(ar.length-1);
  return ar.join("/")
}
class PageBottom extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
      checked.checked();
      this.checkAuthorization()
    }

    checkAuthorization(){
      if(localStorage.getItem('robertUserName')){
        const bearer = localStorage.getItem('robertUserName');
        let decoded = jwtDecode(bearer);
        let permissions = decoded.permissions;
        let flag=true;
        let hashed=location.hash;
        if(hashed!=="#/usrmgmt/blank"){
          if(matches(hashed)){
            hashed=spl(hashed)
          }
          auth.map(function (ele) {
            if(ele.route===hashed){
              if(permissions.indexOf(ele.id.toString())!==-1){
                flag=false
              }
            }
          });
          if(flag){

            location.href=serverD+"/#/entrance"
          }
        }
      }
    }
    componentWillUpdate(){
      this.checkAuthorization()
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
                  <Route path="/usrmgmt/blank" component={Content}/>
                  <Route path="/usrmgmt/usrmgmt" component={UsrMgmt}/>
                  <Route path="/log/log" component={Log}/>
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
