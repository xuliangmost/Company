import React, {Component} from "react"
import {Button, Select, Input, Upload, Icon,message} from 'antd';
import {Link} from 'react-router';
import tools from "../../../tools/checked"
import axios from "axios";
import "../../../less/editHospital.less"
import "../../../less/doctor.less"
const Option = Select.Option;
let token = localStorage.getItem("robertUserName");
const doctorTitle = ["", "主任医师", "副主任医师", "主治医师"];
const duties = ["", "科主任", "副主任"];
import noPic from "./no.jpg"
message.config({
  top:240
})
export default class AddDoctor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgUrl: null,
      applyData: {
        "doctorName": "",
        "doctorPhone": "",
        "hospitalId": null,
        "departmentId": null,
        "doctorTitle": "",
        "duties": "",
        "speciality": "",
        "content": "",
        "pic": "",
        'email': ''
      },

      depList: [],
      mailHad: false,
      phoneHad: [],
      hospital: []
    }
  }

  componentDidMount() {
    this.getHospital();
    this.getDepartmentName()
  }

  getHospital() {
    axios.request({
      url: '/api/user/doctor/hList',
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(response => {
      this.setState({
        hospital: response.data.result
      })
    });
  }

  selectDp(value) {
    let applyData = this.state.applyData;
    applyData.departmentId = Number(value);
    this.setState({
      applyData
    })
  }

  selectDoctorTitle(value) {
    let applyData = this.state.applyData;
    applyData.doctorTitle = value;
    this.setState({
      applyData
    })
  }

  selectDuties(value) {
    let applyData = this.state.applyData;
    applyData.duties = value;
    this.setState({
      applyData
    })
  }

  getDepartmentName() {//获取科室
    let that = this;
    axios.request({
      url: '/api/user/doctor/depList',
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(function (response) {
      that.setState({
        depList: response.data.result
      })
    });
  }

  changePhone(e) {
    let applyData = this.state.applyData;
    applyData.doctorPhone = e.target.value;
    this.setState({
      applyData
    })
  }

  changeEmail(e) {
    let applyData = this.state.applyData;
    applyData.email = e.target.value;
    this.setState({
      applyData
    })
  }

  changeName(e) {
    let applyData = this.state.applyData;
    applyData.doctorName = e.target.value;
    this.setState({
      applyData
    })
  }

  changeSpeciality(e) {
    let applyData = this.state.applyData;
    applyData.speciality = e.target.value;
    this.setState({
      applyData
    })
  }

  changeContent(e) {
    let applyData = this.state.applyData;
    applyData.content = e.target.value;
    this.setState({
      applyData
    })
  }

  checkPhone() {
    let applyData = this.state.applyData;
    let that = this;
    axios.request({
      url: '/api/user/judge/phone',
      method: 'get',
      params: {
        phone: applyData.doctorPhone
      },
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(function (response) {
      if (response.data.code === 200) {
        axios.request({
          url: '/api/user/patient',
          method: 'get',
          params: {
            phone: applyData.doctorPhone
          },
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/x-www-form-urlencoded UTF-8'
          },
        }).then((response) =>{
          if (response.data.code === 200) {
            let applyData = that.state.applyData;
            if (response.data.result.length===0) {
              delete applyData.uId;
              applyData.doctorName = '';
              applyData.email = '';
            } else {
              applyData.uId = response.data.result[0].uId;
              applyData.doctorName = response.data.result[0].name;
              applyData.email = response.data.result[0].email ? response.data.result[0].email : ''
            }
            that.setState({
              applyData,
              phoneHad:false
            });
          }
        })
      } else if (response.data.code === 202) {
          message.error("该号码已存在");
          that.setState({
              phoneHad:true
          });
          return false
      }
    });
  }

  checkEmail() {
      axios.request({
        url: '/api/user/evalidate',
        method: 'get',
        params: {
          email: this.state.applyData.email
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        },
      }).then(response => {
        if (response.data.code !== 200) {
          message.error('该邮箱已存在');
          this.setState({
            mailHad: true
          })
        } else {
          this.setState({
            mailHad: false
          })
        }
      })
  }


  send() {
    let data = this.state.applyData;
      if(this.state.phoneHad){
          message.error('该号码已存在');
          return false
      }
    if (!tools.mobileValidate(data.doctorPhone)) {
      message.error("手机号不能为空或格式错误!");
      return false
    }
    if(this.state.mailHad){
      message.error('邮箱已存在');
      return false
    }
    if (tools.isEmpty(data.doctorName)) {
      message.error("姓名不能为空!");
      return false
    }
    if (tools.isEmpty(data.departmentId)) {
      message.error("科室不能为空!");
      return false
    }
    if (tools.isEmpty(data.hospitalId)) {
      message.error("医院未选择!");
      return false
    }
    if (!tools.emailValidate(data.email)) {
      message.error("邮箱填写错误!");
      return false
    }
    axios.request({
      url: '/api/user/doctor/add',
      method: 'post',
      data: data,
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
    }).then(function (response) {
      if (response.data.code === 200) {
        alert("新增成功，即将跳转!");
        location.hash = "/healthInfo/doctor/doctor"
      }
    });
  }

  selectHospital(value) {
    let applyData = this.state.applyData;
    applyData.hospitalId= Number(value);
     this.setState({
     hospitalName: value
     })
  }

  beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    const isPNG = file.type === 'image/png';
    if (!isPNG&&!isJPG) {
      alert('只可上传JPG或PNG格式的图片文件!');
      return false
    }
  }

  render() {
    let that = this;
    const props = {//上传的事件
      action: '/upload/user',
      headers: {
        "Authorization": "Bearer " + token
      },
      onChange({file, fileList}) {
        if (file.status !== 'uploading') {
          let applyData = that.state.applyData;
          applyData.pic = file.response.result[0].url;
          that.setState({
            applyData,
            imgUrl: file.response.result[0].url
          })
        }
      },
      defaultFileList: [],
    };


    return (
      <div className="doctor_content">
        <img src={this.state.imgUrl ? this.state.imgUrl : noPic} className="headPic"/>
        <Upload beforeUpload={this.beforeUpload.bind(this)} {...props}>
          <Button className="load_head_pic">
            <Icon type="upload"/>上传头像
          </Button>
        </Upload>
        <h2>新增医生</h2>
        <h3>
        </h3>
        <ul className="add_hospital">
          <li>
              <span className="name">
                手机号
              </span>
            <Input onBlur={this.checkPhone.bind(this)} onChange={this.changePhone.bind(this)} className="" size="large"
                   placeholder="手机号"/>
          </li>
          <li>
              <span className="name">
                姓名
              </span>
            <Input value={this.state.applyData.doctorName} onChange={this.changeName.bind(this)} className=""
                   size="large" placeholder="姓名"/>
          </li>

          <li className="select_province">
              <span className="name">
                医院
              </span>
            <Select size="large" onChange={this.selectHospital.bind(this)} optionFilterProp="children"
                    className="flex2" defaultValue="-请选择-">
              {
                this.state.hospital.map((ele, index) => {
                  return <Option key={index} value={ele.hospitalId.toString()}>{ele.hospitalName}</Option>
                })
              }
            </Select>
            <Button type="primary">
            </Button>
          </li>

          <li className="select_province">
              <span className="name">
                科室
              </span>
            <Select size="large" onChange={this.selectDp.bind(this)} optionFilterProp="children" className="flex2"
                    defaultValue="-请选择-">
              {
                this.state.depList.map((ele, index) => {
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
            <Select size="large" onChange={this.selectDoctorTitle.bind(this)} optionFilterProp="children"
                    className="flex2" defaultValue="-请选择-">
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
            <Select size="large" onChange={this.selectDuties.bind(this)} optionFilterProp="children" className="flex2"
                    defaultValue="-请选择-">
              <Option value="">-请选择-</Option>
              <Option value="科主任">科主任</Option>
              <Option value="副主任">副主任</Option>
            </Select>
            <span className="name">
              </span>
          </li>
          <li>
              <span className="name">
                邮箱
              </span>
            <Input onBlur={this.checkEmail.bind(this)}  value={this.state.applyData.email} onChange={this.changeEmail.bind(this)} className="" size="large"
                   placeholder="邮箱"/>
          </li>


          <li>
              <span className="name">
                特长
              </span>
            <Input onChange={this.changeSpeciality.bind(this)} className="" type="textarea" rows={4}/>
          </li>

          <li>
              <span className="name">
                简介
              </span>
            <Input onChange={this.changeContent.bind(this)} className="" type="textarea" rows={4}/>
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
