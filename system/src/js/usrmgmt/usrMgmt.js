import React,{Component} from "react"
import { Button,DatePicker,Input,Table,Select } from 'antd';
import { Link } from 'react-router';
import "../../less/usrmgmt.less"
import axios from "axios";
const Option = Select.Option;

let token=localStorage.getItem("robertUserName");
export default class UsrMgmt extends Component{
    constructor(props){
        super(props);



      this.state={
        applyPage:{
          pageSize:10,
          consultationName:"",
          username:"",
          phone:"",
          status:"1",
          startTime:""
        },
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
          title: '姓名',
          dataIndex: 'title',
          key: 'title',
          },
          {
          title: '手机号',
          dataIndex: 'startTime',
          key: 'startTime',
          },
          {
          title: '隶属单位',
          dataIndex: 'username',
          key: 'username',
          },
          {
            title: '所属角色',
            dataIndex: 'crea1tAt',
            key: 'creat1At',
          },
          {
            title: '操作',
            key: 'action',
            render: (text, record,index) => (
              <span  key={record.id}>
              <Link to={"apply/editCnsulation/"+record.id}>编辑</Link>
              <Link to=""  className="apply_link">启用</Link>

              <Link to="" className="apply_link" >停用</Link>

            </span>
            )
          }
        ],
        dataSource : []
      }
    }

    componentDidMount(){
     // this.query(1)
    }

    push(id,index){

      let that=this;
      axios.request({
        url: '/api/conference/commit',
        method: 'get',
        params:{
          id:id
        },
        headers: {
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        },
      }).then(function(response) {
          that.query();

      }).catch(function () {
        alert("数据提交失败!")
      });

    }

  changePage(page){
    this.query(page);
    this.setState({
      current:page
    })
  }

    changeConsultationName(e){
      let apply=this.state.applyPage;
      apply.consultationName=e.target.value;
      this.setState({
        applyPage:apply
      })
    }

    changeUsername(e){
      let apply=this.state.applyPage;
      apply.username=e.target.value;
      this.setState({
        applyPage:apply
      })
    }

    changePhone(e){
      let apply=this.state.applyPage;
      apply.phone=e.target.value;
      this.setState({
        applyPage:apply
      })
    }

    query(num){
      let that=this;
      let applyPage=this.state.applyPage;
      applyPage.pageNum=num;
      axios.request({
        url: '/api/conference/applyPageList',
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
            用户查询区
            <Button type="primary" onClick={()=>this.query()} className="search_btn1">查询</Button>
          </h1>
          <ul className="search_ul">
            <li>
              <span className="most_flex">姓名</span>
              <Input onChange={this.changeConsultationName.bind(this)}  className="search_input" size="large" placeholder="姓名" />
            </li>
            <li>
              <span className="most_flex">手机号</span>
              <Input onChange={this.changeConsultationName.bind(this)}  className="search_input" size="large" placeholder="手机号" />
            </li>
            <li>
              <span className="most_flex">隶属单位</span>
              <Input readOnly onChange={this.changeUsername.bind(this)}  className="search_input" size="large" placeholder="隶属单位" />
            </li>
            {/*<li>
              <span className="most_flex">使用状态</span>
              <Select defaultValue="请选择" className="search_input">
                <Option value="1">启用</Option>
                <Option value="0">停用</Option>
              </Select>
            </li>*/}
            <li>
              <span className="most_flex">所属角色</span>
              <Input onChange={this.changeConsultationName.bind(this)}  className="search_input" size="large" placeholder="所属角色" />
            </li>
          </ul>


            <ul className="search_ul">
              {/*<li>
                <span className="most_flex">登录状态</span>
                <Select defaultValue="请选择" className="search_input">
                  <Option value="0">-请选择-</Option>
                  <Option value="1">在线</Option>
                  <Option value="2">离线</Option>
                </Select>
              </li>*/}

              <li>
              </li>
              <li>
              </li>
            </ul>

          </div>
          <div className="apple_bottom">
            <h1 className="most_h1">
              列表区
              <Link to="usrmgmt/addUsrmgmt">
                <Button type="primary"  className="search_btn2">新增</Button>
                {/*<Button type="primary"  className="search_btn2">停用</Button>
                <Button type="primary"  className="search_btn2">启用</Button>*/}

              </Link>

            </h1>

            <Table pagination={{defaultPageSize:10,showQuickJumper:true,onChange:this.changePage.bind(this),
              total:this.state.total,current:this.state.current }}  rowKey="id" dataSource={this.state.dataSource} columns={this.state.columns} />
          </div>
        </div>
      )
    }

}
