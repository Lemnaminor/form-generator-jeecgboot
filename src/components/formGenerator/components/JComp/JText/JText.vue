<template>
  <div
    class="jText"
    :style="{
      color: color,
      'text-align': align,
      'font-size': `${fontSize}px`,
      'font-weight': fontWeight ? 'bold' : '',
      'font-style': fontStyle ? 'italic' : '',
      'line-height': lineHeight == '0' ? 'none' : lineHeight,
      'text-decoration': fontDecoration ? 'underline' : '',
    }"
  >
    <span>{{ value }}</span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    align: {
      type: String,
      default: 'left'
    },
    lineHeight: {
      type: [Number, String],
      default: ''
    },
    fontSize: {
      type: [Number, String],
      default: 16
    },
    color: {
      type: String,
      default: '#000000'
    },
    fontWeight: {
      type: Boolean,
      default: false
    },
    fontStyle: {
      type: Boolean,
      default: false
    },
    fontDecoration: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.jText {
  width: 100%;
  // border-right: 1px solid #000;
  // border-left: 1px solid #000;
  // box-sizing: border-box;
  // padding: 0 5px;
  // margin-left: -1px;
}
</style>
