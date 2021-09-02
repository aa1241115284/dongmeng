<template>
  <div>
    <navigation></navigation>
    <div class="back1">
      <div class="h_textwarp">
        <div class="h_title">多站群企业级解决方案</div>
        <div class="h2_title">
          <div>
            统一管理多个独立站的运营数据，以及多用户权限，配备更合理的风控， 
          </div>
          <div style="margin-top: 10px">
            助你高效创建新站，让您的业务能够快速开拓升级
          </div>
        </div>
      </div>
    </div>

   <div class='concent_warp'>

    <div class="youshi">豆盟优势</div>
    <div class="icon_concent">
      <ul>
        <li class='D_hegiht'>
          <img src="@/assets/images/sites_solution1.png" alt="" class="icon_img" />
          <div class="icon_title">免交易佣金</div>
          <div class="icon_solid"></div>
          <p class="icon_text">
          相较于其他平台，免去了 0.5%~2% 的交易流水佣金，更有成本优势
          </p>
        </li>
        <li class='D_hegiht'>
          <img src="@/assets/images/sites_solution2.png" alt="" class="icon_img" />
          <div class="icon_title">更合理的风控</div>
          <div class="icon_solid"></div>
          <p class="icon_text">
          为您提供更加合理的风控评级标准，更友好的风控处理方式
          </p>
        </li>
        <li class='D_hegiht'>
          <img src="@/assets/images/sites_solution3.png" alt="" class="icon_img" />
          <div class="icon_title">统一多用户权限管理</div>
          <div class="icon_solid"></div>
          <p class="icon_text">
            为不同的业务人员分配不同权限，让您的业务管理更加高效规范
          </p>
        </li>
        <li class='D_hegiht'>
          <img src="@/assets/images/sites_solution4.png" alt="" class="icon_img" />
          <div class="icon_title">新站点快速创建</div>
          <div class="icon_solid"></div>
          <p class="icon_text">
            快速生成新的独立站子站点，轻松实现新业务新市场的快速开拓
          </p>
        </li>
        <li>
          <img src="@/assets/images/sites_solution5.png" alt="" class="icon_img" />
          <div class="icon_title">网站建设和定制</div>
          <div class="icon_solid"></div>
          <p class="icon_text">我们有专业研发团队为您的品牌独立站定制解决方案，从简单的店铺首页弹窗设计到内部 ERP 深度集成，我们可以为您提供一切电商业务所需要的工具设计和研发服务。我们致力于解决企业客户的深度建站需求，把客户成功作为公司的唯一服务宗旨。除了提供专注服务中国卖家企业的豆盟自研平台外，我们还为客户提供市面常见自建站系统的深度定制和服务，满足不同类型客户在多种场景下的需求达成</p>
        </li>
        <li>
          <img src="@/assets/images/sites_solution6.png" alt="" class="icon_img" />
          <div class="icon_title">多平台支持</div>
          <div class="icon_solid"></div>
          <p class="icon_text">为了全方位满足您的建站需求，豆盟的专业技术团队提供基于 Shoplazza，Shopify，Magento，Bigcommerce和Woocommerce 等自建站平台的建站和定制服务。豆盟会帮助您选择最合适的平台及技术方案  </p>
        </li>
        <li>
          <img src="@/assets/images/sites_solution7.png" alt="" class="icon_img" />
          <div class="icon_title">响应式技术开发</div>
          <div class="icon_solid"></div>
          <p class="icon_text">
            如今移动端的电商交易量已超过电脑，我们先进的响应式开发技术会让顾客在移动端访问您店铺时，收获最佳体验，达成更高的交易量
          </p>
        </li>
        <li>
          <img src="@/assets/images/sites_solution8.png" alt="" class="icon_img" />
          <div class="icon_title">定制开发</div>
          <div class="icon_solid"></div>
          <p class="icon_text">
            用电子商务平台建设品牌独立站简单稳定，但它们功能有限，不能满足所有需求。如果您希望自己的品牌独立站支持额外需求，豆盟会为您提供相应的指导和服务
          </p>
        </li>
        <li>
          <img src="@/assets/images/sites_solution9.png" alt="" class="icon_img" />
          <div class="icon_title">平台和数据迁移支持</div>
          <div class="icon_solid"></div>
          <p class="icon_text">
        
       如果您已有某个自建站平台，但无法满足您业务上新的需求，豆盟为您提供新旧平台重要数据迁移的服务，确保您的业务系统可以无损升级、稳定增长
          </p>
        </li>
        <li>
          <img src="@/assets/images/sites_solution10.png" alt="" class="icon_img" />
          <div class="icon_title">API开发与集成</div>
          <div class="icon_solid"></div>
          <p class="icon_text">
  与内外部系统的 API 连接是店铺的重要部分，我们专业的研发技术保障所有的 API 都可以在后台完美运行，让您百分百安心
          </p>
        </li>
      </ul>
    </div>


      <thegoin></thegoin>
   </div>
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
  components: { navigation, bottom, operating,thegoin },
  data() {
    return {
      url1: require("@/assets/images/desin_solution01.png"),
      url2: require("@/assets/images/desin_solution2.png"),
    };
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back1 {
  width: 100%;
  height: 500px;
  background: url("~@/assets/images/dz.png") top center no-repeat;
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
  margin-left: -320px;
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
.concent_warp{
  width: 80%;
  margin: 0 auto;
}
.concent {
  width: 100%;
  margin: 0 auto;
}
.concent ul li {
  overflow: hidden;
  margin-top: 50px;
  display: flex;
  align-items: center;
}
.baidu {
  width: 600px;
  /* float: left; */
}
.baidu_text {
  width: 490px;
  padding-left:30px;
  /* float: right; */
  overflow: hidden;
}
#right {
  flex-direction: row-reverse;
}
.baidu_title {
  font-size: 20px;
  font-weight: bold;
  color: #000000;
  margin-top: 150px;
}
.baidu_text {
  font-size: 16px;
  color: #9b9b9b;
  line-height: 20px;
}
.left_text {
  width: 490px;
  float: left;
}
.right_img {
  float: right;
  width: 600px;
}
.icon_concent {
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  margin-top: 80px;
}
.icon_concent ul li {
  width: 25%;
  text-align: center;
  float: left;
  height: 450px;
}
.icon_concent ul .D_hegiht{
  height: 300px;
}
#sheji ul li {
  width: 25%;
}
.icon_img {
  width: 55px;
  height: 55px;
}
.icon_title {
  font-size: 24px;
  margin-top: 10px;
}
.icon_text {
  width: 250px;
  margin: 0 auto;
  font-size: 16px;
  color: rgba(144, 147, 153, 1);
  margin-top: 10px;
  line-height: 22px;
}
.icon_solid {
  width: 46px;
  height: 2px;
  background: #d8d8d8;
  margin: 0 auto;
  margin-top: 30px;
}
.youshi {
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  margin-top: 50px;
}
.serve_concent {
  width: 100%;
  overflow: hidden;
  align-items: center;
  display: flex;
  margin: 0 auto;
  margin-top: 80px;
}
.serve_left {
  float: left;
  text-align: right;
  margin-right: 50px;
  width: 33.3%;
}
.serve_left ul li {
}
.serve_left ul li img {
  width: 86px;
  height: 86px;
  margin-bottom: 20px;
}
.serve_lefttext {
  font-size: 18px;
  color: #303133;
}
.centet_img {
  float: left;
  width: 380px;
}
.serve_right {
  float: left;
  text-align: left;
  width: 33.3%;
  margin-left: 50px;
}
.serve_right ul li img {
  width: 100px;
  height: 100px;
}

</style>
