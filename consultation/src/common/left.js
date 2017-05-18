import React, {Component} from "react"
import api from "./API"
let serverD = api().serverAdress;
const jwtDecode = require('jwt-decode');
let q = ["6", "7", "8", "9", "10", "11", "12", "13", "14"];
export default class Left extends Component {
    constructor(props) {
        super(props);
        this.state = {
            permissions: [],
            num:0
        };
    }

    componentWillMount() {

    }

    componentDidMount() {
        if (localStorage.getItem('robertUserName')) {
            const bearer = localStorage.getItem('robertUserName');
            let decoded = jwtDecode(bearer);
            let permissions = decoded.permissions;
            this.setState({
                permissions
            });
            let flag = true;
            permissions.forEach(function (ele, index) {
                if (q.indexOf(ele) !== -1) {
                    flag = false
                }
            });
            if (flag) {
                alert("您无查看权限!");
                location.href = serverD + "/#/entrance"
            }
        }
    }
    changeStyle(num){
        this.setState({
            num
        })
    }
    render() {
        let colorStyle={'background':'#ECF6FD'};
        return (
            <div className="left" style={{'width': '260px'}}>
                {
                    this.state.permissions.indexOf("6") !== -1 ?
                        <a onClick={this.changeStyle.bind(this,0)} style={this.state.num===0?colorStyle:{}} href="#/apply">
                            我的会诊
                        </a> : null
                }

                {
                    this.state.permissions.indexOf("9") !== -1 ?
                        <a onClick={this.changeStyle.bind(this,1)} style={this.state.num===1?colorStyle:{}} href="#/check/checked/checked">
                            会诊审核
                        </a> : null

                }
                {
                    this.state.permissions.indexOf("12") !== -1 ?
                        <a onClick={this.changeStyle.bind(this,2)} style={this.state.num===2?colorStyle:{}} href="#/task/consultationTask">
                            会诊任务
                        </a> : null
                }
                {
                    this.state.permissions.indexOf("13") !== -1 ?
                        <a onClick={this.changeStyle.bind(this,3)} style={this.state.num===3?colorStyle:{}} href="#/invalid/invalid" id="13">
                            作废会诊
                        </a> : null
                }
                {
                    this.state.permissions.indexOf("14") !== -1 ?
                        <a onClick={this.changeStyle.bind(this,4)} style={this.state.num===4?colorStyle:{}} href="#/consulationTables/consulation">
                            会诊总表
                        </a> : null
                }

            </div >

        );
    }
}
