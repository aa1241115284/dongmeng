<template>
  <div class="body">
    <div class="authorize">
      <div class="authorize_left">
        <div class="formWra">
          <div class="tittle">
            <span 
              >手机号注册</span
            >
          </div>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm loginforme"
            
          >
            <el-form-item  prop="phone">
              <el-input v-model="ruleForm.phone" placeholder="请输入手机号" prefix-icon="el-icon-user-solid"></el-input>
            </el-form-item>


            <el-form-item  prop="mima">
              <el-input v-model="ruleForm.mima" placeholder="请输入密码" prefix-icon="el-icon-s-cooperation"></el-input>
            </el-form-item>

           <div class='code_warp'>
                <el-form-item  prop="code">
              <el-input v-model="ruleForm.code" placeholder="请输入验证码" prefix-icon="el-icon-mobile" style='width:238px;float:left'></el-input>
              <el-button type="primary" @click='codeClick' style='float:right' v-show="show">获取验证码</el-button>
               <el-button v-show="!show"  disabled style='float:right'>重新发送{{count}}</el-button>
            </el-form-item>
           </div>

             <div class="characters">
                <el-checkbox v-model="checked">我接受</el-checkbox>
                  <span @click='temsClick'>《服务条款》</span>
                  <span @click='agreeClick'>丶《使用协议》</span>
                  <span @click='privaClick'>《隐私政策》</span>
             </div>

  



            <div class='submit_btn'><el-button type="primary" @click="submitForm('ruleForm')">注册</el-button></div>
          </el-form>
          

          <div class='register'>
             <span @click='loginClick'>点击登录>></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setItem } from "@/utils/localStorage";
import { sendRegisterSms, userregister } from '@/api/api'
export default {
  data() {
    return {
      count:"",
      show:true,
      checked:false,
      current: 0,
      ruleForm: {
        phone: "",
        mima: "",
        code:"",
      },
      rules: { 
        phone: [{ required: true, message: "请输入手机号" }],
        mima: [{ required: true, message: "请输入密码" }],
        code: [{ required: true, message: "请输入验证码" }],
      },
    };
  },
  methods: {
    codeClick(){
     if(this.ruleForm.phone==''){
        this.$message.error('请输入手机号');
      return false
     }
      if(this.ruleForm.phone.length==11){
        this.$message.error('请输入正确手机号');
      return false
     }

        const TIME_COUNT = 60
      if (!this.timer) {
        // this.count = TIME_COUNT
        // this.show = false
        sendRegisterSms({mobile: this.reg_user}).then((res) => {
          // if (res.data.code == '0') {
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
          // } else {
          //   this.$Message.error(res.data.msg)
          // }
        })
      }


     console.log('注册')
    },
    loginClick(){
       this.$router.push({path: '/login'})
    },
    submitForm(formName){
      if(this.checked==false){
      this.$message.error('请阅读条款并接受');
      return false
      }
     this.$refs[formName].validate((valid) => { 
       if (!valid) return
     })
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
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  width: 100%;
  height: 100vh;
  background: url("~@/assets/images/login.png") top center no-repeat;
  background-size: 100% 100vh;
}
.authorize {
  /* display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center; */
  margin-top: 120px;
  margin-right: 190px;
  /* text-align: center; */
  float: right;
  color: #555;
  /* font-size: 0; */
}
.authorize_left {
  /* display: inline-block;
  vertical-align: top;
  text-align: center; */
}
.formWra {
  overflow: hidden;
  width: 384px;
  background: #fff;
  -webkit-box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.17);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.17);
  border-radius: 5px;
}
.tittle {
  margin-top: 8px;
  height: 40px;
  line-height: 40px;
  text-align: left;
  margin-left: 32px;
  font-size: 16px;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}
.tittle span {
  cursor: pointer;
  color: #606266;
}
.tittle .active {
  font-size: 20px;
  color: #1890ff;
}
>>>.el-form-item__content{
  margin-left: 0 !important;

}
.loginforme{
     width: 100%;
    margin-top: 24px;
    padding: 0 8px;
}
.submit_btn .el-button{
  width: 100% !important;
  margin-top: 10px;
}
.register{
    margin-top: 22px;
    margin-bottom: 22px;
    margin-right: 20px;
    float: right;
    color: #545454;
    font-size: 12px;
    cursor: pointer;
}
.characters{
  font-size: 12px;
  margin-top: 10px;
  padding: 0 8px;
}
.characters span{
 color: #409EFF;
 cursor: pointer
}
.el-checkbox__label{
  font-size: 12px !important
}
.el-checkbox{
  margin-left: 0 !important;
  margin-right: 0 !important
}
.code_warp .el-form-item{
 /* margin-bottom:0px */
} 
</style>
