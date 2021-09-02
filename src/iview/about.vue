<template>
  <div class='body'>
  <navigation></navigation>
     <div class="title">渠道政策永不变</div>
     <div class='slte_text'>豆盟可能是中国品牌出海大时代最好的建站工具和服务提供商</div>
     <div class='btnn' @click="informeClick">申请成为代理商</div>
     <div class='why_calss'>为什么选择豆盟</div>
     <div class='concent'>
       <ul>
         <li>
           <div class='baidu'><img v-lazy="url1" alt=""></div>
           <div class="baidu_text">
             <div class='baidu_title'>领先的服务和产品体验</div>
             <div class='baidu_text1'>我们团队来自百度、阿里、腾讯和豌豆荚等知名互联网公司，我们的产品领先于国内同行，我们的专业服务本身就是一种说服力。</div>
           </div>
         </li>
         <li class='twocalss'>
          <div class='left_text'>
             <div class='baidu_title'>有竞争力的收益</div>
             <div class='baidu_text1'>我们提供给合作伙伴有竞争力的收益分成，以互利共赢为原则，渴望与你一同开拓品牌出海的服务市场</div>
          </div>
          <div class='right_img'><img v-lazy="url2" alt=""></div>
         </li>
            <li>
           <div class='baidu' style='margin-left:40px'><img v-lazy="url3"  alt=""></div>
           <div class="baidu_text">
             <div class='baidu_title'>完善的服务支持</div>
             <div class='baidu_text1'>我们拥有完善的营销体系和代理培训，全面支持代理伙伴开展推广工作</div>
           </div>
         </li>
       </ul>
     </div>
      <div class='why_calss'>加盟流程</div>
      <div class='icon_warp'>
        <ul>
          <li>
           <img src="@/assets/images/process01.png" alt="" class='icon1'>
           <img src="@/assets/images/process02.png" alt="" class='icon1'>
           <img src="@/assets/images/process03.png" alt="" class='icon1'>
           <img src="@/assets/images/process04.png" alt="" class='icon1'>
           <img src="@/assets/images/process05.png" alt="" class='icon1'>
          </li>
          <img src="@/assets/images/xian1.png" alt="" class='xian_class1'>
          <div class='icon_text'>
            <div class='tect_iocnwarp'>
              <div>提交</div>
              <div>申请</div>
            </div>
                        <div class='tect_iocnwarp'>
              <div>审核</div>
              <div>资质</div>
            </div>
                        <div class='tect_iocnwarp'>
              <div>洽谈</div>
              <div>方案</div>
            </div>
                        <div class='tect_iocnwarp'>
              <div>签订</div>
              <div>合同</div>
            </div>
                        <div class='tect_iocnwarp'>
              <div>开始</div>
              <div>赚钱</div>
            </div>

          </div>
        </ul>
      </div>

      <div class='cooperation'>豆盟合作伙伴要求</div>
      <ul class='end'>
        <li>
          <div class="icpn_icon"><img src="@/assets/images/daili9.png" alt=""></div>
          <div class='icpn_text'>可以独立承担民事责任的个人或企业</div>
          <div class='solid'></div>
        </li>
          <li>
          <div class="icpn_icon"><img src="@/assets/images/daili10.png" alt=""></div>
          <div class='icpn_text'>接受豆盟的业务和市场标准</div>
          <div class='solid'></div>
        </li>
                <li>
          <div class="icpn_icon"><img src="@/assets/images/daili11.png" alt=""></div>
          <div class='icpn_text'>拥有客户资源和持续开拓市场能力</div>
          <div class='solid'></div>
        </li>
                <li>
          <div class="icpn_icon"><img src="@/assets/images/daili12.png" alt=""></div>
          <div class='icpn_text'>拥有销售团队和较强的执行力</div>
          <div class='solid'></div>
        </li>
      </ul>
    <bottom></bottom>
    <operating></operating>
  </div>
</template>

