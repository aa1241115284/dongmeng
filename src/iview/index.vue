<template>
  <div>
    <div class="warp">
      <div class="native"><navigation></navigation></div>
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
          <div class="back1">
            <div class="text" id="text">
              <p class="h1">为什么选择海外一站式服务？</p>
              <p class="h2">
                多语言品牌电商建站及系统优化
                基于全球覆盖率最高的Shopify和WooCommerce等电商交易系统进行定制化开发及体验优化。
                支持多语种，满足不同国家用户的使用习惯，从前端店铺购买交互设计到管理后台ERP深度集成，
                低本高效的提升订单转化率、降低弃单率、拉升客单价
              </p>
            </div>
          </div>
        </swiper-slide>
        <!-- <swiper-slide><div class="back2"></div></swiper-slide>
        <swiper-slide><div class="back3"></div></swiper-slide> -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <div class="advertising">
      <div class="Internet">
        <img
          class="four-rock"
          :src="require('@/assets/images/sj.png')"
          alt=""
        />
        <div class="china">智能投放，多样营销</div>
        <div class="english">Intelligent Delivery and Diversified Marketing</div>
      </div>
      <div class="concent">
        <div class="concent_left" id="one_imgtext" ref="affair">
          <div id="demo">
            <h1>01 网红营销</h1>
            <div class="textxx">
              <p>基于客户品牌调性及购买人群，应用国家、用户画像、产品品类</p>
              <p>等多维度标签，精准挑选高适配度的KOL，定制品效合一的传播及</p>
              <p>投放方案。</p>
              <div class="par_btn" @click="parClick1">查看详情</div>
            </div>
          </div>
        </div>
        <div class="concent_right" id="one_img">
          <img
            class="journal"
            :src="require('@/assets/images/gg1.png')"
            alt=""
          />
        </div>
      </div>

      <div class="concent1">
        <div class="concent1_right" id="two_imgtext">
          <img
            class="journal"
            :src="require('@/assets/images/gg2.png')"
            alt=""
          />
        </div>
        <div class="concent_left1" id="two_img">
          <div id="demo1">
            <h1>02  程序化广告投放</h1>
            <div class="textxx1">
              <p>海外媒体开户、投放及优化一站式服务，覆盖Facebook、</p>
              <p>Google、Tiktok等众多海外顶流广告平台，基于媒体属性及用户</p>
              <p>标签，实现广告精准投放，提高品牌曝光量和订单转化率，帮助</p>
              <p>客户实现海外市场销量的健康稳步增长。</p>
              <div class="par_btn" @click="parClick2">查看详情</div>
            </div>
          </div>
        </div>
      </div>
      <div class="concent">
        <div class="concent_left" id="three_imgtext">
          <div id="demo2">
            <h1>03 竞品分析</h1>
            <div class="textxx">
              <p>帮助客户更高效地分析同行竞争对手的动态，包括营销策略、热</p>
              <p>销产品、新品上架、广告素材、广告文案、广告状态等。基于海</p>
              <p>外市场趋势和消费者调研，制定品牌策略，搭建品牌始别体系，</p>
              <p>实现产品定位竞品差异化。</p>
              <div class="par_btn" @click="parClick3">查看详情</div>
            </div>
          </div>
        </div>
        <div class="concent_right2" id="three_img">
          <img :src="require('@/assets/images/gx.png')" alt="" />
        </div>
      </div>
    </div>

    <div class="overseas">
      <div class="Internet" style="margin-top: 30px">
        <img :src="require('@/assets/images/sj.png')" alt="" />
        <div class="china">海外平台产品和智能化服务组件包括</div>
        <div class="english">
          Overseas platform products and intelligent service components include
        </div>
      </div>
      <ul class="overseas_concent">
        <li>
          <div class="solid">
            <img
              class="icon"
              style="width: 70px; height: 70px"
              :src="require('@/assets/images/icon1.png')"
              alt=""
            />
            <div class="title">本地化定制</div>
            <p>
              资深品牌专家全方位深度跟进，根据品牌形象和视觉风格定位从品牌命名、网站设计、视觉系统、语言翻译等层面，直达用户痛点，帮客户打造符合海外当地用户体验的本地化定制服务。
            </p>
          </div>
        </li>
        <li class="overseas_concent_twoe">
          <div class="solid">
            <img
              class="icon"
              style="width: 70px; height: 70px"
              :src="require('@/assets/images/icon2.png')"
              alt=""
            />
            <div class="title">海外支付对接</div>
            <p>
              海外支付通道对接及申请，用1个API接口可接入所有独立站收款，链接Paypal在线支付及Visa、MasterCarD信用卡等众多通道，提升支付通道覆盖率。优化付款顺畅度，多种开发语言，页面无需跳转，减少流失率，构建提升订单转化率和复购率的产品服务闭环。
            </p>
          </div>
        </li>
        <li class="overseas_concent_three">
          <div class="solid">
            <img
              class="icon"
              style="width: 70px; height: 70px"
              :src="require('@/assets/images/icon3.png')"
              alt=""
            />
            <div class="title">海外公司注册及银行开户</div>
            <p>
              协助客户注册海外公司及银行开户，对应各监管地区域接受金融监管部门监督，合法开展业务，以“双边监管、100%阳光透明”的安全和合规标准，帮助客户资金流合规化。
            </p>
          </div>
        </li>
        <li class="class=&quot;overseas_concent_four">
          <div class="solid">
            <img
              class="icon"
              style="width: 70px; height: 70px"
              :src="require('@/assets/images/icon4.png')"
              alt=""
            />
            <div class="title">物流及海外仓</div>
            <p>
              帮助客户对接整合国际物流及海外仓公司，覆盖全球150个国家及超过300个港口，打通物流和订单信息，专属客服人员将会作为单一联系点，为客户确定精确的取货及装货时间，并在做好物流全程信息的更新与提醒，确保客户掌握每个环节，让发货更顺畅，降低发货管理冗余成本。
            </p>
          </div>
        </li>
      </ul>
    </div>
   

    <div class="serve">
      <div class="Internet" style="margin-top: 30px">
        <img :src="require('@/assets/images/sj.png')" alt="" />
        <div class="china">服务流程</div>
        <div class="english">Service Process</div>
      </div>
      <ul class="serve_concent" id="serve_concent">
        <li>
          <div class="concent_li_left">
            <img
              style="width: 128px; height: 128px"
              :src="require('@/assets/images/cp1.png')"
              alt=""
            />
            <div class="serve_text">产品咨询</div>
          </div>
          <img
            class="concent_li_right"
            :src="require('@/assets/images/jiantou.png')"
            alt=""
          />
        </li>
        <li>
          <div class="concent_li_left">
            <img
              style="width: 128px; height: 128px"
              :src="require('@/assets/images/cp2.png')"
              alt=""
            />
            <div class="serve_text">产品试用</div>
          </div>
          <img
            class="concent_li_right"
            :src="require('@/assets/images/jiantou.png')"
            alt=""
          />
        </li>
        <li>
          <div class="concent_li_left">
            <img
              style="width: 128px; height: 128px"
              :src="require('@/assets/images/cp3.png')"
              alt=""
            />
            <div class="serve_text">业务调研</div>
          </div>
          <img
            class="concent_li_right"
            :src="require('@/assets/images/jiantou.png')"
            alt=""
          />
        </li>
        <li>
          <div class="concent_li_left">
            <img
              style="width: 128px; height: 128px"
              :src="require('@/assets/images/cp4.png')"
              alt=""
            />
            <div class="serve_text">购买</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="unit">
      <div class="Internet" style="margin-top: 30px">
        <img :src="require('@/assets/images/sj.png')" alt="" />
        <div class="china">合作企业</div>
        <div class="english">Cooperative Enterprise</div>
      </div>
      <img :src="require('@/assets/images/hezuo.png')" alt="" style='margin-top:50px'>
      <!-- <ul>
        <li>
          <img
            :src="require('@/assets/images/ebay1.png')"
            alt=""
            class="ebay1"
          />
        </li>
        <li>
          <img
            :src="require('@/assets/images/ebay2.png')"
            alt=""
            class="ebay1"
          />
        </li>
        <li>
          <img
            :src="require('@/assets/images/ebay3.png')"
            alt=""
            class="ebay1"
          />
        </li>
        <li>
          <img
            :src="require('@/assets/images/ebay4.png')"
            alt=""
            class="ebay1"
          />
        </li>
        <li>
          <img
            :src="require('@/assets/images/ebay5.png')"
            alt=""
            class="ebay1"
          />
        </li>
        <li>
          <img
            :src="require('@/assets/images/ebay6.png')"
            alt=""
            class="ebay1"
          />
        </li>
        <li>
          <img
            :src="require('@/assets/images/ebay7.png')"
            alt=""
            class="ebay1"
          />
        </li>
        <li>
          <img
            :src="require('@/assets/images/ebay8.png')"
            alt=""
            class="ebay1"
          />
        </li>
      </ul> -->
    </div>
    <div class="bottom"><bottom></bottom></div>
    <operating></operating>
  </div>
