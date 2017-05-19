import React, {Component} from "react"
import {Button, Popconfirm, Input, Table, Select} from 'antd';
import {Link} from 'react-router';
import "../../less/usrmgmt.less"
import axios from "axios";
const Option = Select.Option;
const jwtDecode = require('jwt-decode');
let token = localStorage.getItem("robertUserName");
export default class UsrMgmt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applyPage: {
        pageSize: 10,
        username: "",
        phone: "",
        roleName: "",
        unitId: null
      },
      super: true,
      hoId: null,
      total: 10,
      current: 1,
      columns: [
        {
          title: '序号',
          dataIndex: 'userId',
          key: 'userId',
          render: (text, record, index) => {
            return <span>{index + 1}</span>
          }
        },
        {
          title: '姓名',
          dataIndex: 'username',
          key: 'username',
        },
        {
          title: '手机号',
          dataIndex: 'phone',
          key: 'phone',
        },
        {
          title: '邮箱',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: '隶属单位',
          dataIndex: 'unitName',
          key: 'unitName',
        },
        {
          title: '所属板块',
          dataIndex: 'sect',
          key: 'sect',
          render: (text, record, index) => (
            <span key={record.id}>
                {
                  text === 1 ? "乌镇互联网医院" : text === 2 ? "远程眼科" : ''
                }
            </span>
          )
        },
        {
          title: '所属角色',
          dataIndex: 'roleNames',
          key: 'roleNames',
        },
        {
          title: '操作',
          key: 'action',
          render: (text, record, index) => (
            <span key={record.id}>
              <Link to={"usrmgmt/editUsrmgmt/" + record.userId}>编辑&nbsp;&nbsp;</Link>
              <Popconfirm
                  title="是否确定删除?"
                  onConfirm={this.deleteDoc.bind(this, record.userId)} okText="是"
                  cancelText="否">
                         <Link to=''>删除</Link>
               </Popconfirm>
            </span>
          )
        }
      ],
      dataSource: [],
      fromCop: []
    }
  }

  deleteDoc(id) {
    axios.request({
      url: '/api/user/delete/user',
      method: 'get',
      params: {
        userId: id
      },
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(response => {
      if (response.data.code === 200) {
        this.query(1)
      }
    })
  }

  componentWillMount() {
    if (localStorage.getItem('robertUserName')) {
      const bearer = localStorage.getItem('robertUserName');
      let decoded = jwtDecode(bearer);
      if (!decoded.super) {
        this.setState({
          super: false,
          hoId: decoded.hoId
        });
      }
    }
  }

  componentDidMount() {
    this.query(1);
    this.getList()
  }

  getList() {
    let that = this;
    axios.request({
      url: this.state.super ? '/api/user/hospitals' : '/api/user/doctor/hList',
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(function (response) {
      that.setState({
        fromCop: response.data.result
      })
    });
  }

  changePage(page) {
    this.query(page);
    this.setState({
      current: page
    })
  }

  changeConsultationName(e) {
    let apply = this.state.applyPage;
    apply.username = e.target.value;
    this.setState({
      applyPage: apply
    })
  }

  changeUsername(e) {
    let apply = this.state.applyPage;
    apply.username = e.target.value;
    this.setState({
      applyPage: apply
    })
  }

  changeRoleName(e) {
    let apply = this.state.applyPage;
    apply.roleName = e.target.value;
    this.setState({
      applyPage: apply
    })
  }

  changePhone(e) {
    let apply = this.state.applyPage;
    apply.phone = e.target.value;
    this.setState({
      applyPage: apply
    })
  }

  selectFrom(value) {
    let apply = this.state.applyPage;
    if (!value) {
      value = null;
      apply.hospitalId = value;
      this.setState({
        applyPage: apply
      })
    } else {
      apply.hospitalId = Number(value);
      this.setState({
        applyPage: apply
      })
    }

  }

  query(num,flag) {
    let applyPage = this.state.applyPage;
    if (!this.state.super) {
     applyPage.unitId = this.state.hoId
     }
    let that = this;

    applyPage.pageNum = num;
    if (!applyPage.roleName) {
      delete applyPage.roleName
    }
    axios.request({
      url: '/api/user/pageList',
      method: 'get',
      params: applyPage,
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(function (response) {
      let dataSource = response.data.result ? response.data.result.data : [];
      if(flag){
        that.setState({
          dataSource: dataSource,
          total: response.data.result.count,
          current:1
        });
      }else{
        that.setState({
          dataSource: dataSource,
          total: response.data.result.count
        });

      }

    });
  }

  render() {
    return (
      <div>
        <div className="apple_top">
          <h1>
            用户查询区
            <Button type="primary" onClick={() => this.query(1,1)} className="search_btn1">查询</Button>
          </h1>
          <ul className="search_ul">
            <li>
              <span className="most_flex">姓名</span>
              <Input onChange={this.changeConsultationName.bind(this)} className="search_input" size="large"
                     placeholder="姓名"/>
            </li>
            <li>
              <span className="most_flex">手机号</span>
              <Input onChange={this.changePhone.bind(this)} className="search_input" size="large" placeholder="手机号"/>
            </li>
            {/*<li>
             <span className="most_flex">隶属单位</span>
             <Input readOnly onChange={this.changeUsername.bind(this)}  className="search_input" size="large" placeholder="隶属单位" />
             </li>*/}

            <li>
              <span className="most_flex">所属角色</span>
              <Input onChange={this.changeRoleName.bind(this)} className="search_input" size="large"
                     placeholder="所属角色"/>
            </li>
            <li>
              <span className="most_flex">隶属单位</span>
              <Select size="large" onChange={this.selectFrom.bind(this)} defaultValue="请选择" className="search_input">
                <Option value="">-请选择-</Option>
                {
                  this.state.fromCop.map((ele, index) => {
                    return <Option key={index} value={ele.hospitalId?ele.hospitalId.toString():ele.unitId.toString()}>{ele.hospitalName?ele.hospitalName:ele.unitName}</Option>
                  })
                }
              </Select>
            </li>
          </ul>


        </div>
        <div className="apple_bottom">
          <h1 className="most_h1">
            列表区
            <Link to="usrmgmt/addUsrmgmt">
              <Button type="primary" className="search_btn2">新增</Button>
              {/*<Button type="primary"  className="search_btn2">停用</Button>
               <Button type="primary"  className="search_btn2">启用</Button>*/}
            </Link>

          </h1>

          <Table pagination={{
            defaultPageSize: 10, showQuickJumper: true, onChange: this.changePage.bind(this),
            total: this.state.total, current: this.state.current
          }} rowKey="userId" dataSource={this.state.dataSource} columns={this.state.columns}/>
        </div>
      </div>
    )
  }

}
