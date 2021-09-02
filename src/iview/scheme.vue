<template>
  <div class="body">
    <navigation></navigation>
    <!-- <div class="banner_img">
      <img v-lazy="url1" alt="" />
    </div> -->
       <div class="back1">
      <div class="h_textwarp">
        <div class="h_title">海外本地化原创内容营销</div>
        <div class="h2_title">
          <div>通过精心撰写的本地化内容来表达品牌性质，能让您的顾客更感兴趣。豆盟专业</div>
          <div style="margin-top: 10px">
            的本地化内容团队，将通过有效的内容营销，来完善您的内容并推广您的品牌
          </div>
        </div>
      </div>
    </div>
    <div class="concent">
      <ul>
        <li>
          <div class="baidu"><img v-lazy="url2" alt="" /></div>
          <div  style='float:right'>
            <div class="baidu_title">本土化内容</div>
            <div class="baidu_text">
              豆盟海外办事处，长期驻扎北美，精通海外内容制作。能够针对海外主流社交媒体，为你的品牌量身定制营销内容，开展多样社媒营销新玩法，制作更贴合本地文化的宣传视频，提高视频观看量，潜移默化地教育用户，并引导其购买决策
            </div>
          </div>
        </li>
        <li class="twocalss">
          <div class="left_text">
            <div class="baidu_title">社媒运营</div>
            <div class="baidu_text">
              基于品牌定位，量身定制 Facebook、Instagram、Twitter、Pinterest
              等社媒的形象。以持续的内容运营，让品牌形象在目标受众心中根深蒂固
            </div>
          </div>
          <div class="right_img">
            <img v-lazy="url3" alt="" />
          </div>
        </li>
        <li>
          <div class="baidu" style="margin-left: 40px">
            <img v-lazy="url4" alt="" />
          </div>
          <div >
            <div class="baidu_title">网红营销</div>
            <div class="baidu_text">
          豆盟拥有丰富的海外红人资源。通过与YouTube、Instagram 红人合作方式，产出开箱测试、使用体验等视频内容，加强品牌的长尾效应，让交易持续发生
            </div>
          </div>
        </li>
        <li class="twocalss">
          <div class="left_text">
            <div class="baidu_title">内容一致</div>
            <div class="baidu_text">
              不要在网站和社交媒体上发布不同风格的内容文案使您的顾客感到迷惑，豆盟可以确保您的所有内容在所有媒体渠道都保持一致
            </div>
          </div>
          <div class="right_img">
            <img v-lazy="url5" alt="" />
          </div>
        </li>
      </ul>
    </div>

    <thegoin></thegoin>

    <bottom></bottom>
    <operating></operating>
  </div>
</template>

<script>
import navigation from "@/components/navigation";
import bottom from "@/components/bottom";
import operating from "@/components/operating";
import thegoin from "@/components/thegoin";
export default {
  components: { navigation, bottom, operating, thegoin },
  data() {
    return {
      url1: require("@/assets/images/whyx.png"),
      url2: require("@/assets/images/img1.png"),
      url3: require("@/assets/images/img2.png"),
      url4: require("@/assets/images/img3.png"),
      url5: require("@/assets/images/img4.png"),
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back1 {
  width: 100%;
  height: 500px;
  background: url("~@/assets/images/whh.png") top center no-repeat;
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
  margin-left: -350px;
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
.banner_img {
  width: 100%;
  height: 680px;
}
.banner_img {
  width: 100%;
  height: 100%;
  margin-top: 90px;
}
.btnn {
  width: 180px;
  line-height: 35px;
  background: #194ce8;
  border-radius: 20px;
  margin: 0 auto;
  text-align: center;
  color: #fff;
  cursor: pointer;
  margin-top: 30px;
}
.why_calss {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-top: 40px;
}

.concent {
  width: 1200px;
  margin: 0 auto;
  margin-top: 100px;
}
.concent ul li {
  overflow: hidden;
  margin-top: 50px;
  display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.baidu {
  width: 600px;
  float: left;
  margin-right: 50px;
}
.baidu_text {
  width: 490px;
  float: right;
  overflow: hidden;
}
.baidu_title {
   font-size: 20px;
   font-weight: 500;
   margin-top: 30px;
   color: #0c0c0c;
   font-family: PingFangSC-Semibold,PingFang SC;
}
.baidu_text {
    line-height: 25px;
    font-size: 16px;
    font-weight: 400;
    color: #0c0c0c;
    opacity: .6;
    margin-top: 10px;
}
.left_text {
  width: 490px;
  float: left;
}
.right_img {
  float: right;
  width: 500px;
    margin-left: 50px;
}
.twocalss {
  width: 1150px;
  margin: 0 auto;
}
.icon {
  width: 65px;
  height: 65px;
}

</style>
