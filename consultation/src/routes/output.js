import React,{Component} from "react"
import ReactDOM from "react-dom"
import Header from "../common/header"
import Left from "../common/left"
import Content from "../common/content"


import {Router,Route,hashHistory} from "react-router"
import Apply from "../js/apply/apply"//申请会诊
import DaiShen from "../js/apply/daiShen/daiShen"//待审会诊
import Looked from "../js/apply/daiShen/looked"//待审查看会诊
import NewConsultation from "../js/apply/NewConsultation"//申请会诊-新增会诊
import AddConsultation from "../js/apply/addConsultation"//申请会诊-创建副本
import EditCnsulation from "../js/apply/editCnsultation"//申请会诊-编辑会诊
import ReturnRecord from "../js/apply/return/return"//申请会诊-被退会诊
import EditReturn from "../js/apply/return/editReturn"//申请会诊-被退会诊编辑
import Invalid from "../js/invalid/invalid"//作废会诊-查询
import LookInvalid from "../js/invalid/lookInvalid"//作废会诊-查看

import Consulation from "../js/consulationTables/consulation"//会诊总表-查询
import LookConsulation from "../js/consulationTables/lookConsulation"//会诊总表-查看
const jwtDecode = require('jwt-decode');

import checked from "../tools/checked"

import Checked from "../js/check/checked/checked"
import LookChecked from "../js/check/checked/lookChecked"
import HadReturn from "../js/check/hadReturn/hadReturn"
import LookHadReturn from "../js/check/hadReturn/lookHadReturn"
import WaitCheck from "../js/check/waitCheck/waitCheck"
import LookWaitCheck from "../js/check/waitCheck/lookWaitCheck"
import ConsultationTask from "../js/task/consultationTask"
import LookConsultationTask from "../js/task/lookConsultationTask"
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
let auth=[
  {
    id:6,
    route:"#/apply"
  }, {
    id:6,
    route:"#/apply/newConsultation"
  },{
    id:6,
    route:"#/apply/editCnsulation"
  },{
    id:6,
    route:"#/apply/addConsultation"
  },
  {
    id:7,
    route:"#/apply/daiShen"
  },
  {
    id:7,
    route:"#/apply/daiShen/looked"
  },
  {
    id:8,
    route:"#/apply/return/ReturnRecord"
  },
  {
    id:8,
    route:"#/apply/return/ReturnRecord/editReturn"
  },
  {
    id:9,
    route:"#/check/waitCheck/waitCheck"
  },
  {
    id:9,
    route:"#/check/waitCheck/lookWaitCheck"
  },
  {
    id:10,
    route:"#/check/hadReturn/hadReturn"
  },{
    id:10,
    route:"#/check/hadReturn/lookHadReturn"
  },
  {
    id:11,
    route:"#/check/checked/checked"
  },{
    id:11,
    route:"#/check/checked/lookChecked"
  },
  {
    id:12,
    route:"#/task/consultationTask"
  },{
    id:12,
    route:"#/task/lookConsultationTask"
  },
  {
    id:13,
    route:"#/invalid/invalid"
  },{
    id:13,
    route:"#/invalid/lookInvalid"
  },
  {
    id:14,
    route:"#/consulationTables/consulation"
  },{
    id:14,
    route:"#/consulationTables/lookConsulation"
  },
];
class PageBottom extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
      checked.checked();
      this.checkAuthorization()
    }
    componentWillUpdate(){
      this.checkAuthorization()
    }
    checkAuthorization(){
      if(localStorage.getItem('robertUserName')){
        const bearer = localStorage.getItem('robertUserName');
        let decoded = jwtDecode(bearer);
        let permissions = decoded.permissions;
        let flag=true;
        let hashed=location.hash;
        if(hashed!=="#/apply/blank"){
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
                  <Route path="/apply/blank" component={Content}/>
                  <Route path="/apply" component={Apply}/>
                  <Route path="/apply/daiShen" component={DaiShen}/>
                  <Route path="/apply/daiShen/looked/:id" component={Looked}/>
                  <Route path="/apply/return/ReturnRecord" component={ReturnRecord}/>
                  <Route path="/apply/return/ReturnRecord/editReturn/:id" component={EditReturn}/>
                  <Route path="/apply/newConsultation" component={NewConsultation}/>
                  <Route path="/apply/addConsultation/:id" component={AddConsultation}/>
                  <Route path="/apply/editCnsulation/:id" component={EditCnsulation}/>
                  <Route path="/invalid/invalid" component={Invalid}/>
                  <Route path="/invalid/lookInvalid/:id" component={LookInvalid}/>


                  <Route path="/consulationTables/consulation" component={Consulation}/>
                  <Route path="/consulationTables/lookConsulation/:id" component={LookConsulation}/>

                  <Route path="/check/waitCheck/waitCheck" component={WaitCheck}/>
                  <Route path="/check/waitCheck/lookWaitCheck(/:id)" component={LookWaitCheck}/>
                  {/*待审*/}

                  <Route path="/check/checked/checked" component={Checked}/>
                  <Route path="/check/checked/lookChecked(/:id)" component={LookChecked}/>
                  {/*已审*/}

                  <Route path="/check/hadReturn/hadReturn" component={HadReturn}/>
                  <Route path="/check/hadReturn/lookHadReturn(/:id)" component={LookHadReturn}/>
                  {/*已退*/}

                  <Route path="/task/consultationTask" component={ConsultationTask}/>
                  <Route path="/task/lookConsultationTask(/:id)" component={LookConsultationTask}/>
                  {/*task*/}
                </Route>


              </Router>

            </div>
        )
    }
}







ReactDOM.render(<Page/>,document.getElementById("app"));
