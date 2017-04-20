import React,{Component} from "react"
import { Button,Select,Tree ,Input } from 'antd';
import { Link } from 'react-router';
import axios from "axios";
import "../../../less/editHospital.less"
import tools from "../../../tools/checked"
const Option = Select.Option;
const TreeNode = Tree.TreeNode;
let token=localStorage.getItem("robertUserName");
export default class SelectDepartment extends Component{
    constructor(props){
        super(props);
      this.state={
        sa:false
      }
    }

    componentDidMount(){


    }

  onSelect(selectedKeys, info){
    console.log('selected', selectedKeys, info);
  }
  onCheck(checkedKeys, info){
    console.log(checkedKeys, info);
  }

    render(){
      return (
        <div>
          <Tree
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

          </div>
        </div>
      )
    }

}
