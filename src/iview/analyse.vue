<template>
  <div >
     <div class="native"><navigation></navigation></div>
      <div class="back1">
      <div class="h_textwarp">
        <div class="h_title">海外电商专业搜索引擎优化（SEO）</div>
        <div class="h2_title">
          <div>搜索引擎优化，是通过提升网站在搜索结果中的排名来增加网站流量的方式。</div>
          <div style="margin-top: 10px">
            豆盟拥有丰富的品牌出海搜索引擎优化经验，能帮您更高效的开发潜在客户
          </div>
        </div>
      </div>
    </div>

    <div class='title'>豆盟提供一整套包括 SEO 营销计划、网站关键词研究、海量长尾关键词赠送、网站数据分析报告等内容的搜索引擎优化完整解决方案。帮你用最低的成本，收获最高的投资回报率。</div>
    <div class='youshi'>豆盟优势</div>
    <div class="icon_concent">
      <ul>
        <li>
          <img src="@/assets/images/oversea_seo_solution1.png" alt="" class='icon_img'>
          <div class='icon_title'>网站审计</div>
          <div class='icon_solid'></div>
          <p class='icon_text'>在开始网站推广之前，我们会先对您的网站进行全面审计，在此审计中，我们可以更好地了解您网站上需要优化的网页和已经排名的关键字，以及竞争对手的相关关键字</p>
        </li>
        <li>
          <img src="@/assets/images/oversea_seo_solution2.png" alt="" class='icon_img'>
          <div class='icon_title'>关键字调研</div>
          <div class='icon_solid'></div>
          <p class='icon_text'>在完成网站审计后，我们会研究您网站可能适合进行排名优化的长尾关键字，这些关键字将有助于开始建立在有搜索引擎结果页上排名更高所需要的权重，并为您的网站带来更多的流量和潜在顾客</p>
        </li>
        <li>
          <img src="@/assets/images/oversea_seo_solution3.png" alt="" class='icon_img'>
          <div class='icon_title'>优质内容</div>
          <div class='icon_solid'></div>
          <p class='icon_text'>目标关键字确定后，我们的内容写手会基于您的业务撰写高质量的内容。豆盟的专业内容写手会根据您网站的背景信息和目标，结合您希望通过内容传达的风格进行撰写，创建个性化的原创内容，提供丰富的信息来吸引更多潜在顾客</p>
        </li>
        <li>
          <img src="@/assets/images/oversea_seo_solution4.png" alt="" class='icon_img'>
          <div class='icon_title'>外链建设</div>
          <div class='icon_solid'></div>
          <p class='icon_text'>外链建设在搜索引擎优化中也非常重要，如果没有任何反向链接指向您的网站，所有的搜索引擎优化都会没有明显效果。所以在构建原创内容和优化网站结构的同时，我们的专业团队将会通过帮助您创建反向链接来告诉搜索引擎您网站所提供的产品和信息都是高质量且可信的</p>
        </li>
        <li>
          <img src="@/assets/images/oversea_seo_solution5.png" alt="" class='icon_img'>
          <div class='icon_title'>快速迭代</div>
          <div class='icon_solid'></div>
          <p class='icon_text'>搜索引擎优化不是一次性的工作，它总是在不断的变化和调整策略中，因为有专业团队结合您网站的运营推广策略来持续的进行优化是最佳的做法，这也是为什么我们丰富的优化经验能够为您提供所需要的一切解决方案</p>
        </li>
      </ul>
    </div>
       <thegoin></thegoin>
   <operating></operating>
   <bottom></bottom>
  </div>
</template>

<script>
import navigation from '@/components/navigation'
import bottom from '@/components/bottom'
import operating from '@/components/operating'
import thegoin from "@/components/thegoin";
export default {
  components: { navigation, bottom, operating, thegoin },
  data () {
    return {

    }
  },
  methods: {

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back1 {
  width: 100%;
  height: 500px;
  background: url("~@/assets/images/seo.png") top center no-repeat;
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
  margin-left: -340px;
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
.title{
  width: 600px;
  margin: 0 auto;
  color: #4A4A4A;
  text-align: center;
  line-height: 25px;
  margin-top: 50px;
  font-size: 20px;
}
.youshi{
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  margin-top: 50px;
}
.icon_concent{
  overflow: hidden;
  width: 1170px;
  margin: 0 auto;
  margin-top: 80px;
}
.icon_concent ul li{
  width: 33.3%;
  text-align: center;
  float: left;
  height: 350px;
}
.icon_img{
  width: 55px;
  height: 55px;
}
.icon_title{
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
}
.icon_text{
  width: 250px;
  margin: 0 auto;
  font-size: 16px;
  color: rgba(144, 147, 153, 1);
  margin-top: 10px;
  line-height: 22px;
}
.icon_solid{
  width: 46px;
  height: 2px;
  background: #D8D8D8;
  margin: 0 auto;
  margin-top: 30px;
}

</style>
