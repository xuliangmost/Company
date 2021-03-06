import React,{Component} from "react"
import "../less/common.less"

import checked from "../tools/checked"
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
      location.href="http://192.168.100.133:8787"
    }
    render(){
      let style={"marginTop":"10px","marginLeft":"10px"};
        return(
            <div className="header">
              <a href="http://192.168.100.133:8787/#/entrance">
                    <img style={style} src="./images/logo.png" alt="远程视界机器人"/>
                </a>
              {
                this.state.loginName?<div className="loginName">
                  <a href="http://192.168.100.133:8787/#/entrance" className="header_sp1">切换系统</a>
                  <span className="header_sp2">
                  </span>
                  <a className="header_sp1">{this.state.loginName}</a>
                  <span className="header_sp2">
                  </span>
                  <a onClick={this.cancelLation.bind(this)} className="header_sp1">退出</a>
                </div>:""
              }
            </div>
        )
    }
}
