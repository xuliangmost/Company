import React, {Component} from "react";
import {Button, Input, Modal, Select, Table, Tree, message, Popconfirm} from "antd";
import axios from "axios";
import "../../../less/editHospital.less";
import api from "../../../common/API";
import nowTime from '../../../tools/checked'
// import FormatDate from '../../../tools/checked';
let serverD = api().serverAdress;
const Option = Select.Option;
const TreeNode = Tree.TreeNode;
let token = localStorage.getItem("robertUserName");

message.config({
  top: 130,
  left: 400,
  duration: 2,
});
export default class SelectDepartment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sa: false,
      hospitalId: this.props.hospitalId,
      depName: '',
      dataSource: [],
      visible: false,
      modifyId: null,
      addTitle: false,
      allDataSource: [],
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
          width: '20%'
        },
        {
          title: '所属板块',
          dataIndex: 'sect',
          key: 'sect',
          render: (text, record, index) => (
            <span key={record.id}>
                {
                  text === 1 ? "乌镇互联网医院" : text === 2 ? "远程眼科" : text === 3 ? "Most_one" : text === 4 ? "Most_two" : ''
                }
            </span>
          )
        },
        {
          title: '创建人',
          dataIndex: 'creator',
          key: 'creator',
          width: '20%'
        },
        /* {
         title: '创建时间',
         dataIndex: 'create_time',
         key: 'create_time',
         width: '22%',
         render:(text)=>{
         return (
         <span>{ text.split("T").join(" ").split(".").splice(0,1)}</span>
         )
         }
         },*/
        {
          title: '操作时间',
          dataIndex: 'modify_time',
          key: 'modify_time',
          width: '22%',
          render: (text) => {
            return (
              <span>{ text.split("T").join(" ").split(".").splice(0, 1)}</span>
            )
          }
        },
        {
          title: '操作',
          key: 'action',
          render: (record, index) => (
            <span key={record.id}>
              <a onClick={this.showModal.bind(this, record.id, record.name, index)}>编辑&nbsp;&nbsp;</a>

              <Popconfirm
                title="是否确定删除?"
                onConfirm={this.deleteDep.bind(this, record.id, index)} okText="是"
                cancelText="否">
                        <a>删除</a>
               </Popconfirm>


            </span>
          ),
          width: '10%'
        }
      ],
    }
  }


  deleteDep(id, index) {//delete
    let that = this;
    axios.request({
      url: '/api/user/dep/delete/judge',
      method: 'get',
      params: {
        id: id
      },
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(function (response) {
      if (response.data.code === 200) {
        axios.request({
          url: '/api/user/dep/delete',
          method: 'get',
          params: {
            id: id
          },
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/x-www-form-urlencoded UTF-8'
          },
        }).then((response) => {
          if (response.data.code === 200) {
            that.getValue()
          }
        })
      } else {
        message.error('此科室下已存在医生 , 请先清空医生后再删除')
      }
    })
  }

  showModal(id = null, name = null) {
    if (id && name) {
      this.setState({
        modifyId: id,
        depName: name,
        visible: true
      })
    } else {
      this.setState({
        visible: true
      })
    }
  }

  componentDidMount() {//pageList
    this.getValue()
  }

  getValue() {
    let that = this;
    axios.request({
      url: '/api/user/dep/pageList',
      method: 'get',
      params: {},
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(function (response) {
      that.setState({
        dataSource: response.data.result,
        allDataSource: response.data.result,
      })
    })
  }

  handleOk() {//确认添加
    let that = this;
    if (this.state.modifyId && this.state.depName) {
      this.editSome(this.state.modifyId, this.state.depName);//编辑
    } else if (this.state.depName.trim()) {
      let depName = that.state.depName;
      for (let i = 0; i < this.state.allDataSource.length; i++) {
        if (this.state.allDataSource[i].name === depName) {
          message.error('科室名称已存在');
          return false;
        }
        if (!this.state.depName) {
          message.error('科室名称不能为空');
          return false;
        }
      }
      axios.request({
        url: '/api/user/dep/add',
        method: 'POST',
        params: {
          depName: that.state.depName
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json UTF-8'
        },
      }).then(response => {
        if (response.data.code === 200) {
          let dataSource = this.state.dataSource;
          let obj = {};
          obj.id = response.data.result.id;
          obj.depName = that.state.depName;
          obj.create_time = nowTime.getTime();
          obj.modify_time = nowTime.getTime();
          dataSource.push(obj);
          this.setState({
            visible: false,
            dataSource: dataSource,
            depName: ''
          });
          axios.request({
            url: '/api/user/dep/pageList',
            method: 'get',
            params: {},
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
      depName: ''
    });
  }

  editSome(id, depName, index) {
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
          visible: false,
          dataSource: that.state.dataSource.splice(index, 1),
          modifyId: null
        });
        axios.request({
          url: '/api/user/dep/pageList',
          method: 'get',
          params: {},
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
      depName: e.target.value
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
              <Input value={this.state.depName} onChange={this.changeDepName.bind(this)} className="" size="large"
                     placeholder="科室名称"/>
            </li>
          </ul>
        </Modal>
      </div>
    )
  }
}
