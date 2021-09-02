<template>
  <div class="body">
    <div class="login_interlayer">
      <div>
        <div class="title">
          <div
            :class="{ native: 0 == current }"
            class="title_login"
            @click="current = 0"
            v-show='current==0 || current==1'
          >
            用户登录
            <div class="sollidclass"></div>
          </div>

          <div
            :class="{ native: 1 == current }"
            class="title_register"
            @click="current = 1"
             v-show='current==1 || current==0'

          >
            注册
            <div class="sollidclass"></div>
          </div>

              <div
            :class="{ native: 3 == current }"
            v-show='current==3 '
            style="text-align: center"
          >
            修改密码

          </div>
        </div>

        <div class="concent" v-show='current==0'>
          <div class="input_warp">
            <el-input v-model="user" placeholder="用户名"></el-input>
          </div>
          <div class="input_warp">
            <el-input v-model="password" placeholder="密码" show-password></el-input>
          </div>
           <div class="forget" @click="current = 3">忘记密码?</div>
           <div class="login_btn" v-if="user!=''&&password!=''" @click="loginClick">登陆</div>
           <div class="disabledclass" v-else>登陆</div>
        </div>

        <div class="concent" v-show='current==1'>
          <div class="input_warp">
            <el-input v-model="reg_user" placeholder="输入手机（仅支持中国大陆手机号+86)"></el-input>
          </div>

              <div class="input_warp">
            <el-input v-model="reg_code" placeholder="请输入验证码"  style='width:160px'></el-input>

                <div  style='float:right'>
                <el-button v-show="show" @click="getCode" >获取验证码</el-button>
                <el-button v-show="!show"  disabled>{{count}}秒后重新获取</el-button>
              </div>
          </div>

          <div class="input_warp" :class="{ input_borde_red:passwordcode==true }">
            <el-input v-model="reg_password" placeholder="请输入密码" show-password></el-input>
          </div>

          <div class='password_title' :class="{ passwordnative:passwordcode==true }">请设置6~20位密码。包括字母、数字或符号</div>
          <div class="characters">
            <el-checkbox v-model="checked">我接受</el-checkbox>

              <span @click='temsClick'>《服务条款》</span>
              <span @click='agreeClick'>丶《使用协议》</span>
              <span @click='privaClick'>《隐私政策》</span>

            </div>
           <div class="login_btn" @click='registerClick' v-if='reg_user!=""&&reg_code!=""&&reg_password!=""&&checked!=false'>注册</div>
           <div class="disabledclass" v-else>注册</div>
        </div>

          <div class="concent" v-show='current==3'>
          <div class="input_warp">
            <el-input v-model="forget_user" placeholder="输入手机（仅支持中国大陆手机号+86)"></el-input>
          </div>
          <div class="input_warp">
            <el-input v-model="forget_password" placeholder="请输入密码" show-password></el-input>
          </div>
           <div class="input_warp">
            <el-input v-model="forget_code" placeholder="请输入验证码"  style='width:160px'></el-input>

                <div  style='float:right'>
                <el-button v-show="forge_show" @click="forge_getCode" >获取验证码</el-button>
                <el-button v-show="!forge_show"  disabled>{{forge_count}}秒后重新获取</el-button>
              </div>
          </div>
           <div class="input_warp">
            <el-input v-model="forget_subpassword" placeholder="请输入确认密码" show-password></el-input>
          </div>
           <div class="login_btn" v-if='forget_user!=""&&forget_password!=""&&forget_code!=""&&forget_subpassword!=""'>确认</div>
           <div class="disabledclass" v-else>确认</div>
           <div class="returnclass"  @click="current = 0"> <span><</span>返回登录</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { setItem } from '@/utils/localStorage'
