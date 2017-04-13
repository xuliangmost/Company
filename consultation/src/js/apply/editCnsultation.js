import React,{Component} from "react"
import { Button,DatePicker,Input,Table,Transfer,Icon,Upload  } from 'antd';
import { Link } from 'react-router';
import "../../less/editCnsulation.less"
import axios from 'axios';
import moment from 'moment';
//dataIndex  key要一样
let startTime=(function getNowFormatDate() {
  let date = new Date();
  let seperator1 = "-";
  let month = date.getMonth() + 1;
  let strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  return (date.getFullYear() + seperator1 + month + seperator1 + strDate)

})();
let token=localStorage.getItem("robertUserName");
let allData={
  //会诊
  "consultation": {
    "hospital": "", //隶属医院
    "applicant": "", //会诊申请人
    "consultationName": "", //会诊名称
    "startTime": "2999-12-31 00:00:00.000", //会诊时间
    "username": "", //会诊对象
    "phone": "", //会诊对象的手机号
    "identification": "", //身份证号
    "birthday": "2999-12-31 00:00:00.000", //出生日期
    "famliyName": "", //陪护家属
    "familyPhone": "", //家属手机号
    "content": "" //会诊描述
  },
  //病历
  "case": [
    {
      "sn": "", //case编号
      "hospital": "",  //case医院
      "doctor": "", //主治医生
      "name": "", //病例名称
      "diagnosisTime": startTime, //诊治时间
      "diagnosis": "", //临床诊断
      "doc": "", //病例资料
      "file":[],
      "statusId":'1',
      "advice": [
        {
          "hospital": "",
          "doctor": "",
          "statusId":'1',
          "adviceTime": startTime,
          "advice": "",
          "prescription": [
            {
              "id":"0",
              "prescriptionTime": "", //开方时间
              "doctorName": "", //开方医生姓名
              "medicineTime": "",//药品名称
              "total": "", //总量
              "singleDose": "",//单次用量
              "frequency": ""//次/日
            }
          ]
        }
      ]
    }
  ],
  //医生
  "doctor": [
  ],
  "code": 200
};



const dateFormat = 'YYYY-MM-DD HH:mm:ss';
export default class EditCnsulation extends Component{
  constructor(props){
    super(props);
    this.state={
      consultationId:this.props.params.id,
      saveCase:true,//是否保存了病历
      savePrescription:false,//是否保存了处方
      saveAdvice:true,//是否保存了医嘱
      caseId:false,//是否显示添加医嘱按钮
      showPrescription:false,//是否显示新增处方弹出框
      getData:allData,
      centerPrescription:null,
      mockData: [],//会诊医生弹出框左边的选项
      targetTitle:[],//确定按钮的中间变量，点击确定才把医生放到input框
      targetKeys: [],//会诊医生弹出框右边的选项
      //以上是  呵呵呵呵呵
      history1:allData.case[0],//当前显示的病历
      history2:allData.case[0].advice[0]?allData.case[0].advice[0]:[],//当前显示的医嘱
      history1Index:0,//当前显示的病历的下标
      history2Index:0,//当前显示的医嘱的下标

      columns :[
          {
            title: '开方时间',
            dataIndex: 'prescriptionTime',
            key: 'prescriptionTime',
            render: (text) => (
              <span>{ text.split("T").join(" ") }</span>
            )
          },
          {
            title: '开方医生姓名',
            dataIndex: 'doctorName',
            key: 'doctorName',
            },
          {
            title: '药品名称',
            dataIndex: 'medicineTime',
            key: 'medicineTime',
            },
          {
            title: '总量',
            dataIndex: 'total',
            key: 'total',
            },
          {
            title: '单次用量',
            dataIndex: 'singleDose',
            key: 'singleDose',
            },
          {
            title: '频次',
            dataIndex: 'frequency',
            key: 'frequency',
            },
          {
            title: '操作',
            key: 'action',
            render: (text, record,index) => (
              <span>
                {
                  this.state.history1.statusId?<span>
                    {
                      record.id==0?<span>
                <Button onClick={this.addPrescription.bind(this)} className="addMedicine" type="primary">新增</Button>
              </span>:<span>
                <Button onClick={this.deletePrescription.bind(this,index)} className="addMedicine" type="primary">删除</Button>
              </span>
                    }
                  </span>:"-"
                }
              </span>
            ),
          }
      ],
      fileListColumns :[
          {
            title: '序号',
            dataIndex: 'id',
            key: 'id',
            render: (text, record,index) => (
              <span>{index+1} </span>
            ),
          },
          {
            title: '文件名',
            dataIndex: 'fileName',
            key: 'fileName',
          },
          {
            title: '大小',
            dataIndex: 'fileSize',
            key: 'fileSize',
            },
          {
            title: '上传时间',
            dataIndex: 'uploadAt',
            key: 'uploadAt',
            render: (text) => (
              <span>{ text.split("T").join(" ") }</span>
            )
          },
          {
            title: '操作',
            key: 'action',
            render: (text, record,index) => (
              <span>
                <a href={record.url} target="blank" className="apply_link">查看</a>
                {
                  this.state.history1.statusId?<Link to="" onClick={this.deleteFile.bind(this,record.id,index)} className="apply_link">删除</Link>:""
                }

              </span>
            ),
          }
      ],
      oldData:{//固定的，处方增加按钮的一项
        id: '0',
        "prescriptionTime": "-", //开方时间
        "doctorName": "-", //开方医生姓名
        "medicineTime": "-",//药品名称
        "total": "-", //总量
        "singleDose": "-",//单次用量
        "frequency": "-"//次/日
      },
      data:[{
        id: '0',
        "prescriptionTime": "-", //开方时间
        "doctorName": "-", //开方医生姓名
        "medicineTime": "-",//药品名称
        "total": "-", //总量
        "singleDose": "-",//单次用量
        "frequency": "-"//次/日
      }],
      docList:[],//所有的医生列表
      docKeys:[],//确定时的会诊医生弹出框右边的index
      docId:[],//选中的医生的要上传的格式
      targetdoc:[],//选中的医生信息
      fileList:null//显示的上传文件集合
    }
  }

/////////////////////////

