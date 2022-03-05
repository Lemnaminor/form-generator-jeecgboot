<template>
  <div>
    <el-input
      :value="value | hiddenId"
      :disabled="disabled"
      prefix-icon="el-icon-search"
      placeholder="请选择用户"
      @focus="onFocus"
    />
    <!-- 部门弹窗 -->
    <user-dialog
      ref="UserDialog"
      :multi="multi"
      @onSelect="onSelect"
    />
  </div>
</template>

<script>
import UserDialog from './UserDialog'

export default {
  components: {
    UserDialog
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
    return {}
  },
  watch: {},
  methods: {
    onFocus() {
      this.$refs.UserDialog.dialogVisible = true
    },
    onSelect(obj) {
      this.$emit(
        'input',
        obj.names && obj.ids ? `${obj.names}_*_${obj.ids}` : ''
      )
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
