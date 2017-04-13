import React,{Component} from "react"
import { Button,DatePicker,Input,Table } from 'antd';
import { Link } from 'react-router';
import "../../less/apply.less"
import axios from "axios";


let token=localStorage.getItem("robertUserName");
export default class Apply extends Component{
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
          title: '会诊名称',
          dataIndex: 'title',
          key: 'title',
          },
          {
          title: '会诊时间',
          dataIndex: 'startTime',
          key: 'startTime',
            render: (text) => (
              <span>{ text.split("T").join(" ") }</span>
            )
          },
          {
          title: '会诊对象',
          dataIndex: 'username',
          key: 'username',
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
            render: (text) => (
              <span>{ text.split("T").join(" ") }</span>
            )
          },
          {
            title: '操作',
            key: 'action',
            render: (text, record,index) => (
              <span  key={record.id}>
              <Link to={"apply/editCnsulation/"+record.id}>编辑</Link>
              {/*<Link to={{
                pathname: 'apply/editCnsulation/'+record.id,
                query: record.id
              }}>编辑</Link>*/}
                {/*<Link to="" onClick={()=>this.push(record.id,index)} className="apply_link">提交</Link>
                提交按钮有问题，需要后端返回一个状态值，前端根据这个状态值渲染需要的显示的按钮*/}
              <Link to="" className="apply_link" onClick={()=>this.deleteRecord(record.id)}>删除</Link>
              <Link className="apply_link" to={"apply/addConsultation/"+record.id} >创建副本</Link>
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
    deleteRecord(id){
      let that=this;
      axios.request({
        url: '/api/conference/delete/consultation',
        method: 'get',
        params:{
          id:id
        },
        headers: {
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        },
      }).then(function(response) {
        that.query(1);

      }).catch(function () {
        alert("数据提交失败，请检查网络!")
      });

    }
  onChange(date, dateString){
    let applyPage=this.state.applyPage;
    applyPage.startTime=dateString;
    this.setState({
      applyPage:applyPage
    });
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
            查询区
            <Button type="primary" onClick={()=>this.query()} className="search_btn1">查询</Button>
          </h1>
          <ul className="search_ul">
            <li>
              <span className="most_flex">会诊名称</span>
              <Input value={this.state.applyPage.consultationName} onChange={this.changeConsultationName.bind(this)}  className="search_input" size="large" placeholder="会诊名称" />
            </li>
            <li>
              <span className="most_flex">会诊时间</span>
              <DatePicker allowClear={false}  size="large" className="search_input" onChange={this.onChange.bind(this)} />
            </li>
            <li>
              <span className="most_flex">会诊对象</span>
              <Input value={this.state.applyPage.username} onChange={this.changeUsername.bind(this)}  className="search_input" size="large" placeholder="会诊对象" />
            </li>
            <li>
              <span className="most_flex">手机号</span>
              <Input value={this.state.applyPage.phone} onChange={this.changePhone.bind(this)} className="search_input" size="large" placeholder="手机号" />
            </li>
          </ul>

          </div>
          <div className="apple_bottom">
            <h1 className="most_h1">
              列表区
              <Link to="apply/newConsultation">
                <Button type="primary"  className="search_btn2">新增</Button>
              </Link>

            </h1>

            <Table pagination={{defaultPageSize:10,showQuickJumper:true,onChange:this.changePage.bind(this),
              total:this.state.total,current:this.state.current }}  rowKey="id" dataSource={this.state.dataSource} columns={this.state.columns} />
          </div>
        </div>
      )
    }

}
