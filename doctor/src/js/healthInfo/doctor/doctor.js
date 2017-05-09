import React,{Component} from "react"
import { Button,Select,Input,Table } from 'antd';
import { Link } from 'react-router';
import "../../../less/hospital.less"
import axios from "axios";
const Option = Select.Option;

const doctorTitle=["","主任医师","副主任医师","主治医师"];
let token=localStorage.getItem("robertUserName");
export default class Doctor extends Component{
    constructor(props){
        super(props);


      this.state={
        applyPage:{
          pageSize:10,
          doctorName:"",
          doctorPhone:"",
          departmentName:"",
          doctorTitle:""
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
          dataIndex: 'doctorName',
          key: 'doctorName',
          },
          {
          title: '手机号',
          dataIndex: 'doctorPhone',
          key: 'doctorPhone',
          },
          {
            title: '科室',
            dataIndex: 'departmentName',
            key: 'departmentName',
          },
          {
            title: '职称',
            dataIndex: 'doctorTitle',
            key: 'doctorTitle',
          },
          {
            title: '操作',
            key: 'action',
            render: (text, record,index) => (
              <span  key={record.id}>
              <Link to={"healthInfo/doctor/editDoctor/"+record.id}>编辑</Link>
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
      if(!applyPage.departmentName){
        delete applyPage.departmentName
      }

      if(!applyPage.doctorTitle){
        delete applyPage.doctorTitle
      }
      axios.request({
        url: '/api/user/doctor/pageList',
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



    changeDoctorName(e){
      let applyPage=this.state.applyPage;
      applyPage.doctorName=e.target.value
    }

    changeDoctorPhone(e){
      let applyPage=this.state.applyPage;
      applyPage.doctorPhone=e.target.value
    }
    changeDepartmentName(e){
      let applyPage=this.state.applyPage;
      applyPage.departmentName=e.target.value
    }

    changeDoctorTitle(value){
      let applyPage=this.state.applyPage;
      applyPage.doctorTitle=doctorTitle[value]
    }


    render(){
      return (
        <div>
          <div className="apple_top">
          <h1>
            医生信息查询区
            <Button type="primary" onClick={this.query.bind(this,1)} className="search_btn1">查询</Button>
          </h1>
          <ul className="search_ul">
            <li>
              <span className="most_flex">姓名</span>
              <Input onChange={this.changeDoctorName.bind(this)} className="search_input" size="large" placeholder="姓名" />
            </li>
            <li>
              <span className="most_flex">手机号</span>
              <Input  onChange={this.changeDoctorPhone.bind(this)}  className="search_input" size="large" placeholder="手机号" />
            </li>

            <li>
              <span className="most_flex">科室</span>
              <Input  onChange={this.changeDepartmentName.bind(this)} className="search_input" size="large" placeholder="科室" />
            </li>
            <li>
              <span className="flex_padding">职称</span>
              <Select size="large"   onChange={this.changeDoctorTitle.bind(this)} optionFilterProp="children" className="search_input"  defaultValue="请选择">
                <Option value="0">-请选择-</Option>
                <Option value="1">主任医师</Option>
                <Option value="2">副主任医师</Option>
                <Option value="3">主治医师</Option>
              </Select>
            </li>
          </ul>

         {/*   <ul className="search_ul">

              <li>
              </li>
              <li>
              </li>
              <li>
              </li>
            </ul>

*/}
          </div>
          <div className="apple_bottom">
            <h1 className="most_h1">
              列表区
              <Link to="healthInfo/doctor/addDoctor">
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
