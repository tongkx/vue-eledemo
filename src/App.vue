<template>
  <div>
    <v-header :seller = seller></v-header>
    <ul class="tab">
      <li class="tab-item">商品</li>
      <li>评价</li>
      <li>商家</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import header from './components/header/header'
const ERR_OK = 0
export default {
  name: 'App',
  components: {
    'v-header': header
  },
  data (){
    return {
      seller: []
    }
  },
  created (){
    axios.get('/api/seller?id=' + this.seller.id).then((respsonse) => {
      console.info(respsonse.data)
      respsonse = respsonse.data
      if(respsonse.errno === ERR_OK){
        this.seller = respsonse.data
      }
    })
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "./common/sass/index.scss";
</style>
