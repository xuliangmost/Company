import React from "react";
import './css/UserManage.css'
import InputBox from "../../common/InputBox"
import Confirm from "../../common/Confirm"
import {Checkbox} from 'antd';

/*导出组件*/
export default class UserManage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      userArr:[]
    }
  }
  componentWillMount(){
    this.Style={
      p_title:{
        width:"100%",
        height:57,
        borderBottom:"1px #ededed solid"
      },
      inputsearch:{
        backgroundColor:'red',
        width:200,
        borderWidth:'0px',
        height:30
      },
      new_Company:{
        width:130,
        height:30,
        fontSize:'14px'
      }
    }
    this.setState({
      userArr:[{
        userId:1,
        userName:'刘大声',
        userCompany:['山东省德州市才一方','山东省德州市才一方','山东省德州市才一方','山东省德州市才一方'],
        userPhone:'12345678912',
        userState:'已开通'
      },{
        userId:1,
        userName:'刘大声',
        userCompany:['山东省德州市才一方','山东省德州市才一方','山东省德州市才一方'],
        userPhone:'12345678912',
        userState:'已开通'
      },{
        userId:1,
        userName:'刘大声',
        userCompany:['山东省德州市才一方','山东省德州市才一方','山东省德州市才一方'],
        userPhone:'12345678912',
        userState:'已开通'
      },{
        userId:1,
        userName:'刘大声',
        userCompany:['山东省德州市才一方','山东省德州市才一方','山东省德州市才一方'],
        userPhone:'12345678912',
        userState:'已开通'
      }]
    })
  }
  render(){
    return (
      <div className="userManage_right">
        <div className="comManage_title">
          {/*面包屑导航*/}
          <div className="comManage_breadNav">
            <span className="bread1">用户管理</span>
            <i>&gt;</i>
            <span>用户列表</span>
          </div>
          {/*搜索框*/}
          <div className="coManage_search">
            <InputBox style={this.Style.inputsearch}></InputBox>
            <span className="inputsearch_icon"></span>
          </div>
        </div>
        <div className="div_context">
          <div className="userTable_title">
            <div className="new_User_father">
              <Confirm tcontext={'+新建用户'} style={this.Style.new_Company}></Confirm>
            </div>
          </div>
          <Table userArr={this.state.userArr}/>
        </div>
      </div>
    )
  }
}

/*信息列表*/
class Table extends React.Component{
  constructor(props){
    super(props);
    this.state={
      selectAll:false
    }
  }
  selectAll(){
    this.setState({
      selectAll:!this.state.selectAll
    })
  }
  render(){
    return (
      <div className="user_content">
        <ul>
          <li className="userManage_li" style={{backgroundColor:'#f2f2f2'}}>
            <div className="userManage_all userManage_title1" >
              <Checkbox><span onClick={()=>this.selectAll()} className="bodrer1">全选</span></Checkbox>
            </div>
            <span  className="userManage_title2">用户ID</span>
            <span  className="userManage_title3">会员名称</span>
            <span  className="userManage_title4">所属公司</span>
            <span  className="userManage_title5">手机号</span>
            <span  className="userManage_title6">状态</span>
            <div className="userManage_all userManage_title8">
              <span  className="">操作</span>
            </div>
          </li>



            )
        </ul>


        <ul>{/*这是你要循环的*/}
          {
            this.props.userArr.map((ele,index)=>{
                return(
                  <li key={index} >
                    <input type="checkbox" checked={this.state.selectAll?"checked":""}/>
                  </li>
                )
            })
          }
        </ul>


      </div>
  )
  }
  }
