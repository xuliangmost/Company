import React,{Component} from "react"
import { Button,DatePicker,Input,Table,Icon,Upload  } from 'antd';
import { Link } from 'react-router';
import "../../less/editCnsulation.less"
import "../../less/lookWaitCheck.less"
import axios from 'axios';
import tools from "../../tools/checked"
import moment from 'moment';
//dataIndex  key要一样
let token=localStorage.getItem("robertUserName");

let startTime=(function show_cur_times(){
//获取当前日期
  var date_time = new Date();
  //年
  var year = date_time.getFullYear();
  //判断小于10，前面补0
  if(year<10){
    year="0"+year;
  }

  //月
  var month = date_time.getMonth()+1;
  //判断小于10，前面补0
  if(month<10){
    month="0"+month;
  }

  //日
  var day = date_time.getDate();
  //判断小于10，前面补0
  if(day<10){
    day="0"+day;
  }

  //时
  var hours =date_time.getHours();
  //判断小于10，前面补0
  if(hours<10){
    hours="0"+hours;
  }

  //分
  var minutes =date_time.getMinutes();
  //判断小于10，前面补0
  if(minutes<10){
    minutes="0"+minutes;
  }

  //秒
  var seconds=date_time.getSeconds();
  //判断小于10，前面补0
  if(seconds<10){
    seconds="0"+seconds;
  }

  //拼接年月日时分秒
  return (year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds)
})();


