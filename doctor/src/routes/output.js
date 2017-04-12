import React,{Component} from "react"
import ReactDOM from "react-dom"
import Header from "../common/header"
import Left from "../common/left"

import {Router,Route,hashHistory} from "react-router"
import Hospital from "../js/healthInfo/hospital/hospital"//申请会诊
import EditHospital from "../js/healthInfo/hospital/editHospital"//申请会诊
import AddHospital from "../js/healthInfo/hospital/addHospital"//申请会诊
import Doctor from "../js/healthInfo/doctor/doctor"//申请会诊


import checked from "../tools/checked"

class PageBottom extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
      // checked.checked()
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


                  <Route path="/healthInfo/hospital/hospital" component={Hospital}/>
                  <Route path="/healthInfo/hospital/editHospital" component={EditHospital}/>
                  <Route path="/healthInfo/hospital/addHospital" component={AddHospital}/>



                  <Route path="/healthInfo/doctor/doctor" component={Doctor}/>


                </Route>


              </Router>

            </div>
        )
    }
}







ReactDOM.render(<Page/>,document.getElementById("app"));
