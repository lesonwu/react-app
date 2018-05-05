import React from 'react'
import axios from 'axios'
import { Card, WingBlank,WhiteSpace } from 'antd-mobile';

class Boss extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        axios.get('/user/list?type=genius')
            .then(res=>{
                if(res.data.code==0){
                    // console.log("请求回来数据："+res.data.data[0].user)
                    this.setState({data:res.data.data})
                }
            })
    }
    render(){
        const Header = Card.Header
        const Body = Card.Body
        const dataList = this.state.data
        return (
            <WingBlank>
                {dataList.map(v=>(
                    //有头像则显示，没有头像则不显示
                    <Card key={v._id}>
                        <Header title={v.user} thumb={require(`../img/${v.avatar}.png`)} extra={<span>{v.title}</span>}/>
                        <Body>
                            {v.desc}
                        </Body>
                    </Card>
                ))}
            </WingBlank>
        )
    }
}
export default Boss

