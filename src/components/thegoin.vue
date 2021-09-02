<template>
  <div >
    <div class="intend">
      <div class="brand_h1">有出海打算？</div>
      <div class="brand_text">
        有任何出海打算，都可以立即联系我们，让我们帮您把想法落地
      </div>
      <div class="mesg_btn" @click="informeClick">立即咨询></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

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
.intend {
  padding-bottom: 70px;
}
.brand_h1 {
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  margin-top: 70px;
}
.brand_text {
  text-align: center;
  font-size: 20px;
  color: #9b9b9b;
  margin-top: 20px;
}
.mesg_btn {
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
.mesg_btn:hover{
    background: #1170ff;
   color: #fff; 
}
</style>
