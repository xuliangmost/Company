import React,{Component} from "react"
import { Button,Table,Checkbox  } from 'antd';
import { Link } from 'react-router';
import axios from "axios";
import "../../less/rolemgmt.less"
let token=localStorage.getItem("robertUserName");
export default class MenuAuthorization extends Component{
    constructor(props){
        super(props);


      this.state={
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
            title: '角色名称',
            dataIndex: 'title',
            key: 'title',
          },
          {
            title: '访问权限',
            dataIndex: 'username',
            key: 'username',
            render: (text, record,index) => (
              <span  key={record.id}>
                 {
                   record.username?<Checkbox defaultChecked={true} />:<Checkbox />
                 }
              </span>
            )
          },
          {
            title: '操作权限',
            dataIndex: 'phone',
            key: 'phone',
            render: (text, record,index) => (
              <span  key={record.id}>
                {
                  record.phone?<Checkbox defaultChecked={true} />:<Checkbox />
                }
              </span>
            )
          }
        ],
        dataSource : [
          {
            id:"1",
            title:"1",
            startTime:"1",
            username:0,
            phone:0,
          },
          {
            id:"2",
            title:"1",
            startTime:"1",
            username:1,
            phone:1,
          }
        ]
      }
    }

    componentDidMount(){

    }


  changePage(page){
    this.query(page);
    this.setState({
      current:page
    })
  }



    render(){


      return (
        <div className="doctor_content">

          <h2>菜单权限角色授权</h2>
          <h3>
          </h3>



          <Table pagination={{defaultPageSize:10,showQuickJumper:true,onChange:this.changePage.bind(this),
            total:this.state.total,current:this.state.current }}  rowKey="id" dataSource={this.state.dataSource} columns={this.state.columns} />


          <h3>
          </h3>
          <div className="btn_save">
            <div className="btn_save_index">
              <Button className="save_add_hospital" type="primary">保存</Button>
              <Link to="memuauthority/memuauthority">
                <Button type="primary">返回</Button>
              </Link>
            </div>
          </div>
        </div>
      )
    }

}