  getPeople(){
    let that = this;
    axios.request({
      url: '/api/conference/selectHosAndApply',
      method: 'get',
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(function(response) {
      let getData=that.state.getData;
       getData.consultation.hospital=response.data.result[0].hospitalName;
       getData.consultation.applicant=response.data.result[0].applyName;
       console.log(getData.consultation.hospital);
       console.log(getData.consultation.applicant);
      that.setState({
        getData
      })
    }).catch(function () {

    });
  }

  getValue(){
    let that=this;
    let responseDoc=[];
    axios.request({
      url: '/api/conference/page',
      method: 'get',
      params: {
        id:that.props.params.id.toString()
      },
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(function(response) {
      response.data.doctor.map((ele)=>{
        responseDoc.push(ele.id)
      });

      let getData=response.data;
      let data=[];
      let caseId=false;
      let fileList=[];
      if(getData.case&&getData.case!=false){
        if(getData.case[0].advice!=false&&getData.case[0].advice[0].prescription){
          getData.case[0].advice[0].prescription.map((ele)=>{
            data.push(ele);
          });
        }
        fileList=getData.case[0].file?getData.case[0].file:[]
      }else{
        caseId=true;
        getData.case=allData.case;
        getData.case[0].advice[0].prescription?getData.case[0].advice[0].prescription.map((ele)=>{
          data.push(ele);
        }):"";
      }
      // let getData=response.data.case&&response.data.case!=false?response.data:allData;
      getData.consultationId=that.props.params.id;

      that.setState({
        getData:getData,
        history1:getData.case[0],
        history2:getData.case[0].advice?getData.case[0].advice[0]:null,
        targetdoc:getData.doctor,//加载页面时，会诊医生栏显示的内容
        data:data,
        fileList,
        caseId
      });
      //因为异步的原因，所以只能在回调函数里面放数据请求了

      that.getPeople();
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
            chosen:(function (a) {
               return responseDoc.indexOf(a)>-1?true:false
            })(docArr[i].doctorId),
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

    }).catch(function () {

    });

    //页面加载时获取医生列表
  }

  componentDidMount() {
    this.getValue();

    window.addEventListener('keydown', this.handleKeyDown.bind(this))
  }
  handleKeyDown(e){
    if(e.keyCode==27){
      this.setState({
        showPrescription:false,
      })
    }
  }
  cancelSaveCF(){
      this.setState({
        showPrescription:false,
      })
  }
  deleteFile(id,index){
    let that=this;
    axios.request({
      url: '/api/conference/deleteCaseFile',
      method: 'get',
      params: {
        caseFileId:id.toString()
      },
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/json'
      },
    }).then(function(response) {
      let getData=that.state.getData;
      getData.case[that.state.history1Index].file.splice(index,1);
      let list=getData.case[that.state.history1Index].file;
      that.setState({
        fileList:list,
        getData
      })
    }).catch(function () {

    });


  }

  handleChange(targetKeys){

    this.setState({
      targetKeys,
    });
  };
  queDing(){
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

      let allData=that.state.getData;
      allData.doctor=targetTitle;
      that.setState({
        isShow:false,
        targetdoc:targetTitle,
        allData:allData,
        docId:obj,
        docKeys:targetKeys
      });

    }).catch(function () {

    });
  }

  renderItem (item){
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
  ///////////////////////////

  send() {

    if(this.state.saveCase){
      if(this.state.saveAdvice){
        if(this.state.targetdoc==false){
          alert("会诊医生未选择!");
          return false
        }
        axios.request({
          url: '/api/conference/commit',
          method: 'get',
          params: {
            id:this.state.consultationId.toString()
          },
          headers: {
            'Authorization': 'Bearer '+token,
            'Content-Type': 'application/x-www-form-urlencoded UTF-8'
          },
        }).then(function(response) {
          if(response.data.code==200){
            alert("提交成功!")
            location.hash="apply"
          }
        }).catch(function () {
          alert("提交失败!")
        });
      }else{
        alert("当前医嘱未保存!")
      }
    }else{
      alert("当前病历未保存!")
    }

  };



  changeHistory1(index){        //切换病历

    if(!this.state.saveCase){
      if(index!=this.state.history1Index){
        alert("当前病历未保存!");
        return false
      }
    }


    let data=[];
    if(this.state.getData.case[index].advice&&this.state.getData.case[index].advice!=false){
      if(this.state.getData.case[index].advice[0].prescription&&this.state.getData.case[index].advice[0].prescription!=false){
        this.state.getData.case[index].advice[0].prescription.map((ele)=>{
          data.push(ele);
        })
      }else{

      }
    }else{

    }
    let caseShow=false;
    if(this.state.getData.case[index].statusId){
      caseShow=true;
    }
    if(this.state.getData.case[index].file&&this.state.getData.case[index].file!=false){
    }
    this.setState({
      history1:this.state.getData.case[index],
      history1Index:index,
      history2:this.state.getData.case[index].advice?this.state.getData.case[index].advice[0]:null,
      data:data,
      caseId:caseShow,
      fileList:this.state.getData.case[index].file&&this.state.getData.case[index].file!=false?this.state.getData.case[index].file:null,
    })
  }

  changeHistory2(index){        //切换医嘱
    if(!this.state.saveAdvice){
      if(index!=this.state.history2Index){
        alert("当前医嘱未保存!");
        return false
      }
    }
    let history2=this.state.history1.advice?this.state.history1.advice[index]:null;
    let data=[];
    if(history2.prescription&&history2.prescription!=false){
      history2.prescription.map((ele)=>{
        data.push(ele);
      })
    }else{

    }
    this.setState({
      history2:this.state.history1.advice?this.state.history1.advice[index]:null,
      history2Index:index,
      data:data
    })
  }
  addHistory1(){           //增加病历
    if(this.state.saveCase){
      let getData=JSON.parse(JSON.stringify(this.state.getData));
      let length=getData.case.length+1;
      let obj={
        "sn": "", //case编号
        "hospital": "",  //case医院
        "doctor": "", //主治医生
        "name": "", //病例名称
        "diagnosisTime": "", //诊治时间
        "diagnosis": "", //临床诊断
        "doc": "", //病例资料
        "file":[],
        "statusId":'1',
        "advice": [
          {
            "hospital": "",
            "doctor": "",
            "adviceTime": "",
            "advice": "",
            "prescription": [
              {
                "id":"0",
                "prescriptionTime": "", //开方时间
                "doctorName": "", //开方医生姓名
                "medicineTime": "",//药品名称
                "total": "", //总量
                "singleDose": "",//单次用量
                "frequency": ""//次/日
              }
            ]
          }
        ]
      };
      obj.diagnosisTime=startTime;
      getData.case.push(obj);
      let history1=obj;

      let history2=obj.advice[0];
      let fileList=obj.file;
      history2.adviceTime=startTime;
      history2.statusId=1;
      let data=[];
      data.push(this.state.oldData);
      this.setState({
        getData,
        history1,
        history2,
        data:data,
        history1Index:length-1<0?0:length-1,
        history2Index:0,
        saveCase:false,
        caseId:true,
        fileList
      })
    }else{
      alert("上一病历未保存!")
    }

  }
  alertMsg(){
    if(!this.state.saveCase){
      alert("请先保存病历!")
    }
  }
  changeDiagnosis(e){//修改临床诊断
    if(this.state.caseId){
      let getData=this.state.getData;
      let history1=this.state.history1;
      getData.case[this.state.history1Index].diagnosis=e.target.value;
      history1.diagnosis=e.target.value;
      this.setState({
        getData,
        history1
      })
    }
  }
  changeName(e){//修改病历名称
    if(this.state.caseId){
      let getData=this.state.getData;
      let history1=this.state.history1;
      getData.case[this.state.history1Index].name=e.target.value;
      history1.name=e.target.value;
      this.setState({
        getData,
        history1
      })
    }
  }
  changeSn(e){//修改病历编号
    if(this.state.caseId){
      let getData=this.state.getData;
      let history1=this.state.history1;
      getData.case[this.state.history1Index].sn=e.target.value;
      history1.sn=e.target.value;
      this.setState({
        getData,
        history1
      })
    }
  }
  changeHospital(e){//修改病历医院
    if(this.state.caseId){
      let getData=this.state.getData;
      let history1=this.state.history1;
      getData.case[this.state.history1Index].hospital=e.target.value;
      history1.hospital=e.target.value;
      this.setState({
        getData,
        history1
      })
    }
  }
  changeDoctor(e){//修改主治医生
    if(this.state.caseId){
      let getData=this.state.getData;
      let history1=this.state.history1;
      getData.case[this.state.history1Index].doctor=e.target.value;
      history1.doctor=e.target.value;
      this.setState({
        getData,
        history1
      })
    }
  }

  changeDagnosisTime(date, dateString){//修改诊治日期
    if(this.state.caseId){
      let getData=this.state.getData;
      let history1=this.state.history1;
      getData.case[this.state.history1Index].diagnosisTime=dateString;
      history1.diagnosisTime=dateString;
      this.setState({
        getData,
        history1
      })
    }
  }
  //修改医嘱医嘱医嘱医嘱医嘱医嘱医嘱医嘱医嘱
  changeAdviceTime(date, dateString){//修改医嘱时间
    if(this.state.saveCase){
      let getData=this.state.getData;
      let history2=this.state.history2;
      getData.case[this.state.history1Index].advice[this.state.history2Index].adviceTime=dateString;
      history2.adviceTime=dateString;
      this.setState({
        getData,
        history2
      })
    }
  }
  changeAdvice(e){//修改医嘱
    if(this.state.saveCase){
      let getData=this.state.getData;
      let history2=this.state.history2;
      getData.case[this.state.history1Index].advice[this.state.history2Index].advice=e.target.value;
      history2.advice=e.target.value;
      this.setState({
        getData,
        history2
      })
    }
  }
  changeAdviceDoctor(e){//修改医嘱医生
    if(this.state.saveCase){
      let getData=this.state.getData;
      let history2=this.state.history2;
      getData.case[this.state.history1Index].advice[this.state.history2Index].doctor=e.target.value;
      history2.doctor=e.target.value;
      this.setState({
        getData,
        history2
      })
    }
  }
  changeAdviceHospital(e){//修改医嘱医院
    if(this.state.saveCase){
      let getData=this.state.getData;
      let history2=this.state.history2;
      getData.case[this.state.history1Index].advice[this.state.history2Index].hospital=e.target.value;
      history2.hospital=e.target.value;

      this.setState({
        getData,
        history2
      })
    }
  }


  saveCase(){//保存病历
    let postCase=JSON.parse(JSON.stringify(this.state.getData.case[this.state.history1Index]));
    if(!postCase.sn){
      alert("病历编号不能为空!!!");
      return false
    }
    if(!postCase.hospital){
      alert("病例医院不能为空!!!");
      return false
    }

    let advice=JSON.parse(JSON.stringify(postCase.advice))
    delete postCase.advice;
    postCase.consultationId=this.state.consultationId;
    postCase.userId=this.state.getData.consultation.userId.toString();
    if(postCase.id){
      postCase.id=postCase.id.toString();
      delete postCase.consultationId;
      delete postCase.userId;
    }
    let url=postCase.id?"/api/conference/edit/case":"/api/conference/add/case";
    let that=this;
    axios.request({
      url: url,
      method: 'POST',
      data: postCase,
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/json'
      },
    }).then(function(response) {
      postCase.id=response.data.id;
      postCase.advice=advice;
      let getData=JSON.parse(JSON.stringify(that.state.getData));
      getData.case[that.state.history1Index]=postCase;

      that.setState({
        saveCase:true,
        history1:postCase,
        getData:getData,
        history2:postCase.advice?postCase.advice[0]:null
      });
      alert("病历保存成功!")
    }).catch(function () {
      alert("病历保存失败!");
    });
  }
  saveAdvice(){//保存医嘱
    if(this.state.saveCase){
      let postAdvice=JSON.parse(JSON.stringify(this.state.getData.case[this.state.history1Index].advice[this.state.history2Index]));
      let prescription=JSON.parse(JSON.stringify(postAdvice.prescription))
      delete postAdvice.prescription;
      if(postAdvice.id){
        postAdvice.id=postAdvice.id.toString()
      }
      postAdvice.caseId=this.state.history1.id.toString();
      let url=postAdvice.id?"/api/conference/edit/advice":"/api/conference/add/advice";
      let that=this;
      axios.request({
        url: url,
        method: 'POST',
        data: postAdvice,
        headers: {
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/json'
        },
      }).then(function(response) {
        if(response.data.id){
          postAdvice.id=response.data.id
        }
        postAdvice.prescription=prescription;
        let getData=JSON.parse(JSON.stringify(that.state.getData));
        getData.case[that.state.history1Index].advice[that.state.history2Index]=postAdvice;
        that.setState({
          saveCase:true,
          history1:getData.case[that.state.history1Index],
          getData:getData,
          history2:postAdvice
        });
        alert("医嘱保存成功!")
      }).catch(function () {
        alert("医嘱保存失败!");
      });

      this.setState({
        saveAdvice:true
      });
    }else{
      alert("病历未保存!")
    }

  }



  addHistory2(){//增加医嘱
    if(this.state.saveAdvice){
      let getData=this.state.getData;
      let length=getData.case[this.state.history1Index].advice.length;

      let obj={
        "hospital": "",
        "doctor": "",
        "adviceTime": "",
        "advice": "",
        "prescription": [
          {
            "id":"0",
            "prescriptionTime": "", //开方时间
            "doctorName": "", //开方医生姓名
            "medicineTime": "",//药品名称
            "total": "", //总量
            "singleDose": "",//单次用量
            "frequency": ""//次/日
          }
        ]
      };
      obj.adviceTime=startTime;
      obj.statusId=1;
      getData.case[this.state.history1Index].advice.push(obj);
      let history1=getData.case[this.state.history1Index];
      let history2=getData.case[this.state.history1Index].advice[history1.advice.length-1];
      let data=[];
      data.push(this.state.oldData);
      this.setState({
        getData,
        history1,
        history2,
        data:data,
        history2Index:length,
        saveAdvice:false
      })
    }else{
      alert("上一医嘱未保存")
    }
  }

  addPrescription(){//增加处方-显示弹框
    if(this.state.saveAdvice){
      //这里会有一个数据请求，获取处方的id
      let obj={
        "prescriptionTime": startTime, //开方时间
        "doctorName": "", //开方医生姓名
        "medicineTime": "",//药品名称
        "total": "", //总量
        "singleDose": "",//单次用量
        "frequency": ""//次/日
      };
      this.setState({
        showPrescription:true,
        centerPrescription:obj
      })
    }else{
      alert("医嘱未保存!")
    }
  }

  changeDoctorName(e){//处方医生姓名
    let obj=this.state.centerPrescription;
    obj.doctorName=e.target.value;
    this.setState({
      centerPrescription:obj
    })
  }
  changePrescriptionTime(date, dateString){//开方时间
    let obj=this.state.centerPrescription;
    obj.prescriptionTime=dateString;
    this.setState({
      centerPrescription:obj
    })
  }
  changeMedicineTime(e){//处方药物名称
    let obj=this.state.centerPrescription;
    obj.medicineTime=e.target.value;
    this.setState({
      centerPrescription:obj
    })
  }
  changeTotal(e){//处方总量
    let obj=this.state.centerPrescription;
    obj.total=e.target.value;
    this.setState({
      centerPrescription:obj
    })
  }
  changeSingleDose(e){//处方单次用量
    let obj=this.state.centerPrescription;
    obj.singleDose=e.target.value;
    this.setState({
      centerPrescription:obj
    })
  }
  changeFrequency(e){//处方   次/日
    let obj=this.state.centerPrescription;
    obj.frequency=e.target.value;
    this.setState({
      centerPrescription:obj
    })
  }


  deletePrescription(index){
    let data1=this.state.data;
    let getData=this.state.getData;
    let that=this;
    console.log(getData.case[this.state.history1Index].advice[this.state.history2Index].prescription[index].id);
    axios.request({
      url: "/api/conference/delete/prescription",
      method: 'get',
      params: {
        id:getData.case[this.state.history1Index].advice[this.state.history2Index].prescription[index].id.toString()
      },
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/json'
      },
    }).then(function(response) {
      getData.case[this.state.history1Index].advice[this.state.history2Index].prescription.splice(index,1);
       data1.splice(index,1);
       that.setState({
       getData,
       data:data1
       })
    });









  }


