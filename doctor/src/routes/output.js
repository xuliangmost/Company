import React,{Component} from "react"
import ReactDOM from "react-dom"
import Header from "../common/header"
import Left from "../common/left"

import {Router,Route,hashHistory} from "react-router"
import Hospital from "../js/healthInfo/hospital/hospital"
import EditHospital from "../js/healthInfo/hospital/editHospital"
import AddHospital from "../js/healthInfo/hospital/addHospital"
import Doctor from "../js/healthInfo/doctor/doctor"
import EditDoctor from "../js/healthInfo/doctor/editDoctorl"
import AddDoctor from "../js/healthInfo/doctor/addDoctorl"


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
