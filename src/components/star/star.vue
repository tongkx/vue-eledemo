<template>
    <div>
      <ul class="star" :class="starSize">
        <li v-for="itemClass in itemClasses" class="star-item" :class="itemClass">
        </li>
      </ul>
    </div>
</template>

<script>
const CLS_ON = 'on'
const CLS_HALF = 'half'
const CLS_OFF = 'off'
const LENGTH = 5
export default {
  name: 'star',
  props: ['score' , 'size'],
  computed: {
    starSize () {
      return 'star' + this.size
    },
    itemClasses () {
      var result = []
      let score = Math.floor(this.score * 2) / 2
      let hasDecimal = score % 1 !== 0
      let integer = Math.floor(score)
      for (let i = 0; i < integer; i++) {
        result.push(CLS_ON)
      }
      if (hasDecimal) {
        result.push(CLS_HALF)
      }
      while (result.length < LENGTH) {
        result.push(CLS_OFF)
      }
      return result
    }
  }
}
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "../../common/sass/mixin";
  .star{
    font-size: 0;
    .star-item{
      display: inline-block;
      background-repeat: no-repeat;
    }
    &.star48 {
      .star-item {
        width: 20px;
        height: 20px;
        margin-right: 22px;
        background-size: 20px 20px;

        &.on {
          @include bg-image('star48_on');
        }

        &.half {
          @include bg-image('star48_half');
        }

        &.off {
          @include bg-image('star48_off');
        }
      }

      &.star36 {
        width: 15px;
        height: 15px;
        margin-right: 6px;
        background-size: 15px 15px;

        &.on {
          @include bg-image('star36_on');
        }

        &.half {
          @include bg-image('star36_half');
        }

        &.off {
          @include bg-image('star36_off');
        }
      }

      &.star24 {
        width: 10px;
        height: 10px;
        margin-right: 3px;
        background-size: 10px 10px;

        &.on {
          @include bg-image('star24_on');
        }

        &.half {
          @include bg-image('star24_half');
        }

        &.off {
          @include bg-image('star24_off');
        }
      }
    }
  }
</style>
