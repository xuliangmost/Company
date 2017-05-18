import React, {Component} from "react"
import {Button, Tooltip, Input, Icon, Upload, message} from 'antd';
import {Link} from 'react-router';
import axios from "axios";
import noPic from './no.jpg'
import tools from '../../tools/checked'
import "../../less/mine.less"
const jwtDecode = require('jwt-decode');
let token = localStorage.getItem("robertUserName");
message.config({
    top: 240
});
export default class Check extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            mailboxver: 2,
            checkMail: '验证',
            sended: false,
            fuck:null
        }
    }
    componentDidMount() {
        this.getValue()
    }

    getValue() {
        let that = this;
        axios.request({
            url: '/api/user/validate/page',
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/x-www-form-urlencoded UTF-8'
            },
        }).then(function (response) {
            that.setState({
                email: response.data.result[0].email,
                mailboxver: response.data.result[0].mailboxver,
                fuck:'email.'+response.data.result[0].email.split('@')[1]
            })
        });
    }

    sendMail() {
        if (!tools.emailValidate(this.state.email)) {
            message.warning('邮箱填写错误!');
            return false
        }
        axios.request({
            url: '/api/user/email',
            method: 'post',
            params: {
                email: this.state.email
            },
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/x-www-form-urlencoded UTF-8'
            },
        }).then(response => {
            if (response.data.code !== 200) {
                clearInterval(t);
                message.warning('验证失败，请重新验证');
                this.setState({
                    checkMail: '验证',
                    sended: false
                });
            } else if (response.data.code === 200) {
                this.setState({
                    checkMail: '邮件发送成功,去查看',
                    sended: true
                });
            }
        })
    }

    render() {
        let Right = {'right': '-124px'};
        return (
            <div className="apple_top">
                <h1 style={{'textIndent': '20px'}}>
                    信息验证
                </h1>
                <ul className="search_ul">
                    <li>
                        <span className="most_flex">邮箱</span>
                        <Input disabled
                               value={this.state.email}
                               className="search_input" size="large" placeholder='邮箱'/>
                        {
                            this.state.sended ?
                                <a href={'http://'+this.state.fuck} style={Right} className="changeMail">邮件发送成功,请查看</a> : this.state.mailboxver === 0 ?
                                <span
                                    onClick={this.sendMail.bind(this)}
                                    className="changeMail">{this.state.checkMail}</span> : this.state.mailboxver === 1 ?
                                    <span
                                        onClick={this.sendMail.bind(this)}
                                        className="changeMail">{this.state.checkMail}</span> : this.state.mailboxver === 2 ?
                                        <span
                                            className="changeMail">已验证</span> : ''
                        }
                    </li>
                </ul>


            </div>
        )
    }
}
