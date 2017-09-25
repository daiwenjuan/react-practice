/**
 *  Created by daiwenjuan on 17/9/21 下午5:38.
 */
import React, { PureComponent } from 'react'
import { Spin, message, Form, Icon, Input, Button, Row, Col } from 'antd'
import { hashHistory } from 'react-router'

const FormItem = Form.Item
@Form.create()
export default class Login extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      loading : false,
    }
  }

  checkName(rule, value, callback) {
    if (value) {

    }
    callback()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        //this.state.loading = true
        // this.setState({loading: true})
        Object.keys(values).map((key) => values[key] = (values[key] && values[key].trim()))
        /* this.props.dispatch(fetchLogin(values, (res) => {
          if (res.status == 1) {
            const query = this.props.form.getFieldsValue()
            global.$GLOBALCONFIG.staff = res.data.user
            sessionStorage.setItem('staff', JSON.stringify({ ...res.data.user }))
            sessionStorage.setItem('username', query.username)
            // sessionStorage.setItem('userName', res.data.user.userName)
            // sessionStorage.setItem('userpwd', query.password)
            sessionStorage.setItem('token', res.data.token)
            sessionStorage.setItem('isLeftNavMini', false)
            hashHistory.push('/')
          }
        }, (res) => {
          message.warning(res.msg)
          this.setState({
            loading: false
          })
        }))*/
        sessionStorage.setItem('token', 'dwj')
        hashHistory.push('/')
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return ( <div className='login'>
      <div className='sy_top'/>
      <div className='btmLogin'>
        <div className="sy_bottom">
          <h1 id='PerformName'>React Lean</h1>
          <Row className="ul-wrap">
            <Col span={24}>
              <Spin spinning={this.state.loading}>
                <Form onSubmit={this.handleSubmit}>
                  <FormItem hasFeedback>
                    {getFieldDecorator('username', {
                      rules : [
                        { required : true, message : '请输入用户名' },
                        { validator : this.checkName }
                      ]
                    })(
                      <Input
                        prefix={<Icon type="user"/>}
                        placeholder={'请输入用户名'}
                        type={'text'}
                      />
                    )}
                  </FormItem>
                  <FormItem hasFeedback>
                    {getFieldDecorator('password', {
                      rules : [
                        { required : true, message : '请输入密码' }
                      ]
                    })(
                      <Input
                        prefix={<Icon type='lock' style={{ fontSize : 13 }}/>}
                        placeholder='请输入密码'
                        type='password'
                      />
                    )}
                  </FormItem>
                  <FormItem>
                    <Button type='primary' htmlType='submit'>登录</Button>
                  </FormItem>
                </Form>
              </Spin>
            </Col>
          </Row>
        </div>
      </div>
      <div id="companyName" className="companyName">React Lean 股份有限公司</div>
    </div>)
  }
}