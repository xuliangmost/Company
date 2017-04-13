import React,{Component} from "react"
import { Button,Select,Input,Table,Checkbox } from 'antd';
import { Link } from 'react-router';
import axios from "axios";
import "../../less/rolemgmt.less"
const Option = Select.Option;
let token=localStorage.getItem("robertUserName");
export default class EditRolemgmt extends Component{
    constructor(props){
        super(props);


      this.state={
        applyData:{
          name:"",
          danWei:"",
          jueSe:["单击文本域编辑用户","213","单击文本域编421辑用户"],
          beiZhu:""
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
            title: '系统名称',
            dataIndex: 'title',
            key: 'title',
          },
          {
            title: '菜单名称',
            dataIndex: 'startTime',
            key: 'startTime',
          },
          {
            title: '权限',
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
      // this.query(1)
    }
  getMock(){
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 10; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen:0,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  };
  handleChange(targetKeys) {
    this.setState({ targetKeys });
  };
  onOpenChange(openKeys){
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({ openKeys: nextOpenKeys });
  };

  getAncestorKeys(key){
    const map = {
      sub0: ['sub0'],
    };
    return map[key] || [];
  }
  changePage(page){
    this.query(page);
    this.setState({
      current:page
    })
  }
    render(){
      const props = {//上传的事件
        action: '/upload/consultation/',
        headers:{
          "Authorization":"Bearer "+token
        },
        onChange({ file, fileList }) {
          if (file.status !== 'uploading') {


          }
        },
        defaultFileList: [],
      };


      return (
        <div className="doctor_content">

          <h2>编辑角色</h2>
          <h3>
          </h3>
          <ul className="add_hospital">
            <li>
              <span className="name">
                角色名称
              </span>
              <Input className="" size="large" placeholder="角色名称" />
            </li>

           {/* <li className="select_province">
              <span className="name">
                隶属单位
              </span>
              <Input readOnly className="flex2" size="large" placeholder="隶属单位" />
              <Button type="primary" >选择</Button>
            </li>*/}


            {/*<li>
              <span className="name">
                密码
              </span>
              <Input className="" value={this.state.applyData.jueSe.map((ele)=>{
                return ele
              })} type="textarea" rows="8" />
            </li>*/}

            <li>
              <span className="name">
                备注
              </span>
              <Input className="" type="textarea" rows="6" />
            </li>
          </ul>

          <Table pagination={{defaultPageSize:10,showQuickJumper:true,onChange:this.changePage.bind(this),
            total:this.state.total,current:this.state.current }}  rowKey="id" dataSource={this.state.dataSource} columns={this.state.columns} />

          <h3>
          </h3>
          <div className="btn_save">
            <div className="btn_save_index">
              <Button className="save_add_hospital" type="primary">保存</Button>
              <Link to="healthInfo/doctor/doctor">
                <Button type="primary">返回</Button>
              </Link>
            </div>
          </div>
        </div>
      )
    }

}
