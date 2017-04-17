import React,{Component} from "react"
import { Button,Checkbox,Input,Table,Select } from 'antd';
import { Link } from 'react-router';
import "../../less/usrmgmt.less"
import axios from "axios";
import tools from "../../tools/checked"
const Option = Select.Option;

let token=localStorage.getItem("robertUserName");
export default class AddUsrMgmt extends Component{
  constructor(props){
    super(props);
    this.state={
      applyPage:{
        name:"",
        phone:"",
        unitId:null,
        roleIds:""
      },
      phone:"",
      isReset:false,
      total:10,
      current:1,
      columns : [
        {
          title:'序号',
          dataIndex: 'roleId',
          key: 'roleId',
          render: (text, record, index) => {
            return <span>{index + 1}</span>
          }
        },
        {
          title: '角色名称',
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
          render: (text, record,index) => (
            <span  key={record.roleId}>
                 {
                   <Checkbox onChange={this.selectPermission.bind(this,record.roleId)} defaultChecked={this.state.permissionIds.indexOf(record.roleId.toString())!==-1} />
                 }
              </span>
          )
        }
      ],
      dataSource : [],
      unitName:"",
      fromCop:[],
      isSuper:true,
      permissionIds:[],
      defaultVal:"*******",
      phoneHad:false
    }
  }