</template>

<script>
import navigation from '@/components/navigation'
import bottom from '@/components/bottom'
import operating from '@/components/operating'
export default {
  components: { navigation, bottom, operating },
  name: 'index',
  data () {
    return {
      signboard: true,
      twosignboard: true,
      threesignboard: true,
      i: 0,
      swiperOptions: {
        // loop: true,
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false,
        // },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  computed: {},
  methods: {
    parClick1 () {
      this.$router.push({
        path: '/shopping',
        query: { current: 1, childrencurrent: 12 }
      })
      document.documentElement.scrollTop = 0
    },
    parClick2 () {
      this.$router.push({
        path: '/put',
        query: { current: 4, childrencurrent: 16 }
      })
      document.documentElement.scrollTop = 0
    },
    parClick3 () {
      this.$router.push({
        path: '/product',
        query: { current: 2 }
      })
      document.documentElement.scrollTop = 0
    },
    scrollToTop () {
      const that = this
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      that.scrollTop = scrollTop
      var scroll = scrollTop - this.i
      this.i = scrollTop
      // console.log(scrollTop)
      const ob = new IntersectionObserver((options) => {
        const [serve_concent = {}] = options

        if (serve_concent.intersectionRatio === 1) {
          serve_concent.target.style.transition = 'opacity 3s ease'
          serve_concent.target.style.opacity = 1
        } else {
          serve_concent.target.style.transition = 'none'
          serve_concent.target.style.opacity = 0
        }
      })
      ob.observe(document.getElementById('serve_concent'))
      if (scrollTop >= 100 && scroll > 0 && this.signboard) {
        $('#demo')
          .stop()
          .css('margin-top', '-500px')
          .animate({ 'margin-top': '0px' }, 1000)

        setTimeout(function () {
          $('#one_img')
            .stop()
            .css('margin-right', '-500px')
            .animate({ 'margin-right': '0px' }, 1000)
        }, 1000)
        this.signboard = false
      }

      if (scrollTop >= 580 && scroll > 0 && this.twosignboard) {
        $('#demo1')
          .stop()
          .css('margin-top', '500px')
          .animate({ 'margin-top': '0px' }, 1000)
        setTimeout(function () {
          $('#two_imgtext')
            .stop()
            .css('margin-left', '-500px')
            .animate({ 'margin-left': '0px' }, 1000)
        }, 1000)

        this.twosignboard = false
      }

      if (scrollTop >= 1100 && scroll > 0 && this.threesignboard) {
        $('#demo2')
          .stop()
          .css('margin-top', '-500px')
          .animate({ 'margin-top': '0px' }, 1000)
        setTimeout(function () {
          $('#three_img')
            .stop()
            .css('margin-right', '-600px')
            .animate({ 'margin-right': '0px' }, 1000)
        }, 1000)

        this.threesignboard = false
      }
    }
  },
  mounted () {
    let that = this
    window.addEventListener('scroll', that.scrollToTop)

    window.addEventListener('scroll', this.scrollHandle, true)
    $('#text').addClass('bounceInLeft animated infinite')

    setTimeout(() => {
      $('#text').removeClass('bounceInLeft animated infinite')
    }, 1000)
  },
  destroyed () {
    let that = this
    window.removeEventListener('scroll', that.scrollToTop)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back1 {
  width: 100%;
  height: 680px;
  background: url("~@/assets/images/back1.jpg") top center no-repeat;
  background-size: 100% 100%;
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
  background-color: rgba(0, 0, 0, .4);
  z-index: 2;
}
.back2 {
  width: 100%;
  height: 680px;
  background: url("~@/assets/images/back1.jpg") top center no-repeat;
  background-size: 100% 100%;
}
.back3 {
  width: 100%;
  height: 680px;
  background: url("~@/assets/images/back1.jpg") top center no-repeat;
  background-size: 100% 100%;
}

.warp >>> .swiper-pagination-bullet-active {
  background: #fff;
}
.warp {
  position: relative;
}
.native {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}
.text {
  width: 800px;
  color: #fff;
  position: absolute;
  top: 230px;
  left: 120px;
  z-index: 10;
  /* margin-top: 230px;
  margin-left: 120px; */
}
.text .h1 {
  font-size: 36px;
}
.text .h2 {
  margin-top: 30px;
  line-height: 30px;
  font-size: 14px;
}
.advertising {
  width: 100%;
  margin-top: 70px;
}
.Internet img {
  width: 13px;
  height: 10px;
}
.Internet {
  text-align: center;
}
.china {
    width: 100%;
    height: 48px;
    font-size: 36px;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #0C0C0C;
    line-height: 48px;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.english {
    width: 100%;
    font-size: 16px;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    color: #86868B;
    line-height: 30px;
    letter-spacing: 3px;
    text-align: center;
    margin-top: 5px;
    }
.concent {
  width: 1170px;
  margin: 0 auto;
  margin-top: 120px;
  overflow: hidden;
}
.concent_left {
  float: left;
  margin-top: 70px;
}
.concent_left h1 {
  color: #0c0c0c;
  font-size: 36px;
  font-weight: 500;
}
.concent_left .textxx {
  margin-top: 10px;
}
.textxx1{
  margin-top: 10px;
}
.concent_left p {
  line-height: 25px;
  font-size: 20px;
  font-weight: 400;
  color:#0c0c0c;
  opacity: .6;
}
.concent_right {
  width: 500px;
  float: right;
}

.concent1 {
  width: 1170px;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 50px;
}
.concent_left1 {
  float: right;
  margin-top: 200px;
}
.concent_left1 h1 {
  color: #0c0c0c;
  font-size: 36px;
  font-weight: 500;
}
.concent_left1 .textxx {
  margin-top: 10px;
}
.concent_left1 p {
  line-height: 25px;
  font-size: 20px;
  font-weight: 400;
  color:#0c0c0c;
  opacity: .6;
}
.concent1_right {
  width: 500px;
  float: left;
}
.concent_right2 {
  width: 580px;
  float: right;
}

.overseas {
  width: 100%;
  height: 700px;
  /* background: url("~@/assets/images/bann1.png") top center no-repeat;
  background-size: 100% 100%; */
  margin-top: 100px;
  overflow: hidden;
}
.overseas_concent {
  width: 80%;
  height: 400px;
  margin: 0 auto;
  margin-top: 80px;
  /* overflow: hidden; */
}
.overseas_concent li {
  float: left;
  width: 25%;
  height: 430px;
  background: #fff;
  /* margin-right: 80px; */
  cursor: pointer;
  transition: all 0.3s ease;
  /* box-shadow: 4px 4px 16px 2px rgba(0, 0, 0, 0.1); */
  /* border: 1px solid #ebedf0; */
  color: #4a4a4a;
  box-sizing: border-box;
  /* transform: translateZ(0);
  transition: all .6s; */
}
.overseas_concent li:hover {
  margin-top: -20px;
    /* transform: scale(1.1);
    background: rgba(0,0,0,.5);
    color: #fff; */
  }

.overseas_concent .overseas_concent_one {
  /* transition: opacity 0.5s, transform 1s cubic-bezier(0, 1, 0.5, 1);
  transform: translate3d(0, 90px, 0); */
}

.overseas_concent li .solid {
  width: 85%;
  height: 100%;
  border: 1px solid #ebedf0;
  margin: 0 auto;
  margin-top: 2.5%;
  text-align: center;
}

.overseas_concent li img {
  /* width: 80px;
  height: 65px; */
  margin-top: 45px;
}

.title {
  margin-top: 25px;
  font-size: 22px;
  color: #0c0c0c;
}
.overseas_concent li p {
  width: 80%;
  margin: 0 auto;
  margin-top: 25px;
  line-height: 20px;
  text-align: left;
  text-indent: 25px;
  font-size: 16px;
  color: rgba(12,12,12,.7);
  font-family: PingFangSC-Semibold,PingFang SC;
}
.overseas_concent li:nth-child(4n) {
  margin-right: 0;
}

.serve {
  width: 100%;
  margin-top: 100px;
  overflow: hidden;
}
.serve_concent {
  width: 1150px;
  margin: 0 auto;
  margin-top: 100px;
  opacity: 0;
}
.serve_concent li {
  text-align: center;
  float: left;
}
.concent_li_left {
  float: left;
}

.concent_li_right {
  width: 100px;
  height: 25px;
  margin-top: 50px;
  margin-left: 50px;
  margin-right: 50px;
}
.serve_text {
  margin-top: 20px;
  color: #4a4a4a;
}
.unit {
  width: 1150px;
  margin: 0 auto;
  margin-top: 100px;
  overflow: hidden;
}

.unit li {
  float: left;
  width: 237px;
  height: 166px;
  margin-right: 63px;
  margin-top: 70px;
  border: 1px solid #e7e7e7;
}
.unit li:nth-child(4n) {
  margin-right: 0;
}
.unit li:nth-child(8n) {
  margin-right: 0;
}
.bottom {
  margin-top: 100px;
}
.demo {
  margin-top: -400px;
}
/* #demo1 {
  margin-top: 400px;
   animation: rotate 1s infinite;
} */
#two_img {
  overflow: hidden;
}
@keyframes rotate {
  to {
    margin-top: 0px;
  }
}
.BBB {
  margin-right: -500px !important;
}
#one_img {
  margin-right: -500px;
}
#demo {
  margin-top: -500px;
}

#two_imgtext {
  margin-left: -500px;
}
#demo1 {
  margin-top: 500px;
}
#demo2 {
  margin-top: -500px;
}
#three_img {
  margin-right: -600px;
}
@keyframes imgrot {
  to {
    margin-right: 0px;
  }
}
.par_btn {
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
    margin-top: 20px;
    float: left;
}
.par_btn:hover{
   background: #1170ff;
   color: #fff;
}


</style>
