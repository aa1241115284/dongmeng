<template>
  <div class="body">
    <div class="auto_concent">
             <div class="back1">
      <div class="h_textwarp">
        <div class="h_title">DTC 品牌独立站需求表</div>
        <div class="h2_title">
          <div>豆盟-- 助力中国 DTC 品牌出海</div>
        </div>
      </div>
    </div>
      <!-- <div class="banner_img">
        <img v-lazy="url" alt="" />
      </div> -->
      <div class="title">
        <div>请如实填写以下信息，方便我们对你的信息进行客观评估。</div>
        <div>(如果我们可以完成为你定制建站的服务，我们会在一周内通知你：）</div>
      </div>

      <div class="guwen">
        <div class="guwen_left">
          <div class="guwen_title">豆盟品牌出海顾问</div>
          <div class="guwen_futitle">长按图片保存二维码,添加微信</div>
        </div>
        <div class="guwen_right">
          <img src="@/assets/images/wxcode.png" alt="" />
        </div>
      </div>

      <div class="form_class">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="公司名称" prop="name">
            <el-input v-model="ruleForm.name" size="small"></el-input>
          </el-form-item>
          <el-form-item label="公司所在地" prop="site">
            <el-cascader
              size="large"
              :options="threeoptions"
              v-model="ruleForm.site"
              @change="handleChange"
            >
            </el-cascader>
          </el-form-item>
          <el-form-item label="联系人姓名" prop="comp">
            <el-input v-model="ruleForm.comp" size="small"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="ruleForm.phone" size="small"></el-input>
          </el-form-item>

          <el-form-item label="其他联系方式（FB/WeChat/QQ号等）" prop="rest">
            <el-input v-model="ruleForm.rest" size="small"></el-input>
          </el-form-item>

          <el-form-item label="需要的出海服务项" prop="checkList">
            <el-checkbox-group v-model="ruleForm.checkList">
              <div>
                <el-checkbox label="定制化网站设计"></el-checkbox>
                <el-checkbox label="社媒运营"></el-checkbox>
                <el-checkbox label="站内运营"></el-checkbox>
              </div>
              <div>
                <el-checkbox label="FB广告投放"></el-checkbox>
                <el-checkbox label="Google广告投放"></el-checkbox>
                <el-checkbox label="KOL红人"></el-checkbox>
              </div>
              <el-checkbox label="海外PR"></el-checkbox>
              <el-checkbox label="市场调研"></el-checkbox>
              <el-checkbox label="品牌打造"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>

            <el-form-item label="现有的销售渠道/官网" prop="describe">
            <div class='fu_title'>公司官网/淘宝店/1688店铺/有赞店铺/京东店铺/亚马逊  等线上店铺地址。如果没有的话，请填写无。</div>
            <el-input v-model="ruleForm.describe"  type='textarea'  :rows="4"></el-input>
          </el-form-item>

        <el-form-item label="目前企业的类型" prop="type">
          <el-select v-model="ruleForm.tpye" placeholder="请选择" size='small'>
          <el-option
            v-for="item in options"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
         </el-form-item>

        <el-form-item label="企业年营业额" prop="money">
          <el-select v-model="ruleForm.money" placeholder="请选择" size='small'>
          <el-option
            v-for="item in moneyList"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
         </el-form-item>

        <el-form-item label="海外团队规模" prop="team">
          <el-select v-model="ruleForm.team" placeholder="请选择" size='small'>
          <el-option
            v-for="item in teamList"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
         </el-form-item>

            <el-form-item label="需求说明" prop="explain">
            <el-input v-model="ruleForm.explain"  type='textarea'  :rows="4"></el-input>
          </el-form-item>


          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >提交</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import {provinceAndCityData,  regionData, provinceAndCityDataPlus, regionDataPlus, CodeToText, TextToCode} from 'element-china-area-data'
export default {
  data () {
    return {
      threeoptions: regionData,
      selectedOptions: [],
      url: require('@/assets/images/back1.jpg'),
      ruleForm: {
        name: '',
        site: '',
        comp: '',
        phone: '',
        rest: '',
        project: '',
        checkList: [],
        describe: '',
        type: '',
        money:'',
        team:'',
        explain: ''
      },
      rules: {
        name: [{ required: true, message: '请输入公司名称' }],
        site: [{ required: true, message: '请选择公司地址' }],
        comp: [{ required: true, message: '请输入联系人姓名' }],
        phone: [{ required: true, message: '请输入手机号' }],
        checkList: [{ required: true, message: '请选择出海服务项' }]
        // describe:[{ required: true,  message:"输入销售渠道"}],
      },
      options: ['代工厂', '自由品牌', '没有货源,一件代发', '辅货', '其他'],
      moneyList:['0~1000w人民币', '1000w~5000w人民币', '5000w人民币以上'],
      teamList:['有想法,无团队', '1~5人', '5~10人', '10~20人', '20人以上'],
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    min-height: 100%;
    background-image: url(http://cdnq2.mikecrm.com/images/formTemplate/77_Bg.png);
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    background-color: #F3F2EF;
    padding-bottom: 10px;

}
.back1 {
  width: 100%;
  height: 410px;
  background: url("~@/assets/images/ljzx.png") top center no-repeat;
  background-size: 100% 410px;
  overflow: hidden;
  position: relative;
  /* margin-top: 91px; */
}
.back1::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
.h_textwarp {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -180px;
    z-index: 10;
    margin-top: -52px;
}
.h_title {
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 35px;
}
.h2_title {
  text-align: center;
  color: #fff;
  font-size: 15px;
  margin-top: 40px;
}
.auto_concent {
  max-width: 800px;
  min-height: 100vh;
  background: #fff;
  margin: 0 auto;
  margin-top: 10px;
  box-shadow: 0 2px 5px 1px rgba(124,124,124,.2);
  padding-bottom: 20px;
}
.banner_img {
  width: 100%;
  height: 415px;
}
.banner_img img {
  width: 100%;
  height: 100%;
}
.title {
  margin-top: 10px;
  margin-left: 30px;
  color: #4a4a4a;
}
.guwen {
  width: 700px;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 30px;
  margin-left: 30px;
}
.guwen_left {
  float: left;
  margin-top: 10px;
}
.guwen_right {
  float: right;
  width: 100px;
  height: 100px;
}
.guwen_title {
  font-size: 25px;
  font-weight: bold;
}
.guwen_futitle {
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  color: #9b9b9b;
}
.form_class {
  margin: 0 auto;
  margin: 30px 30px;
}
.text_class {
  font-size: 14px;
  color: #606266;
  line-height: 40px;
}
.body >>> .el-form-item__label {
  float: none !important;
}
.body >>> .el-form-item__content {
  margin-left: 0 !important;
}
.body>>>.el-checkbox{
  width: 140px;
  transition: all .2s cubic-bezier(0,0,.2,1);
  padding-left: 10px;
  padding-right: 10px;
}
.body>>>.el-checkbox:hover{
  background: #ccc;
 
}

.fu_title{
  font-size: 14px;
  color: #9B9B9B;
  margin-top: -15px;
}

</style>
