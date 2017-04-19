import React,{Component} from "react"
import { Button,DatePicker,Input,Table,Transfer,Icon,Upload  } from 'antd';
import { Link } from 'react-router';
import "../../../less/editCnsulation.less"
import axios from 'axios';
import moment from 'moment';
//dataIndex  key要一样
let token=localStorage.getItem("robertUserName");

let allData={
  //会诊
  "consultation": {
    "hospital": "", //隶属医院
    "applicant": "", //会诊申请人
    "consultationName": "", //会诊名称
    "startTime": "0-0-0 00:00:00.000", //会诊时间
    "username": "", //会诊对象
    "phone": "", //会诊对象的手机号
    "identification": "", //身份证号
    "birthday": "0-0-0 00:00:00.000", //出生日期
    "famliyName": "", //陪护家属
    "familyPhone": "", //家属手机号
    "content": "" //会诊描述
  },
  //病历
  "case": [
    {
      "sn": "", //病例编号
      "hospital": "",  //病例医院
      "doctor": "", //主治医生
      "name": "", //病例名称
      "diagnosisTime": "2999-12-31 00:00:00.000", //诊治时间
      "diagnosis": "", //临床诊断
      "doc": "", //病例资料
      //医嘱
      "advice": [
        {
          "hospital": "",
          "doctor": "",
          "adviceTime": "2999-12-31 00:00:00.000",
          "advice": "",
          "处方": [
            {
              "prescriptionTime": "2999-12-31 00:00:00.000", //开方时间
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
  "doctor": [],
  "code": 200
};



const dateFormat = 'YYYY-MM-DD HH:mm:ss';
export default class LookHadReturn extends Component{
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
        alert(1)
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

  ///////////////////////////




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

  render(){
    return(
      <div className="newHidden">
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
              <DatePicker open={false} allowClear={false}  value={moment(this.state.getData.consultation.startTime, dateFormat)} format={dateFormat} size="large" className="search_input"  />

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
              <DatePicker  open={false}  allowClear={false} value={moment(this.state.getData.consultation.birthday, dateFormat)} format={dateFormat} size="large" className="search_input" />
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
                  </div>
                )
              }):""
            }

            {/*医嘱的方式与病历一样*/}
          </div>
          <div className="history_detail">{/*这里循环一个state，点击病历就切换this.setState   点击新增就让新增的这个id去setState */}
            <ul className="search_ul">
              <li>
                <span className="most_flex">病例编号</span>
                <Input value={this.state.history1.sn} className="search_input" size="large" placeholder="必填" />
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
                <Input value={this.state.history1.hospital} className="search_input" size="large" placeholder="必填"  />
              </li>
              <li>
                <span className="most_flex">主治医生</span>
                <Input value={this.state.history1.doctor} className="search_input" size="large" placeholder="主治医生"   />
              </li>
              <li>
                <span className="most_flex">病例名称</span>
                <Input value={this.state.history1.name} className="search_input" size="large" placeholder="病例名称"   />
              </li>
              <li>
                <span className="most_flex">诊治日期</span>
                <DatePicker   allowClear={false} value={moment(this.state.history1.diagnosisTime, dateFormat)} format={dateFormat} size="large" className="search_input"  />
              </li>
            </ul>

            <ul className="search_ul2">
              <li>
                <span className="most_flex1">临床诊断</span>
                <Input   value={this.state.history1.diagnosis}  className="search_input" type="textarea" rows={4} />
              </li>
            </ul>
          </div>


          <div className="prescribe">
            {
              this.state.history1.advice?this.state.history1.advice.map((ele,index)=>{
                return (
                  <div key={index}>
                    <span onClick={this.changeHistory2.bind(this,index)} className="prescribe_sp1"> 医嘱{index+1} </span>

                  </div>
                )
              }):""
            }
          </div>




          {
            this.state.history2?<div className="prescribeDetail">
              <ul className="search_ul">
                <li>
                  <span className="most_flex">医嘱医院</span>
                  <Input value={this.state.history2.hospital?this.state.history2.hospital:""}  className="search_input" size="large" placeholder="医嘱医院" />
                </li>
                <li>
                  <span className="most_flex">医嘱医生</span>
                  <Input value={this.state.history2.doctor?this.state.history2.doctor:""}  className="search_input" size="large" placeholder="医嘱医生" />
                </li>
                <li>
                  <span className="most_flex">医嘱时间</span>{/*这里要加上一个判断， 判断不为空*/}
                  <DatePicker  allowClear={false} value={moment(this.state.history2.adviceTime?this.state.history2.adviceTime:"", dateFormat)} format={dateFormat}  size="large" className="search_input" />
                </li>
                <li>
                </li>
              </ul>
              <ul className="search_ul2">
                <li>
                  <span className="most_flex1">医嘱</span>
                  <Input value={this.state.history2.advice?this.state.history2.advice:""} className="search_input" type="textarea" rows={4} />
                </li>
              </ul>


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

              <span className="history_sp1 record_sp1"> 病历资料 </span>

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
              } className="search_input" type="textarea" rows={4} />
            </li>
          </ul>
          <div className="btn_save">
            <div className="btn_save_index">
              <Link to="apply/daiShen">
                <Button type="primary">返回</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
