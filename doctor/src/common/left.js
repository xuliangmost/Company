import React,{Component} from "react"
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.less'
import { Link } from 'react-router';
import api from "../common/API"
let serverD=api().serverAdress;
const SubMenu = Menu.SubMenu;
const jwtDecode = require('jwt-decode');
let q=["20","21","22","23","24","25","26","27","28","29","30","31","32"];
export default class Left extends Component {
  constructor(props){
    super(props);
    this.state = {
      current: '',
      openKeys: ['sub1','sub2','sub3'],
      permissions:[]
    };
  }
  componentDidMount(){
    if(localStorage.getItem('robertUserName')){
      const bearer = localStorage.getItem('robertUserName');
      let decoded = jwtDecode(bearer);
      let permissions = decoded.permissions;
      this.setState({
        permissions
      });
      let flag=true;
      permissions.forEach(function (ele,index) {
        if(q.indexOf(ele)!==-1){
          flag=false
        }
      });
      if(flag){
        alert("您无查看权限!");
        location.href=serverD+"/#/entrance"
      }
    }
  }
  handleClick (e)  {
    this.setState({ current: e.key });
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
  render() {
    return (
      <div className="left">
        <Menu
          mode="inline"
          defaultOpenKeys={this.state.openKeys}
          selectedKeys={[this.state.current]}
          style={{ width: 260 }}
          /*onOpenChange={this.onOpenChange.bind(this)}*/
          onClick={this.handleClick.bind(this)}
        >
          {
            this.state.permissions.indexOf("223") !== -1 || this.state.permissions.indexOf("23") !== -1 || this.state.permissions.indexOf("24") !== -1 || this.state.permissions.indexOf("25") !== -1 || this.state.permissions.indexOf("26") !== -1 || this.state.permissions.indexOf("27") !== -1 ?<SubMenu key="sub1" title={<span>健康档案</span>}>
              {
                this.state.permissions.indexOf("223")!==-1?<Menu.Item key="1"  id="223">
                  <a href="#">
                    体检档案
                  </a>
                </Menu.Item>:""
              }
              {
                this.state.permissions.indexOf("23")!==-1? <Menu.Item key="2" id="23">
                  <a href="#">
                    门诊档案
                  </a>
                </Menu.Item>:""
              }

              {
                this.state.permissions.indexOf("24")!==-1? <Menu.Item key="3" id="24">
                  <a href="#">
                    住院档案
                  </a>
                </Menu.Item>:""
              }
              {
                this.state.permissions.indexOf("25")!==-1? <Menu.Item key="4" id="25">
                  <a href="#">
                    康复档案
                  </a>
                </Menu.Item>:""
              }
              {
                this.state.permissions.indexOf("25")!==-1? <Menu.Item key="5" id="26">
                  <a href="#">
                    随访档案
                  </a>
                </Menu.Item>:""
              }
              {
                this.state.permissions.indexOf("27")!==-1? <Menu.Item key="6" id="27">
                  <a href="#">
                    动态监护
                  </a>
                </Menu.Item>:""
              }
            </SubMenu>:""
          }



          {
            this.state.permissions.indexOf("22") !== -1 || this.state.permissions.indexOf("20") !== -1 || this.state.permissions.indexOf("21") !== -1 || this.state.permissions.indexOf("28") !== -1 || this.state.permissions.indexOf("29") !== -1 || this.state.permissions.indexOf("30") !== -1? <SubMenu key="sub2" title={<span>医疗资源</span>}>
                {
                  this.state.permissions.indexOf("20")!==-1?<Menu.Item key="7"  id="20">
                    <a href="#/healthInfo/hospital/hospital">
                      医院信息
                    </a>
                  </Menu.Item>:""
                }
              {
                this.state.permissions.indexOf("22")!==-1?<Menu.Item key="222"  id="22">
                  <a href="#/healthInfo/department/department">
                    科室信息
                  </a>
                </Menu.Item>:""
              }
                {
                  this.state.permissions.indexOf("21")!==-1?<Menu.Item key="8" id="21">
                    <a href="#/healthInfo/doctor/doctor">
                      医生信息
                    </a>
                  </Menu.Item>:""
                }
                {
                  this.state.permissions.indexOf("28")!==-1? <Menu.Item key="9"  id="28">
                    <a href="#">
                      医学助理
                    </a>
                  </Menu.Item>:""
                }
                {
                  this.state.permissions.indexOf("29")!==-1?<Menu.Item key="10" id="29">
                    <a href="#">
                      医生团队
                    </a>
                  </Menu.Item>:""
                }


              {
                this.state.permissions.indexOf("30")!==-1?<Menu.Item key="11" id="30">
                  <a href="#">
                    健康机构
                  </a>
                </Menu.Item>:""
              }
            </SubMenu>:""
          }

          {
            this.state.permissions.indexOf("31")!==-1||this.state.permissions.indexOf("32")!==-1?<SubMenu key="sub3" title={<span>资金流水</span>}>
                {
                  this.state.permissions.indexOf("31")!==-1?<Menu.Item key="12" id="31">
                    <a href="#">
                      消费流水
                    </a>
                  </Menu.Item>:""
                }
                {
                  this.state.permissions.indexOf("32")!==-1?<Menu.Item key="13" id="32">
                    <a href="#">
                      充值流水
                    </a>
                  </Menu.Item>:""
                }
            </SubMenu>:""

          }






        </Menu>
      </div>

    );
  }
}
