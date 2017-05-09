import React,{Component} from "react"
import { Button,DatePicker,Input,Table,Select } from 'antd';
import { Link } from 'react-router';
import "../../less/usrmgmt.less"
import axios from "axios";
const Option = Select.Option;
const jwtDecode = require('jwt-decode');
let token=localStorage.getItem("robertUserName");
export default class UsrMgmt extends Component{
    constructor(props){
        super(props);
      this.state={
        applyPage:{
          pageSize:10,
          username:"",
          phone:"",
          roleName:"",
          unitId:null
        },
        super:true,
        hoId:null,
        total:10,
        current:1,
        columns : [
          {
          title:'序号',
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
            title: '所属角色',
            dataIndex: 'roleNames',
            key: 'roleNames',
          },
          {
            title: '操作',
            key: 'action',
            render: (text, record,index) => (
              <span  key={record.id}>
              <Link to={"usrmgmt/editUsrmgmt/"+record.userId}>编辑</Link>
            </span>
            )
          }
        ],
        dataSource : [],
        fromCop:[]
      }
    }

    componentWillMount(){
      if(localStorage.getItem('robertUserName')){
        const bearer = localStorage.getItem('robertUserName');
        let decoded = jwtDecode(bearer);

        if(!decoded.super){
          this.setState({
            super:false,
            hoId:decoded.hoId
          });
        }
      }
    }
    componentDidMount(){
      this.query(1);
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
  changePage(page){
    this.query(page);
    this.setState({
      current:page
    })
  }

    changeConsultationName(e){
      let apply=this.state.applyPage;
      apply.username=e.target.value;
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

    changeRoleName(e){
      let apply=this.state.applyPage;
      apply.roleName=e.target.value;
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
    selectFrom(value){
      let apply=this.state.applyPage;
      if(!value){
        value=null;
        apply.unitId=value;
        this.setState({
          applyPage:apply
        })
      }else{
        apply.unitId=Number(value);
        this.setState({
          applyPage:apply
        })
      }

    }
    query(num){
      let applyPage=this.state.applyPage;
      if(!this.state.super){
        applyPage.unitId=this.state.hoId
      }
      let that=this;

      applyPage.pageNum=num;
      if(!applyPage.roleName){
        delete applyPage.roleName
      }
      axios.request({
        url: '/api/user/pageList',
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
        that.getList()
      });
    }
    render(){
      return (
        <div>
          <div className="apple_top">
          <h1>
            用户查询区
            <Button type="primary" onClick={()=>this.query(1)} className="search_btn1">查询</Button>
          </h1>
          <ul className="search_ul">
            <li>
              <span className="most_flex">姓名</span>
              <Input onChange={this.changeConsultationName.bind(this)}  className="search_input" size="large" placeholder="姓名" />
            </li>
            <li>
              <span className="most_flex">手机号</span>
              <Input onChange={this.changePhone.bind(this)}  className="search_input" size="large" placeholder="手机号" />
            </li>
            {/*<li>
              <span className="most_flex">隶属单位</span>
              <Input readOnly onChange={this.changeUsername.bind(this)}  className="search_input" size="large" placeholder="隶属单位" />
            </li>*/}

            <li>
              <span className="most_flex">所属角色</span>
              <Input onChange={this.changeRoleName.bind(this)}  className="search_input" size="large" placeholder="所属角色" />
            </li>

            {
              this.state.super?<li>
                <span className="most_flex">隶属单位</span>
               <Select size="large"  onChange={this.selectFrom.bind(this)} defaultValue="请选择" className="search_input">
                  <Option value="">-请选择-</Option>
                  {
                    this.state.fromCop.map((ele,index)=>{
                      return <Option key={index} value={ele.unitId.toString()}>{ele.unitName}</Option>
                    })
                  }
                </Select>
              </li>:<li>
              </li>
            }
          </ul>


            <ul className="search_ul">
              {/*<li>
                <span className="most_flex">登录状态</span>
               <Select size="large"  defaultValue="请选择" className="search_input">
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
              total:this.state.total,current:this.state.current }}  rowKey="userId" dataSource={this.state.dataSource} columns={this.state.columns} />
          </div>
        </div>
      )
    }

}
