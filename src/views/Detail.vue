<template>
  <div>
    <div style="padding: 20px">
      1，<el-button type="primary" @click="handleFormSubmit()">业务表单提交</el-button>&emsp;
      2，<el-button type="primary" @click="handleFormDetail()">业务表单详情</el-button>
    </div>
    <!-- 编辑弹窗 -->
    <el-dialog
      :title="formJson.formRef"
      :visible.sync="visibleParser"
    >
      <parser
        v-if="visibleParser"
        :form-conf="formJson"
        @submit="onSubmit"
      />
    </el-dialog>
  </div>
</template>

<script>
import Parser from '@/components/formGenerator/components/parser/Parser'
export default {
  name: 'Home',
  components: {
    Parser,
  },
  data() {
    return {

      formJson: {},

      // 编辑弹窗
      visibleParser: false,

    }
  },
  created(){
  },
  methods: {

    handleFormSubmit(){
      const { formData } = this.$route.params;
      this.formJson = JSON.parse(formData);
      console.log('formJson-detail:', this.formJson)
      this.visibleParser = true;
    },
    handleFormDetail(){
      this.visibleParser = true;
    },

    async onSubmit(form) {
      form.formJson.disabled = true
      form.formJson.formBtns = false
      console.log('form-1:', form);

      let tForm = this.setFormData(form)
      this.setAddForm(tForm)
    },
    // 递归绑定数据到表单内回显使用
    setFormData(form) {
      form.formJson.fields.forEach((item) => {
        setValue(form, item)
      })
      function setValue(form, fields) {
        if (!fields['__config__'].children) {
          if (fields['__vModel__']) fields['__config__']['defaultValue'] = form[fields['__vModel__']]
          return 1
        } else {
          if (fields['__config__'].children && fields['__config__'].children.length > 0) {
            fields['__config__'].children.forEach((item, indexone) => {
              if (item['__vModel__']) {
                item['__config__']['defaultValue'] = form[item['__vModel__']]
                setValue(form, item)
              }
            })
          }
        }
      }
      return form
    },
    // 添加业务提交
    async setAddForm(form) {
      console.log('form-2:', form);
      const { formJson, ...args } = form;
      // 处理隐藏字段undefined赋值空
      for(let key in args){
        if(form[key] == undefined) form[key] = ''
      }
      // 循环处理用户选择/部门选择组件数据id
      for(let key in args){
        if((args[key] && typeof(args[key]) === 'string') && args[key].includes('_*_')) {
          let tData = args[key].split('_*_');
          args[key] = tData[0]
          args[`${key}Id`] = tData[1]
        }
      }
      console.log('args:', args);
      const param = {
        workJson: JSON.stringify(formJson),
        workData: JSON.stringify(args)
      }
      console.log('param:', param);
      this.visibleParser = false;
      this.formJson= formJson;
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
