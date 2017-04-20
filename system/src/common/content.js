import React,{Component} from "react"

export default class Content extends Component{
  constructor(props){
    super(props);
    this.state={
      loginName:''
    }
  }
  render(){
    return(
      <div>
       <h1>
         欢迎来到远程视界
       </h1>
      </div>
    )
  }
}
