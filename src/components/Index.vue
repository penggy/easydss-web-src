  <template>
    <div class="container-fluid no-padding">
        <div class="alert alert-success">{{msg}}</div>
        <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
        </el-table>
        <br>
        <el-pagination layout="prev,pager,next" class="pull-right" :total="total" :page-size.sync="pageSize" :current-page.sync="currentPage"></el-pagination>
    </div>
</template>

<script>
import Vue from 'vue'
import { Table, TableColumn, Pagination } from 'element-ui'
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);

export default {
    data() {
        return {
            currentPage: 1,
            pageSize: 10,
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            msg: "我是视频广场"
        }
    },
    computed: {
        total() {
            return this.tableData.length;
        },
        pageData() {
            let start = (this.currentPage - 1) * this.pageSize;
            let end = start + this.pageSize;
            return this.tableData.slice(start, end);
        }
    },
}
</script>

