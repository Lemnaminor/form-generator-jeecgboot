<template>
  <div>
    <el-dialog
      title="用户选择"
      :visible.sync="dialogVisible"
      :append-to-body="true"
      width="60%"
    >
      <el-input
        v-model="queryParam.userDepartName"
        placeholder="请输入用户昵称/部门称并按下回车键搜索"
        prefix-icon="el-icon-search"
        @keyup.enter.native="getUserData(1)"
      />
      <el-table
        ref="multipleTable"
        :data="userData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column prop="username" label="账号" />
        <el-table-column prop="realname" label="昵称" />
        <el-table-column prop="departName" label="部门" />
      </el-table>

      <div style="margin: 20px 0; display: flex; justify-content: flex-end">
        <el-pagination
          background
          @size-change="
            (val) => {
              ipagination.pageSize = val
            }
          "
          @current-change="
            (val) => {
              ipagination.current = val
              getUserData()
            }
          "
          :current-page="ipagination.current"
          :page-sizes="ipagination.pageSizeOptions"
          :page-size="ipagination.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="ipagination.total"
        >
        </el-pagination>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onConfirm">确 定</el-button>
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
      disableMixinCreated: true,

      dialogVisible: false,
      searchVal: '',
      userData: [],
      userData_1: [
        {
          id: 'e9ca23d68d884d4ebb19d07889727dae',
          username: 'admin',
          realname: '管理员',
          avatar:
            'https://static.jeecg.com/temp/e1fe9925bc315c60addea1b98eb1cb1349547719_1594713625074.jpg',
          birthday: '2018-12-05',
          sex: 1,
          email: 'admin@jeecg.com',
          phone: '15201111111',
          orgCode: 'A01',
          orgCodeTxt: '北京国炬公司',
          status: 1,
          delFlag: 0,
          workNo: 'A000',
          post: '部门负责人1',
          telephone: '',
          createBy: null,
          createTime: '2019-06-21 17:54:10',
          updateBy: 'admin',
          updateTime: '2022-02-27 18:35:54',
          activitiSync: 1,
          userIdentity: 2,
          departIds: 'c6d7cb4deeac411cb3384b1b31278596',
          relTenantIds: '1',
          clientId: null,
          sex_dictText: '男',
          status_dictText: '正常',
          post_dictText: '部门负责人1',
          departIds_dictText: '北京国炬公司',
        },
        {
          id: '1287687492661800962',
          username: 'test',
          realname: 'test',
          avatar:
            'https://static.jeecg.com/temp/QQ图片20190814185343_1595843624771.jpg',
          birthday: null,
          sex: null,
          email: null,
          phone: '13426531111',
          orgCode: 'A02A02A02',
          orgCodeTxt: '产品部门',
          status: 1,
          delFlag: 0,
          workNo: '004',
          post: 'ha110',
          telephone: null,
          createBy: 'admin',
          createTime: '2020-07-27 17:53:17',
          updateBy: 'admin',
          updateTime: '2022-02-15 11:44:15',
          activitiSync: 1,
          userIdentity: 2,
          departIds: '',
          relTenantIds: '',
          clientId: null,
          status_dictText: '正常',
          post_dictText: '哈喽',
        },
        {
          id: '1179675874431131649',
          username: 'qinfeng',
          realname: 'qinfeng',
          avatar: 'https://static.jeecg.com/temp/jmlogo_1606575041993.png',
          birthday: null,
          sex: 2,
          email: '11111@163.com',
          phone: '13426111111',
          orgCode: 'A01A05A01',
          orgCodeTxt: '研发一部(JEECG),财务,研发部,财务部',
          status: 1,
          delFlag: 0,
          workNo: '200',
          post: 'leader',
          telephone: '',
          createBy: 'admin',
          createTime: '2019-10-03 16:33:40',
          updateBy: 'admin',
          updateTime: '2022-03-03 12:48:04',
          activitiSync: 1,
          userIdentity: 2,
          departIds:
            '57197590443c44f083d42ae24ef26a2c,2ea16c76c6e14d7d80e734af209916d3',
          relTenantIds: '',
          clientId: null,
          sex_dictText: '女',
          status_dictText: '正常',
          post_dictText: '部门经理',
          departIds_dictText: '研发部,研发一部(JEECG)',
        },
        {
          id: '1499645292725751809',
          username: 'cece01',
          realname: 'cece01',
          avatar: null,
          birthday: null,
          sex: null,
          email: null,
          phone: '18611788521',
          orgCode: null,
          orgCodeTxt: null,
          status: 1,
          delFlag: 0,
          workNo: 'cece01',
          post: null,
          telephone: null,
          createBy: 'admin',
          createTime: '2022-03-04 15:17:54',
          updateBy: 'admin',
          updateTime: '2022-03-04 15:22:18',
          activitiSync: 1,
          userIdentity: 1,
          departIds: '',
          relTenantIds: null,
          clientId: null,
          status_dictText: '正常',
        },
      ],
      selectData: [],
      urlList: {
        user: '/activiti/System/UserDeptPage',
      },

      queryParam: {},
      /* 分页参数 */
      ipagination:{
        current: 1,
        pageSize: 10,
        pageSizeOptions: ['10', '20', '30', '50', '100'],
        showTotal: (total, range) => {
          return range[0] + "-" + range[1] + " 共" + total + "条"
        },
        showQuickJumper: true,
        showSizeChanger: true,
        total: 0
      },
    }
  },
  watch: {
    dialogVisible: {
      handler(newV) {
        if (newV) this.getUserData()
      },
    },
  },
  methods: {
    // 用户数据
    async getUserData() {
      this.userData = this.userData_1;
    },
    // 表格选择
    handleSelectionChange(val) {
      if (this.multi) {
        this.selectData = val
      } else if (val.length > 1) {
        this.$refs.multipleTable.clearSelection() // 清除
        this.$refs.multipleTable.toggleRowSelection(val.pop()) // pop：最后一个
      } else {
        this.selectData = val
      }
    },
    onConfirm() {
      this.dialogVisible = false
      console.log('selectData-0:', this.selectData)
      const arr1 = this.selectData.map((item) => item.realname)
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
