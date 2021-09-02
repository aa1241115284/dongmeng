<template>
  <div class="body">
    <div class="native"><navigation></navigation></div>
    <div class="back1">
      <div class="h_textwarp">
        <div class="h_title">豆盟「一站三用」出海解决方案</div>
        <div class="h2_title">
          <div>为DTC品牌出海加速赋能，通过谷歌生态下多元产品助力卖家的流量整合和</div>
          <div style="margin-top: 10px">
            转化。
          </div>
        </div>
      </div>
    </div>
    <div class="concent">
      <div class="google_calss1">Google 生态下的多元流量选择</div>
      <div class="icon_warp">
        <ul>
          <li>
            <div class="back"><img src="@/assets/images/ads.png" alt="" /></div>
            <div class="zhu_title">Ads流量</div>
            <div class="solid"></div>
            <div class="fu_title">触达精准受众</div>
          </li>
          <li>
            <div class="back">
              <img src="@/assets/images/nature.png" alt="" />
            </div>
            <div class="zhu_title">自然流量</div>
            <div class="solid"></div>
            <div class="fu_title">获取免费流量</div>
          </li>
          <li>
            <div class="back">
              <img src="@/assets/images/Google-shopping.png" alt="" />
            </div>
            <div class="zhu_title">Google Shopping</div>
            <div class="solid"></div>
            <div class="fu_title">商品自动同步</div>
          </li>
        </ul>
      </div>
      <div class="google_calss2">豆盟为您提供广告解决方案</div>
      <div class="scheme">
        <div class="scheme_text">
          <div class="h1text">Google Feed 商品同步神器</div>
          <div class="wenven">
       作为 Google 的优质合作伙伴，与 Google 深度合作，豆盟推出功能【Google Feed 商品同步】，除了自动适配相关参数、可深度修改外，在规则下支持更多灵活的配置。
          </div>
        </div>
        <div class="scheme_rightimg">
          <img v-lazy='url1' alt="" />
        </div>
      </div>

         <!-- <div class="scheme" style='flex-direction: row-reverse;'>
        <div class="scheme_text">
          <div class="h1text">智能投放，智享其成</div>
          <div class="wenven">
           豆盟是全国仅有的几家直连 Google
            的广告投放系统，仅需几个步骤设置，便可轻松的创建广告，利用机器人算法学习将您的商品在
            Google 上进行投放，优化，管理，提高广告投放收益和效率。
          </div>
        </div>
        <div class="scheme_rightimg">
          <img v-lazy='url2' alt="" />
        </div>
      </div> -->

      <div class="smart">
        <div class="smart_img">
          <img v-lazy='url2' alt="" />
        </div>
        <div class="smart_tect">
          <div class="h1text">智能投放，智享其成</div>
          <div class="wenven">
            豆盟是全国仅有的几家直连 Google
            的广告投放系统，仅需几个步骤设置，便可轻松的创建广告，利用机器人算法学习将您的商品在
            Google 上进行投放，优化，管理，提高广告投放收益和效率。
          </div>
        </div>
      </div>

      <div class="scheme">
        <div class="scheme_text">
          <div class="h1text">海外广告代投放</div>
          <div class="wenven">
     豆盟的专业服务团队拥有丰富的 Google 广告优化经验和资源，帮助卖家轻松触达、积累优质消费者，搭建与消费者对话的数据通道。
          </div>
        </div>
        <div class="scheme_rightimg">
          <img v-lazy='url3' alt="" />
        </div>
      </div>

      <div class="google_calss2">客户案例</div>

      <div class="case">
        <div class="case_text">
          <div class="case_text_h1">Alloyworks：汽车配件制造商</div>
          <div class="weneben_">
            Alloyworks
            是汽车散热器/热交换器和冷却系统组件的专业制造商。之前在海外平台上售卖，由于平台推广成本越来越高，平台用户对价格很敏感，容易陷入价格战的恶性循环，且平台对品牌建设的支持很少，不利于品牌的持续发展，所以他们希望通过独立站来搭建自己的品牌。在与豆盟合作之后，
            豆盟为其建立了从定制化网站设计，产品投放规划到精细化产品运营全方位营销推广计划。且针对该品类，重点投放
            Google 购物广告和品牌词广告，在豆盟服务后的几个月，销量和 ROAS
            快速增长，并达成低流量成本精准引流的目标，深化品牌认知。
          </div>
        </div>
        <div class="case_img">
          <img v-lazy='url4' alt="" />
        </div>
      </div>

      <div class="twocase">
        <div class="twpcase_img">
          <img v-lazy='url5' alt="" />
        </div>

        <div class="twocase_text">
          <div class="case_text_h1">Softerspot：新兴的健身辅材品牌</div>
          <div class="weneben_">
            客户之前是做电池起家，因与筋膜枪的工厂合作看到了健身辅材这个市场的机会，于是找到豆盟来做出海这件事情。整个品牌全托给豆盟来做，客户只须做好产品，辅助发货就行。品牌渐渐做起来，通过红人和
            Google 广告销量也渐渐涨了起来。根据产品的特性，着重投放 Google
            展示广告和品牌关键词广告。让那些在 Google
            搜索上面查看筋膜枪相关信息的消费者，一眼就可以看到 Softerspot
            产品的广告，直接下单购买。接下来， Softerspot
            将与豆盟继续深入合作，寻找下一个发展契机。
          </div>
        </div>
      </div>

      <div class='google_calss2'>准备好定制您自己的品牌独立站了吗？</div>

      <div class='btn' @click="informeClick">立即咨询></div>
    </div>
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
      url1: require('@/assets/images/ad_solution1.png'),
      url2: require('@/assets/images/ad_solution2.png'),
      url3: require('@/assets/images/ad_solution3.png'),
      url4: require('@/assets/images/alloyworks.png'),
      url5: require('@/assets/images/softerspot.png')
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

