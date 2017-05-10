import React,{Component} from "react"
import { Button,DatePicker,Input,Table,Select } from 'antd';
import { Link } from 'react-router';
import "../../less/apply.less"
import tools from "../../tools/checked"
import moment from 'moment';
import axios from "axios";
import api from "../../common/API"
let serverD=api().serverAdress;
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD HH:mm:ss';
let startTime=(function show_cur_times(){
//获取当前日期
  var date_time = new Date();
  //年
  var year = date_time.getFullYear();
  //判断小于10，前面补0
  if(year<10){
    year="0"+year;
  }

  //月
  var month = date_time.getMonth()+1;
  //判断小于10，前面补0
  if(month<10){
    month="0"+month;
  }

  //日
  var day = date_time.getDate();
  //判断小于10，前面补0
  if(day<10){
    day="0"+day;
  }

  //时
  var hours =date_time.getHours();
  //判断小于10，前面补0
  if(hours<10){
    hours="0"+hours;
  }

  //分
  var minutes =date_time.getMinutes();
  //判断小于10，前面补0
  if(minutes<10){
    minutes="0"+minutes;
  }

  //秒
  var seconds=date_time.getSeconds();
  //判断小于10，前面补0
  if(seconds<10){
    seconds="0"+seconds;
  }

  //拼接年月日时分秒
  return (year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds)
})();
let token=localStorage.getItem("robertUserName");
const Option = Select.Option;
export default class ConsultationTask extends Component{
  constructor(props){
    super(props);


    const Option = Select.Option;
    this.state={
      applyPage:{
        pageSize:10,
        status:"3",
        consultationName:null,
        username:null,
        phone:null,
        startTime:null,
        hospital:null,
        applicant:null,
        aPhone:null,
        stat:null

      },
      total:10,
      current:1,
      startTime:startTime,
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
          title: '会诊状态',
          dataIndex: 'stat',
          key: 'stat',
          render: (text,record) => (
            <span>{ text==="已结束"?"已结束":!tools.Calculation(record.startTime.split("T").join(" "),startTime)?"未开始":"进行中"}</span>
          )
        },
        {
          title: '确认时间',
          dataIndex: 'modifyTime',
          key: 'modifyTime',
          render: (text) => (
            <span>{ text.split("T").join(" ").split(".").splice(0,1)}</span>
          )
        },
        {
          title: '操作',
          key: 'action',
          render: (text, record,index) => (
            <span  key={record.id}>
              <Link to={"task/lookConsultationTask/"+record.id}>查看</Link>&nbsp;

              {
                record.conId?<a disabled={!tools.Calculation(record.startTime.split("T").join(" "),startTime)||record.stat==="已结束"} href={serverD+"conference/#/mainFrame/personMeeting/addMeeting/"+record.conId+"/1"} >参加</a>:""
              }
              </span>
          )
        }
      ],
      dataSource : []
    }
  }
  componentDidMount(){
    this.query(1);
  }
  onChange(date, dateString){
      let applyPage=this.state.applyPage;
      applyPage.startTime=dateString[0];
      applyPage.endTime=dateString[1];
      this.setState({
          applyPage:applyPage
      });

    /*this.setState({
      startTime:dateString
    })*/
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
  changeHospital(e){
    let apply=this.state.applyPage;
    apply.hospital=e.target.value;
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
  changeApplicant(e){
    let apply=this.state.applyPage;
    apply.applicant=e.target.value;
    this.setState({
      applyPage:apply
    })
  }
  changeaPhone(e){
    let apply=this.state.applyPage;
    apply.aPhone=e.target.value;
    this.setState({
      applyPage:apply
    })
  }
  changeStat(){
    // let obj_select=document.getElementById("select_id");
    // let  index=obj_select.selectedIndex;
    // let  text=obj_select.options[index].text;
    // let apply=this.state.applyPage;
    //  apply.stat=text;
    //  this.setState({
    //    applyPage:apply
    //  })
    //  console.log(text);
  }
    changePage(page){
      this.query(page);
      this.setState({
        current:page
      })
    }
  handleChange(value) {
    console.log( value);
    let apply=this.state.applyPage;
    apply.stat=value;
    this.setState({
      applyPage:apply
    })
  }
  query(num){
    let that=this;
    let applyPage=this.state.applyPage;
    if(applyPage.stat==="1"){
      delete applyPage.stat
    }
    applyPage.pageNum=num;
    axios.request({
      url: '/api/conference/mission/pageList',
      method: 'get',
      params:applyPage,
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(function(response) {
      let dataSource=response.data.result.data;
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
              <RangePicker size="large" className="search_input" onChange={this.onChange.bind(this)} />
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
          <ul className="search_ul">
            <li>
              <span className="most_flex">所属医院</span>
              <Input value={this.state.applyPage.hospital} onChange={this.changeHospital.bind(this)}  className="search_input" size="large" placeholder="所属医院" />
            </li>
            <li>
              <span className="most_flex">申请人</span>
              <Input value={this.state.applyPage.applicant} onChange={this.changeApplicant.bind(this)}  className="search_input" size="large" placeholder="申请人" />
            </li>
            <li>
              <span className="most_flex">手机号</span>
              <Input value={this.state.applyPage.aPhone} onChange={this.changeaPhone.bind(this)}  className="search_input" size="large" placeholder="手机号" />
            </li>
            <li>
               <span className="most_flex">会诊状态</span>
               <Select size="large"  defaultValue="请选择" className="search_input" onChange={this.handleChange.bind(this)}>
                  <Option value="1">全部</Option>
                  <Option value="未开始">未开始</Option>

                  <Option value="进行中">进行中</Option>
                  <Option value="已结束">已结束</Option>
                </Select>
            </li>
          </ul>
        </div>
        <div className="apple_bottom">
          <h1 className="most_h1">
            列表区
          </h1>

          <Table pagination={{defaultPageSize:10,showQuickJumper:true,onChange:this.changePage.bind(this),
            total:this.state.total,current:this.state.current }} rowKey="id" dataSource={this.state.dataSource} columns={this.state.columns} />
        </div>
      </div>
    )
  }

}
