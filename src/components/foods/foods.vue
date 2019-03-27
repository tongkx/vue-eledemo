<template>
  <div>
    <ul>
      <li class="food-item" v-for="food in foods">
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
</template>

<script>
  export default {
    name: 'foods.vue',
    props: ['foods']
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
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
</style>
