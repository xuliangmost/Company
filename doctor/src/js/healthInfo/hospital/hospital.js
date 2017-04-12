import React,{Component} from "react"
import { Button,Select,Input,Table } from 'antd';
import { Link } from 'react-router';
import "../../../less/hospital.less"
import axios from "axios";
const Option = Select.Option;

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
          title: '医院名称',
          dataIndex: 'title',
          key: 'title',
          },
          {
          title: '等级',
          dataIndex: 'startTime',
          key: 'startTime',
          },
          {
          title: '所在地（省-市-县）',
          dataIndex: 'username',
          key: 'username',
          },
          {
            title: '联系人',
            dataIndex: 'phone',
            key: 'phone',
          },
          {
            title: '联系电话',
            dataIndex: 'creatAt',
            key: 'creatAt',
          },
          {
            title: '操作',
            key: 'action',
            render: (text, record,index) => (
              <span  key={record.id}>
              <Link to="">编辑</Link>
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


  changePage(page){
    this.query(page);
    this.setState({
      current:page
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
            医院信息查询区
            <Button type="primary" onClick={()=>this.query()} className="search_btn1">查询</Button>
          </h1>
          <ul className="search_ul">
            <li>
              <span className="most_flex">医院名称</span>
              <Input value={this.state.applyPage.consultationName} className="search_input" size="large" placeholder="医院名称" />
            </li>
            <li>
              <span className="most_flex">等级</span>
              <Select optionFilterProp="children" className="search_input"  defaultValue="请选择">
                <Option value="0">-请选择-</Option>
                <Option value="1">特甲</Option>
                <Option value="2">三甲</Option>
                <Option value="3">三乙</Option>
                <Option value="4">三丙</Option>
                <Option value="5">二甲</Option>
                <Option value="6">二乙</Option>
                <Option value="7">二丙</Option>
                <Option value="8">一级</Option>
              </Select>
            </li>
            <li>
              <span className="most_flex">联系人</span>
              <Input value={this.state.applyPage.username}  className="search_input" size="large" placeholder="联系人" />
            </li>
            <li>
              <span className="most_flex">电话</span>
              <Input value={this.state.applyPage.phone} className="search_input" size="large" placeholder="电话" />
            </li>
          </ul>


          <ul className="search_ul">
            <li>
              <span className=" flex_padding">省</span>
              <Select optionFilterProp="children" className="search_input"  defaultValue="">

                <Option value="1">特甲</Option>

              </Select>
            </li>
            <li>
              <span className="most_flex">市</span>
              <Select optionFilterProp="children" className="search_input"  defaultValue="">

                <Option value="1">特甲</Option>

              </Select>
            </li>
            <li>
              <span className=" flex_padding">县</span>
              <Select optionFilterProp="children" className="search_input"  defaultValue="">

                <Option value="1">特甲</Option>

              </Select>
            </li>
            <li>
            </li>
          </ul>


          </div>
          <div className="apple_bottom">
            <h1 className="most_h1">
              列表区
              <Link to="healthInfo/hospital/addHospital">
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
