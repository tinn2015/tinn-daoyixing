import React,{Component} from 'react';
import { List, InputItem,Toast,Icon} from 'antd-mobile';
import { createForm, } from 'rc-form';
import {Link,browserHistory} from 'react-router'
import './form.css'

export default class Form extends Component{
  constructor(props) {
    super(props);
  
  }
  idCard = (rule, value, callback) => {
    const reg = /(^\d{15}$)|(^\d{17}([0-9]|X)$)/
     if(!reg.test(value)){
        callback('格式错误')
     }else{
      callback()
     }
  }
  checkIdCard = (rule,value,callback) => {
    const idNumber = this.props.form.getFieldValue('idCard');
     if(value != idNumber){
        callback('两次输入不一致')
     }else{
        callback() 
     }      
  }
  fetchFn = (type,url,data) => {
    fetch(url, {
          method: type,
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          body: JSON.stringify(data)
        }).then((res) => {
          console.log(res)
          if(res.ok){
           browserHistory.push('/insure')
          }
        }).catch((error) => {
          console.log('request.failed', error)
        });
  }
  onSubmit = (e) => {
     e.preventDefault(); 
     this.props.form.validateFields((error,values) => {
      if(!error){
        browserHistory.push('/insure')
        const data = new FormData();
        data.append(data,values)
        console.log("data:"+data)
        this.fetchFn('post','',data)
      }
    })

  }

  render() {
    const { getFieldProps,getFieldError,isFieldValidating } = this.props.form;
    return (
      <div className="form">
          <form>
            <List>
              <InputItem 
                {...getFieldProps('name', {initialValue: '', validateFirst: true,rules:[{required:true,message:'不能为空'},{type:'string',min:2,message:'最小长度为2',}],})}
                clear 
                error={(typeof getFieldError('name') == typeof undefined)?false:true}
                labelNumber={2} 
                placeholder="被保险人姓名"
              >
                姓名
              </InputItem>
              <InputItem 
                {...getFieldProps('phone', {initialValue: '', validateFirst: true,rules:[{required:true,message:'不能为空'},{min:11,message:'最小长度为11',}],})}
                clear 
                error={(typeof getFieldError('phone') == typeof undefined)?false:true}  
                type="phone"  
                labelNumber={2} 
                placeholder="被保险人手机号"
                >
               手机
              </InputItem>
              <InputItem 
                {...getFieldProps('idCard', {initialValue: '', validateFirst: true,rules:[{required:true,message:'不能为空'},{type:'string',min:1,message:'最小长度为15',},{validator:this.idCard,message:'cuowu'}],})} 
                clear  
                error={(typeof getFieldError('idCard') == typeof undefined)?false:true} 
                labelNumber={4} 
                placeholder="被保险人身份证号"
                >
                身份证号
              </InputItem>
              <InputItem 
                {...getFieldProps('idCard2', {initialValue: '', validateFirst: true,rules:[{required:true,message:'不能为空'},{type:'string',min:1,message:'最小长度为15',},{validator:this.checkIdCard,message:'cuowu'}],})} 
                clear  
                error={(typeof getFieldError('idCard2') == typeof undefined)?false:true}  
                labelNumber={4} 
                placeholder="请再次输入身份证号"
                >
                <span className="white">身份证号</span>
              </InputItem>
              <List.Item className="font07rem">生效日期 T+7个工作日内有效</List.Item>
              <List.Item className="font07rem">保障时间 1 年</List.Item>
              <List.Item className="font07rem">保费免费赠送</List.Item>
            </List>
            <List className="mt10">
              <InputItem 
                {...getFieldProps('technicianPhone', {initialValue: '',})}
                clear 
                labelNumber={6}  
                placeholder="选填"
                >
                安装技师姓名
              </InputItem>
              <InputItem 
                {...getFieldProps('technicianName', {initialValue: '',})}
                clear 
                labelNumber={6} 
                type="phone"  
                placeholder="选填"
                >
                安装技师手机
              </InputItem>
            </List>
            <List className="mt10">
              <Link to='/detail/subPage/保险条款'><List.Item className="font07rem" arrow="horizontal"><span className="icon-agree"><Icon type="check-circle" /></span>同意<span className="aLink">《保险条款》</span></List.Item></Link> 
            </List>
          </form>         
          <button className="btn mt10 white" onTouchEnd={this.onSubmit}>立即投保</button>          
      </div>
      )
  }
}
module.exports = createForm()(Form)