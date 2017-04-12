import React,{Component} from "react"
import { Button,DatePicker,Input,Table } from 'antd';
import { Link } from 'react-router';
import "../../../less/looked.less"
//dataIndex  key要一样
const columns = [{
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
      <Button className="addMedicine" type="primary">新增</Button>
    </span>
  ),
}];

const data = [{
  key: '1',
  time: 'time',
  DocName: "DocName",
  MdName: 'MdName',
  num:"num",
  oneNum:"oneNum",
  ciNum:"ciNum",
  action:"新增"
}];




export default class Looked extends Component{
  constructor(props){
    super(props);
    this.state={
      history:[{}]
    }
  }

/////////////////////////

  componentDidMount() {
    this.getMock();
  }
  getMock(){
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i+1}`,
        description: `description of content${i+1}`
      };
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  };
  handleChange(targetKeys, direction, moveKeys){
    console.log(targetKeys, direction, moveKeys);
    this.setState({ targetKeys });
  };
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
      isShow:false
    })
  }
  ///////////////////////////



  onChange(date, dateString){
    console.log(date, dateString);
  }
  onCheck(e){
    console.log(e.currentTarget)
  }
  render(){
    return(
      <div>


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
              targetKeys={this.state.targetKeys}
              onChange={this.handleChange.bind(this)}
              render={this.renderItem.bind(this)}
            />
            <Button className="transfer_btn1" type="primary">确定</Button>
            <Button onClick={()=>this.quxiaohuizhenyisheng()} className="transfer_btn" type="primary">取消</Button>
          </div>:""
        }



        <div className="cnsultation_top">
          <h1>
            查看会诊
          </h1>
          <ul className="search_ul">
            <li>
              <span className="most_flex">隶属医院</span>
              <Input className="search_input" size="large" placeholder="隶属医院" />
            </li>
            <li>
              <span className="most_flex">会诊申请人</span>
              <Input className="search_input" size="large" placeholder="会诊申请人" />
            </li>
            <li>
              <span className="most_flex">会诊名称</span>
              <Input className="search_input" size="large" placeholder="会诊名称" required  />
            </li>
            <li>
              <span className="most_flex">会诊时间</span>{/*这里要加上一个判断， 判断不为空*/}
              <DatePicker  size="large" className="search_input" onChange={this.onChange} />

            </li>
          </ul>

          <ul className="search_ul">
            <li>
              <span className="most_flex">会诊对象</span>
              <Input className="search_input" size="large" placeholder="会诊对象" required  />
            </li>
            <li>
              <span className="most_flex">手机号</span>
              <Input className="search_input" size="large" placeholder="手机号" required   />
            </li>
            <li>
              <span className="most_flex">身份证号</span>
              <Input className="search_input" size="large" placeholder="身份证号" required  />
            </li>
            <li>
              <span className="most_flex">出生日期</span>
              <DatePicker size="large" className="search_input" onChange={this.onChange} />
            </li>
          </ul>

          <ul className="search_ul">
            <li>
              <span className="most_flex">陪护家属</span>
              <Input className="search_input" size="large" placeholder="陪护家属" />
            </li>
            <li>
              <span className="most_flex">手机号</span>
              <Input className="search_input" size="large" placeholder="手机号" />
            </li>

            <li>
            </li>

            <li>
            </li>
          </ul>

          <ul className="search_ul2">
            <li>
              <span className="most_flex1">会诊描述</span>
              <Input  className="search_input" type="textarea" rows={4} />
            </li>
          </ul>

        </div>



        <div className="cnsultation_bottom">
          <div className="history">
            <span className="history_sp1"> 病历1 </span>{/*病历用数组装起来，每一个病历都是一个对象，都会有id，点击新增，push一个新的对象*/}
                                                    {/*医嘱的方式与病历一样*/}
          </div>
          <div className="history_detail">{/*这里循环一个state，点击病历就切换this.setState   点击新增就让新增的这个id去setState */}
            <ul className="search_ul">
              <li>
                <span className="most_flex">病例编号</span>
                <Input className="search_input" size="large" placeholder="病例编号" />
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
                <Input className="search_input" size="large" placeholder="病例医院" required  />
              </li>
              <li>
                <span className="most_flex">主治医生</span>
                <Input className="search_input" size="large" placeholder="主治医生" required   />
              </li>
              <li>
                <span className="most_flex">病例名称</span>
                <Input className="search_input" size="large" placeholder="病例名称" required  />
              </li>
              <li>
                <span className="most_flex">诊治日期</span>
                <DatePicker size="large" className="search_input" onChange={this.onChange} />
              </li>
            </ul>

            <ul className="search_ul2">
              <li>
                <span className="most_flex1">临床诊断</span>
                <Input  className="search_input" type="textarea" rows={4} />
              </li>
            </ul>
          </div>
          <div className="prescribe">
            <span className="prescribe_sp1"> 医嘱1 </span>
          </div>

          <div className="prescribeDetail">
            <ul className="search_ul">
              <li>
                <span className="most_flex">医嘱医院</span>
                <Input className="search_input" size="large" placeholder="医嘱医院" />
              </li>
              <li>
                <span className="most_flex">医嘱医生</span>
                <Input className="search_input" size="large" placeholder="医嘱医生" />
              </li>
              <li>
                <span className="most_flex">医嘱时间</span>{/*这里要加上一个判断， 判断不为空*/}
                <DatePicker  size="large" className="search_input" onChange={this.onChange} />
              </li>
              <li>
              </li>
            </ul>
            <ul className="search_ul2">
              <li>
                <span className="most_flex1">医嘱</span>
                <Input  className="search_input" type="textarea" rows={4} />
              </li>
            </ul>

            <ul className="search_ul2">
              <li>
                <span className="search_ul2_sp1 most_flex1">处方</span>
                <Table className="search_input" columns={columns} dataSource={data} />
              </li>
            </ul>
          </div>

          <div className="record">
            <span className="history_sp1 record_sp1"> 病历资料 </span>


            {/*这里有一个小table*/}



          </div>
          <ul className="search_ul2">
            <li className="search_li_last">
              <span className="most_flex1">会诊医生</span>
              <Input className="search_input"  onFocus={()=>this.huizhenyisheng()} type="textarea" rows={4} />
            </li>
          </ul>

          <ul className="search_ul2">
            <li className="search_li_last">
              <span className="most_flex1">审核记录</span>
              <p className="search_input search_p">
                审核记录审核记录审核记录审核记录审核记录审核记录审核记录
              </p>
            </li>
          </ul>

          <ul className="search_ul2">
            <li className="search_li_last">
              <span className="most_flex1">结论记录</span>
              <p className="search_input search_p">
                结论记录结论记录结论记录结论记录结论记录结论记录结论记录结论记录结论记录
              </p>
            </li>
          </ul>


          <div className="btn_save">
            <div className="btn_save_index">
              <Link to="daiShen">
                <Button type="primary">返回</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
