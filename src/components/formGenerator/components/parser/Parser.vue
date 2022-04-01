<script>
import { deepClone } from '@/components/formGenerator/utils/index'
import render from '@/components/formGenerator/components/render/render.js'

const ruleTrigger = {
  'el-input': 'blur',
  'el-input-number': 'blur',
  'el-select': 'change',
  'el-radio-group': 'change',
  'el-checkbox-group': 'change',
  'el-cascader': 'change',
  'el-time-picker': 'change',
  'el-date-picker': 'change',
  'el-rate': 'change'
}

const layouts = {
  colFormItem(h, scheme) {
    const config = scheme.__config__
    const listeners = buildListeners.call(this, scheme)

    let labelWidth = config.labelWidth ? `${config.labelWidth}px` : null
    if (config.showLabel === false) labelWidth = '0'
    return (
      <el-col span={config.span}>
        <el-form-item label-width={labelWidth} prop={scheme.__vModel__}
          label={config.showLabel ? config.label : ''} style={config.hideField ? 'display: none' : 'display:block'}>
          <render conf={scheme} on={listeners} />
        </el-form-item>
      </el-col>
    )
  },
  rowFormItem(h, scheme) {
    let child = renderChildren.apply(this, arguments)
    if (scheme.type === 'flex') {
      child = <el-row type={scheme.type} justify={scheme.justify} align={scheme.align}>
              {child}
            </el-row>
    }
    return (
      <el-col span={scheme.span}>
        <el-row gutter={scheme.gutter} class="el-row form-grid-word-theme">
          {child}
        </el-row>
      </el-col>
    )
  }
}

function renderFrom(h) {
  const { formConfCopy } = this

  return (
    <el-row gutter={formConfCopy.gutter}>
      <el-form
        size={formConfCopy.size}
        label-position={formConfCopy.labelPosition}
        disabled={formConfCopy.disabled}
        label-width={`${formConfCopy.labelWidth}px`}
        ref={formConfCopy.formRef}
        // model不能直接赋值 https://github.com/vuejs/jsx/issues/49#issuecomment-472013664
        props={{ model: this[formConfCopy.formModel] }}
        rules={this[formConfCopy.formRules]}
      >
        {renderFormItem.call(this, h, formConfCopy.fields)}
        {formConfCopy.formBtns && formBtns.call(this, h)}
      </el-form>
    </el-row>
  )
}

function formBtns(h) {
  return <el-col>
    <el-form-item size="large" style="margin-top:30px;">
      <el-button type="primary" onClick={this.submitForm}>提交</el-button>
      <el-button onClick={this.resetForm}>重置</el-button>
    </el-form-item>
  </el-col>
}

function renderFormItem(h, elementList) {
  return elementList.map(scheme => {
    const config = scheme.__config__
    const layout = layouts[config.layout]

    if (layout) {
      return layout.call(this, h, scheme)
    }
    throw new Error(`没有与${config.layout}匹配的layout`)
  })
}

function renderChildren(h, scheme) {
  const config = scheme.__config__
  if (!Array.isArray(config.children)) return null
  return renderFormItem.call(this, h, config.children)
}

function setValue(event, config, scheme) {
  // console.log('event:', event, 'config:', config, 'scheme:', scheme)
  this.$set(config, 'defaultValue', event)
  this.$set(this[this.formConf.formModel], scheme.__vModel__, event)
  this.$emit('change', this[this.formConf.formModel], scheme.__config__.defaultValue, scheme.__vModel__)
}

function buildListeners(scheme) {
  const config = scheme.__config__
  const methods = this.formConf.__methods__ || {}
  const listeners = {}

  // 给__methods__中的方法绑定this和event
  Object.keys(methods).forEach(key => {
    listeners[key] = event => methods[key].call(this, event)
  })
  // 响应 render.js 中的 vModel $emit('input', val)
  listeners.input = event => setValue.call(this, event, config, scheme)

  return listeners
}

