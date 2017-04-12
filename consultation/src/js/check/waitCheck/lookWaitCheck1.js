import React,{Component} from "react"
import { Button,DatePicker,Input,Table,Transfer,Icon,Upload  } from 'antd';
import { Link } from 'react-router';
import "../../../less/editCnsulation.less"
import "../../../less/lookWaitCheck.less"
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
export default class LookWaitCheck extends Component{
  // componentWillMount(){
  //   let url=location.href;
  //   url = url.split('/');
  //   let m=url.length;
  //   let mm=url[m-1]
  //   console.log("111111111111111111111111")
  //   console.log(mm);
  //   let allData=this.state.allData;
  //   allData.consultation.id=mm;
  //   this.setState({
  //     allData:allData
  //   })
  //
  // }

  constructor(props){
    super(props);
    this.state={
      consultationId:1,
      getData:allData,
      isShow:false,
      isShowBiaoji:false,
      isShow1:true,
      returnReason:"",
      responseData:{},
      mockData: [],//会诊医生弹出框左边的选项
      targetTitle:[],//确定按钮的中间变量，点击确定才把医生放到input框
      targetKeys: [],//会诊医生弹出框右边的选项
      //以上是  呵呵呵呵呵
      history1:allData.case[0],//当前显示的病历
      history1Index:0,//当前显示的病历的下标
      history2:allData.case[0].advice[0]?allData.case[0].advice[0]:[],//当前显示的医嘱
      //数据
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
          dataIndex: 'fileName',
          key: 'fileName'
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
        },
        {
          title: '操作',
          key: 'action',
          render: (text, record) => (
            <span>
               <a href={record.url} download={record.fileName}>下载</a>&nbsp;
               <a target="blank" href={record.url}>查看</a>
            </span>
          ),
        }
      ],