<script>
import navigation from '@/components/navigation'
import bottom from '@/components/bottom'
import operating from '@/components/operating'
export default {
  components: { navigation, bottom, operating },
  data () {
    return {
      url1: require('@/assets/images/daili6.png'),
      url2: require('@/assets/images/daili8.png'),
      url3: require('@/assets/images/daili7.png')
    }
  },
  methods: {
    informeClick () {
      let routeUrl = this.$router.resolve({
        path: '/information'
        // query: {id: 96}
      })

      window.open(routeUrl.href, '_blank')
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .title{
 text-align: center;
 font-size: 36px;
 font-weight: 700;
 margin-top: 170px;
 }
 .slte_text{
  font-size: 20px;
  color:#9B9B9B;
  margin-top: 30px;
  text-align: center;
 }
.btnn{
    width: 190px;
    height: 42px;
    border-radius: 28px;
    border: 1px solid #1170ff;
    font-size: 20px;
    font-weight: 400;
    color: #1170ff;
    line-height: 42px;
    letter-spacing: 2px;
    text-align: center;
    cursor: pointer;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 39px;
}
.btnn:hover{
   background: #1170ff;
   color: #fff;
}
 .why_calss{
 text-align: center;
 font-size: 36px;
 font-weight: 700;
 margin-top: 40px;
 }
 .cooperation{
text-align: center;
 font-size: 36px;
 font-weight: 700;
 margin-top: 100px;
 }
 .concent{
   width: 1300px;
   margin: 0 auto;
 }
 .concent ul li{
  overflow: hidden;
  margin-top: 50px;
  }
 .baidu{
   width: 600px;
   float: left;
  }
  .baidu img{
    height: 500px;
  }
  .baidu_text{
    width: 490px;
    float: right;
    overflow: hidden;
  }
  .baidu_title{
    font-size: 20px;
    font-weight: 500;
    color: #0c0c0c;
    margin-top: 150px;
  }
  .baidu_text1{
    line-height: 25px;
    font-size: 16px;
    font-weight: 400;
    color:#0c0c0c;
    opacity: .6;
    margin-top: 20px;
     font-family: PingFangSC-Semibold,PingFang SC;
    }
   .left_text{
     width: 490px;
      float: left;
    }
    .right_img{
      float: right;
      width: 500px;
    }
    .twocalss{
      width: 1150px;
      margin: 0 auto;
    }
    .icon{
      width: 65px;
      height: 65px;
    }
   .icon_warp{
     overflow: hidden;
     width: 940px;
     margin: 0 auto;
     margin-top: 80px;
   }
   .icon_warp ul{
     overflow: hidden;
     }
   .icon_warp ul li{
     float: left;
   }

   .icon1{
     width:50px;
     height: 50px;
     float: left;
     margin-right: 172px;
    }
  .icon_warp ul li .icon1:nth-child(5) {
        margin-right: 0;
    }
    .xian_class1{
      width:910px;
      margin-left:14px;
      margin-top: 30px;
    }
    .icon_text{
      overflow: hidden;
      color: #5878DA;
    }
    .icon_text .tect_iocnwarp{
      float: left;
      width: 60px;
      text-align: center;
      margin-right: 160px;
      margin-top: 20px;
    }
    .icon_text .tect_iocnwarp:nth-child(5) {
      margin-right: 0;
    }
    .end{
      width:1100px;
      margin: 0 auto;
      overflow: hidden;
      padding-bottom: 100px;
    }
    .end li {
      float: left;
      overflow: hidden;
      margin-top: 120px;
      width: 150px;
      margin-right: 160px;
    }
     .end li:nth-child(4){
       margin-right: 0;
     }
    .icpn_icon{
     width: 65px;
     height: 65px;
     margin: 0 auto;
    }
    .icpn_text{
      font-size: 16px;
      color: #000;
      text-align:center;
      margin-top: 20px;
    }
    .solid{
      width: 55px;
      height: 4px;
      background: #D8D8D8;
      margin: 0 auto;
      margin-top: 20px;
    }
</style>