  getList(){
    let that=this;
    axios.request({
      url: '/api/user/hospitals',
      method: 'get',
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(function(response) {
      that.setState({
        fromCop:response.data.result
      })
    });
  }

//获取用户数据
  getValue(){
    let that=this;
    axios.request({
      url: '/api/user/page',
      method: 'get',
      params:{
        userId:this.props.params.id.toString()
      },
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(function(response) {
      let permissionIds=response.data.result.roleIds.split(",");
      that.setState({
        applyPage:response.data.result,
        unitName:response.data.result.unitName,
        phone:response.data.result.phone,
        permissionIds
      });
      that.getList();
      that.query(1)
    });
  }
  selectPermission(id,e){

    let permissionIds=this.state.permissionIds;
    if(e.target.checked){
      if(permissionIds.indexOf(id.toString())==-1){
        permissionIds.push(id.toString())
      }
    }else{
      if(permissionIds.indexOf(id.toString())!==-1){
        permissionIds.splice(permissionIds.indexOf(id.toString()),1)
      }
    }
    console.log(permissionIds)
  }
  selectFrom(value){
    let apply=this.state.applyPage;
    if(!value){
      value=null;
      apply.unitId=value;

    }else{
      apply.unitId=Number(value);
    }
    let unitName=this.state.fromCop.filter(function (ele) {
      return ele.unitId==Number(value)
    });
    this.setState({
      applyPage:apply,
      unitName:unitName[0].unitName
    })
  }
  changePage(page){
    this.query(page);
    this.setState({
      current:page
    })
  }
  componentDidMount(){
    this.getValue()
  }
  changeName(e){
    let applyPage=this.state.applyPage;
    applyPage.name=e.target.value;
    this.setState({
      applyPage
    })
  }
  changePhone(e){
    let applyPage=this.state.applyPage;
    applyPage.phone=e.target.value;
    this.setState({
      applyPage
    })
  }
  query(num){
    let that=this;
    let applyPage=this.state.applyPage;
    applyPage.pageNum=num;
    axios.request({
      url: '/api/user/role/pageList',
      method: 'get',
      params:applyPage,
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(function(response) {
      let dataSource=response.data.result?response.data.result.data:[];
      that.setState({
        dataSource:dataSource,
        total:response.data.result.count
      });
    });
  }
  save(){
    this.checkPhone();
    if(this.state.phoneHad){
      alert("手机号已注册!");
      return false
    }
    let permissionIds=this.state.permissionIds;
    let applyData=this.state.applyPage;

    applyData.roleIds=permissionIds.join(",");
    if(!applyData.roleIds){
      applyData.roleIds="0"
    }
    if(tools.isEmpty(applyData.phone)){
      alert("手机号不能为空或手机号填写错误!");
      return false
    }
    if(tools.isEmpty(applyData.unitId)){
      alert("隶属单位未选择!");
      return false
    }
    let data={
      "phone":applyData.phone,
      "userId":applyData.userId,
      "name":applyData.name,
      "password":applyData.password,
      "unitId":applyData.unitId,
      "roleIds":applyData.roleIds
    };
    if(applyData.phone==this.state.phone){
      delete data.phone
    }
    console.log(applyData);
    if(!applyData.password){
      delete data.password
    }
    if(this.state.isReset){
      if(!applyData.password){
        alert("密码不能为空!");
        return false
      }
    }
    axios.request({
      url: '/api/user/edit',
      method: 'POST',
      data:data,
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/json'
      },
    }).then(function(response) {
      if(response.data.code===200){
        alert("保存成功，即将跳转!");
        location.hash="/usrmgmt/usrmgmt"
      }
    });
  }

  changePassword(e){
    let applyPage=this.state.applyPage;
    applyPage.password=e.target.value;
    this.setState({
      applyPage,
      defaultVal:applyPage.password
    })
  }
  resetPassword(){
    if (confirm("是否确定重置？")) {
      this.setState({
        isReset: true,
        defaultVal:"",
      })
    }
  }
  checkPhone(){
    let applyData=this.state.applyPage;
    let that=this;
    if(applyData.phone==this.state.phone){
      return false
    }
    axios.request({
      url: '/api/user/hea/pvalidate',
      method: 'get',
      params:{
        phone:applyData.phone
      },
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(function(response) {
      if(response.data.code===200){
        that.setState({
          phoneHad:false
        })
      }else if(response.data.code===202){
        alert("该号码已存在");
        that.setState({
          phoneHad:true
        })
      }
    });
  }
  render(){
    return (
      <div >
        <h2>编辑用户</h2>
        <h3>
        </h3>
        <ul className="usrmgmt_content">
          <li>
            <span className="usrmgmt_span">姓名</span>
            <Input onChange={this.changeName.bind(this)} value={this.state.applyPage.name} className="usrmgmt_input" size="large" placeholder="姓名" />
            <span className="usrmgmt_span">手机号</span>
            <Input onBlur={this.checkPhone.bind(this)} onChange={this.changePhone.bind(this)}  value={this.state.applyPage.phone}  className="usrmgmt_input" size="large" placeholder="手机号" />
          </li>

          {
            this.state.isSuper?<li>
              <span className="usrmgmt_span">隶属单位</span>
              <Select value={this.state.unitName} onChange={this.selectFrom.bind(this)} defaultValue="请选择" className="usrmgmt_input">
                {
                  this.state.fromCop.map((ele,index)=>{
                    return <Option key={index} value={ele.unitId.toString()}>{ele.unitName}</Option>
                  })
                }
              </Select>
              <span className="usrmgmt_span">密码</span>
              <Input onChange={this.changePassword.bind(this)} disabled={!this.state.isReset} value={this.state.defaultVal} className="usrmgmt_input1" size="large" />
              <Button onClick={this.resetPassword.bind(this)} disabled={this.state.isReset} className="reset_password_usr" type="primary">重置</Button>
            </li>:""
          }

          {/*<li>
           <span className="usrmgmt_span">隶属单位</span>
           <Input readOnly className="usrmgmt_input" size="large" placeholder="隶属单位" />
           <span className="usrmgmt_span">
           </span>
           <span className="usrmgmt_input">
           </span>
           </li>*/}

          {/* <li>
           <span className="usrmgmt_span">密码</span>
           <Input  className="usrmgmt_input1" size="large" placeholder="姓名" />
           <Button onClick={this.resetPassword.bind(this)} className="reset_password_usr" type="primary">重置</Button>
           <Button className="reset_password_none" type="primary">
           </Button>
           <span className="usrmgmt_span">创建人</span>
           <Input readOnly className="usrmgmt_input" size="large" placeholder="创建人" />
           </li>*/}

        </ul>

        <Table pagination={{defaultPageSize:10,showQuickJumper:true,onChange:this.changePage.bind(this),
          total:this.state.total,current:this.state.current }}  rowKey="roleId" dataSource={this.state.dataSource} columns={this.state.columns} />

        <h3>
        </h3>

        <div className="btn_save">
          <div className="btn_save_index">
            <Button onClick={this.save.bind(this)} className="save_add_hospital" type="primary">保存</Button>
            <Link to="usrmgmt/usrmgmt">
              <Button type="primary">返回</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

}
