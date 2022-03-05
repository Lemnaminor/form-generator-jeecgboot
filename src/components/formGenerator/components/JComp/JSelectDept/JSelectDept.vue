<template>
  <div>
    <el-input
      :value="value | hiddenId"
      :disabled="disabled"
      prefix-icon="el-icon-search"
      placeholder="请选择部门"
      @focus="onFocus"
    />
    <!-- 部门弹窗 -->
    <dept-dialog ref="DeptDialog" :multi="multi" @onSelect="onSelect" />
  </div>
</template>

<script>
import DeptDialog from './DeptDialog'

export default {
  components: {
    DeptDialog
  },
  filters: {
    hiddenId(val) {
      return val && val.indexOf('_*_') !== -1 ? val.split('_*_')[0] : val
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    multi: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    }
  },
  methods: {
    onFocus() {
      this.$refs.DeptDialog.dialogVisible = true
    },
    onSelect(obj) {
      this.$emit('input', (obj.names && obj.ids) ? `${obj.names}_*_${obj.ids}` : '')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
