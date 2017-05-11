import React, {Component} from "react";
import {Button, Input, Modal, Select, Table, Tree} from "antd";
import axios from "axios";
import "../../../less/editHospital.less";
import api from "../../../common/API";
// import FormatDate from '../../../tools/checked';
let serverD = api().serverAdress;
const Option = Select.Option;
const TreeNode = Tree.TreeNode;
let token = localStorage.getItem("robertUserName");
export default class SelectDepartment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sa: false,
      hospitalId: this.props.hospitalId,
      depName: '',
      dataSource: [],
      visible: false,
      modifyId:null,
      addTitle:false,
      columns: [
        {
          title: '序号',
          dataIndex: 'id',
          key: 'id',
          render: (text, record, index) => {
            return <span>{index + 1}</span>
          },
          width: '10%'
        },
        {
          title: '科室名称',
          dataIndex: 'name',
          key: 'name',
          width: '10%'
        },
        {
          title: '所属板块',
          dataIndex: 'sect',
          key: 'sect',
          render: (text, record,index) => (
            <span  key={record.id}>
                {
                  text===1?"全科版块":""
                }
            </span>
          ),
          width: '10%'
        },
        {
          title: '创建人',
          dataIndex: 'creator',
          key: 'creator',
          width: '16%'
        },
        {
          title: '创建时间',
          dataIndex: 'create_time',
          key: 'create_time',
          width: '22%',
          render:time=>{
            let t=new Date(time);
            return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate()
          }
        },
        {
          title: '修改时间',
          dataIndex: 'modify_time',
          key: 'modify_time',
          width: '22%',
          render:time=>{
            let t=new Date(time);
            return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate()
          }
        },
        {
          title: '操作',
          key: 'action',
          render: (record, index) => (
            <span key={record.id}> <a onClick={this.showModal.bind(this, record.id, record.name, index)}>编辑</a>
            </span>
          ),
          width: '10%'
        }
      ],
    }
  }

  showModal(id=null,name=null) {
    console.log(id,name);
    if(id&&name){
      console.log('if');
      this.setState({
        modifyId:id,
        depName:name,
        visible: true
      })
    }else{
      console.log('else');
      this.setState({
        visible: true
      })
    }
  }

  componentDidMount() {//pageList
    let that = this;
    axios.request({
      url: '/api/user/dep/pageList',
      method: 'get',
      params: {
      },
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(function (response) {
      that.setState({
        dataSource: response.data.result,
      })
    })
  }

  handleOk() {//确认添加
    if(this.state.modifyId&&this.state.depName){
      console.log(this.state.modifyId,this.state.depName)
      this.editSome(this.state.modifyId,this.state.depName);
    } else if(this.state.depName.trim()){
      console.log(this.state.modifyId,this.state.depName)
      console.log('add');
      let that = this;
      axios.request({
        url: '/api/user/dep/add',
        method: 'POST',
        params: {
          depName:that.state.depName
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json UTF-8'
        },
      }).then(response=>{
        if (response.data.code === 200) {
          let dataSource = this.state.dataSource;
          let obj = {};
          obj.id = response.data.result.id;
          obj.depName = that.state.depName;
          dataSource.push(obj);
          this.setState({
            visible: false,
            dataSource: dataSource,
            depName: ''
          });
          axios.request({
            url: '/api/user/dep/pageList',
            method: 'get',
            params: {
            },
            headers: {
              'Authorization': 'Bearer ' + token,
              'Content-Type': 'application/x-www-form-urlencoded UTF-8'
            },
          }).then(function (response) {
            that.setState({
              dataSource: response.data.result,
            })
          })
        }
      });
    }
  }

  handleCancel() {
    this.setState({
      visible: false,
      depName:''
    });
  }

  editSome(id, depName, index) {
    console.log(`${id} ++ ${depName}`);
    let that = this;
    axios.request({
      url: '/api/user/dep/edit',
      method: 'post',
      params: {
        id,
        depName
      },
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(function (response) {
      if (response.data.code === 200) {
        that.setState({
          visible:false,
          dataSource: that.state.dataSource.splice(index, 1),
          modifyId:null
        });
        axios.request({
          url: '/api/user/dep/pageList',
          method: 'get',
          params: {
          },
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/x-www-form-urlencoded UTF-8'
          },
        }).then(function (response) {
          that.setState({
            dataSource: response.data.result,
          })
        })
      }
    })
  }

  changeDepName(e) {
    this.setState({
      depName:e.target.value
    })
  }

  render() {
    return (
      <div className="add_dep">
        <Button onClick={this.showModal.bind(this)} style={{'margin': '14px'}} type="primary">添加科室</Button>
        <Table rowKey="id" dataSource={this.state.dataSource} columns={this.state.columns}/>
        <Modal title="添加科室" visible={this.state.visible}
               onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)}
        >
          <ul style={{'width': '100%'}} className="add_hospital">
            <li>
              <span className="name">
                科室名称
              </span>
              <Input value={this.state.depName} onChange={this.changeDepName.bind(this)} className="" size="large" placeholder="科室名称"/>
            </li>
          </ul>
        </Modal>
      </div>
    )
  }
}
