import React,{Component} from "react"
import { Button,Select,Input,Table } from 'antd';
import { Link } from 'react-router';
import axios from "axios";
import "../../../less/editHospital.less"
import tools from "../../../tools/checked"
const Option = Select.Option;
let token=localStorage.getItem("robertUserName");
export default class AddHospital extends Component{
  constructor(props){
    super(props);
    this.state={
      applyPage:{
        name:"",
        level:"",
        linkman:"",
        linkmanPhone:null,
        province:"",
        city:"",
        county:"",
        address:null,
        zipCode:null,
        content:null,
        remarks:null,
        a:"",
        b:"",
        c:"",
        d:"",
      },
      init:true,
      province:[],
      levels:[],
      city:[],
      county:[],
      selectLevel:"",
      selectCity:"",
      selectProvince:"",
      selectCountry:"",
    }
  }

  componentDidMount(){
    this.getValue()
  }

  getValue(){
    let that=this;
    axios.request({
      url: '/api/user/hospital/page',
      method: 'get',
      params:{
        id:this.props.params.id.toString()
      },
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(function(response) {
      that.setState({
        applyPage:response.data.result,
        selectCity:response.data.result.c,
        selectProvince:response.data.result.b,
        selectCountry:response.data.result.d,
        selectLevel:response.data.result.a,
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
      });
      if(that.state.init){
        that.getCity(that.state.applyPage.province)
      }
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
      });
      if(that.state.init){
        that.getCountry(that.state.applyPage.city);
        that.setState({
          init:false
        })
      }
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

  changeLevel(value){
    let applyPage=this.state.applyPage;
    let city=this.state.levels.filter(function (ele) {
      return ele.levelId==Number(value)
    });
    applyPage.level=Number(value);
    this.setState({
      applyPage,
      selectLevel:city[0].levelName,
    })
  }

  changeProvince(value){
    let applyPage=this.state.applyPage;
    let city=this.state.province.filter(function (ele) {
      return ele.provinceId==Number(value)
    });
    applyPage.province=Number(value);
    applyPage.city=null;
    applyPage.county=null;
    this.getCity(Number(value));
    this.setState({
      applyPage,
      selectProvince:city[0].provinceName,
      selectCity:"",
      selectCountry:""
    })
  }
  changeCity(value){
    let city=this.state.city.filter(function (ele) {
      return ele.cityId==Number(value)
    });
    let applyPage=this.state.applyPage;
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
  changeAddress(e){
    let applyPage=this.state.applyPage;
    applyPage.address=e.target.value;
    this.setState({
      applyPage
    })
  }
  changeZipCode(e){
    let applyPage=this.state.applyPage;
    applyPage.zipCode=e.target.value;
    this.setState({
      applyPage
    })
  }
  changeContent(e){
    let applyPage=this.state.applyPage;
    applyPage.content=e.target.value;
    this.setState({
      applyPage
    })
  }
  changeRemarks(e){
    let applyPage=this.state.applyPage;
    applyPage.remarks=e.target.value;
    this.setState({
      applyPage
    })
  }


  changeName(e){
    let applyPage=this.state.applyPage;
    applyPage.name=e.target.value;
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


  saveMsg(){
    let data=this.state.applyPage;
    if(!tools.isEmpty(data.linkmanPhone)){
      if(!tools.mobileValidate(data.linkmanPhone)){
        alert("手机号不合法!");
        return false
      }
    }
    if(tools.isEmpty(data.name)){
      alert("医院不能为空!");
      return false
    }
    if(tools.isEmpty(data.level)){
      alert("医院等级不能为空!");
      return false
    }
    if(tools.isEmpty(data.province)){
      alert("省不能为空!");
      return false
    }
    if(tools.isEmpty(data.city)){
      alert("市不能为空!");
      return false
    }
    if(tools.isEmpty(data.county)){
      alert("县不能为空!");
      return false
    }
    axios.request({
      url: '/api/user/hospital/edit',
      method: 'POST',
      data:data,
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(function(response) {
      if(response.data.code===200){
        alert("保存成功，即将跳转!");
        location.hash="/healthInfo/hospital/hospital"
      }
    });
  }

  render(){
    return (
      <div>
        <h2>编辑医院</h2>
        <h3>
        </h3>
        <ul className="add_hospital">
          <li>
              <span className="name">
                医院名称
              </span>
            <Input value={this.state.applyPage.name}  onChange={this.changeName.bind(this)} className="" size="large" placeholder="医院名称" />
          </li>

          <li className="select_province">
              <span className="name">
                医院等级
              </span>
           <Select size="large"   onChange={this.changeLevel.bind(this)} optionFilterProp="children" className="flex2"  value={this.state.selectLevel}>
              {
                this.state.levels.map((ele,index)=>{
                  return  (<Option key={index} value={ele.levelId.toString()}>{ele.levelName}</Option>)
                })
              }

            </Select>
            <span className="name">
              </span>
          </li>

          <li className="select_province">
              <span className="name">
                省
              </span>
           <Select size="large"   onChange={this.changeProvince.bind(this)}  optionFilterProp="children" className="flex2"  value={this.state.selectProvince}>
              {
                this.state.province.map((ele,index)=>{
                  return  (<Option key={index} value={ele.provinceId.toString()}>{ele.provinceName}</Option>)
                })
              }
            </Select>
            <span className="name">
              </span>
          </li>

          <li className="select_province">
              <span className="name">
                市
              </span>
           <Select size="large"   onChange={this.changeCity.bind(this)}  optionFilterProp="children" className="flex2"   value={this.state.selectCity} >
              {
                this.state.city.map((ele,index)=>{
                  return  (<Option key={index} value={ele.cityId.toString()}>{ele.cityName}</Option>)
                })
              }

            </Select>
            <span className="name">
              </span>

          </li>
          <li className="select_province">
              <span className="name">
                县
              </span>
           <Select size="large"  onChange={this.changeCounty.bind(this)}  optionFilterProp="children" className="flex2"  value={this.state.selectCountry}>
              {
                this.state.county.map((ele,index)=>{
                  return  (<Option key={index} value={ele.countyId.toString()}>{ele.countyName}</Option>)
                })
              }

            </Select>
            <span className="name">
              </span>

          </li>

          <li>
              <span className="name">
                地址
              </span>
            <Input value={this.state.applyPage.address} onChange={this.changeAddress.bind(this)} className="" size="large" placeholder="联系人地址" />
          </li>

          <li>
              <span className="name">
                邮编
              </span>
            <Input value={this.state.applyPage.zipCode} onChange={this.changeZipCode.bind(this)}  className="flex2" size="large" placeholder="邮编" />
            <span className="name">
              </span>
          </li>


          <li>
              <span className="name">
                联系人
              </span>
            <Input value={this.state.applyPage.linkman}  onChange={this.changeLinkman.bind(this)}  className="flex2" size="large" placeholder="联系人" />
            <span className="name">
              </span>
          </li>


          <li>
              <span className="name">
                电话
              </span>
            <Input value={this.state.applyPage.linkmanPhone} onChange={this.changeLinkmanPhone.bind(this)} className="flex2" size="large" placeholder="电话" />
            <span className="name">
              </span>
          </li>

          <li>
              <span className="name">
                介绍
              </span>
            <Input value={this.state.applyPage.content} onChange={this.changeContent.bind(this)} className="" type="textarea" rows={4} />
          </li>

          <li>
              <span className="name">
                备注
              </span>
            <Input value={this.state.applyPage.remarks} onChange={this.changeRemarks.bind(this)} className="" type="textarea" rows={3} />
          </li>
        </ul>

        <h3>
        </h3>

        <div className="btn_save">
          <div className="btn_save_index">
            <Button onClick={this.saveMsg.bind(this)} className="save_add_hospital" type="primary">保存</Button>
            <Link to="healthInfo/hospital/hospital">
              <Button type="primary">返回</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

}
