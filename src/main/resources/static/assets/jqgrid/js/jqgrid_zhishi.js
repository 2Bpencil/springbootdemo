// 知识库
var grid_selector_zhishi = "#myTabZhishi";
$(function(){
    pageInit();
});
function pageInit() {
    var mydata = [
        {
            E_Title: "立项报告模板",
            E_Key: "项目立项、用户签署",
            E_Person:"郑云天",
            E_Time: "2017-2-23 16:32:00",
            E_States: "待审核",
            E_Change:"",
        }, {
            E_Title: "立项报告模板",
            E_Key: "项目立项、用户签署",
            E_Person:"郑云天",
            E_Time: "2017-2-23 16:32:00",
            E_States: "待审核",
            E_Change:"",
        },{
            E_Title: "立项报告模板",
            E_Key: "项目立项、用户签署",
            E_Person:"郑云天",
            E_Time: "2017-2-23 16:32:00",
            E_States: "待审核",
            E_Change:"",
        },{
            E_Title: "立项报告模板",
            E_Key: "项目立项、用户签署",
            E_Person:"郑云天",
            E_Time: "2017-2-23 16:32:00",
            E_States: "待审核",
            E_Change:"",
        },{
            E_Title: "立项报告模板",
            E_Key: "项目立项、用户签署",
            E_Person:"郑云天",
            E_Time: "2017-2-23 16:32:00",
            E_States: "待审核",
            E_Change:"",
        },{
            E_Title: "立项报告模板",
            E_Key: "项目立项、用户签署",
            E_Person:"郑云天",
            E_Time: "2017-2-23 16:32:00",
            E_States: "待审核",
            E_Change:"",
        },{
            E_Title: "立项报告模板",
            E_Key: "项目立项、用户签署",
            E_Person:"郑云天",
            E_Time: "2017-2-23 16:32:00",
            E_States: "待审核",
            E_Change:"",
        },{
            E_Title: "立项报告模板",
            E_Key: "项目立项、用户签署",
            E_Person:"郑云天",
            E_Time: "2017-2-23 16:32:00",
            E_States: "待审核",
            E_Change:"",
        },{
            E_Title: "立项报告模板",
            E_Key: "项目立项、用户签署",
            E_Person:"郑云天",
            E_Time: "2017-2-23 16:32:00",
            E_States: "待审核",
            E_Change:"", 
        },{
            E_Title: "立项报告模板",
            E_Key: "项目立项、用户签署",
            E_Person:"郑云天",
            E_Time: "2017-2-23 16:32:00",
            E_States: "待审核",
            E_Change:"",
        },{
            E_Title: "立项报告模板",
            E_Key: "项目立项、用户签署",
            E_Person:"郑云天",
            E_Time: "2017-2-23 16:32:00",
            E_States: "待审核",
            E_Change:"",
        },{
            E_Title: "立项报告模板",
            E_Key: "项目立项、用户签署",
            E_Person:"郑云天",
            E_Time: "2017-2-23 16:32:00",
            E_States: "待审核",
            E_Change:"",
        }
    ]
    jQuery(grid_selector_zhishi).jqGrid(
        {
            data: mydata,
            datatype: "local", // 将这里改为使用JSON数据
            //mtype:"POST",
            //url : basePath+'user/findUsers', // 这是数据的请求地址
            height: 'auto',
            colNames: ['标题', '关键字', '提交人', '提交时间','知识状态','变更状态'],
            colModel: [
            {
                name: 'E_Title',
                index: 'E_Title',
                width:250
            }, {
                name: 'E_Key',
                index: 'E_Key',
                width:250,
            }, {
                name: 'E_Person',
                index: 'E_Person',
                width:143  
            }, {
                name: 'E_Time',
                index: 'E_Time',
                width:150
            }, {
                name: 'E_States',
                index: 'E_States',
                width:150
            },{
                name: 'E_Change',
                index: 'E_Change',
                width:150,
            }],
            shrinkToFit: true,
            viewrecords: true,// 是否显示总记录数
            rowNum: 12,
            height: "100%",  
            rowList: [5,10,20],
            altRows: true,
            multiselect: true,
            multiboxonly: true,
            loadComplete: function () {
                var table = this;
                setTimeout(function () {
                    updatePagerIcons(table);
                }, 0);
            },
            sortable: true,
            sortname: 'E_Status',
            sortorder: 'desc',
            pagerpos: 'right',
            //pager: "#jqGridPager",
            recordpos: 'left',
            rownumbers: false, 
            autowidth: true,

        });
    jQuery(grid_selector_zhishi).closest(".ui-jqgrid-bdiv").css({
        "overflow-x": "hidden"
    });
    $(window).triggerHandler('resize.jqGrid');// trigger window resize to make
}
// 相关工单
var grid_selector_gongdan = "#myTabGongdan";
$(function(){
    pageInit1();
});
function pageInit1() {
    var mydata1 = [
        {
            E_Title: "项目调整",
            E_Time: "2017-2-23 16:32:00",
            E_States: "已解决",
        },{
            E_Title: "年度巡检项目立项",
            E_Time: "2017-2-23 16:32:00",
            E_States: "未解决",
        },{
            E_Title: "季度巡检，回访项目立项",
            E_Time: "2017-2-23 16:32:00",
            E_States: "待审核",
        }
    ]
    jQuery(grid_selector_gongdan).jqGrid(
        {
            data: mydata1,
            datatype: "local", // 将这里改为使用JSON数据
            //mtype:"POST",
            //url : basePath+'user/findUsers', // 这是数据的请求地址
            colNames: ['工单标题','状态','更新时间'],
            colModel: [
            {
                name: 'E_Title',
                index: 'E_Title',
                width:250
            }, {
                name: 'E_States',
                index: 'E_States',
                width:100
            }, {
                name: 'E_Time',
                index: 'E_Time',
                width:150
            }],
            shrinkToFit: true,
            viewrecords: true,// 是否显示总记录数
            rowNum: 12,
            height: "100%",  
            rowList: [5,10,20],
            altRows: true,
            multiselect: true,
            multiboxonly: true,
            loadComplete: function () {
                var table = this;
                setTimeout(function () {
                    updatePagerIcons(table);
                }, 0);
            },
            sortable: true,
            sortname: 'E_Status',
            sortorder: 'desc',
            pagerpos: 'right',
            //pager: "#jqGridPager",
            recordpos: 'left',
            rownumbers: false, 
            autowidth: true,

        });
    jQuery(grid_selector_gongdan).closest(".ui-jqgrid-bdiv").css({
        "overflow-x": "hidden"
    });
    $(window).triggerHandler('resize.jqGrid');// trigger window resize to make
}
