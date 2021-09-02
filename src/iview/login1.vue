<template>
  <div class="body">
    <div class="authorize">
      <div class="authorize_left">
        <div class="formWra">
          <div class="tittle">
            <span :class="{ active: 0 == current }" @click="current = 0"
              >账号密码登录</span
            >
            <!-- <span>/</span>
            <span :class="{ active: 1 == current }" @click="current = 1"
              >账户密码登录</span
            > -->
          </div>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm loginforme"
            
          >
            <el-form-item  prop="phone">
              
              <el-input v-model="ruleForm.phone" placeholder="请输入账号" prefix-icon="el-icon-user-solid"></el-input>
            </el-form-item>
            <el-form-item  prop="mima">
              <el-input v-model="ruleForm.mima" placeholder="请输入密码" prefix-icon="el-icon-s-cooperation"></el-input>
            </el-form-item>


            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </el-form>
          <div class='register'>
            <span @click='forgetClick'>忘记密码</span>
               |  
             <span @click='registerClick'>点击注册</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setItem } from "@/utils/localStorage";
import { sendRegisterSms, userregister } from "@/api/api";
export default {
  data() {
    return {
      current: 0,
      ruleForm: {
        phone: "",
      },
      rules: { 
        phone: [{ required: true, message: "请输入账号" }],
        mima: [{ required: true, message: "请输入密码" }],
      },
    };
  },
  methods: {
    forgetClick(){
       this.$router.push({path: '/retrieve'})
    },
    registerClick(){
    this.$router.push({path: '/register'})
    },
    submitForm(formName){
     this.$refs[formName].validate((valid) => { 
       if (!valid) return
      this.$router.push({path: '/', query: {current: 0}})
      setItem('token', 'token')
     })
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
  font-size: 0;
}
.authorize_left {
  display: inline-block;
  vertical-align: top;
  text-align: center;
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
.loginforme .el-button{
  width: 100% !important;
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
</style>
