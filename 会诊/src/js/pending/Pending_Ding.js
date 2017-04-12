import React,{Component} from "react"
import { Button,DatePicker,Input,Table } from 'antd';
import "../../less/apply.less"
import { Link } from 'react-router';
const dataSource = [{
  id: '1',
  name: 'John Brown',
  time: "1212-121321-113",
  obj: 'New York No. 1 Lake Park',
  phone:"1555555555",
  addTime:"4512-46464-46464"
},{
  id: '2',
  name: 'John Brown',
  time: "1212-121321-113",
  obj: 'New York No. 1 Lake Park',
  phone:"1555555555",
  addTime:"4512-46464-46464"
}];

const columns = [{
  title:'序号',
  dataIndex: 'id',
  key: 'id'

}, {
  title: '会诊名称',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '会诊时间',
  dataIndex: 'time',
  key: 'time',
}, {
  title: '所属医院',
  dataIndex: 'obj',
  key: 'obj',
},{
  title:'申请人',
  dataIndex:'people',
  key:'people'
},{
  title: '手机号',
  dataIndex: 'phone',
  key: 'phone',
}, {
  title: '提交时间',
  dataIndex: 'addTime',
  key: 'addTime',
}, {
  title: '操作',
  key: 'action',
  render: (text, record) => (
    <span  key={record.id}>
      <Link to={"apply/editCnsulation?"+record.id}>编辑</Link>
      <Link className="apply_link" to={"apply/editCnsulation?"+record.id}>提交</Link>
      <Link className="apply_link" to="##">删除</Link>
      <Link className="apply_link" to={"apply/editCnsulation?"+record.id}>创建副本</Link>
    </span>
  )
}];

export default class Apply extends Component{
  constructor(props){
    super(props)
  }
  onChange(date, dateString){
    console.log(date, dateString);
  }
  render(){
    return (
      <div>
        <div className="apple_top">
          <h1>
            查询区
            <Button type="primary" className="search_btn1">查询</Button>
          </h1>
          <ul className="search_ul">
            <li>
              <span>会诊名称</span>
              <Input className="search_input" size="large" placeholder="会诊名称" />
            </li>
            <li>
              <span>会诊时间</span>
              <DatePicker size="large" className="search_input" onChange={this.onChange} />
            </li>
            <li>
              <span>申请人</span>
              <Input className="search_input" size="large" placeholder="会诊对象" />
            </li>
            <li>
              <span>所属医院</span>
              <Input className="search_input" size="large" placeholder="所属医院"/>
            </li>
            <li>
              <span>手机号</span>
              <Input className="search_input" size="large" placeholder="手机号" />
            </li>

          </ul>
        </div>
        <div className="apple_bottom">
          <h1>
            列表区
            <Link to="apply/newCnsultation">
              <Button type="primary" className="search_btn2">新增</Button>
            </Link>

          </h1>

          <Table dataSource={dataSource} columns={columns} />
        </div>
      </div>
    )
  }

}
