<template>
  <div>
    <v-header :seller = seller></v-header>
    <ul class="tab">
      <router-link tag="li" :to="{name : 'good'}" class="tab-item">商品</router-link>
      <router-link tag="li" :to="{name : 'rating'}" class="tab-item">评价</router-link>
      <router-link tag="li" :to="{name : 'seller'}" class="tab-item">商家</router-link>
    </ul>
    <router-view></router-view>
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
  data () {
    return {
      seller: []
    }
  },
  created () {
    axios.get('/api/seller?id=' + this.seller.id).then((response) => {
      response = response.data
      if (response.errno === ERR_OK) {
        this.seller = response.data
      }
    })
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "./common/sass/index.scss";
  @import "./common/sass/icon.css";
  .tab{
    display: flex;
    .tab-item{
      flex:1;
      height: 40px;
      line-height: 40px;
      color: rgb(77,85,93);
      font-size: 14px;
      text-align: center;
      font-weight: bold;
      &.active{
        color: rgb(240,20,20);
      }
    }

    @include border-1px(#ddd)
  }
</style>
