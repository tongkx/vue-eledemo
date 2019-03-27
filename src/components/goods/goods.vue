<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="item in goods" class="menu-item">
          <span class="text">{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <div class="food-list" v-for="item in goods">
        <h2 class="title">{{item.name}}</h2>
        <foods :foods = item.foods></foods>
      </div>
    </div>
    <shopcart></shopcart>
  </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
import foods from '../foods/foods'
import shopcart from '../shopcart/shopcart'
const ERR_OK = 0
export default {
  name: 'goods',
  components:{
    foods,
    shopcart
  },
  data () {
    return {
      goods: []
    }
  },
  created () {
    axios.get('/api/goods').then((res) => {
      res = res.data
      if (res.errno === ERR_OK) {
        this.goods = res.data
        this.$nextTick(() => {
          this._initScroll()
        })
      }
    })
  },
  methods: {
    _initScroll () {
      let menuWrapper = document.querySelector('.menu-wrapper')
      this.meunScroll = new BScroll(menuWrapper, {
        click: true
      })

      let foodsScroll = document.querySelector('.foods-wrapper')
      this.foodsScroll = new BScroll(foodsScroll, {
        click: true
      })
    }
  }
}
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "../../common/sass/mixin";

  .goods {
    display: flex;
    position: absolute;
    top: 174px;
    bottom: 46px;
    width: 100%;
    overflow: hidden;

    .menu-wrapper {
      width: 56px;
      padding: 0 12px;
      background: #f3f5f7;

      li {
        display: flex;
        height: 54px;
        align-items: center;
        @include border-1px(#ddd);

        .text {
          font-size: 12px;
          color: #333;
          line-height: 22px;
        }
      }
    }

    .foods-wrapper {
      flex: 1;
      .title {
        height: 26px;
        line-height: 26px;
        padding-left: 12px;
        font-size: 12px;
        color: #999;
        background: #f3f5f7;
        border-left: 2px solid #ddd;
      }
    }
  }
</style>
