<template>
  <div>
    <div class="navigation_warp">
      <div class="navigation">
        <!-- <div><img src="@/assets/images/logo.png" alt="" class="logo" /></div> -->
        <div class='left_logo'>
          <a href="index.html" class="leftLogo">
            <span class="logo_img">豆盟科技</span>
            <span class="shu"></span>
            <span class="logo_text">股票代码<br />1917.HK</span>
          </a>
          <!-- <div class="wxLogo">
            <img src="@/assets/images/wx11.png" alt="" />
          </div> -->
        </div>
        <div class="autoClass">
          <ul>
            <li
              v-for="(item, index) in navList"
              :key="index"
              :class="{ active: index == current }"
              @click="nativeclick(index, item.path)"
            >
              <div>{{ item.name }}</div>

              <div class="display_div" v-if="item.children">
                <div
                  v-for="(items, indexx) in item.children"
                  :key="indexx"
                  @click.stop="childrenClick(items)"
                  :class="{
                    childrenactive: items.childrencurrent == childrencurrent,
                  }"
                >
                  {{ items.name }}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class='right_warp'>
          <div class="right" @click="loginClick" v-if="!token">登录</div>
          <div class="user_warp" v-else>
            <div class="user_img">
              <img src="@/assets/images/user_img.png" alt="" />
            </div>
            <div class="user_concent">
              <div class="concent_img" style="margin-top: 5px">
                <img src="@/assets/images/user_img.png" alt="" />
              </div>
              <div style="margin-top: 5px">非会员账户</div>
              <div style="margin-top: 5px">176****4427</div>
              <el-button
                type="primary"
                round
                size="mini"
                disabled
                style="margin-top: 5px"
                >系统管理</el-button
              >
              <div class="aaa" style="margin-top: 5px">
                <el-button type="primary" round size="mini" @click="returnClick"
                  >退出登录</el-button
                >
              </div>
            </div>
          </div>
          <div class="consult" @click="informeClick">立即咨询></div>
          <div class="wx_right">
            <div class="wx_hover">
              <div class="wx_imgwarp">
                <img src="@/assets/images/wxtrue.png" alt="" />
              </div>
              <div class="wx_text">联系客户经理微信</div>
            </div>
            <div class="qrcode"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setItem, getItem, removeItem } from '@/utils/localStorage'
