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
          <SubMenu key="sub1" title={<span>系统管理</span>}>
            <Menu.Item key="1">
              <a href="#/usrmgmt/usrmgmt">
                系统用户
              </a>
            </Menu.Item>
            <Menu.Item key="2">
              <a href="#/rolemgmt/rolemgmt">
                系统角色
              </a>
            </Menu.Item>
            <Menu.Item key="3">
              <a href="#/memuauthority/memuauthority">
                系统&菜单权限
              </a>
            </Menu.Item>
            <Menu.Item key="4">
              <a href="#">
                组织架构
              </a>
            </Menu.Item>
            <Menu.Item key="5">
              <a href="#">
                权限清单
              </a>
            </Menu.Item>
            <Menu.Item key="6">
              <a href="#">
                系统参数
              </a>
            </Menu.Item>
            <Menu.Item key="7">
              <a href="#">
                系统日志
              </a>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>

    );
  }
}