.native {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}
.back1 {
  width: 100%;
  height: 500px;
  background: url("~@/assets/images/guang.png") top center no-repeat;
  background-size: 100% 500px;
  overflow: hidden;
  position: relative;
  margin-top: 91px;
}
.back1::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
}
.h_textwarp {
  position: absolute;
  top: 180px;
  left: 50%;
  margin-left: -330px;
  z-index: 10;
}
.h_title {
  text-align: center;
  color: #fff;
  font-weight: 700;
  font-size: 36px;
}
.h2_title {
  text-align: center;
  color: #fff;
  font-size: 20px;
  margin-top: 40px;
}
.concent {
  width: 1170px;
  margin: 0 auto;
}
.google_calss1 {
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  margin-top: 100px;
}
.google_calss2 {
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  margin-top: 150px;
}
.icon_warp {
  overflow: hidden;
}
.icon_warp ul li {
  width: 33.3%;
  float: left;
  text-align: center;
  /* margin-right: 40px; */
  margin-top: 100px;
}
.icon_warp ul li:nth-child(3) {
  margin-right: 0;
}
.back {
  width: 350px;
  height: 248px;
  margin: 0 auto;
}
.solid {
  width: 36px;
  height: 2px;
  background: #d8d8d8;
  margin: 0 auto;
  margin-top: 20px;
}
.zhu_title {
  margin-top: 20px;
  font-size: 25px;
  font-weight: 700;
}
.fu_title {
  margin-top: 20px;
  font-size: 18px;
  color: #4a4a4a;
}
.scheme {
  overflow: hidden;
  margin-top: 100px;
  align-items: center;
  display: flex;
  /* background: red; */
}
.scheme_text {
  float: left;
}
.scheme_text {
  width: 515px;

}
.h1text {
   font-size: 20px;
   font-weight: 500;
   margin-top: 30px;
   color: #0c0c0c;
}
.wenven {
    line-height: 25px;
    font-size: 16px;
    font-weight: 400;
    color: #0c0c0c;
    opacity: .6;
    margin-top: 20px;
    font-family: PingFangSC-Regular,PingFang SC;
}
.scheme_rightimg {
  width: 600px;
  /* height: 532px; */
  margin-left: 30px;
}
.smart {
  overflow: hidden;
  margin-top: 50px;
  align-items: center;
  display: flex;
}
.smart_img {
  width: 600px;
  height: 518px;
}
.smart_tect {
  width: 515px;
  margin-left: 30px;
}
.case {
  overflow: hidden;
  margin-top: 100px;
}
.case_text {
  width: 400px;
  float: left;
  /* margin-top: 40px; */
}
.case_img {
  width: 600px;
  float: right;
}
.case_text_h1 {
  font-size: 20px;
  font-weight: 500;
}
.weneben_ {
    line-height: 25px;
    font-size: 16px;
    font-weight: 400;
    color: #0c0c0c;
    opacity: .6;
    margin-top: 20px;
}
.twocase {
  overflow: hidden;
  margin-top: 100px;
}
.twpcase_img {
  width: 600px;
  float: left;
}
.twocase_text {
  width: 400px;
  float: right;
  /* margin-top: 40px; */
}
.btn{
    width: 147px;
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
.btn:hover{
   background: #1170ff;
   color: #fff;
}
</style>
