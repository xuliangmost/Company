import React,{Component} from "react"
import { Button,DatePicker,Input,Table,Select } from 'antd';
import { Link } from 'react-router';
import "../../less/memuauthority.less"
import axios from "axios";
const Option = Select.Option;

let token=localStorage.getItem("robertUserName");
export default class Memuauthority extends Component{
    constructor(props){
        super(props);

      this.state={
        applyPage:{
          pageSize:10,
          systemName:"",
          menuName:"",
        },
        total:10,
        current:1,
        columns : [
          {
          title:'序号',
          dataIndex: 'permissionId',
          key: 'permissionId',
          render: (text, record, index) => {
             return <span>{index + 1}</span>
          }
          },
          {
          title: '系统名称',
          dataIndex: 'systemName',
          key: 'systemName',
          },
          {
          title: '菜单名称',
          dataIndex: 'menuName',
          key: 'menuName',
          },
          /*{
            title: '操作',
            key: 'action',
            render: (text, record,index) => (
              <span  key={record.id}>
              <Link to={"apply/editCnsulation/"+record.id}>编辑</Link>
              <Link to=""  className="apply_link">启用</Link>
              <Link to="" className="apply_link" >停用</Link>

            </span>
            )
          }*/
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
      apply.systemName=e.target.value;
      this.setState({
        applyPage:apply
      })
    }

    changeUsername(e){
      let apply=this.state.applyPage;
      apply.menuName=e.target.value;
      this.setState({
        applyPage:apply
      })
    }


    query(num){
      let that=this;
      let applyPage=this.state.applyPage;
      applyPage.pageNum=num;
      axios.request({
        url: '/api/user/permission/pageList',
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
        <div className="memuauthority">
          {/*<div className="memuauthority_left">

          </div>*/}


          <div className="memuauthority_right">
            <div className="apple_top">
              <h1>
                菜单权限查询区
                <Button type="primary" onClick={()=>this.query(1)} className="search_btn1">查询</Button>
              </h1>
              <ul className="search_ul">
                <li>
                  <span className="most_flex">系统名称</span>
                  <Input onChange={this.changeConsultationName.bind(this)}  className="search_input" size="large" placeholder="系统名称" />
                </li>
                <li>
                  <span className="most_flex">菜单名称</span>
                  <Input onChange={this.changeUsername.bind(this)}  className="search_input" size="large" placeholder="菜单名称" />
                </li>
                <li>
                  {/*<span className="most_flex">包含角色</span>
                  <Input onChange={this.changeConsultationName.bind(this)}  className="search_input" size="large" placeholder="包含角色" />*/}
                </li>

              </ul>

            </div>
            <div className="apple_bottom">
              <h1 className="most_h1">
                列表区
              </h1>

              <Table pagination={{defaultPageSize:10,showQuickJumper:true,onChange:this.changePage.bind(this),
                total:this.state.total,current:this.state.current }}  rowKey="id" dataSource={this.state.dataSource} columns={this.state.columns} />
            </div>
          </div>
        </div>

      )
    }

}
