import React, {Component} from "react"
import {Button, Tooltip, Input, Icon, Select} from 'antd';
import {Link} from 'react-router';
import axios from "axios";
import noPic from './no.jpg'
import "../../less/mine.less"
const jwtDecode = require('jwt-decode');
let token = localStorage.getItem("robertUserName");
export default class Mine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordError: false,
            applyData: {
                password: null,
                //pic:'http://xuliangmost.com/html/static/dist/img/list-img/monster4.jpg',
            },
            password: null,
            showNewPassword: false,
            showOldPassword: false,

        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    changePassword(e) {
        let applyData = this.state.applyData;
        applyData.password = e.target.value;
        this.setState({
            applyData
        })
    }

    repeatPassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    checkPassword() {
        if (this.state.applyData.password !== this.state.password) {
            this.setState({
                passwordError: true
            })
        }
    }

    changeNewPassword() {
        this.setState({
            showNewPassword: !this.state.showNewPassword
        })
    }

    changeOldPassword() {
        this.setState({
            showOldPassword: !this.state.showOldPassword
        })
    }

    query(num) {

        axios.request({
            url: '/api/user/pageList',
            method: 'get',
            params: applyPage,
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/x-www-form-urlencoded UTF-8'
            },
        }).then(function (response) {


        });
    }

    hiddenError() {
        this.setState({
            passwordError: false
        })
    }

    render() {
        let errorStyle = {'boxShadow': '0 0 2px 0 red'};
        return (
            <div className="apple_top">
                <h1>
                    个人信息
                </h1>
                <ul className="search_ul">
                    <li>
                        <span  className="most_flex">
                        头像
                    </span>
                    <div className="search_input pic_height">
                        <img className="minePic"
                             src={this.state.applyData.pic ? this.state.applyData.pic : './images/monster4.jpg'}
                             alt=""/>
                    </div>
                    </li>
                    <li>
                        <span className="most_flex">姓名</span>
                        <Input className="search_input" size="large"
                               placeholder="姓名"/>
                    </li>
                    <li>
                        <span className="most_flex">登录帐号</span>
                        <Input disabled className="search_input" size="large"/>
                    </li>
                    <li>
                        <span className="most_flex">邮箱</span>
                        <Input className="search_input" size="large" placeholder='邮箱'/>
                    </li>
                    <li>
                        <span className="most_flex">隶属单位</span>
                        <Input className="search_input" size="large"
                               placeholder="隶属单位"/>
                    </li>
                    <li>
                        <span className="most_flex">更改密码</span>
                        <Input
                            type={this.state.showNewPassword ? 'text' : 'password'}
                            onChange={this.changePassword.bind(this)}
                            onFocus={this.hiddenError.bind(this)}
                            className="search_input" size="large"/>
                        <Tooltip placement="top" title={this.state.showNewPassword ? '隐藏密码' : '显示密码'}>
                            <Icon onClick={this.changeNewPassword.bind(this)} className="showPassword"
                                  type={this.state.showNewPassword ? 'eye-o' : 'eye'}/>
                        </Tooltip>
                    </li>

                    <li>
                        <span className="most_flex">再次输入密码</span>
                        <Tooltip overlayClassName='red' visible={this.state.passwordError} placement="topLeft"
                                 title="两次密码输入不一致">
                            <Input
                                type={this.state.showOldPassword ? 'text' : 'password'}
                                onChange={this.repeatPassword.bind(this)}
                                onFocus={this.hiddenError.bind(this)}
                                onBlur={this.checkPassword.bind(this)}
                                style={this.state.passwordError ? errorStyle : {}}
                                className="search_input passwordAgain" size="large"/>
                        </Tooltip>
                        <Tooltip placement="top" title={this.state.showNewPassword ? '隐藏密码' : '显示密码'}>
                            <Icon onClick={this.changeOldPassword.bind(this)} className="showPassword"
                                  type={this.state.showOldPassword ? 'eye-o' : 'eye'}/>
                        </Tooltip>
                    </li>
                </ul>


                <div className="btn_save">
                    <div className="btn_save_index">
                        <Button className="btn_save_index_2" type="primary">保存</Button>
                        <Link to="">
                            <Button type="primary">取消</Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

}
