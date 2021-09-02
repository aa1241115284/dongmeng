<template>
  <div class="body">
    <navigation></navigation>
    <div class="concent">
      <div class="meal">
        <div class="meal_title">套餐价格</div>
        <div class="meal_concent">
          <ul>
            <li>
              <div class="li_solid"></div>
              <div class="li_concent">
                <div class="li_concentauto">
                  <div class="concentauto_title">基础版</div>
                  <div class="concentauto_text">
                    适合新手入门卖家，方便新手练习上手
                  </div>

                  <div class="concentauto_pric">价格面议</div>
                  <div class="purchase_btn" @click='informeClick'>立即咨询></div>

                  <div class="autosolid"></div>
                  <div class="auto_text">
                    <div>1.专人辅助进行商城创建</div>
                    <div>2.为商城开通线上支付渠道</div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="li_solid"></div>
              <div class="li_concent">
                <div class="li_concentauto">
                  <div class="concentauto_title">进阶版</div>
                  <div class="concentauto_text">适合初具团队规模的卖家</div>

                  <div class="concentauto_pric">价格面议</div>
                 <div class="purchase_btn" @click='informeClick'>立即咨询></div>

                  <div class="autosolid"></div>
                  <div class="auto_text">
                    <div>1.专人辅助进行商城创建</div>
                    <div>2.为商城开通线上支付渠道</div>
                    <div>3.一对一专业客服进行为期30天的 专业指导</div>
                    <div>4.帮助商城开通物流通道</div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="li_solid"></div>
              <div class="li_concent">
                <div class="li_concentauto">
                  <div class="concentauto_title">旗舰版</div>
                  <div class="concentauto_text">
                    适合多数企业卖家，企业品牌出海首选
                  </div>

                  <div class="concentauto_pric">价格面议</div>
                  <div class="purchase_btn" @click='informeClick'>立即咨询></div>

                  <div class="autosolid"></div>
                  <div class="auto_text">
                    <div>1.专人辅助进行商城创建</div>
                    <div>2.为商城开通线上支付渠道</div>
                    <div>3.一对一专业客服进行为期30天的专业指导</div>
                    <div>4.帮助商城开通物流通道</div>
                    <div>5.为期一年至少5版的商城美观设计</div>
                    <div>6.开放自定义营销方案（含网红营销、广告投放）</div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="li_solid"></div>
              <div class="li_concent">
                <div class="li_concentauto">
                  <div class="concentauto_title">企业版</div>
                  <div class="concentauto_text">适合员工较多的高端企业卖家</div>

                  <div class="concentauto_pric">价格面议</div>
                  <div class="purchase_btn" @click='informeClick'>立即咨询></div>

                  <div class="autosolid"></div>
                  <div class="auto_text">
                    <div>1.含全部功能</div>
                    <div>2.企业级客户可进行个性化功能定制</div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="function_list">
        <div class="meal_title">功能列表</div>
        <div class='table_top'></div>
        <table class="table">
          <tr>
            <td>多平台建站选择</td>
            <td>申请资料快速提交</td>
            <td>申请状态跟踪查询</td>
            <td>一键进入商城</td>
          </tr>
          <tr>
            <td>支持同一平台创建多个商城</td>
            <td> 多种线上支付渠道选择 </td>
            <td>海内外多家物流开通</td>
            <td>多渠道同步投放广告</td>
          </tr>
          <tr>
            <td>广告投放数据实时追踪</td>
            <td>网红营销多维度选择</td>
            <td>海外公司便捷注册</td>
            <td> 店铺装修</td>
          </tr>
          <tr>
            <td>竞品分析</td>
            <td>个性化后台定制</td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>

      <!-- <div class='logistics_partner'>
        <div class="meal_title">物流合作伙伴</div>
          <ul>
        <li>
          <img
            :src="require('@/assets/images/JT.png')"
            alt=""
            class="ebay1"
          />
        </li>
        <li>
          <img
            :src="require('@/assets/images/HSD.png')"
            alt=""
            class="ebay1"
          />
        </li>
        <li>
          <img
            :src="require('@/assets/images/RCT.png')"
            alt=""
            class="ebay1"
          />
        </li>
        <li>
          <img
            :src="require('@/assets/images/buffalo.png')"
            alt=""
            class="ebay1"
          />
        </li>
        <li>
          <img
            :src="require('@/assets/images/yokesi.png')"
            alt=""
            class="ebay1"
          />
        </li>
        <li>
          <img
            :src="require('@/assets/images/subaotonglogo.png')"
            alt=""
            class="ebay1"
          />
        </li>
        </ul>
      </div> -->

        <!-- <div class='logistics_partner' id='classbottom'>
        <div class="meal_title">支付合作伙伴</div>
          <ul>
        <li>
          <img
            :src="require('@/assets/images/stripe.png')"
            alt=""
            class="ebay1"
          />
        </li>
        <li>
          <img
            :src="require('@/assets/images/worldpay.png')"
            alt=""
            class="ebay1"
          />
        </li>
        <li>
          <img
            :src="require('@/assets/images/affirm.png')"
            alt=""
            class="ebay1"
          />
        </li>
        <li>
          <img
            :src="require('@/assets/images/checkout-logo.png')"
            alt=""
            class="ebay1"
          />
        </li>
        <li>
          <img
            :src="require('@/assets/images/photonpay.png')"
            alt=""
            class="ebay1"
          />
        </li>
        <li>
          <img
            :src="require('@/assets/images/ingenico.png')"
            alt=""
            class="ebay1"
          />
        </li>
        <li>
          <img
            :src="require('@/assets/images/asiabill.png')"
            alt=""
            class="ebay1"
          />
        </li>
        <li>
          <img
            :src="require('@/assets/images/dlocal.png')"
            alt=""
            class="ebay1"
          />
        </li>
        </ul>
      </div> -->
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
      tableList: [1, 2, 3, 4, 5, 6]
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
.concent {
  margin-top: 100px;
}
.meal_title {
  text-align: center;
  font-weight: 700;
  font-size: 36px;
  margin-top: 100px;
}
.meal {
  overflow: hidden;
}
.meal_concent {
  overflow: hidden;
  max-width: 80%;
  margin: 0 auto;
}
.meal_concent ul li {
  float: left;
  cursor: pointer;
  /* margin-right: 100px; */
  margin-top: 100px;
  width: 25%;
}
.meal_concent ul li:nth-child(1) .li_solid {
  height: 8px;
  background: #f5a623;
  box-sizing: border-box;
  border: 1px solid #f5a623;
  margin: 0 auto;
}
.meal_concent ul li:nth-child(1) .li_concent:hover {
  border: 1px solid #f5a623;
  border-top: none;
  box-shadow: 0px 12px 18px 10px rgba(0, 0, 0, 0.1);
}
.meal_concent ul li:nth-child(2) .li_solid {
  height: 8px;
  background: #77d9b8;
  box-sizing: border-box;
  border: 1px solid #77d9b8;
}
.meal_concent ul li:nth-child(2) .li_concent:hover {
  border: 1px solid #77d9b8;
  border-top: none;
  box-shadow: 0px 12px 18px 10px rgba(0, 0, 0, 0.1);
}
.meal_concent ul li:nth-child(3) .li_solid {
  height: 8px;
  background: #194ce8;
  box-sizing: border-box;
  border: 1px solid #194ce8;
}
.meal_concent ul li:nth-child(3) .li_concent:hover {
  border: 1px solid #194ce8;
  border-top: none;
  box-shadow: 0px 12px 18px 10px rgba(0, 0, 0, 0.1);
}
.meal_concent ul li:nth-child(4) .li_solid {

  height: 8px;
  background: #ee614b;
  box-sizing: border-box;
  border: 1px solid #ee614b;
}

