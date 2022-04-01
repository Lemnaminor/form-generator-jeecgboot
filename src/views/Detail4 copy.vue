<template>
  <div class="test-form">
    <!-- <parser :form-conf="formConf" @submit="sumbitForm1" />
    <parser :key="key2" :form-conf="formConf" @submit="sumbitForm2" /> -->
    <parser
      ref="ruleForm"
      :key="key2"
      :form-conf="formConf"
      @submit="onSubmit"
      @change="onChange"
      @ccc="ccc"
    />
  </div>
</template>

<script>
import Parser from '@/components/formGenerator/components/parser/Parser'

// 若parser是通过安装npm方式集成到项目中的，使用此行引入
// import Parser from 'form-gen-parser'

export default {
  components: {
    Parser,
  },
  props: {},
  data() {
    return {
      key2: +new Date(),
      formConf: {
        formRef: '请假单',
        formModel: 'formData',
        size: 'medium',
        labelPosition: 'right',
        labelWidth: 100,
        formRules: 'rules',
        gutter: 15,
        disabled: false,
        span: 24,
        formBtns: true,
        __methods__: {
          aaa() {
            this.$parent['aaa']()
          },
        },
        fields: [
          {
            __config__: {
              label: '客户',
              showLabel: true,
              labelWidth: null,
              tag: 'el-select',
              tagIcon: 'select',
              layout: 'colFormItem',
              span: 24,
              required: true,
              regList: [],
              changeTag: true,
              document: 'https://element.eleme.cn/#/zh-CN/component/select',
              formId: 101,
              renderKey: '1011648654960795',
            },
            __slot__: {
              options: [
                {
                  label: '派大星',
                  value: 1,
                },
                {
                  label: '章鱼哥',
                  value: 2,
                },
              ],
            },
            placeholder: '请选择下拉选择客户',
            style: {
              width: '100%',
            },
            clearable: true,
            disabled: false,
            filterable: false,
            multiple: false,
            __vModel__: 'user1',
          },
          {
            __config__: {
              label: '用户',
              showLabel: true,
              hideField: false,
              changeTag: true,
              labelWidth: null,
              tag: 'j-select-user',
              tagIcon: 'j-select-user',
              defaultValue: '',
              required: true,
              span: 24,
              layout: 'colFormItem',
              regList: [],
              document: 'https://element.eleme.cn/#/zh-CN/component/button',
              formId: 104,
              renderKey: '1041648655039171',
            },
            multi: false,
            disabled: false,
            __vModel__: 'user2',
          },
          {
            __config__: {
              label: '币种',
              labelWidth: null,
              showLabel: true,
              hideField: false,
              changeTag: true,
              tag: 'el-input',
              tagIcon: 'input',
              required: true,
              layout: 'colFormItem',
              span: 24,
              document: 'https://element.eleme.cn/#/zh-CN/component/input',
              regList: [],
              formId: 102,
              renderKey: '1021648654984384',
            },
            __slot__: {
              prepend: '',
              append: '',
            },
            placeholder: '请输入币种',
            style: {
              width: '100%',
            },
            clearable: true,
            'prefix-icon': '',
            'suffix-icon': '',
            maxlength: null,
            'show-word-limit': false,
            readonly: false,
            disabled: false,
            __vModel__: 'money',
          },
          {
            __config__: {
              label: '业务员',
              labelWidth: null,
              showLabel: true,
              hideField: false,
              changeTag: true,
              tag: 'el-input',
              tagIcon: 'input',
              required: true,
              layout: 'colFormItem',
              span: 24,
              document: 'https://element.eleme.cn/#/zh-CN/component/input',
              regList: [],
              formId: 103,
              renderKey: '1031648655028726',
            },
            __slot__: {
              prepend: '',
              append: '',
            },
            placeholder: '请输入业务员',
            style: {
              width: '100%',
            },
            clearable: true,
            'prefix-icon': '',
            'suffix-icon': '',
            maxlength: null,
            'show-word-limit': false,
            readonly: false,
            disabled: false,
            __vModel__: 'name',
          },
          {
            __config__: {
              label: '日期选择',
              tag: 'el-date-picker',
              tagIcon: 'date',
              defaultValue: null,
              showLabel: true,
              labelWidth: null,
              span: 24,
              layout: 'colFormItem',
              required: true,
              regList: [],
              changeTag: true,
              document:
                'https://element.eleme.cn/#/zh-CN/component/date-picker',
              formId: 105,
              renderKey: '1051648655075101',
            },
            placeholder: '请选择日期选择',
            type: 'date',
            style: {
              width: '100%',
            },
            disabled: false,
            clearable: true,
            format: 'yyyy-MM-dd',
            'value-format': 'yyyy-MM-dd',
            readonly: false,
            __vModel__: 'time',
          },
          {
            __config__: {
              label: '按钮',
              showLabel: true,
              changeTag: true,
              labelWidth: null,
              tag: 'el-button',
              tagIcon: 'button',
              span: 24,
              layout: 'colFormItem',
              document: 'https://element.eleme.cn/#/zh-CN/component/button',
              formId: 101,
              renderKey: '1011648740765554',
            },
            __slot__: {
              default: '按钮aaa调用',
            },
            type: 'primary',
            icon: 'el-icon-search',
            round: false,
            size: 'medium',
            plain: false,
            circle: false,
            disabled: false,
            __vModel__: '',
            dynamicFun: 'aaa',
            on: {
              click: 'aaa',
            },
          },
          {
            __config__: {
              label: '按钮',
              showLabel: true,
              changeTag: true,
              labelWidth: null,
              tag: 'el-button',
              tagIcon: 'button',
              span: 24,
              layout: 'colFormItem',
              document: 'https://element.eleme.cn/#/zh-CN/component/button',
              formId: 102,
              renderKey: '1021648740766205',
            },
            __slot__: {
              default: '按钮bbb调用',
            },
            type: 'primary',
            icon: 'el-icon-search',
            round: false,
            size: 'medium',
            plain: false,
            circle: false,
            disabled: false,
            dynamicFun: 'bbb',
            on: {
              click: 'bbb',
            },
          },,
          {
            __config__: {
              label: '按钮',
              showLabel: true,
              changeTag: true,
              labelWidth: null,
              tag: 'el-button',
              tagIcon: 'button',
              span: 24,
              layout: 'colFormItem',
              document: 'https://element.eleme.cn/#/zh-CN/component/button',
              formId: 102,
              renderKey: '1021648740766205',
            },
            __slot__: {
              default: '按钮ccc调用',
            },
            type: 'primary',
            icon: 'el-icon-search',
            round: false,
            size: 'medium',
            plain: false,
            circle: false,
            disabled: false,
            dynamicFun: 'ccc',
            on: {
              click: 'ccc',
            },
          },
        ],
      },
    }
  },
  computed: {},
  watch: {},
  created() {

  },
  mounted() {
    console.log('ruleForm:', this.$refs.ruleForm)
    // 表单数据回填，模拟异步请求场景
    // setTimeout(() => {
    //   // 请求回来的表单数据
    //   const data = {
    //     mobile: '18836662555',
    //     time: ['2022-01-01', '2022-02-02'],
    //     star: 2,
    //   }
    //   console.log('okk', data)
    //   // 回填数据
    //   this.fillFormData(this.formConf, data)
    //   // 更新表单
    //   this.key2 = +new Date()
    // }, 2000)
  },
  methods: {
    fillFormData(form, data) {
      form.fields.forEach((item) => {
        const val = data[item.__vModel__]
        if (val) {
          item.__config__.defaultValue = val
        }
      })
    },
    onChange(form, value, key) {
      console.log('form', form, 'value:', value, 'key:', key)
      if (key == 'user1') {
        setTimeout(() => {
          // 请求回来的表单数据
          const data = {
            ...form,
            money: 'RMB',
            name: '张三',
          }
          console.log('okk', data)
          // 回填数据
          this.fillFormData(this.formConf, data)
          // 更新表单
          this.key2 = +new Date()
        }, 2000)
      }
      if (key == 'user2') {
        setTimeout(() => {
          // 请求回来的表单数据
          const data = {
            ...form,
            money: 'US',
            name: '李四',
          }
          console.log('okk', data)
          // 回填数据
          this.fillFormData(this.formConf, data)
          // 更新表单
          this.key2 = +new Date()
        }, 2000)
      }
    },
    onSubmit(formData) {
      console.log('onSubmit:', formData)
    },
    // 动态函数方法
    // aaa() {
    //   setTimeout(() => {
    //     // 请求回来的表单数据
    //     const data = {
    //       // ...this.$refs.ruleForm.formData,
    //       name: '李四1',
    //     }
    //     console.log('okk', data)
    //     // 回填数据
    //     this.fillFormData(this.formConf, data)
    //     // 更新表单
    //     this.key2 = +new Date()
    //   }, 1000)
    // },
    // bbb() {
    //   setTimeout(() => {
    //     // 请求回来的表单数据
    //     const data = {
    //       name: '王五',
    //     }
    //     console.log('okk', data)
    //     // 回填数据
    //     this.fillFormData(this.formConf, data)
    //     // 更新表单
    //     this.key2 = +new Date()
    //   }, 1000)
    // },
    aaa(){
      alert('aaa')
    },
    bbb(){
      alert('bbb')
    },
    ccc(){
      alert('ccc')
    },

  },
}
</script>

<style lang="scss" scoped>
.test-form {
  margin: 15px auto;
  width: 800px;
  padding: 15px;
}
</style>
