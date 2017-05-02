import React,{Component} from "react"
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.less'
import { Link } from 'react-router';
const jwtDecode = require('jwt-decode');
const SubMenu = Menu.SubMenu;
let q=["1","2","3","4","5",];
export default class Left extends Component {
  constructor(props){
    super(props);
    this.state = {
      current: '1',
      openKeys: ['sub1'],
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
      console.log(decoded)
      console.log(permissions);
      permissions.forEach(function (ele,index) {
        if(q.indexOf(ele)!==-1){
          flag=false
        }
      });
      if(flag){
        alert("您无查看权限!");
        location.href="https://shipin1.ycsjjqr.cn/#/entrance"
      }
    }
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
          defaultOpenKeys={this.state.openKeys}
          selectedKeys={[this.state.current]}
          style={{ width: 260 }}
          /*onOpenChange={this.onOpenChange.bind(this)}*/
          onClick={this.handleClick.bind(this)}
        >

          {
            this.state.permissions.indexOf("1")!==-1||this.state.permissions.indexOf("2")!==-1||this.state.permissions.indexOf("3")!==-1||this.state.permissions.indexOf("4")!==-1||this.state.permissions.indexOf("5")!==-1?<SubMenu key="sub1" title={<span>系统管理</span>}>

              {
                this.state.permissions.indexOf("1")!==-1?<Menu.Item key="1" id="1">
                  <a href="#/usrmgmt/usrmgmt">
                    系统用户
                  </a>
                </Menu.Item>:""
              }
              {
                this.state.permissions.indexOf("2")!==-1?<Menu.Item key="2" id="2">
                  <a href="#/rolemgmt/rolemgmt">
                    系统角色
                  </a>
                </Menu.Item>:""
              }
              {
                this.state.permissions.indexOf("3")!==-1?<Menu.Item key="3" id="3">
                  <a href="#/memuauthority/memuauthority">
                    系统&菜单权限
                  </a>
                </Menu.Item>:""
              }
              {
                this.state.permissions.indexOf("4")!==-1?<Menu.Item key="4" id="4">
                  <a href="#">
                    组织架构
                  </a>
                </Menu.Item>:""
              }
              {
                this.state.permissions.indexOf("5")!==-1?<Menu.Item key="5" id="5">
                  <a href="#">
                    系统日志
                  </a>
                </Menu.Item>:""
              }

              {/*<Menu.Item key="6" id="1">
               <a href="#">
               系统参数
               </a>
               </Menu.Item>
               <Menu.Item key="7" id="1">
               <a href="#">
               系统日志
               </a>
               </Menu.Item>*/}
            </SubMenu>:""
          }




        </Menu>
      </div>

    );
  }
}
