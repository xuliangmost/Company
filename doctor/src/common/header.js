import React,{Component} from "react"
import "../less/common.less"

import checked from "../tools/checked"

import api from "../common/API"
import logo from "./logo.png"
let serverD=api().serverAdress;
const jwtDecode = require('jwt-decode');

export default class Header extends Component{
    constructor(props){
        super(props);
        this.state={
          loginName:''
        }
    }
    componentWillMount(){
    }
    componentDidMount(){
      if(localStorage.getItem('robertUserName')){
        const bearer = localStorage.getItem('robertUserName');
        let decoded = jwtDecode(bearer);
        let userName = decoded.username;
        this.setState({
          loginName:userName
        })
      }
    }
    cancelLation(){
      localStorage.removeItem("history");
      localStorage.removeItem("robertUserName");
      location.href=serverD
    }
    render(){
      let style={"marginTop":"10px","marginLeft":"10px"};
        return(
            <div className="header">
              <a href={serverD+"/#/entrance"}>
                    <img style={style} src={logo} alt="远程视界机器人"/>
                </a>
              {
                this.state.loginName?<div className="loginName">
                  <a href={serverD+"/#/entrance"} className="header_sp1">切换系统</a>
                  <span className="header_sp2">
                  </span>
                  <a href={serverD+"/mine/#/mine"}  className="header_sp1">{this.state.loginName}</a>
                  <span className="header_sp2">
                  </span>
                  <a onClick={this.cancelLation.bind(this)} className="header_sp1">退出</a>
                </div>:""
              }
            </div>
        )
    }
}
