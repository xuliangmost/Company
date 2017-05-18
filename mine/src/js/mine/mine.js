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
export default class Mine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordError: false,
            applyData: {
                password: null,
                pic: null,
                username: null,
                unitName: null,
                phone: null,
                email: null,
            },
            oldPhone: null,
            oldMail: null,
            password: null,
            showNewPassword: false,
            showOldPassword: false,
            phoneHad: false,
            mailHad: false,
        }
    }

    componentDidMount() {
        this.getValue()
    }

    getValue() {
        let that = this;
        axios.request({
            url: '/api/user/get/user',
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/x-www-form-urlencoded UTF-8'
            },
        }).then(function (response) {
            let applyData = {
                username: response.data.result[0].username,
                unitName: response.data.result[0].unitName,
                pic: response.data.result[0].pic,
                phone: response.data.result[0].phone,
                email: response.data.result[0].email,
                password: null,
            };
            that.setState({
                applyData,
                password: null,
                oldPhone: response.data.result[0].phone,
                oldMail: response.data.result[0].email,
            })
        });
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

    query() {
        let applyData = this.state.applyData;
        let that = this;
        if (this.state.phoneHad) {
            message.error('该号码已存在!');
            return false
        }
        if (this.state.mailHad) {
            message.error(' 邮箱已存在!');
            return false
        }
        if (!tools.mobileValidate(applyData.phone)) {
            message.error('号码不合法!');
            return false
        }
        if (!tools.emailValidate(applyData.email)) {
            message.error('邮箱不合法!');
            return false
        }
        if (applyData.password !== this.state.password) {
            this.setState({
                passwordError: true
            });
            return false
        }
        if (tools.isEmpty(applyData.password) && tools.isEmpty(this.state.password)) {
            delete applyData.password
        }
        if (!applyData.pic) {
            delete applyData.pic
        }
        delete applyData.unitName;
        delete applyData.username;
        axios.request({
            url: '/api/user/edit/user',
            method: 'post',
            params: applyData,
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/x-www-form-urlencoded UTF-8'
            },
        }).then(response => {
            if (response.data.code === 200) {
                message.success('保存成功!');
                this.getValue();
                if (this.state.oldMail !== this.state.applyData.email) {
                    axios.request({
                        url: '/api/user/edit/email',
                        method: 'post',
                        params: {
                            email: this.state.applyData.email
                        },
                        headers: {
                            'Authorization': 'Bearer ' + token,
                            'Content-Type': 'application/x-www-form-urlencoded UTF-8'
                        },
                    })
                }
            }

        });
    }

    checkPhone() {
        if (this.state.oldPhone !== this.state.applyData.phone&&tools.mobileValidate(this.state.applyData.phone)) {
            axios.request({
                url: '/api/user/hea/pvalidate',
                method: 'get',
                params: {
                    phone: this.state.applyData.phone
                },
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/x-www-form-urlencoded UTF-8'
                },
            }).then(response => {
                if (response.data.code !== 200) {
                    message.error('该号码已存在');
                    this.setState({
                        phoneHad: true
                    })
                } else {
                    this.setState({
                        phoneHad: false
                    })
                }
            })
        }
    }

    checkEmail() {
        if (this.state.oldMail !== this.state.applyData.email) {
            axios.request({
                url: '/api/user/evalidate',
                method: 'get',
                params: {
                    email: this.state.applyData.email
                },
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/x-www-form-urlencoded UTF-8'
                },
            }).then(response => {
                if (response.data.code !== 200) {
                    message.error('该邮箱已存在');
                    this.setState({
                        mailHad: true
                    })
                } else {
                    this.setState({
                        mailHad: false
                    })
                }
            })
        }
    }

    changeEmail(e) {
        let applyData = this.state.applyData;
        applyData.email = e.target.value;
        this.setState({
            applyData
        })
    }

    beforeUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isPNG = file.type === 'image/png';
        if (!isJPG && !isPNG) {
            alert('只可上传JPG格式的图片文件!');
            return false
        }
    }

    changePhone(e) {
        let applyData = this.state.applyData;
        applyData.phone = e.target.value;
        this.setState({
            applyData
        })
    }

    hiddenError() {
        this.setState({
            passwordError: false
        })
    }
    render() {
        let errorStyle = {'boxShadow': '0 0 2px 0 red'};
        let styleBord = {'border': '1px dashed #999;'};
        let that = this;
        const props = {//上传的事件
            action: '/upload/user',
            headers: {
                "Authorization": "Bearer " + token
            },
            onChange({file, fileList}) {
                if (file.status !== 'uploading') {
                    let applyData = that.state.applyData;
                    applyData.pic = file.response.result[0].url;
                    that.setState({
                        applyData
                    })
                }
            },
        };

        return (
            <div className="apple_top">
                <h1>
                    个人信息
                </h1>
                <ul className="search_ul">
                    <li>
                        <span className="most_flex">姓名</span>
                        <Input value={this.state.applyData.username} disabled className="search_input" size="large"
                               placeholder="姓名"/>
                    </li>
                    <li>
                        <span className="most_flex">隶属单位</span>
                        <Input value={this.state.applyData.unitName} disabled className="search_input" size="large"
                               placeholder="隶属单位"/>
                    </li>
                    <li>
                        <span className="most_flex">手机号</span>
                        <Input onBlur={this.checkPhone.bind(this)} value={this.state.applyData.phone}
                               onChange={this.changePhone.bind(this)}
                               className="search_input" size="large"/>
                    </li>

                    <li>
                        <span className="most_flex">邮箱</span>
                        <Input onBlur={this.checkEmail.bind(this)} disabled={this.state.canSend}
                               onChange={this.changeEmail.bind(this)}
                               value={this.state.applyData.email}
                               className="search_input" size="large" placeholder='邮箱'/>
                    </li>
                    <li>
                        <span className="most_flex">更改密码</span>
                        <Input
                            value={this.state.applyData.password}
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
                                value={this.state.password}
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


                <Upload beforeUpload={this.beforeUpload.bind(this)} className='upload_pic' {...props}>
                    <Button>
                        <Icon type="upload"/>上传头像
                    </Button>
                </Upload>
                <div className="pic_height">
                    <img className="minePic"
                         src={this.state.applyData.pic ? this.state.applyData.pic : noPic}
                         alt=""/>
                </div>
                <div className="btn_save">
                    <div className="btn_save_index">
                        <Button onClick={this.query.bind(this)} className="btn_save_index_2" type="primary">保存</Button>
                    </div>
                </div>
            </div>
        )
    }
}
