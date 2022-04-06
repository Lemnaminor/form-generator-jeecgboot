const userForm = {
  formRef: 'elForm',
  formModel: 'formData',
  size: 'medium',
  labelPosition: 'right',
  labelWidth: 100,
  formRules: 'rules',
  gutter: 15,
  disabled: false,
  span: 24,
  formBtns: true,
  fields: [
    {
      __config__: {
        label: '用户姓名',
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
        renderKey: '1021649244089285',
      },
      __slot__: {
        prepend: '',
        append: '',
      },
      placeholder: '请输入用户姓名',
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
        label: '性别',
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
        formId: 103,
        renderKey: '1031649244159373',
      },
      __slot__: {
        options: [
          {
            label: '男',
            value: 1,
          },
          {
            label: '女',
            value: 2,
          },
        ],
      },
      placeholder: '请选择性别',
      style: {
        width: '100%',
      },
      clearable: true,
      disabled: false,
      filterable: false,
      multiple: false,
      __vModel__: 'sex',
    },
    {
      __config__: {
        label: '出生年月',
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
        document: 'https://element.eleme.cn/#/zh-CN/component/date-picker',
        formId: 104,
        renderKey: '1041649244179932',
      },
      placeholder: '请选择出生年月',
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
  ],
}

const testForm = {
  formRef: 'elForm',
  formModel: 'formData',
  size: 'medium',
  labelPosition: 'right',
  labelWidth: 100,
  formRules: 'rules',
  gutter: 15,
  disabled: false,
  span: 24,
  formBtns: true,
  fields: [
    {
      __config__: {
        label: '用户姓名22',
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
        renderKey: '1021649244089285',
      },
      __slot__: {
        prepend: '',
        append: '',
      },
      placeholder: '请输入用户姓名',
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
        label: '性别2',
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
        formId: 103,
        renderKey: '1031649244159373',
      },
      __slot__: {
        options: [
          {
            label: '男',
            value: 1,
          },
          {
            label: '女',
            value: 2,
          },
        ],
      },
      placeholder: '请选择性别',
      style: {
        width: '100%',
      },
      clearable: true,
      disabled: false,
      filterable: false,
      multiple: false,
      __vModel__: 'sex',
    },
  ],
}

export { userForm, testForm }
