import React,{Component} from "react"
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.less'
import { Link } from 'react-router';
const SubMenu = Menu.SubMenu;
const jwtDecode = require('jwt-decode');
let q=["6","7","8","9","10","11","12","13","14"];
export default class Left extends Component {
  constructor(props){
    super(props);
    this.state = {
      current: '1',
      openKeys: ['sub1','sub2','sub3','sub4','sub5','sub0'],
      permissions:[]
    };
  }
  componentWillMount(){

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
      console.log(permissions);
      permissions.forEach(function (ele,index) {
        if(q.indexOf(ele)!==-1){
          flag=false
        }
      });
      if(flag){
        alert("您无查看权限!");
        location.href="http://192.168.100.133:8787/#/entrance"
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
          openKeys={this.state.openKeys}
          selectedKeys={[this.state.current]}
          style={{ width: 260 }}
          onOpenChange={this.onOpenChange.bind(this)}
          onClick={this.handleClick.bind(this)}
        >

          {
            this.state.permissions.indexOf("6")!==-1||this.state.permissions.indexOf("7")!==-1||this.state.permissions.indexOf("8")!==-1?<SubMenu key="sub1"  title={<span>申请会诊</span>}>
              {
                this.state.permissions.indexOf("6")!==-1?<Menu.Item key="1" id="6">
                  <a href="#/apply" >
                    申请会诊
                  </a>
                </Menu.Item>:""
              }
              {
                this.state.permissions.indexOf("7")!==-1?<Menu.Item key="2" id="7">
                  <a href="#/apply/daiShen">
                    待审会诊
                  </a>
                </Menu.Item>:""
              }
              {
                this.state.permissions.indexOf("8")!==-1?<Menu.Item key="3" id="8">
                  <a href="#/apply/return/ReturnRecord">
                    被退会诊
                  </a>
                  {/* <span className="red">(2)</span>*/}
                </Menu.Item>:""
              }
            </SubMenu>:""
          }



          {
            this.state.permissions.indexOf("9")!==-1||this.state.permissions.indexOf("10")!==-1||this.state.permissions.indexOf("11")!==-1?<SubMenu key="sub2" title={<span>会诊审核</span>}>
              {
                this.state.permissions.indexOf("9")!==-1?<Menu.Item key="5"  id="9">
                  <a href="#/check/waitCheck/waitCheck">
                    待审会诊
                  </a>
                  {/* <span className="red">(2)</span>*/}
                </Menu.Item>:""
              }
              {
                this.state.permissions.indexOf("10")!==-1?<Menu.Item key="6"  id="10">
                  <a href="#/check/hadReturn/hadReturn">
                    已退会诊
                  </a>
                </Menu.Item>:""
              }
              {
                this.state.permissions.indexOf("11")!==-1?<Menu.Item key="7"  id="11">
                  <a href="#/check/checked/checked">
                    已审会诊
                  </a>
                </Menu.Item>:""
              }
            </SubMenu>:""
          }

          {
            this.state.permissions.indexOf("12")!==-1?<SubMenu key="sub3" title={<span>会诊任务</span>}>
              {
                this.state.permissions.indexOf("12")!==-1? <Menu.Item key="10" id="12">
                  <a href="#/task/consultationTask">
                    会诊任务
                  </a>
                  {/*<span className="red">(2)</span>*/}
                </Menu.Item>:""
              }
            </SubMenu>:""
          }

          {
            this.state.permissions.indexOf("13")!==-1? <SubMenu key="sub4" title={<span>作废会诊</span>}>
              {
                this.state.permissions.indexOf("13")!==-1? <Menu.Item key="11">
                  <a href="#/invalid/invalid"  id="13">
                    作废会诊
                  </a>
                </Menu.Item>:""
              }
            </SubMenu>:""
          }

          {
            this.state.permissions.indexOf("14")!==-1?<SubMenu key="sub5" title={<span>会诊</span>}>
              {
                this.state.permissions.indexOf("14")!==-1?<Menu.Item key="12"  id="14">
                  <a href="#/consulationTables/consulation">
                    会诊总表
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
