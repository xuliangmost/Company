import React,{Component} from "react"
import { Button,Select,Input,Menu,Transfer } from 'antd';
import { Link } from 'react-router';
import "../../less/memuauthority.less"
import axios from "axios";
const Option = Select.Option;

let token=localStorage.getItem("robertUserName");
export default class EditMemuauthority extends Component{
    constructor(props){
        super(props);
      this.state={
        applyPage:{
          pageSize:10,
          consultationName:"",
          username:"",
          phone:"",
          status:"1",
          startTime:""
        },
        mockData:[],
        targetKeys:[]
      }
    }

    componentDidMount(){

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

    query(num){
      let that=this;
      let applyPage=this.state.applyPage;
      applyPage.pageNum=num;
      axios.request({
        url: '/api/conference/applyPageList',
        method: 'get',
        params:applyPage,
        headers: {
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        },
      }).then(function(response) {
        let dataSource=response.data.result?response.data.result.data:[];
        that.setState({
          dataSource:dataSource,
          total:response.data.result.count
        })
      });
    }
    render(){
      return (
          <div className="edit_menu">
              <Transfer
                className="edit_menu_transfer"
                dataSource={this.state.mockData}
                showSearch
                listStyle={{
                  width: 360,
                  height: 720,
                }}
                operations={['加入', '移除']}
                targetKeys={this.state.targetKeys}
                onChange={this.handleChange.bind(this)}
                render={item => `${item.title}-${item.description}`}
              />
            <div className="role_save">
              <div className="btn_save_index">
                <Button className="save_add_hospital" type="primary">确定</Button>
                <Button type="primary">返回</Button>

              </div>
            </div>
          </div>

      )
    }

}
