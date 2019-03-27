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
        <ul>
          <li class="food-item" v-for="food in item.foods">
            <div class="icon"><img :src="food.icon" alt=""></div>
            <div class="content">
              <div class="name">{{food.name}}</div>
              <div class="desc">{{food.description}}</div>
              <div class="extra">
                <span class="count">月售{{food.sellCount}}份</span>
                <span>好评率{{food.rating}}%</span>
              </div>
              <div class="price">
                <span class="now">￥{{food.price}}</span>
                <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'

  const ERR_OK = 0
  export default {
    name: 'goods',
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

      .food-item {
        display: flex;
        padding: 18px;

        .icon {
          width: 57px;
          margin-right: 10px;
        }

        .content {
          line-height: 18px;
          font-size: 10px;
          color: rgb(147, 153, 159);
        }

        .name {
          font-size: 14px;
          color: #333;
        }

        .extra {
          font-size: 0;

          span {
            font-size: 10px;

            &.count {
              margin-right: 12px;
            }
          }
        }

        .price {
          .now {
            line-height: 24px;
            font-size: 14px;
            color: #f00;
            font-weight: bold;
          }

          .old {
            margin-left: 5px;
            line-height: 24px;
            font-weight: bold;
            text-decoration: line-through;
          }
        }
      }
    }
  }
</style>
