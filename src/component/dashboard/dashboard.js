import React from 'react'
import {connect} from 'react-redux'
import { NavBar } from 'antd-mobile';
import {Switch,Route} from 'react-router-dom'
import NavlinkBar from '../navlink/navlink'
import Boss from '../../component/boss/boss'
import Genius from '../../component/genius/genius'
import Msg from '../../component/msg/msg'
import Mine from '../../component/mine/mine'


@connect(
    state=>state
)
class Dashboard extends React.Component{
    render(){
        // 本身是路由组件，可以直接用this.props.location
        const {pathname} = this.props.location
        const user = this.props.user;
        const navList = [
            {
                path:'/boss',
                text:'boss',
                icon:'boss',
                title:'boss',
                component:'Boss',
                hide:user.type == 'genius'
            },
            {
                path:'/genius',
                text:'牛人',
                icon:'genius',
                title:'牛人列表',
                component:'Genius',
                hide:user.type == 'boss'
            },
            {
                path:'/msg',
                text:'消息',
                icon:'msg',
                title:'消息列表',
                component:'Msg'
            },
            {
                path:'/mine',
                text:'我的',
                icon:'mine',
                title:'个人中心',
                component:'Mine'
            }
        ]
        return (
            <div>
                <NavBar className="fixd-header" mode="dark">{navList.find(v=>v.path==pathname).title}</NavBar>
                <div style={{marginTop:45}}>
                    <Switch>
                        {/*{navList.map(v=>(*/}
                            {/*<Route key={v.path} path={v.path} component={v.component}></Route>*/}
                        {/*))}*/}
                        <Route path="/boss" component={Boss}></Route>
                        <Route path="/genius" component={Genius}></Route>
                        <Route path="/msg" component={Msg}></Route>
                        <Route path="/mine" component={Mine}></Route>
                    </Switch>
                </div>
                <NavlinkBar data={navList}></NavlinkBar>
            </div>
        )
    }
}
export default Dashboard