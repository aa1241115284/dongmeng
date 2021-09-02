<template>
  <div >
    <div class='bottom'>
      <p class='text'>Copyright © 2012 - 2017 doumob Inc. All Rights Reserved</p>
      <a href="https://beian.miit.gov.cn">京ICP备13043905号-8</a>
      <div class='text2'>
        <div class='huizhangClass'><img src="@/assets/images/gongan.png" alt=""></div>
        <a href="https://beian.miit.gov.cn" target="_blank" class='classa'>京公网安备11010502044582号</a>
      </div>
      <p>豆盟（北京）科技股份有限公司 版权所有</p>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bottom{
  width: 100%;
  padding-bottom: 10px;
  /* height: 100px; */
  background: #021024;
  text-align: center;
  overflow: hidden;
  font-size: 12px;
  color: rgba(255,255,255,.5)
}
.bottom p{
  margin-top: 5px;
}
.bottom .text{
  margin-top: 10px;
}
.text{
    color: rgba(255,255,255,.5);
    text-align: center;
    font-size: 12px;
    padding-bottom: 5px;
}
.text1{
  font-size: 12px;
  color: #fff;
}
.text2{
  width: 200px;
  height: 18px;
   color: #fff;
   margin: 0 auto;
   margin-top: 5px;
}
.text2 span{
  display: block;
  float: left;
}
.huizhangClass{
  width: 18px;
  height: 18px;
  float: left;
  margin-top: -1px;
  margin-right: 3px;
}
a{
  color: #fff;
}
a:hover{
  color: #fff;
}
.classa{
  float: left;
}
</style>
