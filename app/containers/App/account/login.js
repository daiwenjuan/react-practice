/**
 *  Created by daiwenjuan on 17/9/21 下午5:38.
 */
import'./login.less'
import React, { PureComponent } from 'react'
import { Input, Button, message } from 'antd'

export default class Login extends PureComponent {
  constructor (props) {
    super(props)
  }

  handleOnClick = () => {
    sessionStorage.setItem('token', 'loginsuccess')
    message.success('login sucess')
  }

  render () {
    return ( <div className='login'>
      <div className="login-wrapper">
        <div className="title">登录</div>
        <div className="username">
          <span>用户名</span>： <Input placeholder="请输入用户名"/>
        </div>
        <div className="password">
          <span> 密码：</span> <Input placeholder="请输入密码"/>
        </div>
        <div className="btn-commit">
          <Button onClick={this.handleOnClick}>确定</Button>
        </div>
      </div>
    </div>)
  }
}