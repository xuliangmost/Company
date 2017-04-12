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
          <SubMenu key="sub1" title={<span>申请会诊</span>}>
            <Menu.Item key="1">
              <a href="#/apply">
                申请会诊
              </a>
            </Menu.Item>
            <Menu.Item key="2">
              <a href="#/apply/daiShen">
                待审会诊
              </a>
            </Menu.Item>
            <Menu.Item key="3">
              <a href="#/apply/return/ReturnRecord">
                被退会诊
              </a>
              <span className="red">(2)</span>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span>会诊审核</span>}>
            <Menu.Item key="5">
              <a href="#/check/waitCheck/waitCheck">
                待审会诊
              </a>
              <span className="red">(2)</span></Menu.Item>
            <Menu.Item key="6">
              <a href="#/check/hadReturn/hadReturn">
                已退会诊
              </a>
            </Menu.Item>
            <Menu.Item key="7">
              <a href="#/check/checked/checked">
                已审会诊
              </a>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span>会诊任务</span>}>
            <Menu.Item key="10">
              <a href="#/task/consultationTask">
                会诊任务
              </a>
              <span className="red">(2)</span></Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title={<span>作废会诊</span>}>
            <Menu.Item key="11">
              <a href="#/invalid/invalid">
                作废会诊
              </a>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub5" title={<span>会诊</span>}>
            <Menu.Item key="12">
              <a href="#/consulationTables/consulation">
                会诊总表
              </a>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>

    );
  }
}
