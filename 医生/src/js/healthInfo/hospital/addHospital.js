import React,{Component} from "react"
import { Button,Select,Input,Table } from 'antd';
import { Link } from 'react-router';
import axios from "axios";
import "../../../less/editHospital.less"
const Option = Select.Option;
let token=localStorage.getItem("robertUserName");
export default class AddHospital extends Component{
    constructor(props){
        super(props);


      this.state={

      }
    }

    componentDidMount(){
      // this.query(1)
    }



    render(){
      return (
        <div>
            <h2>新增医院</h2>
            <h3>
            </h3>
          <ul className="add_hospital">
            <li>
              <span className="name">
                医院名称
              </span>
              <Input className="" size="large" placeholder="医院名称" />
            </li>

            <li className="select_province">
              <span className="name">
                医院等级
              </span>
              <Select optionFilterProp="children" className="flex2"  defaultValue="-请选择-">
                <Option value="0">-请选择-</Option>
                <Option value="1">特甲</Option>

              </Select>
              <span className="name">
              </span>

            </li>

            <li className="select_province">
              <span className="name">
                省
              </span>
              <Select optionFilterProp="children" className="flex2"  defaultValue="-请选择-">
                <Option value="0">-请选择-</Option>
                <Option value="1">特甲</Option>

              </Select>
              <span className="name">
              </span>

            </li>


            <li className="select_province">
              <span className="name">
                市
              </span>
              <Select optionFilterProp="children" className="flex2"  defaultValue="-请选择-">
                <Option value="0">-请选择-</Option>
                <Option value="1">特甲</Option>

              </Select>
              <span className="name">
              </span>

            </li>


            <li className="select_province">
              <span className="name">
                县
              </span>
              <Select optionFilterProp="children" className="flex2"  defaultValue="-请选择-">
                <Option value="0">-请选择-</Option>
                <Option value="1">特甲</Option>

              </Select>
              <span className="name">
              </span>

            </li>

            <li>
              <span className="name">
                联系人地址
              </span>
              <Input className="" size="large" placeholder="联系人地址" />
            </li>

            <li>
              <span className="name">
                邮编
              </span>
              <Input className="flex2" size="large" placeholder="邮编" />
              <span className="name">
              </span>
            </li>


            <li>
              <span className="name">
                联系人
              </span>
              <Input className="flex2" size="large" placeholder="联系人" />
              <span className="name">
              </span>
            </li>


            <li>
              <span className="name">
                电话
              </span>
              <Input className="flex2" size="large" placeholder="电话" />
              <span className="name">
              </span>
            </li>

            <li>
              <span className="name">
                介绍
              </span>
              <Input className="" type="textarea" rows={4} />
            </li>

            <li>
              <span className="name">
                备注
              </span>
              <Input className="" type="textarea" rows={3} />
            </li>
          </ul>


          <h3>
          </h3>

          <div className="btn_save">
            <div className="btn_save_index">
              <Button className="save_add_hospital" type="primary">保存</Button>
              <Link to="apply/daiShen">
                <Button type="primary">返回</Button>
              </Link>
            </div>
          </div>
        </div>
      )
    }

}
