import React,{Component} from "react"
import ReactDOM from "react-dom"
import Header from "../common/header"
import Left from "../common/left"
import Content from "../common/content"

import {Router,Route,hashHistory} from "react-router"
import Hospital from "../js/healthInfo/hospital/hospital"
import EditHospital from "../js/healthInfo/hospital/editHospital"
import AddHospital from "../js/healthInfo/hospital/addHospital"
import Doctor from "../js/healthInfo/doctor/doctor"
import EditDoctor from "../js/healthInfo/doctor/editDoctorl"
import AddDoctor from "../js/healthInfo/doctor/addDoctorl"


import checked from "../tools/checked"
const jwtDecode = require('jwt-decode');
let auth=[
  {
    id:20,
    route:"#/healthInfo/hospital/hospital"
  },

  {
    id:20,
    route:"#/healthInfo/hospital/editHospital"
  },{
    id:20,
    route:"#/healthInfo/hospital/addHospital"
  },
  {
    id:21,
    route:"#/healthInfo/doctor/doctor"
  },
  {
    id:21,
    route:"#/healthInfo/doctor/editDoctor"
  },{
    id:21,
    route:"#/healthInfo/doctor/addDoctor"
  },
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
        if(hashed!=="#/healthInfo/blank"){
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

            location.href="http://192.168.100.133:8787/#/entrance"
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
                  <Route path="/healthInfo/blank" component={Content}/>
                  <Route path="/healthInfo/hospital/hospital" component={Hospital}/>
                  <Route path="/healthInfo/hospital/editHospital/:id" component={EditHospital}/>
                  <Route path="/healthInfo/hospital/addHospital" component={AddHospital}/>
                  <Route path="/healthInfo/doctor/doctor" component={Doctor}/>
                  <Route path="/healthInfo/doctor/editDoctor/:id" component={EditDoctor}/>
                  <Route path="/healthInfo/doctor/addDoctor" component={AddDoctor}/>

                </Route>


              </Router>

            </div>
        )
    }
}







ReactDOM.render(<Page/>,document.getElementById("app"));
