import React,{Component} from "react"
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.less'
import { Link } from 'react-router';
const SubMenu = Menu.SubMenu;
export default class Left extends Component {
  constructor(props){
    super(props);
    this.state = {
      current: '1',
      openKeys: [],
    };
  }

  handleClick (e)  {
    console.log('Clicked: ', e);
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
          openKeys={this.state.openKeys}
          selectedKeys={[this.state.current]}
          style={{ width: 260 }}
          onOpenChange={this.onOpenChange.bind(this)}
          onClick={this.handleClick.bind(this)}
        >
          <SubMenu key="sub1" title={<span>健康档案</span>}>
            <Menu.Item key="1">
              <a href="#">
                体检档案
              </a>
            </Menu.Item>
            <Menu.Item key="2">
              <a href="#">
                门诊档案
              </a>
            </Menu.Item>
            <Menu.Item key="3">
              <a href="#">
                住院档案
              </a>
            </Menu.Item>
            <Menu.Item key="4">
              <a href="#">
                康复档案
              </a>
            </Menu.Item>
            <Menu.Item key="5">
              <a href="#">
                随访档案
              </a>
            </Menu.Item>
            <Menu.Item key="6">
              <a href="#">
                动态监护
              </a>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span>医疗资源</span>}>
            <Menu.Item key="7">
              <a href="#/healthInfo/hospital/hospital">
                医院信息
              </a>
            </Menu.Item>
            <Menu.Item key="8">
              <a href="#/healthInfo/doctor/doctor">
                医生信息
              </a>
            </Menu.Item>
            <Menu.Item key="9">
              <a href="#">
                医学助理
              </a>
            </Menu.Item>
            <Menu.Item key="10">
              <a href="#">
                医生团队
              </a>
            </Menu.Item>
            <Menu.Item key="11">
              <a href="#">
                健康机构
              </a>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span>资金流水</span>}>
            <Menu.Item key="12">
              <a href="#">
                消费流水
              </a>
            </Menu.Item>
            <Menu.Item key="13">
              <a href="#">
                充值流水
              </a>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>

    );
  }
}
