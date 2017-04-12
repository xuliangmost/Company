import React,{Component} from "react"


export default class Table extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <table className="table">
                <tr>
                    {
                        this.props.dataList.map((ele,index)=>{
                            return (
                                <td className={index==0?"table_one":"table_all"} key={index}>
                                    {ele}
                                </td>
                            )
                        })
                    }
                </tr>

                <tr>
                    {
                        this.props.dataSource?this.props.dataSource.map((ele,index)=>{
                            return (
                                <td className={index==0?"table_one":"table_all"} key={index}>
                                    {ele}
                                </td>
                            )
                        }):""
                    }
                </tr>

            </table>
        )
    }

}
//现在剩下className了