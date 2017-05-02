import React,{Component} from "react"
import { Button,Select,Input,Table } from 'antd';
import { Link } from 'react-router';
import "../../../less/hospital.less"
import axios from "axios";
import api from "../../../common/API"
let serverD=api().serverAdress;
const Option = Select.Option;

let token=localStorage.getItem("robertUserName");
export default class Apply extends Component{
    constructor(props){
        super(props);


      this.state={
        applyPage:{
          pageSize:10,
          name:null,
          level:null,
          linkman:null,
          linkmanPhone:null,
          province:null,
          city:null,
          county:null
        },
        province:[],
        levels:[],
        city:[],
        county:[],
        selectCity:"",
        selectCountry:"",
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
          title: '医院名称',
          dataIndex: 'name',
          key: 'name',
          },
          {
          title: '等级',
          dataIndex: 'level',
          key: 'level',
          },
          {
          title: '所在地（省-市-县）',
          dataIndex: 'location',
          key: 'location',
          },
          {
            title: '联系人',
            dataIndex: 'linkman',
            key: 'linkman',
          },
          {
            title: '联系电话',
            dataIndex: 'linkmanPhone',
            key: 'linkmanPhone',
          },
          {
            title: '操作',
            key: 'action',
            render: (text, record,index) => (
              <span  key={record.id}>
              <Link to={"healthInfo/hospital/editHospital/"+record.id}>编辑</Link>
            </span>
            )
          }
        ],
        dataSource : []
      }
    }

    componentDidMount(){
      this.query(1)
    }


    changePage(page){
      this.query(page);
      this.setState({
        current:page
      })
    }


    query(num){
      let that=this;
      let applyPage=this.state.applyPage;
      applyPage.pageNum=num;
      axios.request({
        url: '/api/user/hospital/pageList',
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
        });
        //获取医院等级
        that.getLevel();
        //获取省
        that.getProvince()
      });
    }
    getLevel(){
      let that=this;
      axios.request({
        url: '/api/user/hospital/level',
        method: 'get',
        headers: {
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        },
      }).then(function(response) {
        that.setState({
          levels:response.data.result
        })
      });
    }

  getProvince(){
    let that=this;
    axios.request({
      url: '/api/user/hospital/province',
      method: 'get',
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(function(response) {
      that.setState({
        province:response.data.result
      })
    });
  }
    getCity(id){
      let that=this;
      axios.request({
        url: '/api/user/hospital/city',
        method: 'get',
        params:{
          provinceId:id
        },
        headers: {
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        },
      }).then(function(response) {
        that.setState({
          city:response.data.result
        })
      });
    }
    getCountry(id){
      let that=this;
      axios.request({
        url: '/api/user/hospital/county',
        method: 'get',
        params:{
          cityId:id
        },
        headers: {
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        },
      }).then(function(response) {
        that.setState({
          county:response.data.result
        })
      });
    }

    changeName(e){
        let applyPage=this.state.applyPage;
        applyPage.name=e.target.value;
        this.setState({
          applyPage
        })
    }
    changeLevel(value){
      let applyPage=this.state.applyPage;
      applyPage.level=Number(value);
      this.setState({
        applyPage
      })
    }
    changeLinkman(e){
      let applyPage=this.state.applyPage;
      applyPage.linkman=e.target.value;
      this.setState({
        applyPage
      })
    }
    changeLinkmanPhone(e){
      let applyPage=this.state.applyPage;
      applyPage.linkmanPhone=e.target.value;
      this.setState({
        applyPage
      })
    }
    changeProvince(value){
      let applyPage=this.state.applyPage;
      applyPage.province=Number(value);
      applyPage.city=null;
      applyPage.county=null;
      this.getCity(Number(value));
      this.setState({
        applyPage,
        selectCity:"",
        selectCountry:""
      })
    }
    changeCity(value){
      let city=this.state.city.filter(function (ele) {
        return ele.cityId==Number(value)
      });
      let applyPage=this.state.applyPage;
      console.log(city)
      applyPage.city=Number(value);
      this.getCountry(Number(value));
      this.setState({
        applyPage,
        selectCity:city[0].cityName,
        selectCountry:""
      })
    }
    changeCounty(value){
      let country=this.state.county.filter(function (ele) {
        return ele.countyId==Number(value)
      });
      let applyPage=this.state.applyPage;
      applyPage.county=Number(value);
      this.setState({
        applyPage,
        selectCountry:country[0].countyName
      })
    }
    render(){
      return (
        <div>
          <div className="apple_top">
          <h1>
            医院信息查询区
            <Button type="primary" onClick={()=>this.query(1)} className="search_btn1">查询</Button>
          </h1>
          <ul className="search_ul">
            <li>
              <span className="most_flex">医院名称</span>
              <Input onChange={this.changeName.bind(this)} className="search_input" size="large" placeholder="医院名称" />
            </li>
            <li>
              <span className="most_flex">等级</span>
              <Select  onChange={this.changeLevel.bind(this)} optionFilterProp="children" className="search_input"  defaultValue="请选择">
                {
                  this.state.levels.map((ele,index)=>{
                    return  (<Option key={index} value={ele.levelId.toString()}>{ele.levelName}</Option>)
                  })
                }
              </Select>
            </li>
            <li>
              <span className="most_flex">联系人</span>
              <Input  onChange={this.changeLinkman.bind(this)}  className="search_input" size="large" placeholder="联系人" />
            </li>
            <li>
              <span className="most_flex">电话</span>
              <Input  onChange={this.changeLinkmanPhone.bind(this)}  className="search_input" size="large" placeholder="电话" />
            </li>
          </ul>


          <ul className="search_ul">
            <li>
              <span className=" flex_padding">省</span>
              <Select  onChange={this.changeProvince.bind(this)} optionFilterProp="children" className="search_input"  defaultValue="请选择">
                {
                  this.state.province.map((ele,index)=>{
                    return  (<Option key={index} value={ele.provinceId.toString()}>{ele.provinceName}</Option>)
                  })
                }
              </Select>
            </li>
            <li>
              <span className="most_flex">市</span>
              <Select  onChange={this.changeCity.bind(this)} optionFilterProp="children" className="search_input"  value={this.state.selectCity}>
                {
                  this.state.city.map((ele,index)=>{
                    return  (<Option key={index} value={ele.cityId.toString()}>{ele.cityName}</Option>)
                  })
                }
              </Select>
            </li>
            <li>
              <span className=" flex_padding">县</span>
              <Select  onChange={this.changeCounty.bind(this)} optionFilterProp="children" className="search_input"  value={this.state.selectCountry}>
                {
                  this.state.county.map((ele,index)=>{
                    return  (<Option key={index} value={ele.countyId.toString()}>{ele.countyName}</Option>)
                  })
                }


              </Select>
            </li>
            <li>
            </li>
          </ul>


          </div>
          <div className="apple_bottom">
            <h1 className="most_h1">
              列表区
              <Link to="healthInfo/hospital/addHospital">
                <Button type="primary"  className="search_btn2">新增</Button>
              </Link>

            </h1>

            <Table pagination={{defaultPageSize:10,showQuickJumper:true,onChange:this.changePage.bind(this),
              total:this.state.total,current:this.state.current }}  rowKey="id" dataSource={this.state.dataSource} columns={this.state.columns} />
          </div>
        </div>
      )
    }

}
