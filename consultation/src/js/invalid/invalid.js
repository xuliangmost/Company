import React,{Component} from "react"
import { Button,DatePicker,Input,Table } from 'antd';
import { Link } from 'react-router';
import moment from 'moment';
import axios from "axios";
const dateFormat = 'YYYY-MM-DD HH:mm:ss';

let token=localStorage.getItem("robertUserName");

export default class Invalid extends Component{
    constructor(props){
        super(props);
      let startTime=(function getNowFormatDate() {
        let date = new Date();
        let seperator1 = "-";
        let month = date.getMonth() + 1;
        let strDate = date.getDate();
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        return (date.getFullYear() + seperator1 + month + seperator1 + strDate)

      })();
      this.state={
        applyPage:{
          pageSize:10,
          consultationName:"",
          username:"",
          phone:"",
          status:5,
          startTime:""
        },
        total:10,
        current:1,
        dataSource :[],
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
            title: '会诊名称',
            dataIndex: 'title',
            key: 'title',
          },
          {
            title: '会诊时间',
            dataIndex: 'startTime',
            key: 'startTime',
          },
          {
            title: '会诊对象',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: '手机号',
            dataIndex: 'phone',
            key: 'phone',
          },
          {
            title: '创建时间',
            dataIndex: 'creatAt',
            key: 'creatAt',
          },
          {
            title: '操作',
            key: 'action',
            render: (text, record,index) => (
              <span  key={record.id}>
              <Link to={"invalid/lookInvalid/"+record.id}>查看</Link>
            </span>
            )
          }
        ],
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
  query(num){
    let that=this;
    let applyPage=this.state.applyPage;
    applyPage.pagenum=num;
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


  onChange(date, dateString){
    let applyPage=this.state.applyPage;
    applyPage.startTime=dateString;
    this.setState({
      applyPage:applyPage
    });
  }
    render(){
      return (
        <div>
          <div className="apple_top">
          <h1>
            作废会诊查询区
            <Button onClick={()=>this.query()} type="primary" className="search_btn1">查询</Button>
          </h1>
          <ul className="search_ul">
            <li>
              <span className="most_flex">会诊名称</span>
              <Input className="search_input" size="large" placeholder="会诊名称" />
            </li>
            <li>
              <span className="most_flex">会诊时间</span>
              <DatePicker allowClear={false} size="large" className="search_input" onChange={this.onChange.bind(this)} />
            </li>
            <li>
              <span className="most_flex">会诊对象</span>
              <Input className="search_input" size="large" placeholder="会诊对象" />
            </li>
            <li>
              <span className="most_flex">手机号</span>
              <Input className="search_input" size="large" placeholder="手机号" />
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
      )
    }
}