export default {
  data () {
    return {
      token: getItem('token'),
      navList: [
        { name: '首页', path: '/' },
        {
          name: '企业海外服务',
          children: [
            {
              name: '客户商城精选',
              path: '/shopping',
              current: 1,
              childrencurrent: 12
            },
            {
              name: '多站群企业服务',
              path: '/multistation',
              current: 1,
              childrencurrent: 13
            },
            {
              name: '企业独立站的全流程服务',
              path: '/complete',
              current: 1,
              childrencurrent: 14
            },
            {
              name: '企业独立商城的设计和代建站',
              path: '/modelling',
              current: 1,
              childrencurrent: 15
            }
          ]
        },
        { name: '产品优势', path: '/product' },
        { name: '价格', path: '/price' },
        {
          name: '营销与运营',
          children: [
            { name: '广告投放', path: '/put', current: 4, childrencurrent: 16 },
            {
              name: '竞品分析',
              path: '/analyse',
              current: 4,
              childrencurrent: 17
            },
            {
              name: '个性化营销方案',
              path: '/scheme',
              current: 4,
              childrencurrent: 18
            }
          ]
        },
        {
          name: '关于我们',
          children: [
            {
              name: '公司介绍',
              path: '/introduce',
              current: 5,
              childrencurrent: 19
            },
            {
              name: '合作咨询',
              path: '/about',
              current: 5,
              childrencurrent: 20
            }
          ]
        }
      ],
      current: this.$route.query.current || 0,
      // top:(this.$route.name == 'price') || (this.$route.name == 'product') ? 1 : '',
      //  top:(this.$route.name == 'price') ? 1 : '',
      a: 100,
      childrencurrent: this.$route.query.childrencurrent || null
    }
  },
  methods: {
    returnClick () {
      this.$router.push({ path: '/login' })
      removeItem('token')
    },
    nativeclick (index, path) {
      if (path != undefined) {
        this.$router.push({ path: path, query: { current: index } })
        this.current = index
      }
      document.documentElement.scrollTop = 0
    },

    childrenClick (items) {
      this.$router.push({
        path: items.path,
        query: {
          current: items.current,
          childrencurrent: items.childrencurrent
        }
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
      // if(this.$route.name != 'price'){
      // if(scrollTop>=680){
      // that.top=1
      // }else{
      // that.top=0
      // }
      // }
    },
    loginClick () {
      this.$router.push({ path: '/login' })
    },
    informeClick () {
      let routeUrl = this.$router.resolve({
        path: '/information'
        // query: {id: 96}
      })

      window.open(routeUrl.href, '_blank')
    }
  },
  mounted () {
    let that = this
    window.addEventListener('scroll', that.scrollToTop)
  },
  destroyed () {
    let that = this
    window.removeEventListener('scroll', that.scrollToTop)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  width: 83px;
}
.navigation_warp {
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.06);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

.navigation_warp .autoClass ul li {
  color: #000;
  font-size: 16px;
  /* margin-top: 30px; */
}
.navigation {
  /* width: 60%; */
  min-width: 1400px;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  margin: 0 auto;
  font-size: 14px;
  cursor: pointer;
  /* background: red; */
}
.autoClass ul li {
  float: left;
  margin-right: 50px;
  color: #fff;
  margin-top: 35px;
  position: relative;
}
.autoClass ul li:hover {
  color: #fff;
  padding-bottom: 32px;
  /* border-bottom: 2px solid #fff; */
}
.autoClass ul li:hover .display_div {
  display: block;
}
.navigation_warp .autoClass ul li:hover {
  color: #1170ff;
  padding-bottom: 32px;
  /* transition: all .1s cubic-bezier(.4,0,.2,1) */
  /* border-bottom: 2px solid #fff;; */
}
.display_div {
  width: 130px;
  background: #fff;
  position: absolute;
  top: 56px;
  display: none;
  border-radius: 0px 0 5px 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  box-sizing: border-box;
  border: 1px solid #ebedf0;
}
.autoClass ul li:nth-child(2) .display_div {
  width: 230px;
  text-indent: 10px;
  left: -1px;
  border-radius: 0px 0 10px 10px;
}
.autoClass ul li:nth-child(5) .display_div {
  text-align: center;
  left: -30px;
}
.autoClass ul li:nth-child(6) .display_div {
  text-align: center;
  left: -33px;
}
.autoClass ul li .display_div div {
  color: #1d1d1f;
  line-height: 35px;
  font-weight: 400;
  font-size: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.autoClass ul li .display_div .childrenactive {
  color: #1170ff;
  font-weight: 700;
}
.autoClass ul li .display_div div:hover {
  color: #1170ff;
}
.right {
  width: 80px;
  height: 42px;
  background: #ffffff;
  border-radius: 28px;
  text-align: center;
  line-height: 42px;
  font-weight: 400;
  cursor: pointer;
  margin-top: 25px;
  float: left;
  color: #1170ff;
  font-size: 16px;
  border: 1px solid #1170ff;
}
.right:hover {
  background: #1170ff;
  color: #fff;
}
.consult {
  width: 130px;
  height: 42px;
  border-radius: 28px;
  border: 1px solid #1170ff;
  font-size: 16px;
  font-weight: 400;
  color: #1170ff;
  line-height: 42px;
  letter-spacing: 2px;
  text-align: center;
  cursor: pointer;
  margin-top: 25px;
  float: left;
  margin-left: 30px;
}
.consult:hover {
  background: #1170ff;
  color: #fff;
}
/* .navigation_warp .consult{
   background: #1170ff;
   color: #fff;
} */

.autoClass ul .active {
  color: #194ce8;
  padding-bottom: 32px;
  border-bottom: 2px solid #1170ff;
  font-weight: 700;
  /* font-weight: bold; */
}
.navigation_warp .autoClass ul .active {
  color: #1170ff;
  padding-bottom: 32px;
  border-bottom: 2px solid #1170ff;
}

.navigation_warp .wx_text {
  color: #000;
}
.wx_imgwarp img {
  width: 28px;
}
.wx_imgwarp {
  float: left;
  margin-top: 35px;
  margin-left: 20px;
}
.wx_text {
  color: #fff;
  float: left;
  line-height: 87px;
  margin-left: 5px;
  font-weight: 400;
  font-size: 16px;
}
.wx_right {
  float: right;
  position: relative;
}
.wx_hover {
  overflow: hidden;
}
.qrcode {
  display: none;
  position: absolute;
  width: 147px;
  height: 147px;
  bottom: -127px;
  left: 23px;
  background: url("~@/assets/images/wxcode.png") top center no-repeat;
  background-size: 147px 147px;
}
.wx_right:hover .qrcode {
  display: block;
}
.user_img {
  width: 40px;
  height: 40px;
  float: left;
  margin-top: 25px;
}
.user_warp {
  position: relative;
  width: 40px;
  height: 91px;
  float: left;
}
.user_concent {
  position: absolute;
  top: 91px;
  left: -50px;
  width: 140px;
  text-align: center;
  background: #fff;
  padding-bottom: 20px;
  display: none;
}
.user_warp:hover .user_concent {
  display: block;
}
.concent_img {
  width: 40px;
  height: 40px;
  margin: 0 auto;
}
.aaa .el-button--primary {
  background: #194ce8;
  border-color: #194ce8;
}
.leftLogo {
  display: inline-block;
  width: auto;
  float: left;
  margin-top: 30px;
}
.wxLogo {
  width: 80px;
  height: 27px;
  float: left;
  margin-top: 34px;
  margin-left: 11px;
}
.logo_img {
  width: 93px;
  height: 32px;
  font-size: 23px;
  line-height: 32px;
  float: left;
  color: #1d1d1f;
}
.shu {
  display: inline-block;
  width: 2px;
  height: 22px;
  background: #f63b3b;
  margin-top: 5px;
  float: left;
  margin-left: 4px;
}
.logo_text {
  width: 50px;
  height: 14px;
  font-size: 10px;
  line-height: 14px;
  margin-top: 4px;
  margin-left: 6px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #1d1d1f;
  float: left;
}

.left_logo{
  margin-left: 20px;
}
.right_warp{
  margin-right: 40px;
}

</style>
