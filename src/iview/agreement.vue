<template>
  <div>
    <navigation></navigation>
    <div class="container">
      <h2>豆盟使用协议</h2>
      <div>
        <p>
          豆盟是一个为商家提供工具和技术，帮助他们建立自己的网上商店并在网站上销售产品和服务的商业平台。我们相信自由开放和交流是商业的一个关键原则，但是有一些活动与豆盟的使命—创造更好的电商服务是不相容的。本《使用协议》描述了一些您使用我们服务时被禁止的活动。
        </p>
        <p>
          下文所讲的“材料”是指您的账户上传、收集、生成、存储、显示、发布、传输、展示或与您账户有关的任何照片、图像、视频、图形、书面内容、音频文件、代码、信息或数据。
          以下活动是禁止的：
        </p>
        <h3>1.儿童剥削：</h3>
        <p>
          您不得提供与非法利用或滥用儿童权益相关的商品和服务，也不得发布、上传任何此类材料，包括但不限于虐待儿童或性虐待，或者以性方式展示、介绍儿童的图片或描述。
        </p>
        <h3>2.骚扰、欺凌、诽谤和威胁：</h3>
        <p>
          您不得提供骚扰、欺凌、诽谤或威胁特定个人的商品或服务，也不得发布、上传此类材料。
        </p>
        <h3>3.恶意内容：</h3>
        <p>
          您不得通过使用我们的服务宣传或纵容针对种族、民族、肤色、国籍、宗教信仰、年龄、性别、性取向、残疾、健康状况或退伍军人身份进行的歧视和仇恨行为，也不得发布上传此类材料。您不得使用我们的服务来纵容或支持任何组织，平台或个人：（i）宣传或纵容此类仇恨；
          或（ii）进一步宣传此类威胁或纵容此类暴力。
        </p>
        <h3>4.非法活动：</h3>
        <p>您不得提供、发布或上传任何促成或宣传您所在司法管辖区的违法行为的商品或服务。</p>
        <h3>5.知识产权：</h3>
        <p>您不得提供侵犯他人版权、商标权或其他知识产权的商品或服务，也不得发布上传此类材料。</p>
        <h3>6.恶意和欺骗性的做法：</h3>
        <p>您不得使用豆盟服务传播恶意软件或主机网络钓鱼页面。您不得进行损害或破坏豆盟服务运营或其他豆盟基础设施包括豆盟第三方合作者的活动，也不得上传发布此类材料。您不得将本服务用于欺骗性的商业行为或其他任何非法或欺骗性行为。</p>
        <h3>7.个人和机密信息：</h3>
        <p>您不得发布或上传任何包含个人身份信息，个人敏感信息或保密信息（如信用卡号码、保密国家身份证件号或账户密码）的材料，除非您已获得该信息所属权人的同意，或被授权提供该信息。</p>
        <h3>8.自身伤害：</h3>
        <p>您不得提供或宣传与自我伤害相关的商品或服务，也不得发布上传此类材料。</p>
        <h3>9.滥发邮件：</h3>
        <p>您不得使用本服务传输任何未经用户许可的商业电子信息。</p>
        <h3>10.恐怖主义组织：</h3>
        <p>您不得提供暗示、宣传或资助恐怖主义活动的商品或服务，也不得发布上传此类材料，或成为任何恐怖主义组织的成员。</p>
        <p>如果您从事的活动违反了本《使用协议》（包括您在使用豆盟服务之外的活动），我们有权随时删除任何材料，暂停或终止您的账户和您对我们服务的访问。</p>
        <p>豆盟有权随时监督或调查您使用的材料和豆盟服务是否遵守本《使用协议》和豆盟《 服务条款》，或任何其他与豆盟达成的共识或协议（统称“协议”）。我们关于是否发生违反本《使用协议》行为的决定将是最终的和具有约束力的，我们自行决定如何处理违反本协议的行为（包括不采取任何行动）。</p>
        <p>豆盟若因豆盟用户违反协议（“违约用户”）而致使豆盟承担第三方赔偿责任的，豆盟保留随时向违约用户追索赔偿补偿的权利；同时豆盟保留要求该违约用户承担因此对豆盟商誉损害的赔偿责任。</p>
        <p>如果《使用协议》和<span class='a' @click='temsClick'>《服务条款》</span>发生冲突，以《使用协议》为准，但仅限于解决此类冲突所需的程度。在本协议中使用但未定义的术语应该按其所在协议中的含义定义。</p>
      </div>
    </div>
  </div>
</template>

<script>
import navigation from '@/components/navigation'
export default {
  components: { navigation },
  data () {
    return {}
  },
  methods: {
    temsClick () {
      let routeUrl = this.$router.resolve({
        path: '/termsclause',
        query: {current: 10}
      })

      window.open(routeUrl.href, '_blank')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 800px;
  margin: 60px auto;
  padding-right: 15px;
  padding-left: 15px;
  margin-top: 150px;
}
.container h2 {
  letter-spacing: 0.2px;
  font-size: 32px;
  text-align: center;
  color: #4f5362;
  margin-bottom: 25px;
}
p {
  font-size: 14px;
  margin-bottom: 25px !important;
  margin: 0 0 10px;
  line-height: 22px;
  letter-spacing: 0.3px;
}
.a {
  color: #337ab7;
  cursor: pointer;
}
.tiaoyue {
  margin-top: 60px;
}
h3 {
  font-size: 14px;
  font-weight: 600;
  font-family: inherit !important;
  line-height: 34px;
  text-transform: none;
  letter-spacing: 0.2px;
  color: #585858;
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>
