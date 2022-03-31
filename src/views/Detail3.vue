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
    />
    <el-button
      type="primary"
      @click="handleAdd"
    >新增清空</el-button>
    <el-button
      type="primary"
      @click="handleLook"
    >查看</el-button>
  </div>
</template>

<script>
import Parser from "@/components/formGenerator/components/parser/Parser";

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
        formRef: "请假单",
        formModel: "formData",
        size: "medium",
        labelPosition: "right",
        labelWidth: 100,
        formRules: "rules",
        gutter: 15,
        disabled: false,
        span: 24,
        formBtns: true,
        fields: [
          {
            __config__: {
              label: "客户",
              showLabel: true,
              labelWidth: null,
              tag: "el-select",
              tagIcon: "select",
              layout: "colFormItem",
              span: 24,
              required: true,
              regList: [],
              changeTag: true,
              document: "https://element.eleme.cn/#/zh-CN/component/select",
              formId: 101,
              renderKey: "1011648654960795",
            },
            __slot__: {
              options: [
                {
                  label: "派大星",
                  value: 1,
                },
                {
                  label: "章鱼哥",
                  value: 2,
                },
              ],
            },
            placeholder: "请选择下拉选择客户",
            style: {
              width: "100%",
            },
            clearable: true,
            disabled: false,
            filterable: false,
            multiple: false,
            __vModel__: "user1",
          },
          {
            __config__: {
              label: "用户",
              showLabel: true,
              hideField: false,
              changeTag: true,
              labelWidth: null,
              tag: "j-select-user",
              tagIcon: "j-select-user",
              defaultValue: "",
              required: true,
              span: 24,
              layout: "colFormItem",
              regList: [],
              document: "https://element.eleme.cn/#/zh-CN/component/button",
              formId: 104,
              renderKey: "1041648655039171",
            },
            multi: false,
            disabled: false,
            __vModel__: "user2",
          },
          {
            __config__: {
              label: "币种",
              labelWidth: null,
              showLabel: true,
              hideField: false,
              changeTag: true,
              tag: "el-input",
              tagIcon: "input",
              required: true,
              layout: "colFormItem",
              span: 24,
              document: "https://element.eleme.cn/#/zh-CN/component/input",
              regList: [],
              formId: 102,
              renderKey: "1021648654984384",
            },
            __slot__: {
              prepend: "",
              append: "",
            },
            placeholder: "请输入币种",
            style: {
              width: "100%",
            },
            clearable: true,
            "prefix-icon": "",
            "suffix-icon": "",
            maxlength: null,
            "show-word-limit": false,
            readonly: false,
            disabled: false,
            __vModel__: "money",
          },
          {
            __config__: {
              label: "业务员",
              labelWidth: null,
              showLabel: true,
              hideField: false,
              changeTag: true,
              tag: "el-input",
              tagIcon: "input",
              required: true,
              layout: "colFormItem",
              span: 24,
              document: "https://element.eleme.cn/#/zh-CN/component/input",
              regList: [],
              formId: 103,
              renderKey: "1031648655028726",
            },
            __slot__: {
              prepend: "",
              append: "",
            },
            placeholder: "请输入业务员",
            style: {
              width: "100%",
            },
            clearable: true,
            "prefix-icon": "",
            "suffix-icon": "",
            maxlength: null,
            "show-word-limit": false,
            readonly: false,
            disabled: false,
            __vModel__: "name",
          },
          {
            __config__: {
              label: "日期选择",
              tag: "el-date-picker",
              tagIcon: "date",
              defaultValue: null,
              showLabel: true,
              labelWidth: null,
              span: 24,
              layout: "colFormItem",
              required: true,
              regList: [],
              changeTag: true,
              document:
                "https://element.eleme.cn/#/zh-CN/component/date-picker",
              formId: 105,
              renderKey: "1051648655075101",
            },
            placeholder: "请选择日期选择",
            type: "date",
            style: {
              width: "100%",
            },
            disabled: false,
            clearable: true,
            format: "yyyy-MM-dd",
            "value-format": "yyyy-MM-dd",
            readonly: false,
            __vModel__: "time",
          },
        ],
      },
      formConf2: {
        fields: [
          {
            __config__: {
              label: "单行文本",
              labelWidth: null,
              showLabel: true,
              changeTag: true,
              tag: "el-input",
              tagIcon: "input",
              required: true,
              layout: "colFormItem",
              span: 24,
              document: "https://element.eleme.cn/#/zh-CN/component/input",
              regList: [
                {
                  pattern: "/^1(3|4|5|7|8|9)\\d{9}$/",
                  message: "手机号格式错误",
                },
              ],
            },
            __slot__: {
              prepend: "",
              append: "",
            },
            __vModel__: "mobile",
            placeholder: "请输入手机号",
            style: {
              width: "100%",
            },
            clearable: true,
            "prefix-icon": "el-icon-mobile",
            "suffix-icon": "",
            maxlength: 11,
            "show-word-limit": true,
            readonly: false,
            disabled: false,
          },
          {
            __config__: {
              label: "日期范围",
              tag: "el-date-picker",
              tagIcon: "date-range",
              defaultValue: null,
              span: 24,
              showLabel: true,
              labelWidth: null,
              required: true,
              layout: "colFormItem",
              regList: [],
              changeTag: true,
              document:
                "https://element.eleme.cn/#/zh-CN/component/date-picker",
              formId: 101,
              renderKey: 1585980082729,
            },
            style: {
              width: "100%",
            },
            type: "daterange",
            "range-separator": "至",
            "start-placeholder": "开始日期",
            "end-placeholder": "结束日期",
            disabled: false,
            clearable: true,
            format: "yyyy-MM-dd",
            "value-format": "yyyy-MM-dd",
            readonly: false,
            __vModel__: "field101",
          },
        ],
        formRef: "elForm",
        formModel: "formData",
        size: "small",
        labelPosition: "right",
        labelWidth: 100,
        formRules: "rules",
        gutter: 15,
        disabled: false,
        span: 24,
        formBtns: true,
        unFocusedComponentBorder: false,
      },
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    // 表单数据回填，模拟异步请求场景
    // this.handleAdd2()
  },
  methods: {
    fillFormData(form, data) {
      form.fields.forEach((item) => {
        const val = data[item.__vModel__];
        // if (val) {
        item.__config__.defaultValue = val;
        // }
      });
    },
    setFieldDisabled(form, fields) {
      form.fields.forEach((item) => {
        if (fields.includes(item.__vModel__)) {
          item.disabled = true;
        }
      });
    },
    onChange(form, value, key) {
      console.log("form", form, "value:", value, "key:", key);
      if (key == "user1") {
        setTimeout(() => {
          // 请求回来的表单数据
          const data = {
            ...form,
            money: "RMB",
            name: "张三",
          };
          console.log("okk", data);
          // 回填数据
          this.fillFormData(this.formConf, data);
          // 更新表单
          this.key2 = +new Date();
          console.log("key1:", this.key2);
        }, 2000);
      }
      if (key == "user2") {
        setTimeout(() => {
          // 请求回来的表单数据
          const data = {
            // ...form,
            money: "US",
            name: "李四",
          };
          console.log("okk", data);
          // 回填数据
          this.fillFormData(this.formConf, data);
          // 更新表单
          this.key2 = +new Date();
          console.log("key2:", this.key2);
        }, 2000);
      }
    },
    onSubmit(formData) {
      console.log("onSubmit:", formData);
    },
    // 新增清空
    handleAdd() {
      // 请求回来的表单数据
      const data = {};
      // 回填数据
      this.fillFormData(this.formConf, data);
      // 更新表单
      this.key2 = +new Date();
    },
    // 查看禁用
    handleLook(){
      this.setFieldDisabled(this.formConf, ['name', 'money']);
      this.key2 = +new Date();
    }
  },
};
</script>

<style lang="scss" scoped>
.test-form {
  margin: 15px auto;
  width: 800px;
  padding: 15px;
}
</style>