export default {
  components: {
    render
  },
  props: {
    formConf: {
      type: Object,
      required: true
    }
  },
  data() {
    const data = {
      formConfCopy: deepClone(this.formConf),
      [this.formConf.formModel]: {},
      [this.formConf.formRules]: {}
    }
    this.initFormData(data.formConfCopy.fields, data[this.formConf.formModel])
    this.buildRules(data.formConfCopy.fields, data[this.formConf.formRules])
    return data
  },
  methods: {
    initFormData(componentList, formData) {
      componentList.forEach(cur => {
        const config = cur.__config__
        if (cur.__vModel__) formData[cur.__vModel__] = config.defaultValue
        if (config.children) this.initFormData(config.children, formData)
      })
    },
    buildRules(componentList, rules) {
      componentList.forEach(cur => {
        const config = cur.__config__
        if (Array.isArray(config.regList)) {
          if (config.required) {
            const required = { required: config.required, message: cur.placeholder }
            if (Array.isArray(config.defaultValue)) {
              required.type = 'array'
              required.message = `请至少选择一个${config.label}`
            }
            required.message === undefined && (required.message = `${config.label}不能为空`)
            config.regList.push(required)
          }
          rules[cur.__vModel__] = config.regList.map(item => {
            item.pattern && (item.pattern = eval(item.pattern))
            item.trigger = ruleTrigger && ruleTrigger[config.tag]
            return item
          })
        }
        if (config.children) this.buildRules(config.children, rules)
      })
    },
    resetForm() {
      this.formConfCopy = deepClone(this.formConf)
      this.$refs[this.formConf.formRef].resetFields()
    },
    submitForm() {
      console.log('formConf-json:', this.formConf)
      console.log('form:', this[this.formConf.formModel])
      this.$refs[this.formConf.formRef].validate(valid => {
        if (!valid) return false
        // 触发sumit事件
        this[this.formConf.formModel]['formJson'] = this.formConf;
        this.$emit('submit', this[this.formConf.formModel])
        return true
      })
    }
  },
  render(h) {
    return renderFrom.call(this, h)
  }
}
</script>

<style lang="scss" scoped>
// ::v-deep .el-form > .el-col {
//   border: 1px solid #000;
//   margin-bottom: -1px !important;
//   padding-left: 0!important;
//   padding-right: 0!important;
// }
::v-deep .el-form-item {
  margin-bottom: 0;
  padding: 2px 0;
}
::v-deep .form-grid-word-theme .el-input__inner,
::v-deep .form-grid-word-theme .el-textarea__inner {
    border: 0 !important;
}

/* 设置栅格布局的边框，下边距 -1px 可以让边框重合 */
.form-grid-word-theme {
    display: flex;
    border: 1px solid #000;
    margin-bottom: -1px !important;
}

/* 设置每列的右边框 */
.form-grid-word-theme > .el-col {
    border-right: 1px solid #000;
}

/* 设置最后一列没有右边框 */
.form-grid-word-theme > .el-col:last-child {
    border-right: none;
}

/* 去掉form-item的下边距，让表单更紧凑 */
.form-grid-word-theme .el-form-item {
    margin-bottom: 0px !important;
    padding: 2px 5px;
}

.form-grid-word-theme .el-form-item {
    position: relative;
}

.form-grid-word-theme .el-form-item__error {
    z-index: 2;
    top: calc(100% + 4px);
    pointer-events: none;
}

.form-grid-word-theme .el-form-item:before {
    content: '';
    display: block;
    position: absolute;
    top: -1px;
    left: -1px;
    z-index: 3;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    border: 1px solid transparent;
    box-shadow: 0px 0px 6px 0px rgba(255, 0, 0, 0);
    transition: border-color 0.3s, box-shadow 0.3s;
    pointer-events: none;
}

/** 设置校验错误时边框为红色 */
.form-grid-word-theme .el-form-item.is-error:before {
    border-color: red;
    box-shadow: 0px 0px 0px 0px rgba(255, 0, 0, 0.3);
    box-sizing: border-box;
    // border: 1px solid red
}
::v-deep .el-form-item__error {
  // display: none!important;
  z-index: 9;
}

/* 去掉输入框的边框 */
.form-grid-word-theme .el-input__inner,
.form-grid-word-theme .el-textarea__inner,
.form-sub-table-word-theme .el-input__inner {
    border: 0 !important;
}

/* 设置radio在grid中的边距 */
.form-grid-word-theme .form-radio,
.form-grid-word-theme .form-checkbox {
    margin-left: 12px;
}

.form-grid-word-theme .form-radio .el-radio,
.form-grid-word-theme .form-checkbox .el-checkbox {
    margin-right: 8px;
}

.form-grid-word-theme .form-radio .el-radio:last-child,
.form-grid-word-theme .form-checkbox .el-checkbox:last-child {
    margin-right: 0;
}
</style>
