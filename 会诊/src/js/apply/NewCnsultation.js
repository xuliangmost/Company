import React, {Component} from "react";
import {Button, DatePicker, Input, Table, Transfer, Upload, Icon} from "antd";
import {Link} from "react-router";
import "../../less/newCnsulation.less";
import "../../less/lookWaitCheck.less";
import axios from "axios";
let token=localStorage.getItem("robertUserName");
//dataIndex  key要一样





/////////////////////////////////////////

export default class NewCnsultation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      mockData: [],
      targetTitle: [],
      targetKeys: [],
      caseId:"", //获取保存的病历id
      docSayId:"",
      consultationId:null,
      isShows:false,
      columns: [
        {
          title: '开方时间',
          dataIndex: 'time',
          key: 'time'
        }, {
          title: '开方医生姓名',
          dataIndex: 'DocName',
          key: 'DocName',
        }, {
          title: '药品名称',
          dataIndex: 'MdName',
          key: 'MdName',
        }, {
          title: '总量',
          dataIndex: 'num',
          key: 'num',
        }, {
          title: '单次用量',
          dataIndex: 'oneNum',
          key: 'oneNum',
        }, {
          title: '频次',
          dataIndex: 'ciNum',
          key: 'ciNum',
        }, {
          title: '操作',
          key: 'action',
          render: (text, record) => (
            <span>
                <Button onClick={()=>this.chuFangDiv()} className="addMedicine" type="primary">新增</Button>
            </span>
           ),
          }
      ],
      data : [{
          key: '1',
          time: '例：2017-03-15',
          DocName: "例：张三",
          MdName: '例：999感冒颗粒',
          num: "例：10",
          oneNum: "例：一次一包",
          ciNum: "例：每日三次",
          action: "新增"
      }],
      allData: {
        "huizhen": {
          "hospital": "",
          "applicant": "",
          "consultationName": "",
          "startTime": "2017-03-15T13:40:07.000",
          "username": "",
          "phone": "",
          "identification": "",
          "birthday": "1989-01-12",
          "famliyName": "",
          "familyPhone": "",
          "content": "",
        },
        "bingLi": {
          "sn": "", //病例编号
          "hospital": "",  //病例医院
          "doctor": "", //主治医生
          "name": "", //病例名称
          "diagnosisTime": "2017-03-15T16:00:07.000", //诊治时间
          "diagnosis": "", //临床诊断
          "doc": "www.baidu.cofsdfsdfdasdasdsadasd.jpg"

          //////////////////
        } ,
        "yizhu": {
          "hospital": "",
          "doctor": "",
          "adviceTime": "",
          "advice": ""
        },
        "yiSheng": [

        ],
        "code": 200
      },
      fileList: [],
      docList:[],//所有的医生列表
      docKeys:[],//确定时的会诊医生弹出框右边的index
      docId:[],//选中的医生的要上传的格式
      targetdoc:[],//选中的医生信息
      "chufang":{
        key: "",
        time: "",
        DocName: "",
        MdName: "",
        num: "",
        oneNum: "",
        ciNum: "",
        action: "新增"
      }
    }
  }
  chuFangDiv(){
     this.setState({
        isShows:true
     })
  }
  onChange(date, dateString) {
    console.log(date, dateString);
  }

  onCheck(e) {
    console.log(e.currentTarget)
  }

  changeHospital(e) {
    let allData = this.state.allData;
    allData.huizhen.hospital = e.target.value;
    this.setState({
      allData: allData
    })
  }

  changePeople(e) {
    let allData = this.state.allData;
    allData.huizhen.applicant = e.target.value;
    this.setState({
      allData: allData
    })
  }

  changeConsultationName(e) {
    let allData = this.state.allData;
    allData.huizhen.consultationName = e.target.value;
    console.log(allData);
    this.setState({
      allData: allData
    })
  }

  changeStartTime(date, dateString) {
    console.log(dateString)
    let allData=this.state.allData;
    allData.huizhen.startTime=dateString;
   // console.log(allData);
     this.setState({
     allData:allData
     })
  }

  changeUsername(e) {
    let allData = this.state.allData;
    allData.huizhen.username = e.target.value;
    this.setState({
      allData: allData
    })
  }

  changePhone(e) {
    let allData = this.state.allData;
    allData.huizhen.phone = e.target.value;
    this.setState({
      allData: allData
    })
  }

  changeIdentification(e) {
    let allData = this.state.allData;
    allData.huizhen.identification = e.target.value;
    this.setState({
      allData: allData
    })
  }

  changeBirthday(date, dateString) {
    let allData = this.state.allData;
    allData.huizhen.birthday = dateString;
    this.setState({
      allData: allData
    })
    console.log(dateString);
    console.log(allData);
  }

  changeFamliyName(e) {
    let allData = this.state.allData;
    allData.huizhen.famliyName = e.target.value;
    this.setState({
      allData: allData
    })
  }
  changeFamliyPhone(e) {
    let allData = this.state.allData;
    allData.huizhen.familyPhone = e.target.value;
    this.setState({
      allData: allData
    })
  }

  changeContent(e) {
    let allData = this.state.allData;
    allData.huizhen.content = e.target.value;
    this.setState({
      allData: allData
    })
  }

  changeCaseSn(e) {
    let allData = this.state.allData;
    allData.bingLi.sn = e.target.value;
    this.setState({
      allData: allData
    })
  }

  changeCaseHospital(e) {
    let allData = this.state.allData;
    allData.bingLi.hospital = e.target.value;
    this.setState({
      allData: allData
    })
  }

  changeCaseDoctor(e) {
    let allData = this.state.allData;
    allData.bingLi.doctor = e.target.value;
    this.setState({
      allData: allData
    })
  }

  changeCaseName(e) {
    let allData = this.state.allData;
    allData.bingLi.name = e.target.value;
    this.setState({
      allData: allData
    })
  }

  changeCaseDiagnosisTime(date, dateString) {
    let allData = this.state.allData;
    allData.bingLi.diagnosisTime = dateString;
    this.setState({
      allData: allData
    })
    console.log(dateString);
    console.log(allData);
  }

  changeCaseDiagnosis(e) {
    let allData = this.state.allData;
    allData.bingLi.diagnosis = e.target.value;
    this.setState({
      allData: allData
    })
  }

  changeDoctorHospital(e) {
    let allData = this.state.allData;
    allData.yizhu.hospital = e.target.value;
    this.setState({
      allData: allData
    })
  }

  changeDoctorDoctor(e) {
    let allData = this.state.allData;
    allData.yizhu.doctor = e.target.value;
    this.setState({
      allData: allData
    })
  }

  onChangeDoctorTime(date, dateString) {
    let allData = this.state.allData;
    allData.yizhu.adviceTime = dateString;
    console.log( dateString);
    console.log(allData);
    this.setState({
      allData: allData
    })
  }

  onChangeDoctorSay(e) {
    let allData = this.state.allData;
    allData.yizhu.advice = e.target.value;
    this.setState({
      allData: allData
    })
  }
  addCase(){
    document.getElementById("snClear").value="";
    document.getElementById("hospitalClear").value="";
    document.getElementById("doctorClear").value="";
    document.getElementById("nameClear").value="";
   // document.getElementById("treatmentClear").value="";
    document.getElementById("clinicalClear").value="";
  }
  componentDidMount() {
    this.getMock()
  }
  addAdvice(){
     document.getElementById("adviceHospitalClear").value="";
     document.getElementById("adviceDoctorClear").value="";
     document.getElementById("adviceAdviceClear").value="";
     //document.getElementById("adviceTimeClear").value="请选择日期";
  }

  //穿梭框
  getMock() {
    let that=this;
    axios.request({
      url: '/api/conference/doctor',
      method: 'get',
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(function(response) {
      const targetKeys = [];
      const mockData = [];
      const targetdoc=[];
      const docArr=response.data.result;
      for (let i = 0; i < docArr.length; i++) {
        const data = {
          key: docArr[i].doctorId,
          title: docArr[i].doctorName,
          description: docArr[i].hospitalName,
          chosen:0,
        };
        if (data.chosen) {
          targetKeys.push(data.key);
        }
        mockData.push(data);
      }

      docArr.map((ele,index)=>{
        targetdoc.push(ele)//targetdoc是显示在框子里面的医生的名字集合
      });
      let docId=[];
      for (let i=0;i<targetKeys.length;i++){
        let obj={};
        obj.doctor=targetKeys[i];
        docId.push(obj);
      }

      let obj={};//这里是生成医生接口的格式
      obj.consultationId=that.state.consultationId;
      obj.doctorId=docId;

      that.setState({
        mockData,
        targetKeys,
        docList:docArr,
        docId:obj,
        docKeys:targetKeys
      })
    });
  };

  handleChange(targetKeys, direction, moveKeys){

    this.setState({
      targetKeys,
    });
  };
  /////////////////////////////////////////////////////////////////////////
  renderItem(item) {
    const customLabel = (
      <span className="custom-item">
        {item.title} - {item.description}
      </span>
    );

    return {
      label: customLabel,  // for displayed item
      value: item.title,   // for title and filter matching
    };
  };

  //

  huizhenyisheng(){
    this.setState({
      isShow:true
    })
  }
  quxiaohuizhenyisheng(){

    this.setState({
      isShow:false,
      targetKeys:this.state.docKeys
    })
  }
  confirmFang(){//新增处方
     this.setState({
        isShows:false
     })
    let chufang = this.state.chufang;
    let that=this;

    let data = {
      prescriptionTime:chufang.time,
      doctorName:chufang.DocName,
      medicineTime:	chufang.MdName,
      total:chufang.num.toString(),
      singleDose:	chufang.oneNum,
      frequency	:chufang.ciNum,
      adId:that.state.docSayId.toString()
    };

    axios({
      url: '/api/conference/add/prescription',
      method: 'POST',
      data: data,
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/json'
      }
    }).then(function (response) {

      chufang.id=response.data.adId
      console.log(data)
      that.state.data.push(that.state.chufang)  //向数组中添加对象
      let daTa=that.state.data
      that.setState({//渲染数组对象
        data:daTa
      })
      alert("添加处方成功");
    }).catch(function (err) {
      console.log(err);
      alert("请完善处方资料");

    });

  }
  changeFangTime(date,dateString){
     let chufang=this.state.chufang;
     chufang.time=dateString;
     this.setState({
        chuangFang:chufang
     })
  }
  // changeStartTime(date, dateString) {
  //   console.log(dateString)
  //   let allData=this.state.allData;
  //   allData.huizhen.startTime=dateString;
  //   // console.log(allData);
  //   this.setState({
  //     allData:allData
  //   })
  // }
  changeFangDoctor(e){
    let chufang=this.state.chufang;
    chufang.DocName=e.target.value;
    this.setState({
      chuangFang:chufang
    })
  }
  changeFangName(e){
    let chufang=this.state.chufang;
    chufang.MdName=e.target.value;
    this.setState({
      chuangFang:chufang
    })
  }
  changeFangTotal(e){
    let chufang=this.state.chufang;
    chufang.num=e.target.value;
    this.setState({
      chuangFang:chufang
    })
  }
  changeFangOnce(e){
    let chufang=this.state.chufang;
    chufang.oneNum=e.target.value;
    this.setState({
      chuangFang:chufang
    })
  }
  changeFangPinci(e){
    let chufang=this.state.chufang;
    chufang.ciNum=e.target.value;
    console.log(chufang);
    this.setState({
      chuangFang:chufang
    })
  }
  queDing(){
    if(!this.state.consultationId){
      this.quxiaohuizhenyisheng();
      alert("会诊未保存")
      return false
    }



    let targetKeys=this.state.targetKeys;
    let arr=[];
    let targetTitle=[];
    for (let i=0;i<targetKeys.length;i++){
      let obj={};
      obj.doctor=targetKeys[i].toString();
      arr.push(obj);
      for(let k=0;k<this.state.docList.length;k++){
        if(targetKeys[i]==this.state.docList[k].doctorId*1){
          targetTitle.push(this.state.docList[k])
        }
      }
    }
    let obj={};
    obj.consultationId=this.state.consultationId;
    obj.doctorId=arr;
    let that=this;
    axios.request({
      url: '/api/conference/edit/doctorlist',
      method: 'POST',
      data: obj,
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/json'
      },
    }).then(function(response) {
      let allData=that.state.allData;
      allData.doctor=targetTitle;
      that.setState({
        isShow:false,
        targetdoc:targetTitle,
        allData:allData,
        docId:obj,
        docKeys:targetKeys
      });

    }).catch(function () {
      alert("error");
    });
  }

  ding() {
    let that = this;
    axios.request({
      url: '/api/conference/doctor',
      method: 'get',
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(function (response) {
      console.log(response.data.result);
      //let allData=this.state.allData;
      //let arr1=[]
      that.setState({
        arr: response.data.result
      })
      console.log(response)

    }).catch(function () {
      alert("error");
    });
  };

  consultationPost() {
    let allData = this.state.allData;
    let that=this;
    console.log(allData)
    let data = {
       hospital: allData.huizhen.hospital,
       applicant: allData.huizhen.applicant,
       consultationName: allData.huizhen.consultationName,
       startTime:allData.huizhen.startTime,
       username: allData.huizhen.username,
       phone: allData.huizhen.phone,
       identification: allData.huizhen.identification,
       birthday: allData.huizhen.birthday,
       famliyName: allData.huizhen.famliyName,
       familyPhone: allData.huizhen.familyPhone,
       content: allData.huizhen.content,
       userId:allData.huizhen.userId
    };
    axios({
      url: '/api/conference/add/consultation',
      method: 'POST',
      data: data,
        headers: {
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
      that.setState({
        consultationId:response.data.id
      });
        console.log(response.data)
        alert("添加会诊成功");
    }).catch(function (err) {
      console.log(err);
      alert("请完善新增会诊资料");

    });
  };

  medicalPost() {
    let allData = this.state.allData;
    let that=this;
    let data = {
      sn: allData.bingLi.sn,
      hospital: allData.bingLi.hospital,
      doctor: allData.bingLi.doctor,
      name: allData.bingLi.name,
      diagnosisTime: allData.bingLi.diagnosisTime,
      diagnosis: allData.bingLi.diagnosis,
      doc: allData.bingLi.doc,
      userId:allData.huizhen.identification,
      consultationId:this.state.consultationId.toString()


    };
    axios({
      url: '/api/conference/add/case',
      method: 'POST',
      data: data,
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      that.setState({
        caseId:response.data.id
      })
      alert("添加病历成功");
    }).catch(function (err) {
      console.log(err);
      alert("请完善病历资料");
    });
  }
  baoCun(){

    let allData = this.state.allData;
    let that=this;
    //consultationPost()
    let data1 = {
      hospital: allData.huizhen.hospital,
      applicant: allData.huizhen.applicant,
      consultationName: allData.huizhen.consultationName,
      startTime:allData.huizhen.startTime,
      username: allData.huizhen.username,
      phone: allData.huizhen.phone,
      identification: allData.huizhen.identification,
      birthday: allData.huizhen.birthday,
      famliyName: allData.huizhen.famliyName,
      familyPhone: allData.huizhen.familyPhone,
      content: allData.huizhen.content,
      userId:allData.huizhen.userId
    };
    axios({
      url: '/api/conference/add/consultation',
      method: 'POST',
      data: data1,
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      that.setState({
        consultationId:response.data.id
      });
      console.log(response.data)
    }).catch(function (err) {
      console.log(err);
      alert("请完善会诊资料，重新执行‘保存并提交’");

    });
    ////////////////////////////////
    //doctorSayPost()
    let data2={
      hospital: allData.yizhu.hospital,
      doctor: allData.yizhu.doctor,
      adviceTime: allData.yizhu.adviceTime,
      advice: allData.yizhu.advice,
      caseId:this.state.caseId.toString()
    };
    axios({
      url: '/api/conference/add/advice',
      method: 'POST',
      data: data2,
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/json'
      }
    }).then(function (response) {

    }).catch(function (err) {
      console.log(err);
      alert("请完善医嘱资料，重新执行‘保存并提交’")
    });
    /////////////////////////////////////
    //medicalPost()
    let data3 = {
      sn: allData.bingLi.sn,
      hospital: allData.bingLi.hospital,
      doctor: allData.bingLi.doctor,
      name: allData.bingLi.name,
      diagnosisTime: allData.bingLi.diagnosisTime,
      diagnosis: allData.bingLi.diagnosis,
      doc: allData.bingLi.doc,
      userId:allData.huizhen.identification,
      consultationId:this.state.consultationId.toString()


    };
    axios({
      url: '/api/conference/add/case',
      method: 'POST',
      data: data3,
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      that.setState({
        caseId:response.data.id
      })

    }).catch(function (err) {
      console.log(err);
      alert("请完善病历资料，并重新执行‘保存并提交’");
    });

    location.hash="/apply"
  }
  baoCunTijiao(){
    let allData = this.state.allData;
    let that=this;
    //consultationPost()
    let data1 = {
      hospital: allData.huizhen.hospital,
      applicant: allData.huizhen.applicant,
      consultationName: allData.huizhen.consultationName,
      startTime:allData.huizhen.startTime,
      username: allData.huizhen.username,
      phone: allData.huizhen.phone,
      identification: allData.huizhen.identification,
      birthday: allData.huizhen.birthday,
      famliyName: allData.huizhen.famliyName,
      familyPhone: allData.huizhen.familyPhone,
      content: allData.huizhen.content,
      userId:allData.huizhen.userId
    };
    axios({
      url: '/api/conference/add/consultation',
      method: 'POST',
      data: data1,
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/json'
      }
    }).then(function (response) {

      that.setState({
        consultationId:response.data.id
      });
      console.log(response.data)
    }).catch(function (err) {
      console.log(err);
      alert("请完善会诊资料，重新执行‘保存并提交’");

    });
    ////////////////////////////////
    //doctorSayPost()
    let data2={
      hospital: allData.yizhu.hospital,
      doctor: allData.yizhu.doctor,
      adviceTime: allData.yizhu.adviceTime,
      advice: allData.yizhu.advice,
      caseId:this.state.caseId.toString()
    };
    axios({
      url: '/api/conference/add/advice',
      method: 'POST',
      data: data2,
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/json'
      }
    }).then(function (response) {

    }).catch(function (err) {
      console.log(err);
      alert("请完善医嘱资料，重新执行‘保存并提交’")
    });
    /////////////////////////////////////
    //medicalPost()
    let data3 = {
      sn: allData.bingLi.sn,
      hospital: allData.bingLi.hospital,
      doctor: allData.bingLi.doctor,
      name: allData.bingLi.name,
      diagnosisTime: allData.bingLi.diagnosisTime,
      diagnosis: allData.bingLi.diagnosis,
      doc: allData.bingLi.doc,
      userId:allData.huizhen.identification,
      consultationId:this.state.consultationId.toString()


    };
    axios({
      url: '/api/conference/add/case',
      method: 'POST',
      data: data3,
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      that.setState({
        caseId:response.data.id
      })
    }).catch(function (err) {
      console.log(err);
      alert("请完善病历资料，并重新执行‘保存并提交’");
    });
    ////////////////////////////////以下为保存并提交请求
    axios.request({
      url: '/api/conference/commit',
      method: 'get',
      params:{
        id:that.state.consultationId.toString()
      },
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(function(response) {
      alert("保存并提交成功")
      location.hash="/apply"
    }).catch(function(){
      alert("保存并提交未成功，请完善资料后重新操作");
    })
    //////////////////////////////保存并提交请求结束
  }
  doctorSayPost(){
     let allData=this.state.allData;
     let that=this
     let data={
       hospital: allData.yizhu.hospital,
       doctor: allData.yizhu.doctor,
       adviceTime: allData.yizhu.adviceTime,
       advice: allData.yizhu.advice,
       caseId:this.state.caseId.toString()
     };
    axios({
      url: '/api/conference/add/advice',
      method: 'POST',
      data: data,
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      that.setState({
        docSayId:response.data.id
      })
          alert("添加医嘱成功");
    }).catch(function (err) {
      console.log(err);
    });
  }
  render() {
    let that = this;
    let caseId=this.state.caseId
    const props = {
      action:'/upload/consultation/'+caseId,
      headers:{
        "Authorization":"Bearer "+token
      },
      onChange({file, fileList}) {
        if (file.status !== 'uploading') {
          if(!that.state.caseId){
            alert("病历未保存！");
            return false
          }else{
             console.log(file, fileList);
          }

        }
      },
      defaultFileList: [],
    };
    return (
      <div className="newHidden">

        {
          this.state.isShow?<div className="transfer">
            <Transfer
              dataSource={this.state.mockData}
              listStyle={
                {
                  width: 300,
                  height: 500
                }
              }
              rowKey={record => record.key}
              targetKeys={this.state.targetKeys}
              onChange={this.handleChange.bind(this)}
              render={this.renderItem.bind(this)}
            />
            <Button onClick={()=>this.queDing()} className="transfer_btn1" type="primary">保存</Button>
            <Button onClick={()=>this.quxiaohuizhenyisheng()} className="transfer_btn" type="primary">取消</Button>
          </div>:""
        }

        <div className="cnsultation_top">
          <h1>
            新增会诊
          </h1>
          <ul className="search_ul">
            <li>
              <span className="most_flex">隶属医院</span>
              <Input onChange={this.changeHospital.bind(this)} className="search_input" size="large"
                     placeholder="隶属医院"/>
            </li>
            <li>
              <span className="most_flex">会诊申请人</span>
              <Input onChange={this.changePeople.bind(this)} className="search_input" size="large" placeholder="会诊申请人"/>
            </li>
            <li>
              <span className="most_flex">会诊名称</span>
              <Input onChange={this.changeConsultationName.bind(this)} className="search_input" size="large"
                     placeholder="会诊名称" required/>
            </li>
            <li>
              <span className="most_flex">会诊时间</span>{/*这里要加上一个判断， 判断不为空*/}
              <DatePicker onChange={this.changeStartTime.bind(this)} size="large" className="search_input"/>

            </li>
          </ul>

          <ul className="search_ul">
            <li>
              <span className="most_flex">会诊对象</span>
              <Input onChange={this.changeUsername.bind(this)} className="search_input" size="large" placeholder="会诊对象"
                     required/>
            </li>
            <li>
              <span className="most_flex">手机号</span>
              <Input onChange={this.changePhone.bind(this)} className="search_input" size="large" placeholder="手机号"
                     required/>
            </li>
            <li>
              <span className="most_flex">身份证号</span>
              <Input onChange={this.changeIdentification.bind(this)} className="search_input" size="large"
                     placeholder="身份证号" required/>
            </li>
            <li>
              <span className="most_flex">出生日期</span>
              <DatePicker onChange={this.changeBirthday.bind(this)} size="large" className="search_input"/>
            </li>
          </ul>

          <ul className="search_ul">
            <li>
              <span className="most_flex">陪护家属</span>
              <Input onChange={this.changeFamliyName.bind(this)} className="search_input" size="large"
                     placeholder="陪护家属"/>
            </li>
            <li>
              <span className="most_flex">手机号</span>
              <Input onChange={this.changeFamliyPhone.bind(this)} className="search_input" size="large"
                     placeholder="手机号"/>
            </li>

            <li>
            </li>

            <li>
            </li>
          </ul>

          <ul className="search_ul2">
            <li>
              <span className="most_flex1">会诊描述</span>
              <Input onChange={this.changeContent.bind(this)} className="search_input" type="textarea" rows={4}/>
            </li>
          </ul>

        </div>


        {/*第一个保存按钮*/}
        <div className="btn_save">
          <div className="btn_save_index">
            <Button onClick={this.consultationPost.bind(this)} className="btn_save_index_2" type="primary">保存</Button>
          </div>
        </div>
        {/*第一个保存按钮*/}


        <div className="cnsultation_bottom">
          {
            this.state.isShows?<div className="chuFang_div">
              <div>
                <span className="kaiFang_span">开方时间</span>
                {/*<Input onChange={this.changeFangTime.bind(this)} className="search_input" size="large"*/}
                       {/*placeholder="开方时间"/>*/}
                <DatePicker onChange={this.changeFangTime.bind(this)} size="large" className="search_input"/>
              </div>
              <div>
                <span>开方医生名称</span>
                <Input onChange={this.changeFangDoctor.bind(this)} className="search_input" size="large"
                       placeholder="开方医生名称"/>
              </div>
              <div>
                <span>药品名称</span>
                <Input onChange={this.changeFangName.bind(this)} className="search_input" size="large"
                       placeholder="药品名称"/>
              </div>
              <div>
                <span>总量</span>
                <Input onChange={this.changeFangTotal.bind(this)} className="search_input" size="large"
                       placeholder="总量"/>
              </div>
              <div>
                <span>单次用量</span>
                <Input onChange={this.changeFangOnce.bind(this)} className="search_input" size="large"
                       placeholder="单次用量"/>
              </div>
              <div>
                <span>频次</span>
                <Input onChange={this.changeFangPinci.bind(this)} className="search_input" size="large"
                       placeholder="频次"/>
              </div>
              <div>
                <button onClick={()=>this.confirmFang()}>确定</button>
              </div>
            </div>:""
          }
          <div className="history">
            <span className="history_sp1"> 病历1 </span>{/*病历用数组装起来，每一个病历都是一个对象，都会有id，点击新增，push一个新的对象*/}
            <Button onClick={this.addCase.bind(this)} className="history_btn1" type="primary">新增</Button>
            {/*医嘱的方式与病历一样*/}
          </div>
          <div className="history_detail">{/*这里循环一个state，点击病历就切换this.setState   点击新增就让新增的这个id去setState */}
            <ul className="search_ul">
              <li>
                <span className="most_flex">病例编号</span>
                <Input onChange={this.changeCaseSn.bind(this)} className="search_input caseClear" id="snClear" size="large"   placeholder="病例编号" />
                {/*clientidmode="Static"*/}
              </li>
              <li>
              </li>

              <li>
              </li>

              <li>
              </li>
            </ul>

            <ul className="search_ul">
              <li>
                <span className="most_flex">病例医院</span>
                <Input onChange={this.changeCaseHospital.bind(this)} id="hospitalClear" className="search_input" size="large"
                       placeholder="病例医院" required/>
              </li>
              <li>
                <span className="most_flex">主治医生</span>
                <Input onChange={this.changeCaseDoctor.bind(this)} id="doctorClear" className="search_input" size="large"
                       placeholder="主治医生" required/>
              </li>
              <li>
                <span className="most_flex">病例名称</span>
                <Input onChange={this.changeCaseName.bind(this)} id="nameClear" className="search_input" size="large"
                       placeholder="病例名称" required/>
              </li>
              <li>
                <span className="most_flex">诊治日期</span>
                <DatePicker onChange={this.changeCaseDiagnosisTime.bind(this)} id="treatmentClear" size="large" className="search_input"/>
              </li>
            </ul>

            <ul className="search_ul2">
              <li>
                <span className="most_flex1">临床诊断</span>
                <Input onChange={this.changeCaseDiagnosis.bind(this)} id="clinicalClear" className="search_input" type="textarea"
                       rows={4}/>
              </li>
            </ul>
          </div>


          {/*第二个保存按钮*/}
          <div className="btn_save">
            <div className="btn_save_index">
              <Button onClick={this.medicalPost.bind(this)} className="btn_save_index_2" type="primary">保存</Button>
            </div>
          </div>
          {/*第二个保存按钮*/}


          <div className="prescribe">
            <span className="prescribe_sp1"> 医嘱1 </span>
            <Button className="prescribe_btn1" onClick={this.addAdvice.bind(this)}  type="primary">新增</Button>
          </div>

          <div className="prescribeDetail">
            <ul className="search_ul">
              <li>
                <span className="most_flex">医嘱医院</span>
                <Input onChange={this.changeDoctorHospital.bind(this)} id="adviceHospitalClear" className="search_input" size="large"
                       placeholder="医嘱医院"/>
              </li>
              <li>
                <span className="most_flex">医嘱医生</span>
                <Input onChange={this.changeDoctorDoctor.bind(this)} id="adviceDoctorClear" className="search_input" size="large"
                       placeholder="医嘱医生"/>
              </li>
              <li>
                <span className="most_flex">医嘱时间</span>{/*这里要加上一个判断， 判断不为空*/}
                <DatePicker onChange={this.onChangeDoctorTime.bind(this)} id="adviceTimeClear" size="large" className="search_input"/>
              </li>
              <li>
              </li>
            </ul>
            <ul className="search_ul2">
              <li>
                <span className="most_flex1">医嘱</span>
                <Input onChange={this.onChangeDoctorSay.bind(this)} id="adviceAdviceClear" className="search_input" type="textarea" rows={4}/>
              </li>
            </ul>

            <ul className="search_ul2">
              <li>
                <span className="search_ul2_sp1 most_flex1">处方</span>
                <Table className="search_input" columns={this.state.columns} dataSource={this.state.data}/>
              </li>
            </ul>
          </div>


          {/*第三个保存按钮*/}
          <div className="btn_save">
            <div className="btn_save_index">
              <Button onClick={this.doctorSayPost.bind(this)} className="btn_save_index_2" type="primary">保存</Button>
            </div>
          </div>
          {/*第三个保存按钮*/}


          <ul>
            {
              this.state.fileList.map((ele, index) => {
                return <li key={index}>{ ele.name }</li>
              })
            }
          </ul>
          <div className="record">
            <span className="history_sp1 record_sp1"> 病历资料 </span>
            <Upload {...props}>
              <Button className="history_btn1">
                <Icon type="upload"/> 上传附件
              </Button>
            </Upload>
          </div>

          <ul className="search_ul2">
            <li className="search_li_last">
              <span className="one_title">会诊医生</span>
              <Input value={
                this.state.targetdoc.map((ele)=>{
                  return ele.doctorName
                })
              } className="search_input" onFocus={()=>this.huizhenyisheng()} type="textarea" rows={4} />
            </li>
          </ul>
          <div className="btn_save">
            <div className="btn_save_index">
              <Button type="primary" onClick={()=>this.baoCunTijiao()}>保存并提交</Button>
              <Button className="btn_save_index_2"  type="primary" onClick={()=>this.baoCun()}>保存</Button>
              <Link to="apply">
                <Button type="primary">取消</Button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
