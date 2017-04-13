import React,{Component} from "react"
import { Button,Checkbox,Input,Table,Select } from 'antd';
import { Link } from 'react-router';
import "../../less/usrmgmt.less"
import axios from "axios";
const Option = Select.Option;

let token=localStorage.getItem("robertUserName");
export default class AddUsrMgmt extends Component{
    constructor(props){
        super(props);

      this.state={
        total:10,
        current:1,
        columns : [
          {
            title:'序号',
            dataIndex: 'id',
            key: 'id',
            render: (text, record, index) => {
              return <span>{index + 1}</span>
            }
          },
          {
            title: '角色名称',
            dataIndex: 'titl1e',
            key: 'titl1e',
          },
          {
            title: '所属菜单',
            dataIndex: 'titl1e1',
            key: 'titl1e1',
          },
          {
            title: '赐予',
            dataIndex: 'username',
            key: 'username',
            render: (text, record,index) => (
              <span  key={record.id}>
                 {
                   record.username?<Checkbox defaultChecked={true} />:<Checkbox />
                 }
              </span>
            )
          },
        ],
        dataSource : [
          {
            id:"1",
            title:"1",
            startTime:"1",
            username:0,
            phone:0,
          },
          {
            id:"2",
            title:"1",
            startTime:"1",
            username:1,
            phone:1,
          }
        ]

      }
    }
    changePage(page){
      this.query(page);
      this.setState({
        current:page
      })
    }
    componentDidMount(){

    }
  resetPassword(){

    if (confirm("是否确定重置？"))
    {
      alert("确认")
    }
    else
    {
      alert("取消")
    }

  }

    render(){
      return (
        <div >
          <h2>新增用户</h2>
          <h3>
          </h3>

          <ul className="usrmgmt_content">
            <li>
              <span className="usrmgmt_span">姓名</span>
              <Input  className="usrmgmt_input" size="large" placeholder="姓名" />
              <span className="usrmgmt_span">手机号</span>
              <Input className="usrmgmt_input" size="large" placeholder="手机号" />
            </li>


            <li>
              <span className="usrmgmt_span">隶属单位</span>
              <Input readOnly className="usrmgmt_input" size="large" placeholder="隶属单位" />
              <span className="usrmgmt_span">
              </span>
              <span className="usrmgmt_input">
              </span>
            </li>

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

          <Table  pagination={{defaultPageSize:10,showQuickJumper:true,onChange:this.changePage.bind(this),
            total:this.state.total,current:this.state.current }}  rowKey="id" dataSource={this.state.dataSource} columns={this.state.columns} />

          <h3>
          </h3>

          <div className="btn_save">
            <div className="btn_save_index">
              <Button className="save_add_hospital" type="primary">保存</Button>
              <Link to="usrmgmt/usrmgmt">
                <Button type="primary">返回</Button>
              </Link>
            </div>
          </div>


        </div>
      )
    }

}
