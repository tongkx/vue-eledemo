<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar"><img :src="seller.avatar"></div>
      <div class="content">
          <div class="title"><span class="brand"></span><span class="name">{{seller.name}}</span></div>
          <div class="desc">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
          <div class="support">
            <span class="icon"></span>
            <span class="text">{{seller.supports[0].description}}</span>
          </div>
      </div>
      <div class="support-count">
        <span class="count">{{seller.supports.length}}个</span>
      </div>
    </div>
    <div class="bulletin-wrapper"><span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i></div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
  </div>
</template>

<script>
  export default {
    props: ['seller']
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  .header{
    color: #fff;
    position: relative;
    overflow: hidden;
  }
  .background{
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    filter: blur(10px);
  }
  .content-wrapper{
    position: relative;
    z-index: 2;
    display: flex;
    padding: 24px 12px 18px 24px;
    background: rgba(0,0,0,0.5);
    .avatar{
      width: 64px;
      height: 64px;
    }
    .support-count{
      margin-top: 40px;
      padding: 0 12px;
      height: 24px;
      line-height: 24px;
      font-size: 12px;
      background: rgba(0,0,0,0.2);
      border-radius:15px;
    }
  }
  .content{
    flex: 1;
    padding-left: 16px;
    .title{
      .name{
        font-size: 16px;
      }
    }
    .desc{
      padding: 8px 0 6px;
      font-size: 12px;
    }
    .support{
      .text{
        font-size: 10px;
      }
    }
  }
  .bulletin-wrapper{
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;
    height: 28px;
    padding: 0 4px;
    background: rgba(7,17,27,0.5);
    .bulletin-text{
      flex: 1;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 10px;
    }
  }
</style>
