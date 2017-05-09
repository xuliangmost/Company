import React, {Component} from "react"
import {Table, Select, Tree, Input} from 'antd';
import axios from "axios";
import "../../../less/editHospital.less"
import tools from "../../../tools/checked"
import api from "../../../common/API"
let serverD = api().serverAdress;
const Option = Select.Option;
const TreeNode = Tree.TreeNode;
let token = localStorage.getItem("robertUserName");
export default class SelectDepartment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sa: false,
      dataSource: [
        {
          id: '0',
          name: '清华医院',
          name2: '-',
          level: 0
        }
      ],
      columns: [
        {
          title: '序号',
          dataIndex: 'id',
          key: 'id',
          render: (text, record, index) => {
            return <span>{index + 1}</span>
          },
          width:'20%'
        },
        {
          title: '机构名称',
          dataIndex: 'name',
          key: 'name',
          render :(text)=>{
            return <span>
              {
                text?text:<Input />
              }
            </span>
          },
          width:'20%'
        },
        {
          title: '父级机构',
          dataIndex: 'name2',
          key: 'name2',
          width:'20%'
        },
        {
          title: '等级',
          dataIndex: 'level',
          key: 'level',
          width:'20%'
        },
        {
          title: '操作',
          key: 'action',
          render: (record) => (
            <span key={record.id}>
                {
                  record.level === 0 ? <a onClick={this.addSome.bind(this)}>添加科室</a> : record.level === 0 ?
                    <a onClick={this.addSome.bind(this)}>添加科室</a> : ""
                }
            </span>
          ),
          width:'20%'
        }
      ],
    }
  }

  componentDidMount() {


  }

  addSome() {

  }

  onSelect(selectedKeys, info) {
    console.log('selected', selectedKeys, info);
  }

  onCheck(checkedKeys, info) {
    console.log(checkedKeys, info);
  }

  render() {
    return (
      <div>
        {/*<Tree
         checkable
         onCheck={this.onCheck}
         checkStrictly={true}
         defaultExpandAll
         >
         {
         this.state.sa?<TreeNode title="parent 1" key="0-0">
         <TreeNode title="parent 1-0" key="0-0-0" >
         <TreeNode title="leaf" key="0-0-0-0"  />
         <TreeNode title="leaf" key="0-0-0-1" />
         </TreeNode>
         <TreeNode title="parent 1-1" key="0-0-1">
         <TreeNode title={<span style={{ color: '#08c' }}>sss</span>} key="0-0-1-0" />
         </TreeNode>
         </TreeNode>:<TreeNode title="parent 3" key="0-0">
         <TreeNode title="parent 123-0" key="0123" >
         <TreeNode title="leaf" key="0-23-0"  />
         <TreeNode title="leaf" key="0-1230-1" />
         </TreeNode>
         <TreeNode title="parent 1-1" key="0-0-1">
         <TreeNode title={<span style={{ color: '#08c' }}>sss</span>} key="0-0-1-0" />
         </TreeNode>
         </TreeNode>
         }
         </Tree>
         <ul className="add_hospital">
         <li>
         <Input className="flex2" size="large" placeholder="请输入要添加的科室名称" />
         <Button className="name" type="primary">保存科室</Button>
         </li>
         </ul>

         <div>

         </div>*/}

        <Table rowKey="id" dataSource={this.state.dataSource} columns={this.state.columns}/>

      </div>
    )
  }

}
