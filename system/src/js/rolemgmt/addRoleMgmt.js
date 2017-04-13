import React,{Component} from "react"
import { Button,Select,Input,Menu,Transfer,Table,Checkbox } from 'antd';
import { Link } from 'react-router';
import axios from "axios";
import "../../less/rolemgmt.less"
const Option = Select.Option;
let token=localStorage.getItem("robertUserName");
const SubMenu = Menu.SubMenu;
export default class AddRolemgmt extends Component{
    constructor(props){
        super(props);


      this.state={
        applyData:{
          name:"",
          danWei:"",
          jueSe:["单击文本域编辑用户"],
          beiZhu:""
        },
        /*showMore:false,
        current: '1',
        openKeys: [],
        mockData: [],
        targetKeys: [],*/
        total:10,
        current:1,
        columns : [
          {
            title:'序号',
            dataIndex: 'id',
            key: 'id',
            render: (text, record, index) => {
              return <span>{index + 1}</span>
            }
          },
          {
            title: '系统名称',
            dataIndex: 'title',
            key: 'title',
          },
          {
            title: '菜单名称',
            dataIndex: 'startTime',
            key: 'startTime',
          },
          {
            title: '权限',
            dataIndex: 'phone',
            key: 'phone',
            render: (text, record,index) => (
              <span  key={record.id}>
                {
                  record.phone?<Checkbox defaultChecked={true} />:<Checkbox />
                }
              </span>
            )
          }
        ],
        dataSource : [
          {
            id:"1",
            title:"1",
            startTime:"1",
            username:0,
            phone:0,
          },
          {
            id:"2",
            title:"1",
            startTime:"1",
            username:1,
            phone:1,
          }
        ]
      }
    }

    componentDidMount(){
      //this.getMock();
    }
    getMock(){
      const targetKeys = [];
      const mockData = [];
      for (let i = 0; i < 10; i++) {
        const data = {
          key: i.toString(),
          title: `content${i + 1}`,
          description: `description of content${i + 1}`,
          chosen:0,
        };
        if (data.chosen) {
          targetKeys.push(data.key);
        }
        mockData.push(data);
      }
      this.setState({ mockData, targetKeys });
    };
    handleChange(targetKeys) {
      this.setState({ targetKeys });
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
    showMore(){
      this.setState({
        showMore:true
      })
    }

    closeTransfer(){
        this.setState({
          showMore:false
        })
    }

  changePage(page){
    this.query(page);
    this.setState({
      current:page
    })
  }
    render(){
      let style={"height":document.body.offsetHeight-70};
      const props = {//上传的事件
        action: '/upload/consultation/',
        headers:{
          "Authorization":"Bearer "+token
        },
        onChange({ file, fileList }) {
          if (file.status !== 'uploading') {


          }
        },
        defaultFileList: [],
      };


      return (

        <div className="doctor_content">
          <h2>新增角色</h2>
          <h3>
          </h3>
          <ul className="add_hospital">
            <li>
              <span className="name">
                角色名称
              </span>
              <Input className="" size="large" placeholder="角色名称" />
            </li>

           {/* <li className="select_province">
              <span className="name">
                隶属单位
              </span>
              <Input readOnly className="flex2" size="large" placeholder="隶属单位" />
              <Button type="primary" >选择</Button>
            </li>*/}
            {/*<li>*/}
              {/*<span className="name">*/}
                {/*角色用户*/}
              {/*</span>*/}
              {/*<Input className="" onClick={this.showMore.bind(this)} value={this.state.applyData.jueSe.map((ele)=>{*/}
                  {/*return ele*/}
                {/*})} type="textarea" rows="8" />*/}
            {/*</li>*/}
            <li>
              <span className="name">
                备注
              </span>
              <Input className="" type="textarea" rows="6" />
            </li>
          </ul>
          <Table pagination={{defaultPageSize:10,showQuickJumper:true,onChange:this.changePage.bind(this),
            total:this.state.total,current:this.state.current }}  rowKey="id" dataSource={this.state.dataSource} columns={this.state.columns} />
          <h3>
          </h3>
          <div className="btn_save">
            <div className="btn_save_index">
              <Button className="save_add_hospital" type="primary">保存</Button>
              <Link to="rolemgmt/rolemgmt">
                <Button type="primary">返回</Button>
              </Link>
            </div>
          </div>






          {
            this.state.showMore?
            <div style={style} className="showMore">
              <div className="showMore_child">
                <p className="tree_name">组织机构树</p>
                  <Menu
                    mode="inline"
                  openKeys={this.state.openKeys}
                  selectedKeys={[this.state.current]}
                    style={{ width: 300 }}
                    onOpenChange={this.onOpenChange.bind(this)}
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
                        <a href="#">
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


              <div className="showMore_child1">
                <Transfer
                  className="showMore_transfer"
                  dataSource={this.state.mockData}
                  showSearch
                  listStyle={{
                    width: 260,
                    height: 720,
                  }}
                  operations={['加入', '移除']}
                  targetKeys={this.state.targetKeys}
                  onChange={this.handleChange.bind(this)}
                  render={item => `${item.title}-${item.description}`}
                />

              </div>


              <div className="role_save">
                <div className="btn_save_index">
                  <Button className="save_add_hospital" type="primary">确定</Button>
                  <Button onClick={this.closeTransfer.bind(this)} type="primary">返回</Button>

                </div>
              </div>
            </div>:""
          }

        </div>
      )
    }

}
