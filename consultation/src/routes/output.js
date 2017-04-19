import React,{Component} from "react"
import ReactDOM from "react-dom"
import Header from "../common/header"
import Left from "../common/left"
import Login from "../js/login/login"


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


import checked from "../tools/checked"

import Checked from "../js/check/checked/checked"
import LookChecked from "../js/check/checked/lookChecked"
import HadReturn from "../js/check/hadReturn/hadReturn"
import LookHadReturn from "../js/check/hadReturn/lookHadReturn"
import WaitCheck from "../js/check/waitCheck/waitCheck"
import LookWaitCheck from "../js/check/waitCheck/lookWaitCheck"
import ConsultationTask from "../js/task/consultationTask"
import LookConsultationTask from "../js/task/lookConsultationTask"


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
                <Route path="/a" component={Login}/>
                <Route path="/content" component={PageBottom} >
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
