/**
 * Created by Administrator on 2016/9/18.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import { TabBar } from 'antd-mobile';
import {setFootBarSelect} from '../../redux/action';
class FootBar extends Component{
    render() {
        const {footBar,dispatch}=this.props;
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#00bb9c"
                barTintColor="white"
                hidden={footBar.hidden}
            >
                <TabBar.Item
                    title="首页"
                    key="首页"
                    icon={{ uri: './lib/tabBarSvg/index.svg' }}
                    selectedIcon={{ uri: './lib/tabBarSvg/index_select.svg' }}
                    selected={footBar.selectedTab === 'index'}
                    onPress={() => {
                        dispatch(setFootBarSelect("index"));
                        hashHistory.push('index')
                    }}
                >

                </TabBar.Item>
                <TabBar.Item
                    icon={{ uri: './lib/tabBarSvg/finance.svg' }}
                    selectedIcon={{ uri: './lib/tabBarSvg/finance_select.svg' }}
                    title="财政"
                    key="财政"
                    selected={footBar.selectedTab === 'finance'}
                    onPress={() => {
                        dispatch(setFootBarSelect("finance"));
                        hashHistory.push('finance')
                    }}
                >

                </TabBar.Item>
                <TabBar.Item
                    icon={{ uri: './lib/tabBarSvg/report.svg' }}
                    selectedIcon={{ uri: './lib/tabBarSvg/report_select.svg' }}
                    title="报表"
                    key="报表"
                    selected={footBar.selectedTab === 'report'}
                    onPress={() => {
                        dispatch(setFootBarSelect("report"));
                        hashHistory.push('report')
                    }}
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={{ uri: './lib/tabBarSvg/mine.svg' }}
                    selectedIcon={{ uri: './lib/tabBarSvg/mine_select.svg' }}
                    title="个人中心"
                    key="个人中心"
                    selected={footBar.selectedTab === 'mine'}
                    onPress={() => {
                        dispatch(setFootBarSelect("mine"));
                        hashHistory.push('mine')
                    }}
                >
                </TabBar.Item>
            </TabBar>
        );
    }
}
export default connect(state=>({
    footBar:state.footBar
}))(FootBar)
