import React,{Component} from "react"
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.less'
import { Link } from 'react-router';
import api from "./API"
let serverD=api().serverAdress;
const SubMenu = Menu.SubMenu;
const jwtDecode = require('jwt-decode');
let q=["6","7","8","9","10","11","12","13","14"];
export default class Left extends Component {
  constructor(props){
    super(props);
    this.state = {
      current: '',
      openKeys: ['sub1','sub2','sub3','sub4','sub5','sub0'],
      permissions:[]
    };
  }
  componentWillMount(){

  }
  componentDidMount(){

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
         /* onOpenChange={this.onOpenChange.bind(this)}*/
          onClick={this.handleClick.bind(this)}
        >
            <SubMenu key="sub1"  title={<span>用户中心</span>}>
              <Menu.Item>
                  <a href="#/mine" >
                    个人信息
                  </a>
                </Menu.Item>
              <Menu.Item>
                  <a href="#/check" >
                    信息验证
                  </a>
                </Menu.Item>
            </SubMenu>
        </Menu>
      </div>

    );
  }
}
