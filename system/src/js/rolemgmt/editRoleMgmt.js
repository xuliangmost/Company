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
          roleName:"",
          remarks:"",
          permissionids:"",
          roleId:""
        },
        total:10,
        current:1,
        columns : [
          {
            title:'序号',
            dataIndex: 'permissionId',
            key: 'permissionId',
            render: (text, record, index) => {
              return <span>{index + 1}</span>
            }
          },
          {
            title: '系统名称',
            dataIndex: 'systemName',
            key: 'systemName',
          },
          {
            title: '菜单名称',
            dataIndex: 'menuName',
            key: 'menuName',
          },
          {
            title: '权限',
            dataIndex: 'action',
            key: 'action',
            render: (text, record,index) => (
              <span  key={record.permissionId}>
               {
                 <Checkbox onChange={this.selectPermission.bind(this,record.permissionId)} defaultChecked={this.state.permissionIds.indexOf(record.permissionId.toString())!==-1} />
                }
              </span>
            )
          }
        ],
        dataSource : [],
        permissionIds:[]
      }
    }

    componentDidMount(){
      this.getValue();
    }

    selectPermission(id,e){
      let permissionIds=this.state.permissionIds;
      if(e.target.checked){
        if(permissionIds.indexOf(id.toString())===-1){
          permissionIds.push(id.toString())
        }
      }else{
        if(permissionIds.indexOf(id.toString())!==-1){
          permissionIds.splice(permissionIds.indexOf(id.toString()),1)
        }
      }
    }

  getValue(){
    let that=this;
    axios.request({
      url: '/api/user/role/page',
      method: 'get',
      params:{
        roleId:this.props.params.id.toString()
      },
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(function(response) {
      let permissionIds=response.data.result.permissionids.split(",");
      if(permissionIds[0]==="0"){
        permissionIds=[]
      }
      that.setState({
        applyData:response.data.result,
        permissionIds
      });
      that.getList(1)
    });
  }

  getList(num){
    let that=this;
    axios.request({
      url: '/api/user/permission/pageList',
      method: 'get',
      params:{
        pageSize:10,
        pageNum:num
      },
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

  save(){
    let permissionIds=this.state.permissionIds;
    let applyData=this.state.applyData;
    applyData.permissionids=permissionIds.join(",");
    if(!applyData.permissionids){
      applyData.permissionids="0"
    }
    axios.request({
      url: '/api/user/role/edit',
      method: 'POST',
      data:{
        "roleId":applyData.roleId,
        "roleName":applyData.roleName,
        "remarks":applyData.remarks,
        "permissionIds":applyData.permissionids
      },
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/json'
      },
    }).then(function(response) {
        if(response.data.code===200){
          alert("保存成功，即将跳转!");
          location.hash="/rolemgmt/rolemgmt"
        }
    });
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

  changeRoleName(e){
    let applyData=this.state.applyData;
    applyData.roleName=e.target.value;
    this.setState({
      applyData
    })
  }
  changeRemark(e){
    let applyData=this.state.applyData;
    applyData.remarks=e.target.value;
    this.setState({
      applyData
    })
  }


  changePage(page){
    this.getList(page);
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
              <Input value={this.state.applyData.roleName} onChange={this.changeRoleName.bind(this)} className="" size="large" placeholder="角色名称" />
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
              <Input value={this.state.applyData.remarks} onChange={this.changeRemark.bind(this)} className="" type="textarea" rows="6" />
            </li>
          </ul>

          <Table rowKey="permissionId" pagination={{defaultPageSize:10,showQuickJumper:true,onChange:this.changePage.bind(this),
            total:this.state.total,current:this.state.current }} dataSource={this.state.dataSource} columns={this.state.columns} />

          <h3>
          </h3>
          <div className="btn_save">
            <div className="btn_save_index">
              <Button onClick={this.save.bind(this)} className="save_add_hospital" type="primary">保存</Button>
              <Link to="rolemgmt/rolemgmt">
                <Button type="primary">返回</Button>
              </Link>
            </div>
          </div>
        </div>
      )
    }

}
