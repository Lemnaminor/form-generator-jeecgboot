<template>
  <div>
    <el-dialog
      title="部门选择"
      :visible.sync="dialogVisible"
      :append-to-body="true"
      width="30%"
    >
      <el-input
        v-model="filterText"
        placeholder="输入关键字进行过滤"
      />

      <!-- 单选 -->
      <template v-if="!multi">
        <el-tree
          ref="tree"
          class="filter-tree"
          show-checkbox
          :data="deptData"
          node-key="id"
          :props="defaultProps"
          :filter-node-method="filterNode"
          :check-strictly="true"
          @check-change="handleCheckChange"
        />
      </template>
      <!-- 多选 -->
      <template v-if="multi">
        <el-tree
          ref="tree"
          class="filter-tree"
          show-checkbox
          :data="deptData"
          node-key="id"
          :props="defaultProps"
          :filter-node-method="filterNode"
          @check="handleCheckChangeMulti"
        />
      </template>

      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="onConfirm"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

export default {
  props: {
    multi: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialogVisible: false,
      filterText: '',
      defaultProps: {
        children: 'children',
        label: 'title',
      },

      urlList: {
        dept: '/activiti/System/queryDeptTreeList',
      },

      selectData: {},
      deptData: [],
      deptData_1: [
        {
          key: '6d35e179cd814e3299bd588ea7daed3f',
          value: '6d35e179cd814e3299bd588ea7daed3f',
          title: '卓尔互动公司',
          isLeaf: false,
          id: '6d35e179cd814e3299bd588ea7daed3f',
          parentId: '',
          departName: '卓尔互动公司',
          departNameEn: null,
          departNameAbbr: null,
          departOrder: 0,
          description: null,
          orgCategory: '1',
          orgType: '1',
          orgCode: 'A02',
          mobile: null,
          fax: null,
          address: null,
          memo: null,
          status: null,
          delFlag: '0',
          qywxIdentifier: '2',
          createBy: 'admin',
          createTime: '2019-02-26 16:36:39',
          updateBy: 'qinfeng',
          updateTime: '2021-05-20 16:01:29',
          children: [
            {
              key: 'a7d7e77e06c84325a40932163adcdaa6',
              value: 'a7d7e77e06c84325a40932163adcdaa6',
              title: '项目核算部',
              isLeaf: true,
              id: 'a7d7e77e06c84325a40932163adcdaa6',
              parentId: '6d35e179cd814e3299bd588ea7daed3f',
              departName: '项目核算部',
              departNameEn: null,
              departNameAbbr: null,
              departOrder: 2,
              description: null,
              orgCategory: '2',
              orgType: '2',
              orgCode: 'A02A01',
              mobile: null,
              fax: null,
              address: null,
              memo: null,
              status: null,
              delFlag: '0',
              qywxIdentifier: '7',
              createBy: 'admin',
              createTime: '2019-02-26 16:36:47',
              updateBy: 'admin',
              updateTime: '2021-11-04 16:50:57',
              children: [],
            },
            {
              key: '5159cde220114246b045e574adceafe9',
              value: '5159cde220114246b045e574adceafe9',
              title: '项目研发部',
              isLeaf: false,
              id: '5159cde220114246b045e574adceafe9',
              parentId: '6d35e179cd814e3299bd588ea7daed3f',
              departName: '项目研发部',
              departNameEn: null,
              departNameAbbr: null,
              departOrder: 1,
              description: null,
              orgCategory: '1',
              orgType: '2',
              orgCode: 'A02A02',
              mobile: null,
              fax: null,
              address: null,
              memo: null,
              status: null,
              delFlag: '0',
              qywxIdentifier: '3',
              createBy: 'admin',
              createTime: '2019-02-26 16:44:38',
              updateBy: 'qinfeng',
              updateTime: '2021-05-20 16:01:29',
              children: [
                {
                  key: '1e62d5e17ec14e79a4e0ec46a4b981b5',
                  value: '1e62d5e17ec14e79a4e0ec46a4b981b5',
                  title: '架构部',
                  isLeaf: true,
                  id: '1e62d5e17ec14e79a4e0ec46a4b981b5',
                  parentId: '5159cde220114246b045e574adceafe9',
                  departName: '架构部',
                  departNameEn: null,
                  departNameAbbr: null,
                  departOrder: 0,
                  description: null,
                  orgCategory: '2',
                  orgType: '3',
                  orgCode: 'A02A02A03',
                  mobile: null,
                  fax: null,
                  address: null,
                  memo: null,
                  status: null,
                  delFlag: '0',
                  qywxIdentifier: '4',
                  createBy: 'admin',
                  createTime: '2020-08-28 11:18:40',
                  updateBy: 'qinfeng',
                  updateTime: '2021-05-20 16:01:29',
                  children: [],
                },
                {
                  key: '53bc363b57d14322810003ab053fcb97',
                  value: '53bc363b57d14322810003ab053fcb97',
                  title: '项目部',
                  isLeaf: true,
                  id: '53bc363b57d14322810003ab053fcb97',
                  parentId: '5159cde220114246b045e574adceafe9',
                  departName: '项目部',
                  departNameEn: null,
                  departNameAbbr: null,
                  departOrder: 0,
                  description: null,
                  orgCategory: '2',
                  orgType: '3',
                  orgCode: 'A02A02A01',
                  mobile: null,
                  fax: null,
                  address: null,
                  memo: null,
                  status: null,
                  delFlag: '0',
                  qywxIdentifier: '5',
                  createBy: 'admin',
                  createTime: '2020-08-28 11:18:26',
                  updateBy: 'qinfeng',
                  updateTime: '2021-05-20 16:01:29',
                  children: [],
                },
                {
                  key: '75de38f1ca3f483dbd3b2758993a9c3d',
                  value: '75de38f1ca3f483dbd3b2758993a9c3d',
                  title: '产品部门',
                  isLeaf: true,
                  id: '75de38f1ca3f483dbd3b2758993a9c3d',
                  parentId: '5159cde220114246b045e574adceafe9',
                  departName: '产品部门',
                  departNameEn: null,
                  departNameAbbr: null,
                  departOrder: 0,
                  description: null,
                  orgCategory: '2',
                  orgType: '3',
                  orgCode: 'A02A02A02',
                  mobile: null,
                  fax: null,
                  address: null,
                  memo: null,
                  status: null,
                  delFlag: '0',
                  qywxIdentifier: '6',
                  createBy: 'admin',
                  createTime: '2020-08-28 11:18:34',
                  updateBy: 'qinfeng',
                  updateTime: '2021-05-20 16:01:29',
                  children: [],
                },
              ],
            },
          ],
        },
        {
          key: 'f4d5979edc1d4785ba2322f0b8200a21',
          value: 'f4d5979edc1d4785ba2322f0b8200a21',
          title: '启云互动',
          isLeaf: false,
          id: 'f4d5979edc1d4785ba2322f0b8200a21',
          parentId: '',
          departName: '启云互动',
          departNameEn: null,
          departNameAbbr: null,
          departOrder: 0,
          description: null,
          orgCategory: '1',
          orgType: '1',
          orgCode: 'A03',
          mobile: null,
          fax: null,
          address: null,
          memo: null,
          status: null,
          delFlag: '0',
          qywxIdentifier: null,
          createBy: 'admin',
          createTime: '2021-11-04 17:58:53',
          updateBy: null,
          updateTime: null,
          children: [
            {
              key: '459b689cd09845c282fdc43fba82ab45',
              value: '459b689cd09845c282fdc43fba82ab45',
              title: '财务',
              isLeaf: true,
              id: '459b689cd09845c282fdc43fba82ab45',
              parentId: 'f4d5979edc1d4785ba2322f0b8200a21',
              departName: '财务',
              departNameEn: null,
              departNameAbbr: null,
              departOrder: 0,
              description: null,
              orgCategory: '2',
              orgType: '2',
              orgCode: 'A03A01',
              mobile: null,
              fax: null,
              address: null,
              memo: null,
              status: null,
              delFlag: '0',
              qywxIdentifier: null,
              createBy: 'admin',
              createTime: '2021-11-04 17:59:01',
              updateBy: null,
              updateTime: null,
              children: [],
            },
            {
              key: '45e3daa48df1426eb0025f94a2cae38f',
              value: '45e3daa48df1426eb0025f94a2cae38f',
              title: '销售',
              isLeaf: true,
              id: '45e3daa48df1426eb0025f94a2cae38f',
              parentId: 'f4d5979edc1d4785ba2322f0b8200a21',
              departName: '销售',
              departNameEn: null,
              departNameAbbr: null,
              departOrder: 0,
              description: null,
              orgCategory: '2',
              orgType: '2',
              orgCode: 'A03A02',
              mobile: null,
              fax: null,
              address: null,
              memo: null,
              status: null,
              delFlag: '0',
              qywxIdentifier: null,
              createBy: 'admin',
              createTime: '2021-11-04 17:59:08',
              updateBy: null,
              updateTime: null,
              children: [],
            },
          ],
        },
      ],
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    },
    dialogVisible: {
      handler(newV) {
        if (newV) this.getDeptData()
      },
    },
  },
  methods: {
    // 部门数据
    async getDeptData() {
      this.deptData = this.deptData_1;
    },
    filterNode(value, data) {
      if (!value) return true
      return data.title.indexOf(value) !== -1
    },
    handleCheckChange(data, checked, indeterminate) {
      let selectArray = this.$refs.tree.getCheckedKeys();
      if (checked) {
        this.selectData = [data]
        this.$refs.tree.setCheckedKeys([data.id])
      }
      if(!selectArray.length){
        this.selectData = []
      }
      console.log('selectData-1:', this.selectData)
    },
    handleCheckChangeMulti(nodeObj, SelectedObj) {
      console.log('SelectedObj-2:', SelectedObj)
      this.selectData = SelectedObj.checkedNodes
    },
    onConfirm() {
      this.dialogVisible = false
      const arr1 = this.selectData.map((item) => item.title)
      const arr2 = this.selectData.map((item) => item.id)
      const obj = {
        names: arr1.length ? arr1.join(',') : '',
        ids: arr2.length ? arr2.join(',') : '',
      }
      console.log('obj:', obj)
      this.$emit('onSelect', obj)
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep .el-dialog__body {
  padding: 10px 20px;
}
</style>
