<template>
  <div class="body">
    <navigation></navigation>
    <div class="back1"></div>

    <div class="tableClass">
      <div :class="{ active: 0 == current }" @click="current = 0">
        <p>企业简介</p>
      </div>
      <div :class="{ active: 1 == current }" @click="current = 1">
        <p>联系我们</p>
      </div>
      <div :class="{ active: 2 == current }" @click="current = 2">
        <p>加入我们</p>
      </div>
    </div>

    <div v-if="current == 0" class="enterprise">
      <p class="enterprise_text">
        豆盟科技股份有限公司（简称“豆盟科技），是创新的互动式效果广告平台及公私域营销一体化SaaS服务供应商，旗下的「专有广告平台及技术」为广告主提供「精准投放服务」，为媒体发布者提供「系统化流量变现解决方案」；「H5短视频云平台」具有品效合一的投放效果，并提供客户「赋能计划」，激活用户的全域链接；「短视频营销云SaaS」为客户提供「公私域营销一体化解决方案」，帮助客户高效解决私域流量变现以及全面提升获客能力实现价值增长。2019年3月14日，豆盟科技于香港联交所主板上市，股票代码：1917.HK。
      </p>
      <div class="title">发展历程</div>
      <div class="swiper_warp">
        <swiper ref="interSwiper" :options="swiperOptions">
          <swiper-slide v-for="item in List">
            <div class="course-item">
              <p class="course-item-t">{{ item.title }}</p>
              <p class="course-item-h"></p>
              <p class="course-item-c">
                {{ item.text }}
              </p>
            </div>
          </swiper-slide>
        </swiper>
        <div
          class="swiper-button-next next"
          slot="button-next"
          @click="swiperNext"
        ></div>
        <div
          class="swiper-button-prev prev"
          slot="button-prev"
          @click="swiperPrev"
        ></div>
      </div>

      <div class="title" style="margin-top: 100px">豆盟科技文化</div>
      <div class="culture">
        <img v-lazy="item.url" alt="" v-for="item in cultureList" />
        <!-- <img src="@/assets/images/yuanjing.png" alt="" />
        <img src="@/assets/images/jiaizhiguan.png" alt="" /> -->
      </div>
      <div class="title" style="margin-top: 80px">豆盟快讯</div>

      <div class="swiper_warp bottomm">
        <swiper ref="refswiper" :options="img_swiperOptions">
          <swiper-slide v-for="item in img_List">
            <a :href="item.blank" target="_blank">
              <img :src="item.url" alt="" />
            </a>
          </swiper-slide>
        </swiper>
        <div
          class="swiper-button-next next"
          slot="button-next"
          @click="img_swiperNext"
        ></div>
        <div
          class="swiper-button-prev prev"
          slot="button-prev"
          @click="img_swiperPrev"
        ></div>
      </div>
    </div>

    <div v-if="current == 1" class="tab2-box">
      <div class="tab2-l">
        <p class="t">我们在这里</p>
        <p class="t1">联系我们</p>
        <div class="t2">豆盟前台客服电话：400-998-1917</div>
        <div class="t1">公司地址</div>
        <div class="t2">北京市朝阳区</div>
        <div class="t2">北京市朝阳区朝阳公园南路19号郡王府综合楼三层</div>
        <div class="t1">乘车路线</div>
        <div class="t2">
          地铁路线--14号线朝阳公园站 B口（东北口），步行1.2公里即到
          公交路线--657路或988路，朝阳公园北站下车，步行598米；989路，
          朝阳公园桥东站下车，步行792米，即可到达。
        </div>
      </div>
      <div class="baidu_map">
        <baidu-map
          :center="center"
          :zoom="zoom"
          @ready="handler"
          :scroll-wheel-zoom="true"
          style="height: 100%"
        ></baidu-map>
      </div>
    </div>

    <div v-if="current == 2" class="tab3">
      <div class="title" style="margin-top: 80px">我们注重以下特征的候选人</div>
      <div class="candidate">
        <img v-lazy="item.url" v-for="item in candidateList" alt="" />
        <!-- <img src="@/assets/images/c2.png" alt="" />
        <img src="@/assets/images/c3.png" alt="" />
        <img src="@/assets/images/c4.png" alt="" />
        <img src="@/assets/images/c5.png" alt="" /> -->
      </div>
      <div class="title">办公环境</div>
      <div class="tab3-box2-c">
        <img v-lazy="tab3left_img" alt="" class="tab3-box2-c-1" />
        <img v-lazy="tab3right_img" alt="" class="tab3-box2-c-2" />
      </div>
      <div class="title">团队风采</div>

      <div class="swiper_warp bottomm">
        <swiper ref="tab3swiper" :options="tab3_swiperOptions">
          <swiper-slide v-for="item in tab3_List">
            <img :src="item.url" alt="" />
          </swiper-slide>
        </swiper>
        <div
          class="swiper-button-next next"
          slot="button-next"
          @click="tab3_swiperNext"
        ></div>
        <div
          class="swiper-button-prev prev"
          slot="button-prev"
          @click="tab3_swiperPrev"
        ></div>
      </div>

      <div class="title">福利关怀</div>
      <div class="tab3-box4-photoWall">
        <div class="tab3-box4-photoWall-1">
          <div style="display: block">
            <img src="@/assets/images/am.png" alt="" />
            <p>免费按摩</p>
          </div>
          <div style="display: block">
            <img src="@/assets/images/dache.png" alt="" />
            <p>车补/餐补</p>
          </div>
          <div style="display: block">
            <img src="@/assets/images/build.png" alt="" />
            <p>定期团建</p>
          </div>
        </div>
        <div class="tab3-box4-photoWall-1" style="margin-top: 47px">
          <div style="display: block">
            <img src="@/assets/images/money.png" alt="" />
            <p>年终奖</p>
          </div>
          <div style="display: block">
            <img src="@/assets/images/birthday.png" alt="" />
            <p>生日会</p>
          </div>
          <div style="display: block">
            <img src="@/assets/images/baoxian.png" alt="" />
            <p style="white-space: nowrap; transform: translateX(-50%)">
              带薪休假/商业保险
            </p>
          </div>
        </div>
      </div>
      <div class="title">投递通道直达</div>
      <div class="urlclass">
        <a
          href="https://www.lagou.com/gongsi/611.html"
          target="_blank"
          style="margin-right: 151px"
        >
          <img src="@/assets/images/lagou.png" alt="" />
        </a>
        <a
          href="https://www.zhipin.com/gongsi/1ee6f3b587b7a99b03Vy3w~~.html?ka=search_rcmd_company_1ee6f3b587b7a99b03Vy3w~~"
          target="_blank"
        >
          <img src="@/assets/images/bosszhipin.png" alt="" />
        </a>
      </div>
    </div>
    <operating></operating>
    <bottom></bottom>
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
      center: { lng: 0, lat: 0 },
      zoom: 3,

      List: [
        {
          title: '2013',
          text: '推出SDK Platform，是早期移动广告平台的先驱'
        },
        {
          title: '2015',
          text: '推出七合一SDK，大大减小了多种广告形式媒体嵌入的占用大小与集成效率'
        },
        {
          title: '2015',
          text: '推出了云端支持的SDK，让媒体开发者嵌入广告SDK后，无需在更新SDK，云端将自动更新下载最新的代码版本'
        },
        {
          title: '2017',
          text: '推出互动广告技术，将广告投放、媒体变现、用户体验完美结合'
        },
        {
          title: '2018',
          text: '推出小程序广告技术，为微信生态增加了全新的广告模式'
        },
        {
          title: '2019.3',
          text: '于香港联交所主板上市，股票代码：1917.HK'
        },
        {
          title: '2019.6',
          text: '发布全新H5视频互动广告技术，成为国内互动视频的开拓者，布局5G时代'
        },
        {
          title: '2020',
          text: '发布了短视频营销云SaaS产品，用数字化思维和全新营销模式帮助企业实现快速增长'
        }
      ],
      img_List: [
        {
          url: require('@/assets/images/p6.png'),
          blank: 'http://www.sootoo.com/content/694966.shtml'
        },
        {
          url: require('@/assets/images/p5.png'),
          blank: 'https://baijiahao.baidu.com/s?id=1637330832427606954&wfr=spider&for=pc'
        },
        {
          url: require('@/assets/images/p4.png'),
          blank: 'https://baijiahao.baidu.com/s?id=1637374360855829003&wfr=spider&for=pc'
        },
        {
          url: require('@/assets/images/p3.png'),
          blank: 'https://www.tmtpost.com/nictation/4026688.html'
        },
        {
          url: require('@/assets/images/p2.png'),
          blank: 'https://www.sohu.com/a/323058145_350699'
        },
        {
          url: require('@/assets/images/p1.png'),
          blank: 'https://mp.weixin.qq.com/s/FUqgS5PSqom0Bp8UqBXaKA'
        },
        {
          url: require('@/assets/images/p8.png'),
          blank: 'https://mp.weixin.qq.com/s/LMio7W8pnssYiRTYMgkTaQ'
        },
        {
          url: require('@/assets/images/p7.png'),
          blank: 'https://mp.weixin.qq.com/s/SohkgZdxekBCBCiUiCEDEg'
        }
      ],
      tab3_List: [
        { url: require('@/assets/images/t6.png') },
        { url: require('@/assets/images/t1.png') },
        { url: require('@/assets/images/t2.png') },
        { url: require('@/assets/images/t3.png') },
        { url: require('@/assets/images/t4.png') },
        { url: require('@/assets/images/t5.png') }
      ],
      cultureList: [
        { url: require('@/assets/images/shiming.png') },
        { url: require('@/assets/images/yuanjing.png') },
        { url: require('@/assets/images/jiaizhiguan.png') }
      ],
      candidateList: [
        { url: require('@/assets/images/c1.png') },
        { url: require('@/assets/images/c2.png') },
        { url: require('@/assets/images/c3.png') },
        { url: require('@/assets/images/c4.png') },
        { url: require('@/assets/images/c5.png') }
      ],
      tab3left_img: require('@/assets/images/bghj2.png'),
      tab3right_img: require('@/assets/images/bghj.png'),
      current: 0,
      swiperOptions: {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        pagination: {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          clickable: true
        }
      },
      img_swiperOptions: {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        pagination: {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          clickable: true
        }
      },
      tab3_swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          clickable: true
        }
      }
    }
  },
  methods: {
    handler ({ BMap, map }) {
      console.log(BMap, map)
      this.center.lng = 116.493712
      this.center.lat = 39.943123
      this.zoom = 15
    },

    handleClick (tab, event) {},
    swiperNext () {
      this.$refs.interSwiper.swiper.slideNext()
    },
    swiperPrev () {
      this.$refs.interSwiper.swiper.slidePrev()
    },
    img_swiperNext () {
      this.$refs.refswiper.swiper.slideNext()
    },
    img_swiperPrev () {
      this.$refs.refswiper.swiper.slidePrev()
    },
    tab3_swiperNext () {
      this.$refs.tab3swiper.swiper.slideNext()
    },
    tab3_swiperPrev () {
      this.$refs.tab3swiper.swiper.slidePrev()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back1 {
  width: 100%;
  height: 500px;
  background: url("~@/assets/images/aboutBan.png") top center no-repeat;
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
  background-color: rgba(0, 0, 0, 0.1);
}
.tableClass {
  margin-bottom: 80px;
  height: 76px;
  background: #fff;
  border-bottom: 1px solid #ebedf0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.tableClass div {
  font-family: PingFangSC-Regular, PingFang SC;
  font-size: 20px;
  font-weight: 400;
  color: #1f2329;
  text-align: center;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  line-height: 76px;
}
.tableClass p {
  height: 76px;
  display: inline-block;
  cursor: pointer;
}
.tableClass .active p {
  border-bottom: 2px solid #1170ff;
}
.enterprise {
  width: 100%;
}
.swiper_warp {
  position: relative;
}
.enterprise_text {
  width: 1055px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1.5px;
  margin: auto;
  height: 162px;
  line-height: 36px;
}
.title {
  font-family: PingFangSC-Heavy, PingFang SC;
  font-weight: 800;
  color: #1d1d1f;
  margin-top: 50px;
  margin-bottom: 48px;
  line-height: 50px;
  text-align: center;
  font-size: 36px;
}
.swiper_warp {
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
}
.swiper-slide {
  height: 200px;
  height: 100%;
  font-size: 18px;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.course-item {
  font-family: PingFangSC-Medium, PingFang SC;
  color: #000;
}
.course-item-t {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
}
.course-item-h {
  height: 2px;
  width: 50px;
  background-color: #037af4;
  margin-bottom: 10px;
}
.course-item-c {
  font-family: PingFangSC-Regular, PingFang SC;
  font-size: 16px;
  font-weight: 400;
  color: #11151b;
  line-height: 2;
}
.swiper-container {
  width: 90%;
}
.prev {
  width: 40px;
  height: 40px;
  background: url("~@/assets/images/prev.png") top center no-repeat;
  background-size: 40px 40px;
  left: 10px;
}
.next {
  width: 40px;
  height: 40px;
  background: url("~@/assets/images/next.png") top center no-repeat;
  background-size: 40px 40px;
  right: 10px;
}
.culture {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.culture img {
  width: 350px;
  height: 380px;
  border-radius: 8px;
  margin-right: 32px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.culture img:hover {
  margin-top: -20px;
}
.bottomm {
  padding-bottom: 50px;
}
.map {
  height: 100%;
  width: 500px;
  background: red;
}
.tab2-box {
  display: -webkit-box;
  display: -ms-flexbox;
  /* display: flex; */
  /* -webkit-box-pack: justify; */
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-top: 80px;
  padding: 0 43px 0 174px;
  padding-bottom: 100px;
}
.tab2-l {
  width: 539px;
}
.baidu_map {
  width: 656px;
  height: 410px;
}
.tab2-l .t {
  font-size: 36px;
  font-family: PingFangSC-Heavy, PingFang SC;
  font-weight: 800;
  color: #1d1d1f;
}
.tab2-l .t1 {
  margin-top: 24px;
  font-size: 20px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #11151b;
  line-height: 30px;
  letter-spacing: 1px;
}
.tab2-l .t2 {
  margin-top: 4px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #11151b;
  line-height: 30px;
  letter-spacing: 2px;
}
.candidate {
  margin-top: 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.candidate img {
  width: 200px;
  height: 250px;
  margin-right: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.candidate img:hover {
  margin-top: -20px;
}
.tab3-box2-c {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0 106px 40px 127px;
}
.tab3-box2-c-1 {
  width: 482px;
  height: 308px;
}
.tab3-box2-c-2 {
  width: 645px;
  height: 323px;
}
.tab3-box4-photoWall {
  padding: 49px 390px 80px;
}
.tab3-box4-photoWall-1 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.tab3-box4-photoWall-1 img {
  width: 100px;
}
.tab3-box4-photoWall-1 p {
  text-align: center;
  font-size: 20px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #000;
  line-height: 36px;
  letter-spacing: 1.5px;
  width: 100px;
}
.urlclass {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding-bottom: 50px;
}
.urlclass img {
  width: 210px;
  height: 61px;
}
</style>