      fileList:[//病历资料集合,拿到后台数据后清空
        // {
        //   "fileName" : "shadow.png",//文件名
        //   "uploadTime" : "2030-3-24 14:46:59",//上传时间
        //   "fileSize" : "1467",//文件大小（字节）
        //   "url" : "/upload/2017/3/44/13/shadow.png",//url 即病例中的doc
        // },
        // {
        //   "fileName" : "shadow.png",//文件名
        //   "uploadTime" : "2017-3-24 14:46:59",//上传时间
        //   "fileSize" : "1443",//文件大小（字节）
        //   "url" : "/upload/2017/3/44/13/shadow.png",//url 即病例中的doc
        // }
      ],
      //会诊医生表头
      doctor :[
        {
          title: '姓名',
          dataIndex: 'doctorName',
          key: 'doctorName'
        },
        {
          title: '医院',
          dataIndex: 'hospitalName',
          key: 'hospitalName',
        }
      ],
      doctorList:[],//会诊医生集合
      checkColumns :[//审核记录表头
        {
          title: '时间',
          dataIndex: 'checkTime',
          key: 'checkTime'
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
      checkData:[],//审核记录集合
      conclusionColumns :[
        {
          title: '时间',
          dataIndex: 'creatTime',
          key: 'creatTime'
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

    }
  }

/////////////////////////

  componentDidMount(){
    this.query()
  }
  query(){
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
      getData.consultationId=that.props.params.id;
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
      let history1=getData.case?getData.case[0]:null;
      let history2=history1&&history1.advice?history1.advice[0]:null;
      that.setState({
        getData:getData,
        history1,
        history2,
        targetdoc:getData.doctor?getData.doctor:[],//加载页面时，会诊医生栏显示的内容
        data:data,
        conclusion,
        checkData
      });
      axios.request({
        url: '/api/conference/judge',
        method: 'get',
        params:{
          id:that.props.params.id
        },
        headers: {
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        },
      }).then(function(response) {

         console.log(response)
        if (response.data.code==300){//判断本医院是否已经有人审核过该会诊
          let aaa=that.state.responseData;
          let checkdata=that.state.checkData;
          checkdata=aaa.check;
          that.setState({
              isShow1:false,
              checkData:checkdata
          })
        }
      }).catch(function () {
           alert("判断医院出错");
      })

    });

  }
  tuihuiDiv(){
    this.setState({
      isShowBiaoji:true
    })
  }
  changeReturn(e){
    let returnReason=this.state.returnReason;
    returnReason=e.target.value;
    this.setState({
      returnReason
    })
  }
  conFirmReturn(){
    let that=this;
    let checkdata=this.state.checkData;
    this.setState({
       isShowBiaoji:false,
       checkData:checkdata
    })
    axios.request({
      url: '/api/conference/check/back',
      method: 'post',
      params:{
        id:1,
        returnReason:that.state.returnReason
      },
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(function(response) {

       location.hash="/check/waitCheck/waitCheck"

    }).catch(function(){
        alert("退回出错")
    })
  }
  quXiao(){
     this.setState({
       isShowBiaoji:false
     })
  }
  returnList(){
    location.hash="/check/waitCheck/waitCheck"
  }
  changeHistory1(index){        //切换病历
    let data=[];
    let fileList=[];

    let responsedata=this.state.responseData;

    //console.log(this.state.responseData);
    for (let i=0; i<responsedata.case[index].file.length; i++){//病历资料还未取到
            // console.log("输出file");
            // console.log(responsedata.case[index].file[i]);
             fileList.push(responsedata.case[index].file[i]);

    }

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

    this.setState({
      history1:this.state.getData.case[index],
      history1Index:index,
      history2:this.state.getData.case[index].advice?this.state.getData.case[index].advice[0]:null,
      data:data,
      fileList:fileList

    })
    console.log(responsedata);
    console.log("输出filelist的数组对象");
    console.log(fileList);
    console.log(data);
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
  conFirm(){
    let aaa=this.state.responseData
    let checkdata=this.state.checkData;
    let that=this
    checkdata=aaa.check;
    console.log(aaa);

    axios.request({
      url: '/api/conference/check/sure',
      method: 'post',
      params:{
        id:135
      },
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/x-www-form-urlencoded UTF-8'
      },
    }).then(function(response) {
           location.hash="/check/waitCheck/waitCheck"
            that.setState({
              checkData:checkdata
            })
    }).catch(function(){
        alert("会诊确认出错");
    })
  }

  render(){
    let Height=document.body.clientHeight;
    let Width=document.body.clientWidth;
    let style1={"height":Height,"width":Width}
    let that=this;
    const props = {//上传的事件
      action: '//jsonplaceholder.typicode.com/posts/',
      onChange({ file, fileList }) {
        if (file.status !== 'uploading') {
          console.log(file, fileList);
          that.setState({
            fileList:fileList
          })
        }
      },
      defaultFileList: [],
    };

    return(
      <div className="newHidden">

        <div className="cnsultation_top">
          <h1>
            查看会诊
          </h1>
          <ul className="search_ul">
            <li>
              <span className="most_flex">隶属医院</span>
              <Input value={this.state.getData.consultation.hospital} readOnly className="search_input" size="large" placeholder="隶属医院" />
            </li>
            <li>
              <span className="most_flex">会诊申请人</span>
              <Input value={this.state.getData.consultation.applicant} readOnly  className="search_input" size="large" placeholder="会诊申请人" />
            </li>
            <li>
              <span className="most_flex">会诊名称</span>
              <Input value={this.state.getData.consultation.consultationName} readOnly  className="search_input" size="large" placeholder="会诊名称" required  />
            </li>
            <li>
              <span className="most_flex">会诊时间</span>{/*这里要加上一个判断， 判断不为空*/}
              <DatePicker  allowClear={false} onChage={()=>this.startTime()} value={moment(this.state.getData.consultation.startTime, dateFormat)} format={dateFormat} size="large" className="search_input" onChange={this.onChange} />

            </li>
          </ul>

          <ul className="search_ul">
            <li>
              <span className="most_flex">会诊对象</span>
              <Input value={this.state.getData.consultation.username} readOnly  className="search_input" size="large" placeholder="会诊对象" required  />
            </li>
            <li>
              <span className="most_flex">手机号</span>
              <Input value={this.state.getData.consultation.phone} readOnly  className="search_input" size="large" placeholder="手机号" required   />
            </li>
            <li>
              <span className="most_flex">身份证号</span>
              <Input value={this.state.getData.consultation.identification} readOnly  className="search_input" size="large" placeholder="身份证号" required  />
            </li>
            <li>
              <span className="most_flex">出生日期</span>
              <DatePicker  allowClear={false} value={moment(this.state.getData.consultation.birthday, dateFormat)} format={dateFormat} size="large" className="search_input" onChange={this.onChange} />
            </li>
          </ul>

          <ul className="search_ul">
            <li>
              <span className="most_flex">陪护家属</span>
              <Input value={this.state.getData.consultation.famliyName} readOnly  className="search_input" size="large" placeholder="陪护家属" />
            </li>
            <li>
              <span className="most_flex">手机号</span>
              <Input value={this.state.getData.consultation.familyPhone} readOnly  className="search_input" size="large" placeholder="手机号" />
            </li>

            <li>
            </li>

            <li>
            </li>
          </ul>

          <ul className="search_ul2">
            <li>
              <span className="most_flex1">会诊描述</span>
              <Input value={this.state.getData.consultation.content} readOnly  className="search_input" type="textarea" rows={4} />
            </li>
          </ul>

        </div>



        <div className="cnsultation_bottom">
          <div className="history">
            {
              this.state.getData.case?this.state.getData.case.map((ele,index)=>{
                  return (
                    <div key={index}>
                      <span onClick={this.changeHistory1.bind(this,index)} className="history_sp1"> 病历{index+1} </span>
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
                <Input value={this.state.history1.sn} readOnly  className="search_input" size="large" placeholder="病例编号" />
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
                <Input value={this.state.history1.hospital} readOnly  className="search_input" size="large" placeholder="病例医院" required  />
              </li>
              <li>
                <span className="most_flex">主治医生</span>
                <Input value={this.state.history1.doctor} readOnly  className="search_input" size="large" placeholder="主治医生" required   />
              </li>
              <li>
                <span className="most_flex">病例名称</span>
                <Input value={this.state.history1.name} readOnly  className="search_input" size="large" placeholder="病例名称" required  />
              </li>
              <li>
                <span className="most_flex">诊治日期</span>
                <DatePicker  allowClear={false} value={moment(this.state.history1.diagnosisTime, dateFormat)} format={dateFormat} size="large"  readOnly className="search_input" onChange={this.onChange} />
              </li>
            </ul>

            <ul className="search_ul2">
              <li>
                <span className="most_flex1">临床诊断</span>
                <Input value={this.state.history1.diagnosis}  readOnly  className="search_input" type="textarea" rows={4} />
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
                    <Input value={this.state.history2.hospital?this.state.history2.hospital:""} readOnly  className="search_input" size="large" placeholder="医嘱医院" />
                  </li>
                  <li>
                    <span className="most_flex">医嘱医生</span>
                    <Input value={this.state.history2.doctor?this.state.history2.doctor:""} readOnly  className="search_input" size="large" placeholder="医嘱医生" />
                  </li>
                  <li>
                    <span className="most_flex">医嘱时间</span>{/*这里要加上一个判断， 判断不为空*/}
                    <DatePicker  allowClear={false} value={moment(this.state.history2.adviceTime?this.state.history2.adviceTime:"", dateFormat)} format={dateFormat}  size="large" readOnly  className="search_input" onChange={this.onChange} />
                  </li>
                  <li>
                  </li>
                </ul>
                <ul className="search_ul2">
                  <li>
                    <span className="most_flex1">医嘱</span>
                    <Input value={this.state.history2.advice?this.state.history2.advice:""}  readOnly  className="search_input" type="textarea" rows={4} />
                  </li>
                </ul>


                <ul className="search_ul2">
                  <li>
                    <span className="search_ul2_sp1 most_flex1">处方</span>
                    {
                      this.state.data?<Table rowKey="id" readOnly  className="search_input" columns={this.state.columns} dataSource={this.state.data} />:<li  readOnly className="search_input">

                        </li>
                    }

                  </li>
                </ul>

              </div>:""
          }




          {/*<div className="record">*/}
            {/*<span className="history_sp1 record_sp1"> 病历资料 </span>*/}
            {/*{*/}
             {/*this.state.fileList.length>0?<Table rowKey="id" dataSource={this.state.fileList} columns={this.state.fileListColumns} />: <span className="history_btn1"> 无病历资料 </span>*/}
             {/*}*/}
          {/*</div>*/}


          {
            //这里面写判断有没有审核记录
            this.state.fileList.length>0?<ul className="search_ul2">
                <li className="search_li_last">
                  <span className="one_title">病历资料</span>
                  <Table  className="search_input"  columns={this.state.fileListColumns} dataSource={this.state.fileList} />
                </li>
              </ul>:""
          }
          {
            //这里面写判断有没有会诊医生
            this.state.doctorList.length>0?<ul className="search_ul2">
                <li className="search_li_last">
                  <span className="one_title">会诊医生</span>
                  <Table  className="search_input"  columns={this.state.doctor} dataSource={this.state.doctorList} />
                </li>
              </ul>:""
          }
          {
            //这里面写判断有没有审核记录
            this.state.checkData.length>0?<ul className="search_ul2">
                <li className="search_li_last">
                  <span className="one_title">审核记录</span>
                  <Table  className="search_input"  columns={this.state.checkColumns} dataSource={this.state.checkData} />
                </li>
              </ul>:""
          }





          {
            //这里面写判断有没有结论记录
            this.state.conclusion.length>0?<ul className="search_ul2">
                <li className="search_li_last">
                  <span className="one_title">结论记录</span>
                  <Table className="search_input"  columns={this.state.conclusionColumns} dataSource={this.state.conclusion} />
                </li>
              </ul>:""
          }






          <div className="btn_save">

            <div className="btn_save_index">
              {
                this.state.isShow1?<div className="btn_div1">
                  <Button type="primary" onClick={() => this.conFirm()}>会诊确认</Button> &nbsp;
                  <Button type="primary" onClick={() => this.tuihuiDiv()}>标记退回</Button>&nbsp;
                </div>:""
              }
              <div className="btn_div1">
                  <Button type="primary" onClick={()=>this.returnList()}>取消</Button>
              </div>
            </div>
          </div>

          {
            this.state.isShowBiaoji?<div className="returnDiv">
                <Input type="textarea" value={this.state.returnReason} onChange={this.changeReturn.bind(this)} rows={4} placeholder="请输入退回原因"/>
                <div className="btn_return_div">
                  <Button type="primary" className="btn_one" onClick={()=>this.conFirmReturn()}>确认退回</Button>&nbsp;
                  <Button type="primary" onClick={()=>this.quXiao()}>取消</Button>
                </div>
              </div>:""
          }


        </div>
      </div>
    )
  }
}
