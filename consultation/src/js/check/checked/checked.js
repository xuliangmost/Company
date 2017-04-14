import React,{Component} from "react"
import { Button,DatePicker,Input,Table } from 'antd';
import { Link } from 'react-router';
import "../../../less/apply.less"
import moment from 'moment';
import axios from "axios";
const dateFormat = 'YYYY-MM-DD HH:mm:ss';


let token=localStorage.getItem("robertUserName");
export default class Checked extends Component{
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
          status:"3",
          title:"",
          hospital:"",
          phone:"",
          applyName:"",
          startTime:""

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
          dataIndex: 'title',
          key: 'title',
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
            title: '申请人',
            dataIndex: 'applyName',
            key: 'applyName',
          },
          {
            title: '手机号',
            dataIndex: 'phone',
            key: 'phone',
          },
          {
            title: '审核时间',
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
                {/*<Link to="check/checked/lookChecked">查看</Link>*/}
                 <Link to={"check/checked/lookChecked/"+record.id}>查看</Link>
              </span>
            )
          }
        ],
        dataSource : []
      }



    }
    // push(id,index){
    //
    //   let that=this;
    //   axios.request({
    //     url: '/api/conference/commit',
    //     method: 'get',
    //     params:{
    //       id:id
    //     },
    //     headers: {
    //       'Authorization': 'Bearer '+token,
    //       'Content-Type': 'application/x-www-form-urlencoded UTF-8'
    //     },
    //   }).then(function(response) {
    //     if(response.data.code==200){
    //       axios.request({
    //         url: '/api/conference/applyPageList',
    //         method: 'get',
    //         params:this.state.applyPage,
    //         headers: {
    //           'Authorization': 'Bearer '+token,
    //           'Content-Type': 'application/x-www-form-urlencoded UTF-8'
    //         },
    //       }).then(function(response) {
    //         let dataSource=response.data.result.data;
    //         console.log(dataSource)
    //         that.setState({
    //           dataSource:dataSource
    //         })
    //       });
    //
    //
    //     }
    //
    //
    //
    //
    //   }).catch(function () {
    //     alert("数据提交失败，请检查网络!")
    //   });
    //
    // }

    deleteRecord(index){

      alert("删除了id是" + index + "的数据")

    }
    componentDidMount(){
       this.query(1)
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
      apply.title=e.target.value;
      this.setState({
        applyPage:apply
      })
    }

    changeUsername(e){
      let apply=this.state.applyPage;
      apply.applyName=e.target.value;
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
        url: '/api/conference/check/pageList',
        method: 'post',
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
              <Input value={this.state.applyPage.title} onChange={this.changeConsultationName.bind(this)}  className="search_input" size="large" placeholder="会诊名称" />
            </li>
            <li>
              <span className="most_flex">会诊时间</span>
              <DatePicker allowClear={false} value={moment(this.state.startTime, dateFormat)} size="large" className="search_input" onChange={this.onChange.bind(this)} />
            </li>
            <li>
              <span className="most_flex">申请人</span>
              <Input value={this.state.applyPage.applyName} onChange={this.changeUsername.bind(this)}  className="search_input" size="large" placeholder="申请人" />
            </li>
            <li>
              <span className="most_flex">所属医院</span>
              <Input value={this.state.applyPage.hospital} onChange={this.changeHospital.bind(this)} className="search_input" size="large" placeholder="所属医院" />
            </li>
          </ul>
            <ul className="search_ul">
              <li>
                <span className="most_flex">手机号</span>
                <Input value={this.state.applyPage.phone} onChange={this.changePhone.bind(this)}  className="search_input" size="large" placeholder="手机号" />
              </li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="apple_bottom">
            <h1 className="most_h1">
              列表区
            </h1>

            <Table  pagination={{defaultPageSize:10,showQuickJumper:true,onChange:this.changePage.bind(this),
              total:this.state.total,current:this.state.current }} rowKey="id" dataSource={this.state.dataSource} columns={this.state.columns} />
          </div>
        </div>
      )
    }

}
