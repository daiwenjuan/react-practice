/**
 *  Created by daiwenjuan on 17/9/21 下午5:57.
 */
import '../../style/base.less'
import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { message } from 'antd'

import Header from './header'
import Footer from './footer'
import LeftNav from './leftNav'
import RightAside from './rightAside'
import TabList from './tabList'
import Extra from './extra'

export default class App extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      pageHeight : 0,
      isLeftNavMini : false
    }
  }

  isLeftNavMini = (val) => {

  }

  render() {
    const { location, children } = this.props
    return (
      <div id="container" className="effect easeInOutBack mainnav-lg aside-bright">
        <Header/>
        <div className="boxed">
          <div className={this.state.isLeftNavMini ? 'boxed boxed-mini' : 'boxed'}>
            <div id="content-container" className="content-container">
              <div id="page-content">
                <TabList/>
                {children}
              </div>
            </div>
          </div>
          <LeftNav
            location={location}
            leftNavMode={this.isLeftNavMini}
          />
          <RightAside/>
        </div>
        <Footer/>
        <Extra/>
      </div>
    )
  }
}
