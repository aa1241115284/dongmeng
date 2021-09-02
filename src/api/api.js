import request from './request'
import qs from 'qs'
export var url = 'http://192.168.1.132:10004'
export function login (parame) {
  return request.post(`${url}/user/login`, parame)
}
// 发送注册验证码
export function sendRegisterSms (parame) {
  return request.post(`${url}/sms/sendRegisterSms`, parame)
}
// 注册
export function userregister (parame) {
  return request.post(`${url}/user/register`, parame)
}
