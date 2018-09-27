// 
var grid_selector_zhishi = "#myTabZhishi";
$(function(){
    pageInit();
});
function pageInit() {
    var mydata = [
        {
            E_Title: "网络设备巡检服务",
            E_Code: "01-02-03-01",
            E_Category: "例行操作",
            E_Range:"-",
            E_Responsible: "Lina",
            E_Contact: "18268785978",
            E_StateChange:"审核未通过",
            E_Contact_SLA: "审核通过",
            E_Order: "1",
            E_Establisher:"system",
            E_Create_Time:"2017-03-02 10:12",
        }, {
            E_Title: "网络设备巡检服务",
            E_Code: "01-02-03-01",
            E_Category: "例行操作",
            E_Range:"-",
            E_Responsible: "Lina",
            E_Contact: "18268785978",
            E_StateChange:"审核未通过",
            E_Contact_SLA: "审核通过",
            E_Order: "1",
            E_Establisher:"system",
            E_Create_Time:"2017-03-02 10:12",
        },{
            E_Title: "网络设备巡检服务",
            E_Code: "01-02-03-01",
            E_Category: "例行操作",
            E_Range:"-",
            E_Responsible: "Lina",
            E_Contact: "18268785978",
            E_StateChange:"审核未通过",
            E_Contact_SLA: "审核通过",
            E_Order: "1",
            E_Establisher:"system",
            E_Create_Time:"2017-03-02 10:12",
        },{
            E_Title: "网络设备巡检服务",
            E_Code: "01-02-03-01",
            E_Category: "例行操作",
            E_Range:"-",
            E_Responsible: "Lina",
            E_Contact: "18268785978",
            E_StateChange:"审核未通过",
            E_Contact_SLA: "审核通过",
            E_Order: "1",
            E_Establisher:"system",
            E_Create_Time:"2017-03-02 10:12",
        },{
            E_Title: "网络设备巡检服务",
            E_Code: "01-02-03-01",
            E_Category: "例行操作",
            E_Range:"-",
            E_Responsible: "Lina",
            E_Contact: "18268785978",
            E_StateChange:"审核未通过",
            E_Contact_SLA: "审核通过",
            E_Order: "1",
            E_Establisher:"system",
            E_Create_Time:"2017-03-02 10:12",
        },{
            E_Title: "网络设备巡检服务",
            E_Code: "01-02-03-01",
            E_Category: "例行操作",
            E_Range:"-",
            E_Responsible: "Lina",
            E_Contact: "18268785978",
            E_StateChange:"审核未通过",
            E_Contact_SLA: "审核通过",
            E_Order: "1",
            E_Establisher:"system",
            E_Create_Time:"2017-03-02 10:12",
        },{
            E_Title: "网络设备巡检服务",
            E_Code: "01-02-03-01",
            E_Category: "例行操作",
            E_Range:"-",
            E_Responsible: "Lina",
            E_Contact: "18268785978",
            E_StateChange:"审核未通过",
            E_Contact_SLA: "审核通过",
            E_Order: "1",
            E_Establisher:"system",
            E_Create_Time:"2017-03-02 10:12",
        },{
            E_Title: "网络设备巡检服务",
            E_Code: "01-02-03-01",
            E_Category: "例行操作",
            E_Range:"-",
            E_Responsible: "Lina",
            E_Contact: "18268785978",
            E_StateChange:"审核未通过",
            E_Contact_SLA: "审核通过",
            E_Order: "1",
            E_Establisher:"system",
            E_Create_Time:"2017-03-02 10:12",
        },{
            E_Title: "网络设备巡检服务",
            E_Code: "01-02-03-01",
            E_Category: "例行操作",
            E_Range:"-",
            E_Responsible: "Lina",
            E_Contact: "18268785978",
            E_StateChange:"审核未通过",
            E_Contact_SLA: "审核通过",
            E_Order: "1",
            E_Establisher:"system",
            E_Create_Time:"2017-03-02 10:12", 
        },{
            E_Title: "网络设备巡检服务",
            E_Code: "01-02-03-01",
            E_Category: "例行操作",
            E_Range:"-",
            E_Responsible: "Lina",
            E_Contact: "18268785978",
            E_StateChange:"审核未通过",
            E_Contact_SLA: "审核通过",
            E_Order: "1",
            E_Establisher:"system",
            E_Create_Time:"2017-03-02 10:12",
        },{
            E_Title: "网络设备巡检服务",
            E_Code: "01-02-03-01",
            E_Category: "例行操作",
            E_Range:"-",
            E_Responsible: "Lina",
            E_Contact: "18268785978",
            E_StateChange:"审核未通过",
            E_Contact_SLA: "审核通过",
            E_Order: "1",
            E_Establisher:"system",
            E_Create_Time:"2017-03-02 10:12",
        },{
            E_Title: "网络设备巡检服务",
            E_Code: "01-02-03-01",
            E_Category: "例行操作",
            E_Range:"-",
            E_Responsible: "Lina",
            E_Contact: "18268785978",
            E_StateChange:"审核未通过",
            E_Contact_SLA: "审核通过",
            E_Order: "1",
            E_Establisher:"system",
            E_Create_Time:"2017-03-02 10:12", 
        }
    ]
    jQuery(grid_selector_zhishi).jqGrid(
        {
            data: mydata,
            datatype: "local", // 将这里改为使用JSON数据
            //mtype:"POST",
            //url : basePath+'user/findUsers', // 这是数据的请求地址
            height: 'auto',
            colNames: ['服务名称', '服务代码', '服务类别', '服务范围','责任人','联系方式','服务变更状态','SLA变更状态','排序','创建人','创建时间'],
            colModel: [
            {
                name: 'E_Title',
                index: 'E_Title',
                width:120
            }, {
                name: 'E_Code',
                index: 'E_Code',
                width:120,
            }, {
                name: 'E_Category',
                index: 'E_Category',
                width:90  
            }, {
                name: 'E_Range',
                index: 'E_Range',
                width:100
            }, {
                name: 'E_Responsible',
                index: 'E_Responsible',
                width:50
            },{
                name: 'E_Contact',
                index: 'E_Contact',
                width:90,
            },{
                name: 'E_StateChange',
                index: 'E_StateChange',
                width:90,
            },{
                name: 'E_Contact_SLA',
                index: 'E_Contact_SLA',
                width:90,
            },{
                name: 'E_Order',
                index: 'E_Order',
                width:50,
            },{
                name: 'E_Establisher',
                index: 'E_Establisher',
                width:60,
            },{
                name: 'E_Create_Time',
                index: 'E_Create_Time',
                width:150,
            }
            ],
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
            autowidth: 'auto'

        });
    jQuery(grid_selector_zhishi).closest(".ui-jqgrid-bdiv").css({
        "overflow-x": "hidden"
    });
    $(window).triggerHandler('resize.jqGrid');// trigger window resize to make
}
