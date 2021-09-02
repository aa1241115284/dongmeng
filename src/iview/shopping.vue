<template>
  <div >
   <div class="native"><navigation></navigation></div>
      <div class="title">精选店铺案例</div>
      <div class='presented_text'>由专业设计人员根据客户经营类型，设计不同的主题展现效果</div>
      <div class='concent'>
        <ul>
          <li v-for='item in List'><img v-lazy="item.url"></li>
        </ul>
      </div>
      <div class='google_calss2'>用豆盟建站，开启你的跨境电商之旅</div>
      <div class='btn' @click="informeClick">立即咨询></div>
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
      List: [
        { url: require('@/assets/images/Neptune.png')},
        { url: require('@/assets/images/Mars.png')},
        { url: require('@/assets/images/Neptune3.png')},
        { url: require('@/assets/images/Neptune4.png')},
        { url: require('@/assets/images/Neptune5.png')},
        { url: require('@/assets/images/Neptune6.png')},
        { url: require('@/assets/images/Neptune7.png')},
        { url: require('@/assets/images/Neptune8.png')},
        { url: require('@/assets/images/Neptune9.png')},
        { url: require('@/assets/images/Neptune10.png')},
        { url: require('@/assets/images/Neptune11.png')},
        { url: require('@/assets/images/Neptune12.png')},

      ]
    }
  },
      methods: {
    informeClick() {
      let routeUrl = this.$router.resolve({
        path: "/information",
        // query: {id: 96}
      });

      window.open(routeUrl.href, "_blank");
    },
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .title{
    text-align: center;
    font-size: 36px;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #0C0C0C;
    margin-top: 170px;
 }
 .presented_text{
  font-size: 16px;
  font-weight: 400;
  color:#9B9B9B;
  margin-top: 30px;
  line-height: 25px;
  text-align: center;
  }
  .concent{
    overflow: hidden;
    max-width: 1300px;
    margin: 0 auto;
  }

  .concent ul li{
    float: left;
    width: 33.3%;
    height: 505px;
    margin-top: 80px;
  }
   .concent ul li img{
     width: 393px;
   }
    .concent ul li:nth-child(3n){
    margin-right: 0;
  }
  .google_calss2 {
    text-align: center;
    font-size: 36px;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #0C0C0C;
    margin-top: 150px;
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
