import React, {Component} from 'react'
import {Button, Checkbox, Input, Table, Select, message} from 'antd';
import {Link} from 'react-router';
import '../../less/usrmgmt.less'
import axios from 'axios';
import tools from '../../tools/checked'
const Option = Select.Option;
const jwtDecode = require('jwt-decode');
let token = localStorage.getItem('robertUserName');
export default class AddUsrMgmt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applyPage: {
        name: '',
        phone: '',
        unitId: null,
        roleIds: '',
        uId:null,
        email:''
      },
      total: 10,
      super: true,
      hoId: null,
      current: 1,
      phoneOk: true,
      columns: [
        {
          title: '序号',
          dataIndex: 'roleId',
          key: 'roleId',
          render: (text, record, index) => {
            return <span>{index + 1}</span>
          }
        },
        {
          title: '角色名称	',
          dataIndex: 'roleName',
          key: 'roleName',
        },
        {
          title: '所属菜单',
          dataIndex: 'menuName',
          key: 'menuName',
        },
        {
          title: '操作',
          key: 'action',
          render: (text, record, index) => (
            <span key={record.roleId}>
                 <Checkbox onChange={this.selectPermission.bind(this, record.roleId)}/>
              </span>
          )
        }
      ],
      dataSource: [],
      fromCop: [],
      permissionIds: []
    }
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

  getList() {
    let that = this;
    axios.request({
      url: '/api/user/hospitals',
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

  selectPermission(id, e) {
    let permissionIds = this.state.permissionIds;
    if (e.target.checked) {
      if (permissionIds.indexOf(id.toString()) === -1) {
        permissionIds.push(id.toString())
      }
    } else {
      if (permissionIds.indexOf(id.toString()) !== -1) {
        permissionIds.splice(permissionIds.indexOf(id.toString()), 1)
      }
    }
    console.log(permissionIds)
  }

  selectFrom(value) {
    let apply = this.state.applyPage;
    if (!value) {
      value = null;
      apply.unitId = value;
      this.setState({
        applyPage: apply
      })
    } else {
      apply.unitId = Number(value);
      this.setState({
        applyPage: apply
      })
    }
  }

  changePage(page) {
    this.query(page);
    this.setState({
      current: page
    })
  }

  componentDidMount() {
    this.query(1)
  }

  changeEmail(e) {
    let applyPage = this.state.applyPage;
    applyPage.email = e.target.value;
    this.setState({
      applyPage
    })
  }
  changeName(e) {
    let applyPage = this.state.applyPage;
    applyPage.name = e.target.value;
    this.setState({
      applyPage
    })
  }
  changePhone(e) {
    let applyPage = this.state.applyPage;
    applyPage.phone = e.target.value;
    this.setState({
      applyPage
    })
  }

  query(num) {
    let that = this;
    let applyPage = this.state.applyPage;
    applyPage.pageNum = num;
    axios.request({
      url: '/api/user/role/pageList',
      method: 'get',
      params: applyPage,
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(function (response) {
      let dataSource = response.data.result ? response.data.result.data : [];
      that.setState({
        dataSource: dataSource,
        total: response.data.result.count
      });
      that.getList()
    });
  }

  save() {
    let permissionIds = this.state.permissionIds;
    let applyData = this.state.applyPage;

    applyData.roleIds = permissionIds.join(',');

    if (!this.state.phoneOk) {
      message.error('手机号已存在!');
      return false
    }
    if (!applyData.roleIds) {
      applyData.roleIds = '0'
    }
    if (tools.isEmpty(applyData.phone)) {
      message.error('手机号不能为空或手机号填写错误!');
      return false
    }
    if (tools.isEmpty(applyData.name)) {
      message.error('用户姓名不能为空!');
      return false
    }
    if (!tools.emailValidate(applyData.email)) {
      message.error("邮箱填写错误!");
      return false
    }
    if (!this.state.super) {
      applyData.unitId = this.state.hoId
    }

    if (tools.isEmpty(applyData.unitId)) {
      message.error('隶属单位未选择!');
      return false
    }

    axios.request({
      url: '/api/user/add',
      method: 'POST',
      data: applyData,
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
    }).then(function (response) {
      if (response.data.code === 200) {
        alert('保存成功，即将跳转!');
        location.hash = '/usrmgmt/usrmgmt'
      }
    });
  }

  checkPhone() {
    let applyData = this.state.applyPage;
    let that = this;
    axios.request({
      url: '/api/user/judge/phone',
      method: 'get',
      params: {
        phone: applyData.phone
      },
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(function (response) {
      if (response.data.code === 200) {
        that.setState({
          phoneOk: true
        });
        axios.request({
          url: '/api/user/patient',
          method: 'get',
          params: {
            phone: applyData.phone
          },
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/x-www-form-urlencoded UTF-8'
          },
        }).then(function (response) {
          if (response.data.code === 200) {
            let applyPage = that.state.applyPage;
            if(response.data.result==false){
              delete applyPage.uId;
              applyPage.name = '';
              applyPage.email ='';
            }else{
              applyPage.uId = response.data.result[0].uId;
              applyPage.name = response.data.result[0].name;
              applyPage.email = response.data.result[0].email;
            }
            that.setState({
              applyPage
            });
          }
        })
      } else if (response.data.code === 202) {
        message.error('该号码已存在');
        that.setState({
          phoneOk: false
        })
      }
    });
  }

  resetPassword() {
    if (confirm('是否确定重置？')) {
      message.error('确认')
    }
    else {
      message.error('取消')
    }
  }

  render() {
    return (
      <div >
        <h2>新增用户</h2>
        <h3>
        </h3>
        <ul className='usrmgmt_content'>
          <li>
            <span className='usrmgmt_span'>手机号</span>
            <Input onBlur={this.checkPhone.bind(this)} onChange={this.changePhone.bind(this)} className='usrmgmt_input'
                   size='large' placeholder='手机号'/>
            <span className='usrmgmt_span'>姓名</span>
            <Input value={this.state.applyPage.name} onChange={this.changeName.bind(this)} className='usrmgmt_input' size='large' placeholder='姓名'/>
            <span className='usrmgmt_span'>邮箱</span>
            <Input value={this.state.applyPage.email}  onChange={this.changeEmail.bind(this)}   className='usrmgmt_input' size='large' placeholder='邮箱'/>
          </li>


          {
            this.state.super ? <li>
              <span className='usrmgmt_span'>隶属单位</span>
              <Select size='large' onChange={this.selectFrom.bind(this)} defaultValue='请选择' className='usrmgmt_input'>
                {
                  this.state.fromCop.map((ele, index) => {
                    return <Option key={index} value={ele.unitId.toString()}>{ele.unitName}</Option>
                  })
                }
              </Select>
              <span className='usrmgmt_span'>
              </span>
              <span className='usrmgmt_input'>
              </span>
              <span className='usrmgmt_span'>
              </span>
              <span className='usrmgmt_input'>
              </span>
            </li> : ''
          }
        </ul>
        <Table pagination={{
          defaultPageSize: 10, showQuickJumper: true, onChange: this.changePage.bind(this),
          total: this.state.total, current: this.state.current
        }} rowKey='roleId' dataSource={this.state.dataSource} columns={this.state.columns}/>

        <h3>
        </h3>

        <div className='btn_save'>
          <div className='btn_save_index'>
            <Button onClick={this.save.bind(this)} className='save_add_hospital' type='primary'>保存</Button>
            <Link to='usrmgmt/usrmgmt'>
              <Button type='primary'>返回</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
