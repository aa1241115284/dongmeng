<template>
  <div >
    <div class='operating'>
    <ul>
      <li>
        <div class="res_warp">
        <div class='wx_img'></div>
       <div class='qrcode'></div>
        </div>
      </li>
      <li @click='backTop'>
        <div class="img_back"></div>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
      methods: {
       backTop () {
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
  },
           scrollToTop () {
        const that = this
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        that.scrollTop = scrollTop;
        if(scrollTop>=680){
        that.top=1
        }else{
        that.top=0
        }
      }
    },
    mounted() {
              let that = this;
      window.addEventListener('scroll', that.scrollToTop);
    },
    destroyed(){
      let that = this;
      window.removeEventListener('scroll', that.scrollToTop);
    }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .operating{
  position: fixed;
  bottom: 200px;
  right: 20px;
}
.operating ul li{
  width: 36px;
  height: 36px;
  background: #999999;
  border-radius: 3px;
  margin-top:5px;
  /* overflow: hidden; */
  line-height: 36px;
  cursor: pointer;
  position: relative;
}
.operating ul li .img_back{
  width:20px;
  height: 20px;
  background: url("~@/assets/images/top.png") top center no-repeat;
  background-size:20px 20px;
  position:absolute;
  top:10px;
  left: 50%;
  margin-left: -10px;
}
.wx_img{
  width:20px;
  height: 20px;
  background: url("~@/assets/images/wx_img.png") top center no-repeat;
  background-size:20px 20px;
  position:absolute;
  top:10px;
  left: 50%;
  margin-left: -10px;
}
.res_warp{
  position: relative;
}
.qrcode{
  display: none;
  position:absolute;
  width: 147px;
  height: 147px;
  top: 0px;
  left: -154px;
  background: url("~@/assets/images/wxcode.png") top center no-repeat;
  background-size: 147px 147px;
}
.res_warp:hover .qrcode{
  display: block;
}
</style>
