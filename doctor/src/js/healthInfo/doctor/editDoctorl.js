import React,{Component} from "react"
import { Button,Select,Input,Upload,Icon } from 'antd';
import { Link } from 'react-router';
import tools from "../../../tools/checked"
import axios from "axios";
import "../../../less/editHospital.less"
import "../../../less/doctor.less"
const Option = Select.Option;
let token=localStorage.getItem("robertUserName");
const doctorTitle=["","主任医师","副主任医师","主治医师"];
const duties=["","科主任","副主任"];

export default class AddDoctor extends Component{
  constructor(props){
    super(props);
    this.state={
      imgUrl:null,
      applyData:{
        "doctorName":"",
        "doctorPhone":"",
        "hospitalId":null,
        "departmentId":null,
        "doctorTitle":"",
        "duties":"",
        "speciality":"",
        "content":"",
        "pic":""
      },
      depList:[],
      department:"",//科室
      hospitalName:"",
      doctorTitle:"",//职称
      duties:"",// 职务
      oldPhone:""
    }
  }

  componentDidMount(){
    this.getValue()

  }
  getValue(){
    let that=this;
    axios.request({
      url: '/api/user/doctor/page',
      method: 'get',
      params:{
        doctorId:this.props.params.id.toString()
      },
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(function(response) {
      let data=response.data.result[0];

      that.setState({
        applyData:response.data.result[0],
        department:response.data.result[0].departmentName,
        doctorTitle:response.data.result[0].doctorTitle,
        duties:response.data.result[0].duties,
        oldPhone:response.data.result[0].doctorPhone
      });
      that.getHospital();
      that.getDepartmentName()
    });
  }
  getHospital(){
    let that=this;
    axios.request({
      url: '/api/user/doctor/hList',
      method: 'get',
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(function(response) {
      let data=that.state.applyData;
      data.hospitalId=response.data.result.hospitalId;
      that.setState({
        data,
        hospitalName:response.data.result.hospitalName
      })
    });
  }

  selectDp(value){
    let applyData=this.state.applyData;
    applyData.departmentId=Number(value);
    this.setState({
      applyData,
      department:value
    })
  }
  selectDoctorTitle(value){
    let applyData=this.state.applyData;
    applyData.doctorTitle=value;
    this.setState({
      applyData,
      doctorTitle:value
    })
  }
  selectDuties(value){
    let applyData=this.state.applyData;
    applyData.duties=value;
    this.setState({
      applyData,
      duties:value
    })
  }
  getDepartmentName(){//获取科室
    let that=this;
    axios.request({
      url: '/api/user/doctor/depList',
      method: 'get',
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(function(response) {
      that.setState({
        depList:response.data.result
      })
    });
  }
  changePhone(e){
    let applyData=this.state.applyData;
    applyData.doctorPhone=e.target.value;
    this.setState({
      applyData
    })
  }
  changeName(e){
    let applyData=this.state.applyData;
    applyData.doctorName=e.target.value;
    this.setState({
      applyData
    })
  }
  changeSpeciality(e){
    let applyData=this.state.applyData;
    applyData.speciality=e.target.value;
    this.setState({
      applyData
    })
  }
  changeContent(e){
    let applyData=this.state.applyData;
    applyData.content=e.target.value;
    this.setState({
      applyData
    })
  }
  checkPhone(){
    if(this.state.oldPhone===this.state.applyData.doctorPhone){
      return false
    }
    let applyData=this.state.applyData;
    axios.request({
      url: '/api/user/hea/pvalidate',
      method: 'get',
      params:{
        phone:applyData.doctorPhone
      },
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(function(response) {

      if(response.data.code===200){

      }else if(response.data.code===202){
        alert("该号码已存在");
        return false
      }
    });
  }
  send(){
    this.checkPhone();
    let data=this.state.applyData;
    if(tools.isEmpty(data.doctorName)){
      alert("姓名不能为空!");
      return false
    }
    if(tools.isEmpty(data.departmentId)){
      alert("科室不能为空!");
      return false
    }
    if(!tools.mobileValidate(data.doctorPhone)){
      alert("手机号不能为空或格式错误!");
      return false
    }
    axios.request({
      url: '/api/user/doctor/edit',
      method: 'post',
      data:data,
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/json'
      },
    }).then(function(response) {
      if(response.data.code===200){
        alert("保存成功，即将跳转!");
        location.hash="/healthInfo/doctor/doctor"
      }
    });
  }

  beforeUpload(file){
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      alert('只可上传JPG格式的图片文件!');
      return false
    }
  }
  render(){
    let that=this;
    const props = {//上传的事件
      action: '/upload/user',
      headers:{
        "Authorization":"Bearer "+token
      },
      onChange({ file, fileList }) {
        if (file.status !== 'uploading') {
          console.log(file.response.result[0].url);
          let applyData=that.state.applyData;
          applyData.pic=file.response.result[0].url;
          that.setState({
            applyData,
            imgUrl:file.response.result[0].url
          })
        }
      },
      defaultFileList: [],
    };


    return (
      <div className="doctor_content">
        <img src={this.state.applyData.pic?this.state.applyData.pic:"./images/no.jpg"} className="headPic" />
        <Upload  beforeUpload={this.beforeUpload.bind(this)} {...props}>
          <Button className="load_head_pic">
            <Icon type="upload" />上传头像
          </Button>
        </Upload>
        <h2>编辑医生</h2>
        <h3>
        </h3>
        <ul className="add_hospital">
          <li>
              <span className="name">
                姓名
              </span>
            <Input value={this.state.applyData.doctorName} onChange={this.changeName.bind(this)} className="" size="large" placeholder="姓名" />
          </li>

          <li className="select_province">
              <span className="name">
                医院
              </span>
            <Input value={this.state.hospitalName} readOnly className="flex2" size="large" placeholder="医院" />
            <Button type="primary">
            </Button>
          </li>

          <li className="select_province">
              <span className="name">
                科室
              </span>
           <Select size="large"  onChange={this.selectDp.bind(this)} optionFilterProp="children" className="flex2" value={this.state.department}>
              {
                this.state.depList.map((ele,index)=>{
                  return <Option key={index} value={ele.departmentId.toString()}>{ele.departmentName}</Option>
                })
              }
            </Select>
            <Button type="primary">
            </Button>
          </li>

          <li className="select_province">
              <span className="name">
                职称
              </span>
           <Select size="large"   onChange={this.selectDoctorTitle.bind(this)} optionFilterProp="children" className="flex2" value={this.state.doctorTitle}>
              <Option value="">-请选择-</Option>
              <Option value="主任医师">主任医师</Option>
              <Option value="副主任医师">副主任医师</Option>
              <Option value="主治医师">主治医师</Option>

            </Select>
            <span className="name">
              </span>
          </li>

          <li className="select_province">
              <span className="name">
               职务
              </span>
           <Select size="large"   onChange={this.selectDuties.bind(this)}  optionFilterProp="children" className="flex2"  value={this.state.duties}>
              <Option value="">-请选择-</Option>
              <Option value="科主任">科主任</Option>
              <Option value="副主任">副主任</Option>
            </Select>
            <span className="name">
              </span>

          </li>

          <li>
              <span className="name">
                手机号
              </span>
            <Input onBlur={this.checkPhone.bind(this)}  value={this.state.applyData.doctorPhone} onChange={this.changePhone.bind(this)} className="" size="large" placeholder="手机号" />
          </li>

          <li>
              <span className="name">
                特长
              </span>
            <Input value={this.state.applyData.speciality} onChange={this.changeSpeciality.bind(this)}  className="" type="textarea" rows={4} />
          </li>

          <li>
              <span className="name">
                简介
              </span>
            <Input value={this.state.applyData.content} onChange={this.changeContent.bind(this)}  className="" type="textarea" rows={4} />
          </li>
        </ul>
        <h3>
        </h3>
        <div className="btn_save">
          <div className="btn_save_index">
            <Button onClick={this.send.bind(this)} className="save_add_hospital" type="primary">保存</Button>
            <Link to="healthInfo/doctor/doctor">
              <Button type="primary">返回</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
