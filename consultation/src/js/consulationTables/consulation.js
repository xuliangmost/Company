import React,{Component} from "react"
import {Button,DatePicker,Input,Table,Select  } from 'antd';
import { Link } from 'react-router';
import axios from "axios";
const Option = Select.Option;
let token=localStorage.getItem("robertUserName");
import "../../less/editCnsulation.less"

const url=["","/api/conference/summary/apply","/api/conference/summary/check","/api/conference/summary/mission"];
let listValue=["全部","待提交","待审核","待会诊","已退回","已作废"];
let statValue=["","会诊申请","会诊审核","会诊任务"];
export default class Consulation extends Component{
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
        return (date.getFullYear())

      })();
      this.state={
        applyPage:{
          pageNum:"1",
          pageSize:"10",
          consultationName:"",
          username:"",
          phone:"",
          startTime:"",
          hospital:"",
          applicant:"",
          aPhone:""
        },
        total:10,
        current:1,//当前页数
        stage:0,//会诊状态过滤
        status:0,//会诊阶段选中
        dataSource :[],
        dataSourceFather :[],
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
            dataIndex: 'consultationName',
            key: 'consultationName',
          },
          {
            title: '会诊时间',
            dataIndex: 'startTime',
            key: 'startTime',
            render: (text) => (
              <span>{ text.split("T").join(" ").split(".").splice(0,1)}</span>
            )
          },
          {
            title: '所属医院',
            dataIndex: 'hospital',
            key: 'hospital',
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
            title: '申请人',
            dataIndex: 'applicant',
            key: 'applicant',
          },
          {
            title: '手机号',
            dataIndex: 'aPhone',
            key: 'aPhone',
          },
          {
            title: '会诊阶段',
            dataIndex: '',
            key: '',
            /*render: (text, record,index) => (
              <span  key={record.id}>
                {statValue[this.state.stage]}
            </span>
            )*/
          },
          {
            title: '会诊状态',
            dataIndex: 'status',
            key: 'status',
            render: (text, record,index) => (
              <span  key={record.id}>
                {listValue[record.status]}
            </span>
            )
          },
          {
            title: '操作',
            key: 'action',
            render: ( record,index) => (
              <span  key={record.id}>
              <Link to={"consulationTables/lookConsulation/"+record.id}>查看</Link>
            </span>
            )
          }
        ],
      }
    }
  componentDidMount(){
      this.query(0,0,1)
  }
  query(value,url,num){
    if(value!=0){
      let that=this;
      let applyPage=this.state.applyPage;
      applyPage.pageNum=num;
      axios.request({
        url:url,
        method:"get",
        params:applyPage,
        headers: {
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        },
      }).then(function(response) {
        console.log(response.data.result.count)
        that.setState({
          dataSource:response.data.result.data,
          dataSourceFather:response.data.result.data,
          total:response.data.result.count
        })
      });
    }else if(value==0){
      let that=this;
      let dataList=[];
      let total=0;
      let applyPage=this.state.applyPage;
      applyPage.pageNum=num;
      console.log()
      //第一个接口
      axios.request({
        url:"/api/conference/summary",
        method:"get",
        params:applyPage,
        headers: {
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        },
      }).then(function(response) {
        total=response.data.result.count;
        response.data.result.data.map((ele)=>{
          dataList.push(ele)
        });
        that.setState({
          dataSource:response.data.result.data,
          dataSourceFather:response.data.result.data,
          total
        })
      });
    }
  }

  selectStage(value){//选中阶段
    console.log(value)
    this.setState({
      status:value
    })
  }

  changePage(page){
    this.query(this.state.status,url[this.state.status],page);
    this.setState({
      current:page
    })
  }
  selectState(value){//选中状态
     if(value==0){
       let dataSource=this.state.dataSourceFather;
       this.setState({
         dataSource
       })
     }else{
       let dataSource=this.state.dataSourceFather.filter(function (ele) {
         return ele.status==value
       });
       this.setState({
         dataSource
       })
     }
    this.setState({
      stage:value
    })

  }

  //修改会诊名称
  changeConsultationName(e){
    let applyPage=this.state.applyPage;
    applyPage.consultationName=e.target.value;
    this.setState({
      applyPage:applyPage
    });
  }
  //修改会诊对象
  changeUsername(e){
    let applyPage=this.state.applyPage;
    applyPage.username=e.target.value;
    this.setState({
      applyPage:applyPage
    });
  }

  //修改手机号
  changePhone(e){
    let applyPage=this.state.applyPage;
    applyPage.phone=e.target.value;
    this.setState({
      applyPage:applyPage
    });
  }

  //修改会诊时间
  changeStartTime(data,dateString){
    let applyPage=this.state.applyPage;
    applyPage.startTime=dateString;
    this.setState({
      applyPage:applyPage
    });
  }

  //修改所属医院
  changeHospital(e){
    let applyPage=this.state.applyPage;
    applyPage.hospital=e.target.value;
    this.setState({
      applyPage:applyPage
    });
  }

  //修改申请人
  changeApplicant(e){
    let applyPage=this.state.applyPage;
    applyPage.applicant=e.target.value;
    this.setState({
      applyPage:applyPage
    });
  }

  //修改申请人手机号
  changeAPhone(e){
    let applyPage=this.state.applyPage;
    applyPage.aPhone=e.target.value;
    this.setState({
      applyPage:applyPage
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
            会诊总表查询区
            <Button onClick={this.query.bind(this,this.state.status,url[this.state.status],1)} type="primary" className="search_btn1">查询</Button>
          </h1>

          <ul className="search_ul">
            <li>
              <span className="most_flex">会诊名称</span>
              <Input onChange={this.changeConsultationName.bind(this)} className="search_input" size="large" placeholder="会诊名称" />
            </li>
            <li>
              <span className="most_flex">会诊时间</span>
              <DatePicker  size="large" className="search_input" onChange={this.onChange.bind(this)} />
            </li>
            <li>
              <span className="most_flex">会诊对象</span>
              <Input onChange={this.changeUsername.bind(this)} className="search_input" size="large" placeholder="会诊对象" />
            </li>
            <li>
              <span className="most_flex">手机号</span>
              <Input onChange={this.changePhone.bind(this)} className="search_input" size="large" placeholder="手机号" />
            </li>
            <li>

            </li>
          </ul>

            <ul className="search_ul">
              <li>
                <span className="most_flex">所属医院</span>
                <Input onChange={this.changeHospital.bind(this)} className="search_input" size="large" placeholder="会诊名称" />
              </li>
              <li>
                <span className="most_flex">申请人</span>
                <Input onChange={this.changeApplicant.bind(this)} className="search_input" size="large" placeholder="申请人" />
              </li>
              <li>
                <span className="most_flex">手机号</span>
                <Input onChange={this.changeAPhone.bind(this)} className="search_input" size="large" placeholder="会诊对象" />
              </li>
              <li>
                <span className="most_flex">会诊阶段</span>
                <Select optionFilterProp="children" className="search_input" onChange={this.selectStage.bind(this)}  defaultValue="全部">
                  <Option value="0">全部</Option>
                  <Option value="1">会诊申请</Option>
                  <Option value="2">会诊审核</Option>
                  <Option value="3">会诊任务</Option>
                </Select>
              </li>
              <li>
                <span className="most_flex">会诊状态</span>

                 <Select optionFilterProp="children" className="search_input" onChange={this.selectState.bind(this)}  defaultValue="全部">
                    <Option value="0">全部</Option>
                    <Option value="1">待提交</Option>
                    <Option value="2">待审核</Option>
                    <Option value="4">已退回</Option>
                    <Option value="3">待会诊</Option>
                    <Option value="5">已作废</Option>
                  </Select>

              </li>
            </ul>

          </div>
          <div className="apple_bottom">
            <h1 className="most_h1">
              列表区
            </h1>

            <Table rowKey="id"  pagination={{defaultPageSize:10,showQuickJumper:true,onChange:this.changePage.bind(this),
              total:this.state.total,current:this.state.current }} dataSource={this.state.dataSource} columns={this.state.columns} />
          </div>
        </div>
      )
    }
}
