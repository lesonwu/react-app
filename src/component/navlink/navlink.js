import React from 'react'
//属性检测，做大型项目的时候可以避免很多问题
import PropTypes from 'prop-types'
import { TabBar } from 'antd-mobile';
import {withRouter} from 'react-router-dom'

@withRouter
class NavLinkBar extends React.Component{
    static prosTypes = {
        //必须是函数类型，必传
        data:PropTypes.array.isRequired
    }
    render(){
        //过滤掉hide
        //console.log(this.props.data)
        const navList = this.props.data.filter(v=>!v.hide)
        //console.log(navList)
        const {pathname} = this.props.location
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', bottom: 0 }}>
                <TabBar>
                    {navList.map(v=>(
                        <TabBar.Item
                            key={v.path}
                            title={v.text}
                            icon={{uri:require(`./img/${v.icon}.png`)}}
                            selectedIcon={{uri:require(`./img/${v.icon}-active.png`)}}
                            selected={pathname==v.path}
                            onPress={
                                ()=>{
                                    this.props.history.push(v.path)
                                }
                            }
                        >
                        </TabBar.Item>
                    ))}
                </TabBar>
            </div>
        )
    }
}
export default NavLinkBar