  closePrescription(){//保存处方并关闭处方弹出框

      let postData=this.state.centerPrescription;
      postData.adId=this.state.history2.id.toString();
      let that=this;
      axios.request({
        url: '/api/conference/add/prescription',
        method: 'POST',
        data: postData,
        headers: {
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/json'
        },
      }).then(function(response) {
        postData.id=response.data.id;
        let prescriptionData=that.state.data;
        prescriptionData.unshift(postData);
        let getData=that.state.getData;
        getData.case[that.state.history1Index].advice[that.state.history2Index].prescription.unshift(postData);
        that.setState({
          data:prescriptionData,
          getData,
          showPrescription:false,
          savePrescription:true
        })

      }).catch(function () {
        alert("保存处方失败!");
      })


  }

  deleteHistory1(index){           //删除病历


    if(!this.state.saveCase){
      if(index!=this.state.history1Index){
        alert("请先保存病历!");
        return false
      }
    }
    let getData=JSON.parse(JSON.stringify(this.state.getData));
    if(getData.case.length==1){
      getData.case[0]={
        "sn": "", //case编号
        "hospital": "",  //case医院
        "doctor": "", //主治医生
        "name": "", //病例名称
        "diagnosisTime": startTime, //诊治时间
        "diagnosis": "", //临床诊断
        "doc": "", //病例资料
        "file":[],
        "statusId":1,
        "advice": [
          {
            "hospital": "",
            "doctor": "",
            "adviceTime":startTime,
            "advice": "",
            "statusId":1,
            "prescription": [
              {
                "id": '0',
                "prescriptionTime": "-", //开方时间
                "doctorName": "-", //开方医生姓名
                "medicineTime": "-",//药品名称
                "total": "-", //总量
                "singleDose": "-",//单次用量
                "frequency": "-"//次/日
              }
            ]
          }
        ]
      };
      let history2=getData.case[0].advice?getData.case[0].advice[0]:null;
      let fileList=getData.case[0].file;
      let data=history2.prescription;
      this.setState({
        getData:getData,
        history1:getData.case[0],
        history2,
        history1Index:0,
        history2Index:0,
        data:data,
        saveCase:false,
        caseId:true,
        saveAdvice:false,
        fileList
      })
    }else{
      let saveCase;
      if(getData.case[index].statusId){
        saveCase=true
      }
      getData.case.splice(index,1);
      if(index==getData.case.length-1){

      }else{
        index=index<1?0:index-1;
      }
      let history2=getData.case[index].advice?getData.case[index].advice[0]:null;

      let data=history2?history2.prescription:[];
      if(data==false){
        data.push(this.state.oldData)
      }
      this.setState({
        getData:getData,
        history1:getData.case[index],
        history2:history2,
        history1Index:index,
        history2Index:0,
        data,
        saveCase:true,
      fileList:this.state.getData.case[index].file&&this.state.getData.case[index].file!=false?this.state.getData.case[index].file:null,
      })
    }




  }
  deleteHistory2(index){           //删除医嘱
    let getData=JSON.parse(JSON.stringify(this.state.getData));
    getData.case[this.state.history1Index].advice.splice(index,1);
    index=index<1?0:index-1;
    let history1=getData.case[this.state.history1Index];
    let history2=history1.advice?history1.advice[index]:null;
    let data=history2?history2.prescription:[];
    let saveAdvice=history2?false:true;
    if(data==false){
      data.push(this.state.oldData)
    }
    this.setState({
      getData:getData,
      history1:history1,
      history2:history2,
      history2Index:this.state.history2Index-1,
      data,
      saveAdvice
    })
  }
  upLoadMsg(){

  }
  render(){
    let style={"height":document.body.clientHeight};
    let that=this;
    let caseId=null;
    let Hidden={"overflowY":"hidden"};
    let Width={"width":document.body.clientWidth,"height":document.body.clientHeight};
    if(this.state.history1.id){
      caseId=this.state.history1.id.toString();
    }
    const props = {//上传的事件
        action: '/upload/consultation/'+caseId,
        headers:{
          "Authorization":"Bearer "+token
        },
        onChange({ file, fileList }) {
          if (file.status !== 'uploading') {
            if(!that.state.saveCase){
              alert("病历未保存!");
              return false
            }
            if(fileList.length){
              let getData=that.state.getData;
              getData.case[that.state.history1Index].file=getData.case[that.state.history1Index].file?getData.case[that.state.history1Index].file:[];
              getData.case[that.state.history1Index].file.push(fileList[fileList.length-1].response.result);
              let list=getData.case[that.state.history1Index].file;
              that.setState({
                fileList:list,
                getData
              })
            }
          }
        },
        defaultFileList: [],
      };



    return(

      <div style={this.state.showPrescription?Hidden:this.state.isShow?Hidden:null} className="newHidden">

        {
          this.state.showPrescription?<div style={style} className="Prescription">
            <div className="showPrescription">
              <ul>
                <li>
                  <span>开方时间</span>
                  <DatePicker  allowClear={false} showTime value={moment(this.state.centerPrescription.prescriptionTime, dateFormat)} format={dateFormat} onChange={this.changePrescriptionTime.bind(this)} size="large" placeholder="开方医生姓名" />
                </li>
                <li>
                  <span>开方医生姓名</span>
                  <Input value={this.state.centerPrescription.doctorName} onChange={this.changeDoctorName.bind(this)} size="large" placeholder="开方医生姓名" />
                </li>

                <li>
                  <span>药品名称</span>
                  <Input value={this.state.centerPrescription.medicineTime} onChange={this.changeMedicineTime.bind(this)} size="large" placeholder="药品名称" />
                </li>

                <li>
                  <span>总量</span>
                  <Input value={this.state.centerPrescription.total} onChange={this.changeTotal.bind(this)} size="large" placeholder="总量" />
                </li>
                <li>
                  <span>单次用量</span>
                  <Input value={this.state.centerPrescription.singleDose} onChange={this.changeSingleDose.bind(this)} size="large" placeholder="单次用量" />
                </li>

                <li>
                  <span>频次</span>
                  <Input value={this.state.centerPrescription.frequency} onChange={this.changeFrequency.bind(this)} size="large" placeholder="频次" />
                </li>

              </ul>

              <Button onClick={this.closePrescription.bind(this)} className="transfer_btn1" type="primary">保存处方</Button>
              <Button onClick={this.cancelSaveCF.bind(this)} className="transfer_btn1" type="primary">取消保存</Button>

            </div>
          </div>:""
        }




        {
          this.state.isShow?
            <div style={Width} className="transfer_box">
              <div className="transfer">
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
              </div>
            </div>:""
        }

        <div className="cnsultation_top">
          <h1>
            编辑会诊
          </h1>
          <ul className="search_ul">
            <li>
              <span className="most_flex">隶属医院</span>
              <Input readOnly value={this.state.getData.consultation.hospital} className="search_input" size="large" placeholder="隶属医院" />
            </li>
            <li>
              <span className="most_flex">会诊申请人</span>
              <Input readOnly value={this.state.getData.consultation.applicant} className="search_input" size="large" placeholder="会诊申请人" />
            </li>
            <li>
              <span className="most_flex">会诊名称</span>
              <Input readOnly value={this.state.getData.consultation.consultationName} className="search_input" size="large" placeholder="必填" required  />
            </li>
            <li>
              <span className="most_flex">会诊时间</span>{/*这里要加上一个判断， 判断不为空*/}
              <DatePicker open={false} allowClear={false}  value={moment(this.state.getData.consultation.startTime, dateFormat)} format={dateFormat} size="large" className="search_input" onChange={this.onChange} />

            </li>
          </ul>

          <ul className="search_ul">
            <li>
              <span className="most_flex">会诊对象</span>
              <Input readOnly value={this.state.getData.consultation.username} className="search_input" size="large" placeholder="必填" required  />
            </li>
            <li>
              <span className="most_flex">手机号</span>
              <Input readOnly value={this.state.getData.consultation.phone} className="search_input" size="large" placeholder="必填" required   />
            </li>
            <li>
              <span className="most_flex">身份证号</span>
              <Input readOnly value={this.state.getData.consultation.identification} className="search_input" size="large" placeholder="必填" required  />
            </li>
            <li>
              <span className="most_flex">出生日期</span>
              <DatePicker  open={false}  allowClear={false} value={moment(this.state.getData.consultation.birthday, dateFormat)} format={dateFormat} size="large" className="search_input" onChange={this.onChange} />
            </li>
          </ul>

          <ul className="search_ul">
            <li>
              <span className="most_flex">陪护家属</span>
              <Input readOnly value={this.state.getData.consultation.famliyName} className="search_input" size="large" placeholder="陪护家属" />
            </li>
            <li>
              <span className="most_flex">手机号</span>
              <Input readOnly value={this.state.getData.consultation.familyPhone} className="search_input" size="large" placeholder="手机号" />
            </li>

            <li>
            </li>

            <li>
            </li>
          </ul>

          <ul className="search_ul2">
            <li>
              <span className="most_flex1">会诊描述</span>
              <Input readOnly value={this.state.getData.consultation.content} className="search_input" type="textarea" rows={4} />
            </li>
          </ul>

        </div>



        <div className="cnsultation_bottom">
          <div className="history">
            {
              this.state.getData.case?this.state.getData.case.map((ele,index)=>{
               return (
                 <div className="history_case" key={index}>
                    <span onClick={this.changeHistory1.bind(this,index)} className="history_sp1">病例 {index+1} </span>
                    <Button type="primary" onClick={this.deleteHistory1.bind(this,index)} className="prescribe_btn1 edit_delete" size="small">
                      <Icon type="minus" />
                    </Button>
                 </div>
               )
              }):""
            }
            <Button onClick={this.addHistory1.bind(this)} className="history_btn1" type="primary">
              <Icon type="plus" />
            </Button>
                                                     {/*医嘱的方式与病历一样*/}
          </div>
          <div className="history_detail">{/*这里循环一个state，点击病历就切换this.setState   点击新增就让新增的这个id去setState */}
            <ul className="search_ul">
              <li>
                <span className="most_flex">病例编号</span>
                <Input value={this.state.history1.sn} className="search_input" size="large" placeholder="必填" onChange={this.changeSn.bind(this)} />
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
                <Input value={this.state.history1.hospital} className="search_input" size="large" placeholder="必填" onChange={this.changeHospital.bind(this)}  />
              </li>
              <li>
                <span className="most_flex">主治医生</span>
                <Input value={this.state.history1.doctor} className="search_input" size="large" placeholder="主治医生" onChange={this.changeDoctor.bind(this)}   />
              </li>
              <li>
                <span className="most_flex">病例名称</span>
                <Input value={this.state.history1.name} className="search_input" size="large" placeholder="病例名称" onChange={this.changeName.bind(this)}  />
              </li>
              <li>
                <span className="most_flex">诊治日期</span>
                <DatePicker   allowClear={false} value={moment(this.state.history1.diagnosisTime, dateFormat)} format={dateFormat} size="large" className="search_input" onChange={this.changeDagnosisTime.bind(this)} />
              </li>
            </ul>

            <ul className="search_ul2">
              <li>
                <span className="most_flex1">临床诊断</span>
                <Input onChange={this.changeDiagnosis.bind(this)} value={this.state.history1.diagnosis}  className="search_input" type="textarea" rows={4} />
              </li>
            </ul>
          </div>


          {
            this.state.history1.statusId?<div className="btn_save">
              <div className="btn_save_index">
                <Button onClick={this.saveCase.bind(this)} className="btn_save_index_2" type="primary">保存病历</Button>
              </div>
            </div>:""
          }



          <div className="prescribe">
              {
                this.state.history1.advice?this.state.history1.advice.map((ele,index)=>{
                  return (
                    <div key={index}>
                      <span onClick={this.changeHistory2.bind(this,index)} className="prescribe_sp1"> 医嘱{index+1} </span>
                      <Button type="primary" onClick={this.deleteHistory2.bind(this,index)} className="prescribe_btn1 edit_delete" size="small">
                        <Icon type="minus" />
                      </Button>
                    </div>
                  )
                }):""
              }
            {
              this.state.caseId?<Button onClick={this.addHistory2.bind(this)} className="history_btn1" type="primary" >
                <Icon type="plus" />
              </Button>:""
            }
          </div>




          {
            this.state.history2?<div className="prescribeDetail">
              <ul className="search_ul">
                <li>
                  <span className="most_flex">医嘱医院</span>
                  <Input value={this.state.history2.hospital?this.state.history2.hospital:""} onChange={this.changeAdviceHospital.bind(this)} className="search_input" size="large" placeholder="医嘱医院" />
                </li>
                <li>
                  <span className="most_flex">医嘱医生</span>
                  <Input value={this.state.history2.doctor?this.state.history2.doctor:""} onChange={this.changeAdviceDoctor.bind(this)}  className="search_input" size="large" placeholder="医嘱医生" />
                </li>
                <li>
                  <span className="most_flex">医嘱时间</span>{/*这里要加上一个判断， 判断不为空*/}
                  <DatePicker  allowClear={false} value={moment(this.state.history2.adviceTime?this.state.history2.adviceTime:"", dateFormat)} format={dateFormat}  size="large" className="search_input" onChange={this.changeAdviceTime.bind(this)} />
                </li>
                <li>
                </li>
              </ul>
              <ul className="search_ul2">
                <li>
                  <span className="most_flex1">医嘱</span>
                  <Input value={this.state.history2.advice?this.state.history2.advice:""}  onChange={this.changeAdvice.bind(this)}  className="search_input" type="textarea" rows={4} />
                </li>
              </ul>


              {
                this.state.history2.statusId?<div className="btn_save">
                  <div className="btn_save_index">
                    <Button onClick={this.saveAdvice.bind(this)} className="btn_save_index_2" type="primary">保存医嘱</Button>
                  </div>
                </div>:""
              }



              {
                this.state.data&&this.state.data.length>0?<ul className="search_ul2">
                  <li>
                    <span className="search_ul2_sp1 most_flex1">处方</span>
                    <Table  rowKey="id" className="search_input" columns={this.state.columns} dataSource={this.state.data} />
                  </li>
                </ul>:""
              }
            </div>:""
          }



          {
            this.state.fileList?<div className="record">

                <span onClick={this.alertMsg.bind(this)} className="history_sp1 record_sp1"> 病历资料 </span>
              {
                this.state.caseId?<Upload   {...props}>
                  <Button className="history_btn1">
                    <Icon type="upload" />
                  </Button>
                </Upload>:""
              }


              <Table  rowKey="id" className="fileList" columns={this.state.fileListColumns} dataSource={this.state.fileList} />
            </div>:""
          }


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
              <Button className="btn_save_index_2" type="primary" onClick={()=>this.send()}>提交</Button>
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
