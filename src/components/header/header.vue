<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar"><img :src="seller.avatar"></div>
      <div class="content">
        <div class="title"><span class="brand"></span><span class="name">{{seller.name}}</span></div>
        <div class="desc">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
          <div class="support" v-if="seller.supports">
            <span class="icon" :class="classMap[seller.supports[0].type]"></span>
            <span class="text">{{seller.supports[0].description}}</span>
          </div>
      </div>
      <div class="support-count" @click="openDetail">
        <span class="count">{{seller.supports.length}}个</span>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span><span
      class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <div class="detail" v-show="showDetail">
      <div class="detail-wrapper">
        <div class="detail-main">
          <h1 class="name">{{seller.name}}</h1>
          <div class="star-wrapper">
            <star :score=seller.score :size="48"></star>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul v-if="seller.supports">
            <li v-for="support in seller.supports"  class="support-item">
              <span class="icon" :class="classMap[support.type]"></span>
              <span class="text">{{support.description}}</span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="content">{{seller.bulletin}}</p>
          </div>
        </div>
      </div>
      <div class="detail-close" @click="closeDetail">
        关闭
        <i class="icon-close"></i>
      </div>
    </div>
  </div>
</template>

<script>
import star from '@/components/star/star'
export default {
  props: ['seller'],
  data () {
    return {
      showDetail: false
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  methods: {
    openDetail () {
      this.showDetail = true
    },
    closeDetail () {
      this.showDetail = false
    }
  },
  components: {
    star
  }
}
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "../../common/sass/mixin";

  .header {
    color: #fff;
    position: relative;
    overflow: hidden;
  }

  .background {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    filter: blur(10px);
  }

  .content-wrapper {
    position: relative;
    z-index: 2;
    display: flex;
    padding: 24px 12px 18px 24px;
    background: rgba(0, 0, 0, 0.5);

    .avatar {
      width: 64px;
      height: 64px;
    }

    .support-count {
      margin-top: 40px;
      padding: 0 12px;
      height: 24px;
      line-height: 24px;
      font-size: 12px;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 15px;
    }
  }

  .content {
    flex: 1;
    padding-left: 16px;

    .title {
      .name {
        font-size: 16px;
        font-weight: bold;
      }
    }

    .desc {
      padding: 5px 0 2px;
      font-size: 12px;
      line-height: 18px;
    }

    .support {
      .icon {
        display: inline-block;
        vertical-align: top;
        margin-top: 3px;
        width: 12px;
        height: 12px;
        background-size: 12px 12px;
        background-repeat: no-repeat;
        &.decrease {
        @include bg-image('decrease_1')
        }

        &.discount {
        @include bg-image('discount_1')
        }

        &.guarantee {
        @include bg-image('guarantee_1')
        }

        &.invoice {
        @include bg-image('invoice_1')
        }

        &.special {
        @include bg-image('special_1')
        }
      }

      .text {
        font-size: 10px;
      }
    }
  }

  .support-item{
    padding-top: 12px;
    &:first-child{
      margin-top: 10px;
    }
    .icon {
      display: inline-block;
      vertical-align: top;
      margin-top: 3px;
      width: 12px;
      height: 12px;
      background-size: 12px 12px;
      background-repeat: no-repeat;
      &.decrease {
        @include bg-image('decrease_1')
      }

      &.discount {
        @include bg-image('discount_1')
      }

      &.guarantee {
        @include bg-image('guarantee_1')
      }

      &.invoice {
        @include bg-image('invoice_1')
      }

      &.special {
        @include bg-image('special_1')
      }
    }
  }
  .bulletin-wrapper {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;
    height: 28px;
    padding: 0 4px;
    background: rgba(7, 17, 27, 0.5);

    .bulletin-text {
      flex: 1;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 10px;
    }
  }

  .brand {
    display: inline-block;
    vertical-align: top;
    width: 30px;
    height: 18px;
    line-height: 18px;
    margin-right: 6px;
    margin-top: 2px;
    @include bg-image('brand');
    background-size: 30px 18px;
    background-repeat: no-repeat;
  }
  .detail{
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(7,17,27,0.8);
    backdrop-filter: blur(10px);
  }
  .detail-wrapper{
    padding: 0 36px;
    min-height: 100%;
    font-size: 12px;
    overflow: auto;
    .detail-main{
      padding: 64px 0;
      .name{
        line-height: 16px;
        text-align: center;
        font-size: 16px;
        font-weight: bold;
      }
      .title{
        display: flex;
        margin: 28px auto 0;
        text-align: center;
        .line{
          flex: 1;
          position: relative;
          top: -9px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }
        .text{
          padding: 0 12px;
          font-weight: bold;
          font-size: 14px;
        }
      }
    }
    .star-wrapper{
      margin: 16px 0 0;
      text-align: center;
    }
  }
  .detail-close{
    position: relative;
    width: 32px;
    height: 32px;
    margin: -64px auto 0 auto;
    clear: both;
    font-size: 16px;
  }
  .bulletin{
    padding-top: 12px;
    line-height: 24px;
  }
</style>
