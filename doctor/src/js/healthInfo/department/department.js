/**
 * Created by Administrator on 2017/5/11.
 */
import React,{Component} from "react"
import { Button,Select,Input,message } from 'antd';
import { Link } from 'react-router';
import axios from "axios";
import "../../../less/editHospital.less"
import SelectDepartment from "../hospital/selectDepartment"
import tools from "../../../tools/checked"
const Option = Select.Option;
let token=localStorage.getItem("robertUserName");
export default class AddHospital extends Component{
  render(){
    return (
      <div>
        <h2>
          添加科室
        </h2>
        <h3>
        </h3>
        <SelectDepartment hospitalId={this.props.params.id}/>
        <div className="btn_save">
          <div className="btn_save_index">
            {/*<Button onClick={this.saveMsg.bind(this)} className="save_add_hospital" type="primary">保存</Button>*/}
            {/*<Link to="healthInfo/hospital/hospital">*/}
              {/*<Button type="primary">返回</Button>*/}
            {/*</Link>*/}
          </div>
        </div>
      </div>
    )
  }
}