let allData={
  //会诊
  "consultation": {
    "hospital": "", //隶属医院
    "applicant": "", //会诊申请人
    "consultationName": "", //会诊名称
    "startTime": "2017-04-17", //会诊时间
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
export default class LookConsultationTask extends Component{
  constructor(props){
    super(props);
    this.state={
      consultationId:this.props.params.id.toString(),
      userId:null,
      getData:allData,
      mockData: [],//会诊医生弹出框左边的选项
      targetTitle:[],//确定按钮的中间变量，点击确定才把医生放到input框
      targetKeys: [],//会诊医生弹出框右边的选项
      //以上是  呵呵呵呵呵
      history1:allData.case[0],//当前显示的病历
      history1Index:0,//当前显示的病历的下标
      history2:allData.case[0].advice[0]?allData.case[0].advice[0]:[],//当前显示的医嘱
      columns :[
        {
          title: '开方时间',
          dataIndex: 'prescriptionTime',
          key: 'prescriptionTime'
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
      //下面的这个是病历资料表头
      fileListColumns :[
        {
          title: '文件名',
          dataIndex: 'diagnosis',
          key: 'diagnosis'
        },
        {
          title: '大小',
          dataIndex: 'doctorName',
          key: 'doctorName',
        },
        {
          title: '上传时间',
          dataIndex: 'diagnosisTime',
          key: 'diagnosisTime',
        },
        {
          title: '操作',
          key: 'action',
          render: (text, record) => (
            <span>
               <a href={record.doc} download={record.diagnosis}>下载</a>
               <a href={record.doc}>查看</a>
            </span>
          ),
        }
      ],
      fujianText:"",//
      meetingId:null,
      fileList:[],//病历资料集合
      checkColumns :[
        {
          title: '审核时间',
          dataIndex: 'checkTime',
          key: 'checkTime',
          render: (text) => (
            <span>{ text.split("T").join(" ").split(".").splice(0,1)}</span>
          )

        },
        {
          title: '操作人',
          dataIndex: 'assistantName',
          key: 'assistantName',
        },
        {
          title: '审核结果',
          dataIndex: 'checkResult',
          key: 'checkResult',
        },
        {
          title: '退回原因',
          dataIndex: 'returnReason',
          key: 'returnReason',
        }
      ],
      showJoin:false,
      conclusionColumns :[
        {
          title: '时间',
          dataIndex: 'creatTime',
          key: 'creatTime',
          render: (text) => (
            <span>{ text.split("T").join(" ").split(".").splice(0,1)}</span>
          )
        },
        {
          title: '操作人',
          dataIndex: 'doctorName',
          key: 'doctorName',
        },
        {
          title: '会诊结论',
          dataIndex: 'message',
          key: 'message',
        },
        {
          title: '操作',
          key: 'action',
          render: (text, record) => (
            <span>
               <a href={record.doc} download={record.docName}>下载</a>
            </span>
          ),
        }
      ],
      conclusion:[],
      oldData:{//固定的，处方增加按钮的一项
        id: '0',
        "prescriptionTime": "-", //开方时间
        "doctorName": "-", //开方医生姓名
        "medicineTime": "-",//药品名称
        "total": "-", //总量
        "singleDose": "-",//单次用量
        "frequency": "-"//次/日
      },
      checkData:[],
      data:[{
        id: ' ',
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
      joinTo:true
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

  joinTo(id){
    let that=this;
    axios.request({
      url: '/api/conference/jointo',
      method: 'get',
      params: {
        userId:id
      },
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(function (res) {
      if(res.data.code===1){
        that.setState({
          joinTo:false
        })
      }
    })
  }
  getValue(){
    let that=this;
    let responseDoc=[];
    axios.request({
      url: '/api/conference/page',
      method: 'get',
      params: {
        id:that.props.params.id
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

      if(getData.case&&getData.case!=false&&getData.case[0].advice!=false){
        getData.case[0].advice[0].prescription?getData.case[0].advice[0].prescription.map((ele)=>{
          data.push(ele);
        }):"";
      }else{
        getData.case=allData.case;
        getData.case[0].advice[0].prescription?getData.case[0].advice[0].prescription.map((ele)=>{
          data.push(ele);
        }):"";
      }

      let conclusion=getData.conclusion?getData.conclusion:[];//获取结论
      let checkData=getData.check?getData.check:[];
      console.log(getData)
      that.setState({
        getData:getData,
        history1:getData.case[0],
        history2:getData.case[0].advice?response.data.case[0].advice[0]:null,
        targetdoc:response.data.doctor,//加载页面时，会诊医生栏显示的内容
        data:data,
        conclusion,
        checkData,
        meetingId:getData.consultation.conId,
        userId:getData.consultation.userId
      });
      that.joinTo(getData.consultation.userId.toString());
      //因为异步的原因，所以只能在回调函数里面放数据请求了
      //that.getPeople();
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

    });

    //页面加载时获取医生列表
  }

  componentDidMount() {

    this.getValue();
  }
  returnList(){
    location.hash="/check/waitCheck/waitCheck"
  }
  changeText(e){
    let Text=this.state.fujianText;
    Text=e.target.value;
    this.setState({
      fujianText:Text
    })
  }
  changeReturn(e){
    let returnReason=this.state.returnReason;
    returnReason=e.target.value;
    this.setState({
      returnReason
    })
  }

  huizhenjielun(){
    this.setState({
      isShow:true
    })
  }
  listReturn(){
    location.hash="/task/consultationTask"
  }
  closeMeeting(){
    let that=this;
    axios({
      url: '/api/conference/joinToUpdate',
      method: 'get',
      params:{
        userId:that.state.userId,
        consultationId:that.state.consultationId
      },
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      }
    }).then(function (response) {
      if(response.data.code===200){
        alert("结束会诊成功");
        location.hash="task/consultationTask"
      }
    }).catch(function () {
      alert("结束会诊操作失败")
    })
  }
  quxiaoFujian(){
    this.setState({
      isShow:false
    })
  }
  confirmFujian(){//上传会诊结论
    this.setState({
      isShow:false
    });
    let that=this;

    let data = {
      cId:this.props.params.id,
      message:this.state.fujianText, //会诊结论
      fileName:	this.state.fileName,
      url:this.state.fileUrl   //附件URL
    };
    axios({
      url: '/api/conference/add/conclusion',
      method: 'POST',
      data: data,
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      }
    }).then(function (response) {
      alert("添加会诊结论成功");
      location.hash="task/consultationTask"

    }).catch(function (err) {
      alert("请完善会诊结论");
      //渲染会诊结论
      let conclusion=that.state.conclusion;

      conclusion=that.state.responseData.conclusion;
      that.setState({
        conclusion:conclusion
      });
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



  changeHistory1(index){        //切换病历
    let data=[];
    if(this.state.getData.case[index].advice&&this.state.getData.case[index].advice!=false){
      if(this.state.getData.case[index].advice[0].prescription&&this.state.getData.case[index].advice[0].prescription!=false){
        this.state.getData.case[index].advice[0].prescription.map((ele)=>{
          data.push(ele);
        })
      }else{
        data=null
      }
    }else{
      data=null
    }

    console.log(data);
    this.setState({
      history1:this.state.getData.case[index],
      history1Index:index,
      history2:this.state.getData.case[index].advice?this.state.getData.case[index].advice[0]:null,
      data:data
    })
  }
  changeHistory2(index){        //切换医嘱
    let history2=this.state.history1.advice?this.state.history1.advice[index]:null;
    let data=[];
    if(history2.prescription&&history2.prescription!=false){
      history2.prescription.map((ele)=>{
        data.push(ele);
      })
    }else{
      data=null
    }
    this.setState({
      history2:this.state.history1.advice?this.state.history1.advice[index]:null,
      data:data
    })
  }

  render(){
    let that=this;
    let consultationConclusionId=this.props.params.id;
    const props = {
      action: '/upload/consultationConclusion/'+consultationConclusionId,
      headers:{
        "Authorization":"Bearer "+token
      },
      onChange({file, fileList}) {
        if (file.status !== 'uploading') {
          let fileName=file.response.result[0].fileName;
          let  fileUrl=file.response.result[0].url;
          that.setState({
            fileList: fileList,
            fileName: fileName,
            fileUrl:fileUrl
          })
        }
      },
      defaultFileList: [],
    };

    return(
      <div className="newHidden">

        <div className="cnsultation_top">
          <h1>
            会诊任务
          </h1>
          <ul className="search_ul">
            <li>
              <span className="most_flex">隶属医院</span>
              <Input value={this.state.getData.consultation.hospitalname} className="search_input" size="large" placeholder="隶属医院" />
            </li>
            <li>
              <span className="most_flex">会诊申请人</span>
              <Input value={this.state.getData.consultation.applyName} className="search_input" size="large" placeholder="会诊申请人" />
            </li>
            <li>
              <span className="most_flex">会诊名称</span>
              <Input value={this.state.getData.consultation.consultationName} className="search_input" size="large" placeholder="会诊名称" required  />
            </li>
            <li>
              <span className="most_flex">会诊时间</span>{/*这里要加上一个判断， 判断不为空*/}
              <DatePicker open={false} onChage={()=>this.startTime()} value={moment(this.state.getData.consultation.startTime, dateFormat)} format={dateFormat} size="large" className="search_input" onChange={this.onChange} />

            </li>
          </ul>

          <ul className="search_ul">
            <li>
              <span className="most_flex">会诊对象</span>
              <Input value={this.state.getData.consultation.username} className="search_input" size="large" placeholder="会诊对象" required  />
            </li>
            <li>
              <span className="most_flex">手机号</span>
              <Input value={this.state.getData.consultation.phone} className="search_input" size="large" placeholder="手机号" required   />
            </li>
            <li>
              <span className="most_flex">身份证号</span>
              <Input value={this.state.getData.consultation.identification} className="search_input" size="large" placeholder="身份证号" required  />
            </li>
            <li>
              <span className="most_flex">出生日期</span>
              <DatePicker open={false} value={moment(this.state.getData.consultation.birthday, dateFormat)} format={dateFormat} size="large" className="search_input" onChange={this.onChange} />
            </li>
          </ul>

          <ul className="search_ul">
            <li>
              <span className="most_flex">陪护家属</span>
              <Input value={this.state.getData.consultation.famliyName} className="search_input" size="large" placeholder="陪护家属" />
            </li>
            <li>
              <span className="most_flex">手机号</span>
              <Input value={this.state.getData.consultation.familyPhone} className="search_input" size="large" placeholder="手机号" />
            </li>

            <li>
            </li>

            <li>
            </li>
          </ul>

          <ul className="search_ul2">
            <li>
              <span className="most_flex1">会诊描述</span>
              <Input value={this.state.getData.consultation.content} className="search_input" type="textarea" rows={4} />
            </li>
          </ul>

        </div>



        <div className="cnsultation_bottom">
          <div className="history">
            {
              this.state.getData.case?this.state.getData.case.map((ele,index)=>{
                return (
                  <div key={index}>
                    <span onClick={this.changeHistory1.bind(this,index)} className="history_sp1">病历 {index+1} </span>
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
                <Input value={this.state.history1.sn} className="search_input" size="large" placeholder="病例编号" />
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
                <Input value={this.state.history1.hospital} className="search_input" size="large" placeholder="病例医院" required  />
              </li>
              <li>
                <span className="most_flex">主治医生</span>
                <Input value={this.state.history1.doctor} className="search_input" size="large" placeholder="主治医生" required   />
              </li>
              <li>
                <span className="most_flex">病例名称</span>
                <Input value={this.state.history1.name} className="search_input" size="large" placeholder="病例名称" required  />
              </li>
              <li>
                <span className="most_flex">诊治日期</span>
                <DatePicker open={false} value={moment(this.state.history1.diagnosisTime, dateFormat)} format={dateFormat} size="large" className="search_input" onChange={this.onChange} />
              </li>
            </ul>

            <ul className="search_ul2">
              <li>
                <span className="most_flex1">临床诊断</span>
                <Input value={this.state.history1.diagnosis}  className="search_input" type="textarea" rows={4} />
              </li>
            </ul>
          </div>

          {
            this.state.history1.advice.length>0?<div className="prescribe">
              {
                this.state.history1.advice?this.state.history1.advice.map((ele,index)=>{
                  return (
                    <div key={index}>
                      <span onClick={this.changeHistory2.bind(this,index)} className="prescribe_sp1"> 医嘱{index+1} </span>
                    </div>
                  )
                }):""
              }
            </div>:""
          }

          {
            this.state.history2?<div className="prescribeDetail">
              <ul className="search_ul">
                <li>
                  <span className="most_flex">医嘱医院</span>
                  <Input value={this.state.history2.hospital?this.state.history2.hospital:""} className="search_input" size="large" placeholder="医嘱医院" />
                </li>
                <li>
                  <span className="most_flex">医嘱医生</span>
                  <Input value={this.state.history2.doctor?this.state.history2.doctor:""} className="search_input" size="large" placeholder="医嘱医生" />
                </li>
                <li>
                  <span className="most_flex">医嘱时间</span>{/*这里要加上一个判断， 判断不为空*/}
                  <DatePicker open={false} value={moment(this.state.history2.adviceTime?this.state.history2.adviceTime:"", dateFormat)} format={dateFormat}  size="large" className="search_input" onChange={this.onChange} />
                </li>
                <li>
                </li>
              </ul>
              <ul className="search_ul2">
                <li>
                  <span className="most_flex1">医嘱</span>
                  <Input value={this.state.history2.advice?this.state.history2.advice:""}  className="search_input" type="textarea" rows={4} />
                </li>
              </ul>


              <ul className="search_ul2">
                <li>
                  <span className="search_ul2_sp1 most_flex1">处方</span>
                  {
                    this.state.data?<Table rowKey="id" className="search_input" columns={this.state.columns} dataSource={this.state.data} />:<li className="search_input">

                    </li>
                  }

                </li>
              </ul>

            </div>:""
          }




          <div className="record">
            <span className="history_sp1 record_sp1"> 病历资料 </span>
            {
             this.state.fileList.length>0?<Table rowKey="id" dataSource={this.state.fileList} columns={this.state.fileListColumns} />: <span className="history_btn1"> 无病历资料 </span>
             }

          </div>



          {
            this.state.targetdoc&&this.state.targetdoc!=false? <ul className="search_ul2">
              <li className="search_li_last">
                <span className="one_title">会诊医生</span>
                <Input value={
                  this.state.targetdoc.map((ele)=>{
                    return ele.doctorName
                  })
                } className="search_input" type="textarea" rows={4} />
              </li>
            </ul>:""
          }





          {
            //这里面写判断有没有审核记录
            this.state.checkData.length>0?<ul className="search_ul2">
              <li className="search_li_last">
                <span className="one_title">审核记录</span>
                <Table rowKey="id"  className="search_input"  columns={this.state.checkColumns} dataSource={this.state.checkData} />
              </li>
            </ul>:""
          }





          {
            //这里面写判断有没有结论记录
            this.state.conclusion.length>0?<div className="conclusion_show">
                <span className="one_title">结论记录</span>
                <span className="one_title">
                  <button className="btn_huizhen" onClick={()=>this.huizhenjielun()}>
                      <Icon type="upload"/>
                  </button>
                </span>
                <Table rowKey="id" className="search_input search_input_task"  columns={this.state.conclusionColumns} dataSource={this.state.conclusion} />
            </div>:""
          }



          {
            this.state.isShow?<div className="huizhenDivDiv"><div className="huizhenDiv">
              <Input type="textarea" value={this.state.fujianText} onChange={this.changeText.bind(this)}  rows={4} placeholder="请输入会诊结论(每人限一条)"/>


              <Upload {...props}>
                <Button className="history_btn1">
                  <Icon type="upload"/>
                </Button>
              </Upload>
              <ul>
                {
                  this.state.fileList.map((ele, index) => {
                    return <li key={index}>{ ele.name }</li>
                  })

                }
              </ul>
              <div className="btn_fujian">
                <button onClick={()=>this.confirmFujian()}>确认</button>
                &nbsp;
                <button onClick={()=>this.quxiaoFujian()}>取消</button>
              </div>
            </div></div>:""
          }
          <div className="btn_save">
            <div className="btn_save_index">
              {
                this.state.meetingId?<a href={"http://192.168.100.133:8787/conference/#/mainFrame/personMeeting/addMeeting/"+this.state.meetingId+"/1"} target="blank">
                  <Button disabled={!tools.Calculation(this.state.getData.consultation.startTime.split("T").join(" "),startTime)} type="primary">参加会诊</Button>&nbsp;
                </a>:""
              }
              {
                this.state.joinTo?<Button onClick={this.closeMeeting.bind(this)} type="primary">会诊结束 &ensp; </Button>:""
              }
              <Button type="primary" onClick={()=>this.listReturn()}>返回</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
