import React,{Component} from "react"
import { Button,DatePicker,Input,Table,Select } from 'antd';
import { Link } from 'react-router';
import "../../less/usrmgmt.less"
import axios from "axios";
const Option = Select.Option;

let token=localStorage.getItem("robertUserName");
export default class RoleMgmt extends Component{
    constructor(props){
        super(props);

      this.state={
        applyPage:{
          pageSize:10,
          roleName:"",
          permission:"",
        },
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
              <Link to={"rolemgmt/editRolemgmt/"+record.roleId}>编辑</Link>
              {/*<Link to=""  className="apply_link">启用</Link>

              <Link to="" className="apply_link" >停用</Link>*/}

            </span>
            )
          }
        ],
        dataSource : []
      }
    }

    componentDidMount(){
      this.query(1)
    }



  changePage(page){
    this.query(page);
    this.setState({
      current:page
    })
  }


    changeConsultationName(e){
      let apply=this.state.applyPage;
      apply.roleName=e.target.value;
      this.setState({
        applyPage:apply
      })
    }

    changeUsername(e){
      let apply=this.state.applyPage;
      apply.permission=e.target.value;
      this.setState({
        applyPage:apply
      })
    }

    query(num){
      let that=this;
      let applyPage=this.state.applyPage;
      applyPage.pageNum=num;
      if(!applyPage.permission){
        delete applyPage.permission
      }
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
        })
      });
    }
    render(){
      return (
        <div>
          <div className="apple_top">
          <h1>
            角色查询区
            <Button type="primary" onClick={()=>this.query(1)} className="search_btn1">查询</Button>
          </h1>
          <ul className="search_ul">
            <li>
              <span className="most_flex">角色名称</span>
              <Input onChange={this.changeConsultationName.bind(this)}  className="search_input" size="large" placeholder="角色名称" />
            </li>

            {/*<li>
              <span className="most_flex">手机号</span>
              <Input onChange={this.changeConsultationName.bind(this)}  className="search_input" size="large" placeholder="手机号" />
            </li>*/}
            {/*<li>
              <span className="most_flex">隶属单位</span>
              <Input readOnly onChange={this.changeUsername.bind(this)}  className="search_input" size="large" placeholder="隶属单位" />
              <Button className="select_system_people" type="primary">选择</Button>
            </li>*/}
            <li>
              <span className="most_flex">所属菜单</span>
              <Input onChange={this.changeUsername.bind(this)}  className="search_input" size="large" placeholder="所属菜单" />
            </li>
            <li>
            </li>
            <li>

            </li>
          </ul>

          </div>
          <div className="apple_bottom">
            <h1 className="most_h1">
              列表区
              <Link to="rolemgmt/addRolemgmt">
                <Button type="primary"  className="search_btn2">新增</Button>
              </Link>

            </h1>

            <Table pagination={{defaultPageSize:10,showQuickJumper:true,onChange:this.changePage.bind(this),
              total:this.state.total,current:this.state.current }}  rowKey="roleId" dataSource={this.state.dataSource} columns={this.state.columns} />
          </div>
        </div>
      )
    }

}