import { sendRegisterSms, userregister } from '@/api/api'
export default {
  data () {
    return {
      current: 0,
      user: '',
      password: '',
      count: '',
      forge_count: '',
      forge_show: true,
      show: true,
      forget_user: '',
      forget_password: '',
      forget_code: '',
      forget_subpassword: '',
      checked: false,
      passwordcode: false,
      reg_password: '',
      reg_code: '',
      reg_user: ''
    }
  },
  methods: {
    // 注册验证码验证码
    getCode () {
      if (this.reg_user == '') {
        this.$Message.error('请输入注册手机号')
        return false
      }
      if (this.reg_user.length != 11) {
        this.$Message.error('请输入正确手机号')
        return false
      }
      const TIME_COUNT = 10
      if (!this.timer) {
        // this.count = TIME_COUNT
        // this.show = false
        sendRegisterSms({mobile: this.reg_user}).then((res) => {
          if (res.data.code == '0') {
            this.$Message.success('发送成功')
            this.count = TIME_COUNT
            this.show = false
            this.timer = setInterval(() => {
              if (this.count > 0 && this.count <= TIME_COUNT) {
                this.count--
              } else {
                this.show = true
                clearInterval(this.timer)
                this.timer = null
              }
            }, 1000)
          } else {
            this.$Message.error(res.data.msg)
          }
        })
      }
    },
    forge_getCode () {
      const TIME_COUNT = 10
      if (!this.forge_timer) {
        this.forge_count = TIME_COUNT
        this.forge_show = false

        console.log('请求1')
        this.forge_timer = setInterval(() => {
          if (this.forge_count > 0 && this.forge_count <= TIME_COUNT) {
            this.forge_count--
          } else {
            this.forge_show = true
            clearInterval(this.forge_timer)
            this.forge_timer = null
          }
        }, 1000)
      }
    },
    // 注册
    registerClick () {
      var reg_password = this.reg_password.length
      if (reg_password < 6 || reg_password > 20) {
        this.passwordcode = true
      } else {
        userregister({
          captcha: this.reg_code,
          password: this.reg_password,
          mobile: this.reg_user
        }).then((res) => {
          console.log(res)
          if (res.data.code == '0') {
            this.$Message.success('注册成功')
            // this.current=0
          } else {
            this.$Message.error(res.data.msg)
          }
        })

        // this.$router.push({path: '/', query: {current: 0}})
        // this.passwordcode = false
      }
    },
    loginClick () {
      this.$router.push({path: '/', query: {current: 0}})
      setItem('token', 'token')
    },
    // 服务条款
    temsClick () {
      let routeUrl = this.$router.resolve({
        path: '/termsclause',
        query: {current: 10}
      })

      window.open(routeUrl.href, '_blank')
    },
    // 使用协议
    agreeClick () {
      let routeUrl = this.$router.resolve({
        path: '/agreement',
        query: {current: 10}
      })

      window.open(routeUrl.href, '_blank')
    },
    // 隐私政策
    privaClick () {
      let routeUrl = this.$router.resolve({
        path: '/privacy',
        query: {current: 10}
      })

      window.open(routeUrl.href, '_blank')
    }
  },
  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  width: 100%;
  height: 100vh;
  background: url("~@/assets/images/login.png") top center no-repeat;
  background-size: 100% 100vh;
}
.login_interlayer {
  width: 500px;
  background: #ffffff;
  border: 1px solid #cccccc;
  float: right;
  margin-right: 190px;
  margin-top: 100px;
  padding-bottom: 30px;
}
.title {
  font-weight: 600;
  color: #9b9b9b;
  font-size: 20px;
  cursor: pointer;
  margin: 0 auto;
  overflow: hidden;
  width: 140px;
  margin-top: 40px;
}
.native {
  color: #194CE8;
}
.native .sollidclass {
  display: block;
}
.sollidclass {
  width: 40px;
  height: 4px;
  background: #194CE8;
  border-radius: 3px;
  margin-top: 5px;
  display: none;
}
.title_login {
  float: left;
  margin-right: 20px;
}
.title_register {
  float: left;
}
.concent {
  width: 320px;
  margin: 0 auto;
  margin-top: 10px;
}

>>> .el-input__inner:focus {
  border: 1px solid #194CE8;
}
>>> .el-input__inner {
  height: 38px;
  border: 1px solid #cbcbcb;
}
.input_warp{
  margin-top:20px ;
}
.forget{
  font-size: 12px;
  color: #000;
  cursor: pointer;
  margin-left: 5px;
  margin-top: 10px;
}
.login_btn{
  width: 150px;
  line-height: 40px;
  background: #194CE8;
  border-radius: 20px;
  margin: 0 auto;
  text-align: center;
  color: #fff;
  cursor: pointer;
  margin-top: 30px;
}
.returnclass{
  color: #194CE8;
  font-size: 12px;
  text-align: center;
  margin-top: 6px;
  font-weight: bold;
  cursor: pointer;
}
.disabledclass{
  width: 150px;
  line-height: 40px;
  border-radius: 20px;
  margin: 0 auto;
  text-align: center;
  color: #fff;
  margin-top: 30px;
  background: #9B9B9B;
}
.password_title{
  color: #D0021B;
  font-size: 12px;
  margin-top: 5px;
  text-indent: 3px;
  opacity: 0;
}

>>> .el-checkbox__inner:hover{
  border-color:#194CE8 !important
}
>>> .el-checkbox__input.is-checked .el-checkbox__inner{
background-color:#194CE8;
}
.characters{
   color: #000;
  font-size: 12px;
  margin-top: 5px;
  cursor: pointer;
}
.characters span{
  color:#194CE8;
}
.passwordnative{
 opacity: 1;
}
.input_borde_red >>> .el-input__inner{
 border:1px solid red;
}
>>>.el-checkbox__input.is-checked+.el-checkbox__label{
  color: #000;
}
>>>.el-checkbox{
  color: #000;
  font-size: 12px;
}
>>> .el-checkbox__label{
  font-size: 12px;
}
</style>
