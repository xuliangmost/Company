import React,{Component} from "react"
import { Button,DatePicker,Input,Table,Select } from 'antd';
import { Link } from 'react-router';
import "../../less/apply.less"
import tools from "../../tools/checked"
import moment from 'moment';
import axios from "axios";
const dateFormat = 'YYYY-MM-DD HH:mm:ss';
let startTime=(function getNowFormatDate() {
  let date = new Date();
  let seperator1 = "-";
  let month = date.getMonth() + 1;
  var seperator2 = ":";
  let strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  return (date.getFullYear() + seperator1 + month + seperator1 + strDate
  + " " + date.getHours() + seperator2 + date.getMinutes()
  + seperator2 + date.getSeconds())
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
        consultationName:"",
        username:"",
        phone:"",
        startTime:"",
        hospital:"",
        applicant:"",
        aPhone:"",
        stat:""

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
                record.conId?<a disabled={!tools.Calculation(record.startTime.split("T").join(" "),startTime)} href={"http://192.168.100.133:8787/conference/#/mainFrame/personMeeting/addMeeting/"+record.conId+"/1"} target="blank">参加</a>:""
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
    let apply=this.state.applyPage;
    apply.startTime=dateString;
    this.setState({
      applyPage:apply
    })

    this.setState({
      startTime:dateString
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
              <DatePicker  value={moment(this.state.startTime, dateFormat)} size="large" className="search_input" onChange={this.onChange.bind(this)} />
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
                <Select defaultValue="未开始" className="search_input" onChange={this.handleChange.bind(this)}>
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