.meal_concent ul li:nth-child(4) .li_concent:hover {
  border: 1px solid #ee614b;
  border-top: none;
  box-shadow: 0px 12px 18px 10px rgba(0, 0, 0, 0.1);
}

.li_concent {
  border: 1px solid rgba(232, 232, 232, 1);
  border-top: none;
  max-width: 280px;
  height: 600px;
  box-sizing: border-box;
  overflow: hidden;
  transition: all 0.3s ease;
  margin: 0 auto;
}
.li_solid{
  max-width: 280px;
  margin: 0 auto;
}
/* .li_solid{
  width: 100%;
  height: 8px;
  background: #F5A623;
  box-sizing: border-box;
  border: 1px solid #F5A623;
} */
/* .li_concent{
  border: 1px solid rgba(232,232,232,1);
  border-top: none;
  width: 280px;
  height: 600px;
  box-sizing: border-box;
  overflow: hidden;
} */
.li_concentauto {
  width: 210px;
  margin: 0 auto;
}
.concentauto_title {
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  margin-top: 50px;
}
.concentauto_text {
  font-size: 18px;
  text-align: center;
  color: #4a4a4a;
  margin-top: 25px;
  line-height: 25px;
  height: 40px;
}
.concentauto_pric {
  font-size: 18px;
  text-align: center;
  color: #4a4a4a;
  margin-top: 30px;
}
.purchase_btn {
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
.purchase_btn:hover{
    background: #1170ff;
   color: #fff; 
}
.autosolid {
  width: 100%;
  height: 1px;
  background: #d8d8d8;
  margin-top: 45px;
}
.auto_text {
  margin-top: 25px;
  font-size: 16px;
  color: #4a4a4a;
}
.auto_text div {
  margin-top: 5px;
}
.table_top{
  width: 100%;
  height: 8px;
  background: #F5A623;
  margin-top: 50px;
}
.table {
  width: 100%;
  margin: 0;
  margin-bottom: 15px;
  font-size: 16px;
  color: #000000;;
  background: #fff;
  border: 1px solid #979797;
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 0;
  white-space: normal;
  text-align: center;
  overflow: hidden;
  border-top:none;
}
tr {
  border-bottom: 1px solid #979797;
}
td {
  height: auto;
  padding: 10px;
  line-height: 50px;
  word-wrap: break-word;
  vertical-align: middle;
  border-right: 1px solid #979797;
  text-align: center;
  cursor: pointer;
  transition: all .2s cubic-bezier(0,0,.2,1);
}
td:hover{
  font-size: 18px;
}
.function_list{
  width: 85%;
  margin: 0 auto;
  padding-bottom: 100px;
}
 .logistics_partner{
   width:90%;
   margin: 0 auto;
   overflow: hidden;
   }

.logistics_partner li {
  float: left;
  width: 25%;
  height: 116px;
  /* margin-right: 40px; */
  margin-top: 70px;
  /* border: 1px solid #e7e7e7; */
}
.logistics_partner li img{
  width: 314px;
  height: 100%;
}
.logistics_partner li:nth-child(4n) {
  margin-right: 0;
}
.logistics_partner li:nth-child(8n) {
  margin-right: 0;
}
#classbottom{
  padding-bottom: 100px;
}
</style>
