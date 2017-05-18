import React, {Component} from "react"
import {Select} from 'antd';
import axios from 'axios';
const Option = Select.Option;
let token = localStorage.getItem("robertUserName");
export default class SelectDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            children: [],
            showSelect:[],//显示的已选中的
            hadSelect: []//要传递的已选中的
        };
    }

    onSelect(value) {
        let showSelect = this.state.showSelect;
        let hadSelect = this.state.hadSelect;
        let obj = this.state.children.filter((ele) => {
            return ele.doctorId === Number(value)
        });
        showSelect.push(value);
        hadSelect.push(obj[0]);
        this.props.selectDoctor(hadSelect);
        this.setState({
            showSelect,
            hadSelect
        })
    }

    onDeselect(value) {
        let showSelect = this.state.showSelect;
        let hadSelect = this.state.hadSelect;
        showSelect.splice(showSelect.indexOf(value), 1);
        hadSelect.map((ele, index) => {
            if (ele.doctorId === Number(value)) {
                hadSelect.splice(index, 1);
            }
        });
        this.props.selectDoctor(hadSelect);
        this.setState({
            showSelect,
            hadSelect,
        })
    }

    search(value) {
        axios.request({
            url: '/api/conference/doctor',
            method: 'get',
            params: {
                query: value
            },
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/x-www-form-urlencoded UTF-8'
            },
        }).then(response => {
            this.setState({
                children: response.data.result
            })
        })
    }

    onFocus() {
        axios.request({
            url: '/api/conference/doctor',
            method: 'get',
            params: {
                query: null
            },
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/x-www-form-urlencoded UTF-8'
            },
        }).then(response => {
            this.setState({
                children: response.data.result
            })
        })
    }
    clear(){
        this.setState({
            children: [],
            showSelect:[],
            hadSelect:[],
        })
    }
    render() {
        return (
            <Select
                style={{'height': 'auto'}}
                className='search_input'
                mode="multiple"
                showSearch
                filterOption={false}
                placeholder="可输入医院名/科室名/医生姓名/医生手机号 ———— 进行查询"
                value={this.state.showSelect}
                onSearch={this.search.bind(this)}
                onSelect={this.onSelect.bind(this)}
                onFocus={this.onFocus.bind(this)}
                onDeselect={this.onDeselect.bind(this)}>
                {
                    this.state.children.map((ele, index) => {

                        return <Select.Option
                            key={ele.doctorId.toString()}>{ele.hospitalName}-{ele.deptname ? ele.deptname : '暂无科室'}-{ele.doctorName}</Select.Option>
                    })
                }

            </Select>
        );
    }
}
