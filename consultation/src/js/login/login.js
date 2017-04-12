
import React from 'react';
import { Link } from 'react-router';
import "../../less/common.less"
import { Button } from 'antd';
import "../../less/login.less"
import axios from "axios";
export default class Login extends React.Component {
  constructor (props) {
    super(props);

  }


  componentWillMount(){

  }
  render () {
    let Height=document.body.clientHeight;
    let style={"height":Height};
      return (
        <div style={style} className="login">
          <Button size="large" className="load_check" shape="circle" loading />
        </div>
      )
  }
}
