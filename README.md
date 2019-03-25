# april-vue-paginator

> A Vue plugs

###  如有不明白地方或者发现有bug请发邮件 15538535392@163.com 发送疑惑，小编会及时回复的

###  第一步 项目引入插件   
    npm install april-vue-paginator -S  
    或者 cnpm install april-vue-paginator -S (推荐)   
    或者 yarn add april-vue-paginator

### 第二步 全局引入  main.js(入口js文件) 里全局引入日历插件(推荐)   也可以按需引入 具体视情况而定   
    import aprilVuePaginator from 'april-vue-paginator'
    Vue.use(aprilVuePaginator)
    
###  第三步  需要用的地方添加使用    
    <april-vue-paginator></april-vue-paginator>  或者    <april-vue-paginator />

###  配置项说明
    currentPages         -------- 设置当前要显示的页码                
    pageSize             -------- 分页器每页显示多少条数据   (可不写，默认10条)
    totalRow             -------- 总共多少条数据
    textAlign            -------- 分页器显示地方  left: 显示在左边   right：显示在右边     (可不写，默认显示在右边)
    locale               -------- 语言包  值 zh：中文  en：英文  (可不写，默认为 zh  即中文)
    @change-page         -------- 返回用户点击页码，包括 首页 和 尾页 以及 上一页、下一页的点击 
    @change-page-size    -------- 返回用户选择的 每页显示个数选择器的数量

###  示例如下
    <april-vue-paginator 
        :currentPages='1' :pageSize='10' 
        :totalRow='right' :locale='en' 
        @changePage='onCurrentPageChange' 
        @changePageSize='changePageSize' >
    </april-vue-paginator>


