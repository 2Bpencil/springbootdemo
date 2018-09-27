// 待回退的
var grid_selector = "#myTabRollback";
$(function(){
    pageInit();
});
function pageInit() {
    var mydata = [
        {
            E_Title: "192.168.1.113ping不通",
            E_Handler: "寇宏飞",
            E_Resolution: "任务太多，无法自行解决",
            E_UpdateTime:"02-24 14:49", 
        }, {
            E_Title: "192.168.1.113ping不通",
            E_Handler: "寇宏飞",
            E_Resolution: "任务太多，无法自行解决",
            E_UpdateTime:"02-24 14:49",
        },{
            E_Title: "192.168.1.113ping不通",
            E_Handler: "寇宏飞",
            E_Resolution: "任务太多，无法自行解决",
            E_UpdateTime:"02-24 14:49",  
        },{
            E_Title: "192.168.1.113ping不通",
            E_Handler: "寇宏飞",
            E_Resolution: "任务太多，无法自行解决",
            E_UpdateTime:"02-24 14:49",
            E_Status: "审核", 
        },{
            E_Title: "192.168.1.113ping不通",
            E_Handler: "寇宏飞",
            E_Resolution: "任务太多，无法自行解决",
            E_UpdateTime:"02-24 14:49", 
        },{
            E_Title: "192.168.1.113ping不通",
            E_Handler: "寇宏飞",
            E_Resolution: "任务太多，无法自行解决",
            E_UpdateTime:"02-24 14:49", 
        },{
            E_Title: "192.168.1.113ping不通",
            E_Handler: "寇宏飞",
            E_Resolution: "现场解决",
            E_UpdateTime:"02-24 14:49",
        },{
            E_Title: "192.168.1.113ping不通",
            E_Handler: "寇宏飞",
            E_Resolution: "现场解决",
            E_UpdateTime:"02-24 14:49",
        },{
            E_Title: "192.168.1.113ping不通",
            E_Handler: "寇宏飞",
            E_Resolution: "现场解决",
            E_UpdateTime:"02-24 14:49", 
        },{
            E_Title: "192.168.1.113ping不通",
            E_Handler: "寇宏飞",
            E_Resolution: "现场解决",
            E_UpdateTime:"02-24 14:49",
        },{
            E_Title: "192.168.1.113ping不通",
            E_Handler: "寇宏飞",
            E_Resolution: "现场解决",
            E_UpdateTime:"02-24 14:49",
        },{
            E_Title: "192.168.1.113ping不通",
            E_Handler: "寇宏飞",
            E_Resolution: "现场解决",
            E_UpdateTime:"02-24 14:49", 
        }
    ]
    jQuery(grid_selector).jqGrid(
        {
            data: mydata,
            datatype: "local", // 将这里改为使用JSON数据
            //mtype:"POST",
            //url : basePath+'user/findUsers', // 这是数据的请求地址
            height: 'auto',
            colNames: ['标题', '处理人', '回退原因', '更新时间'],
            colModel: [
            {
                name: 'E_Title',
                index: 'E_Title',
                width:160
            }, {
                name: 'E_Handler',
                index: 'E_Handler',
                width:62,
            }, {
                name: 'E_Resolution',
                index: 'E_Resolution',
                width:140  
            }, {
                name: 'E_UpdateTime',
                index: 'E_UpdateTime',
                width:110
            }],
            shrinkToFit: true,
            viewrecords: true,// 是否显示总记录数
            rowNum: 8,
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
            sortname: 'E_UpdateTime',
            sortorder: 'desc',
            pagerpos: 'right',
            recordpos: 'left',
            autowidth: true,
        });
    jQuery(grid_selector).closest(".ui-jqgrid-bdiv").css({
        "overflow-x": "hidden"
    });
    $(window).triggerHandler('resize.jqGrid');// trigger window resize to make
}

// 待审核的
var grid_selector_audit = "#myTabAudit";
$(function(){
    pageInit1();
});
function pageInit1() {
    var mydata1 = [
        {
            E_Title: "192.168.1.113ping不通",
            E_Handler: "寇宏飞",
            E_Resolution: "现场解决",
            E_UpdateTime:"02-24 14:49", 
            E_Operation:"审核",
        }, {
            E_Title: "192.168.1.113ping不通",
            E_Handler: "寇宏飞",
            E_Resolution: "现场解决",
            E_UpdateTime:"02-24 14:49",
            E_Operation:"审核",
        },{
            E_Title: "192.168.1.113ping不通",
            E_Handler: "寇宏飞",
            E_Resolution: "现场解决",
            E_UpdateTime:"02-24 14:49", 
            E_Operation:"审核", 
        },{
            E_Title: "192.168.1.113ping不通",
            E_Handler: "寇宏飞",
            E_Resolution: "现场解决",
            E_UpdateTime:"02-24 14:49",
            E_Operation: "审核", 
        },{
            E_Title: "192.168.1.113ping不通",
            E_Handler: "寇宏飞",
            E_Resolution: "现场解决",
            E_UpdateTime:"02-24 14:49", 
            E_Operation:"审核",
        },{
            E_Title: "192.168.1.113ping不通",
            E_Handler: "寇宏飞",
            E_Resolution: "现场解决",
            E_UpdateTime:"02-24 14:49",
            E_Operation:"审核", 
        },{
            E_Title: "192.168.1.113ping不通",
            E_Handler: "寇宏飞",
            E_Resolution: "现场解决",
            E_UpdateTime:"02-24 14:49",
            E_Operation:"审核", 
        },{
            E_Title: "192.168.1.113ping不通",
            E_Handler: "寇宏飞",
            E_Resolution: "现场解决",
            E_UpdateTime:"02-24 14:49",
            E_Operation:"审核", 
        },{
            E_Title: "192.168.1.113ping不通",
            E_Handler: "寇宏飞",
            E_Resolution: "现场解决",
            E_UpdateTime:"02-24 14:49", 
            E_Operation:"审核", 
        },{
            E_Title: "192.168.1.113ping不通",
            E_Handler: "寇宏飞",
            E_Resolution: "现场解决",
            E_UpdateTime:"02-24 14:49",
            E_Operation:"审核", 
        },{
            E_Title: "192.168.1.113ping不通",
            E_Handler: "寇宏飞",
            E_Resolution: "现场解决",
            E_UpdateTime:"02-24 14:49",
            E_Operation:"审核", 
        },{
            E_Title: "192.168.1.113ping不通",
            E_Handler: "寇宏飞",
            E_Resolution: "现场解决",
            E_UpdateTime:"02-24 14:49",
            E_Operation:"审核",  
        }
    ]
    jQuery(grid_selector_audit).jqGrid(
        {
            data: mydata1,
            datatype: "local", // 将这里改为使用JSON数据
            //mtype:"POST",
            //url : basePath+'user/findUsers', // 这是数据的请求地址
            height: 'auto',
            colNames: ['标题', '处理人', '解决方式', '更新时间','操作'],
            colModel: [
            {
                name: 'E_Title',
                index: 'E_Title',
                width:160
            }, {
                name: 'E_Handler',
                index: 'E_Handler',
                width:60,
            }, {
                name: 'E_Resolution',
                index: 'E_Resolution',
                width:80  
            }, {
                name: 'E_UpdateTime',
                index: 'E_UpdateTime',
                width:110
            }, {
                name: 'E_Operation',
                index: 'E_Operation',
                width:60,
                formatter : function(cellvalue, options,rowObject){
                    var str='<div style="width:40px;height:20px;background: #63ABDB;color:#fff;text-align:center;line-height:20px;border-radius:2px">审核</div>';
                    return str;
                }
            }],
            shrinkToFit: true,
            viewrecords: true,// 是否显示总记录数
            rowNum: 8,
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
            recordpos: 'left',
            autowidth: true,

        });
    jQuery(grid_selector_audit).closest(".ui-jqgrid-bdiv").css({
        "overflow-x": "hidden"
    });
    $(window).triggerHandler('resize.jqGrid');// trigger window resize to make
}
// CPU
var grid_selector_CPU = "#myTabCPU";
$(function(){
    pageInit2();
});
function pageInit2() {
    var mydata2 = [
        {
            E_Title: "window-OA/ERP",
            E_Min: "82",
            E_Max: "90",
            E_Average:"", 
            E_Value:"85%",
        }, {
           E_Title: "window-OA/ERP",
            E_Min: "82",
            E_Max: "90",
            E_Average:"", 
            E_Value:"85%",
        },{
            E_Title: "window-OA/ERP",
            E_Min: "82",
            E_Max: "90",
            E_Average:"", 
            E_Value:"85%",
        },{
            E_Title: "window-OA/ERP",
            E_Min: "82",
            E_Max: "90",
            E_Average:"", 
            E_Value:"85%",
        },{
            E_Title: "window-OA/ERP",
            E_Min: "82",
            E_Max: "90",
            E_Average:"", 
            E_Value:"85%",
        },{
            E_Title: "window-OA/ERP",
            E_Min: "82",
            E_Max: "90",
            E_Average:"", 
            E_Value:"85%",
        },{
            E_Title: "window-OA/ERP",
            E_Min: "82",
            E_Max: "90",
            E_Average:"", 
            E_Value:"85%",
        },{
            E_Title: "window-OA/ERP",
            E_Min: "82",
            E_Max: "90",
            E_Average:"", 
            E_Value:"85%",
        },{
            E_Title: "window-OA/ERP",
            E_Min: "82",
            E_Max: "90",
            E_Average:"", 
            E_Value:"85%",
        },{
            E_Title: "window-OA/ERP",
            E_Min: "82",
            E_Max: "90",
            E_Average:"", 
            E_Value:"85%",
        },{
            E_Title: "window-OA/ERP",
            E_Min: "82",
            E_Max: "90",
            E_Average:"", 
            E_Value:"85%", 
        },{
            E_Title: "window-OA/ERP",
            E_Min: "82",
            E_Max: "90",
            E_Average:"", 
            E_Value:"85%",
        }
    ]
    jQuery(grid_selector_CPU).jqGrid(
        {
            data: mydata2,
            datatype: "local", // 将这里改为使用JSON数据
            //mtype:"POST",
            //url : basePath+'user/findUsers', // 这是数据的请求地址
            height: 'auto',
            colNames: ['设备名称', '最小', '最大', '平均',''],
            colModel: [
            {
                name: 'E_Title',
                index: 'E_Title',
                width:150,
            }, {
                name: 'E_Min',
                index: 'E_Min',
                width:60,
            }, {
                name: 'E_Max',
                index: 'E_Max',
                width:70  
            }, {
                name: 'E_Average',
                index: 'E_Average',
                width:130,
                formatter : function(cellvalue, options,rowObject){
                    var str='<span style="display:inline-block;float:left;width:0;height:100%;border-left:1px solid #ccc;padding:5px 0"></span><span style="display:inline-block;float:left;width:85%;height:10px;background:#FA5A5A;margin-top:10px;"></span>'
                    return str;
                }
            }, {
                name: 'E_Value',
                index: 'E_Value',
                width:60
            }],
            shrinkToFit: true,
            viewrecords: true,// 是否显示总记录数
            rowNum: 8,
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
            recordpos: 'left',
            autowidth: true,

        });
    jQuery(grid_selector_CPU).closest(".ui-jqgrid-bdiv").css({
        "overflow-x": "hidden"
    });
    $(window).triggerHandler('resize.jqGrid');// trigger window resize to make
}

// 个人工作台
// 我负责的设备
var grid_selector_Mine = "#myTabMine";
$(function(){
    pageInit3();
});
function pageInit3() {
    var mydata3 = [
        {
            E_Title: "Cisco",
            E_State: "正常",
            E_Mold: "思科路由器",
            E_IP:"192.168.1.112",
            E_CPU:"", 
            E_RAM:"", 
        },{
            E_Title: "Cisco",
            E_State: "凭证异常",
            E_Mold: "思科路由器",
            E_IP:"192.168.1.112",
            E_CPU:"", 
            E_RAM:"", 
        },{
            E_Title: "Cisco",
            E_State: "告警",
            E_Mold: "思科路由器",
            E_IP:"192.168.1.112",
            E_CPU:"", 
            E_RAM:"", 
        },{
            E_Title: "Cisco",
            E_State: "离线",
            E_Mold: "思科路由器",
            E_IP:"192.168.1.112",
            E_CPU:"", 
            E_RAM:"", 
        },{
            E_Title: "Cisco",
            E_State: "正常",
            E_Mold: "思科路由器",
            E_IP:"192.168.1.112",
            E_CPU:"", 
            E_RAM:"", 
        },{
            E_Title: "Cisco",
            E_State: "正常",
            E_Mold: "思科路由器",
            E_IP:"192.168.1.112",
            E_CPU:"", 
            E_RAM:"", 
        }
    ]
    jQuery(grid_selector_Mine).jqGrid(
        {
            data: mydata3,
            datatype: "local", // 将这里改为使用JSON数据
            //mtype:"POST",
            //url : basePath+'user/findUsers', // 这是数据的请求地址
            height: 'auto',
            colNames: ['设备名称', '状态', '设备类型', 'IP地址','CPU','内存'],
            colModel: [
            {
                name: 'E_Title',
                index: 'E_Title',
                width:150,
            }, {
                name: 'E_State',
                index: 'E_State',
                width:80,
            }, {
                name: 'E_Mold',
                index: 'E_Mold',
                width:130  
            },{
                name: 'E_IP',
                index: 'E_IP',
                width:130  
            },{
                name: 'E_CPU',
                index: 'E_CPU',
                width:130,
                formatter : function(cellvalue, options,rowObject){
                    var str='<span style="display:inline-block;float:left;width:0;height:100%;border-left:1px solid #ccc;padding:5px 0"></span><span style="display:inline-block;float:left;width:85%;height:10px;background:#3399E3;margin-top:10px;"></span>'
                    return str;
                }
            }, {
                name: 'E_RAM',
                index: 'E_RAM',
                width:130,
                formatter : function(cellvalue, options,rowObject){
                    var str='<span style="display:inline-block;float:left;width:0;height:100%;border-left:1px solid #ccc;padding:5px 0"></span><span style="display:inline-block;float:left;width:85%;height:10px;background:#3399E3;margin-top:10px;"></span>'
                    return str;
                }
            }],
            shrinkToFit: true,
            viewrecords: true,// 是否显示总记录数
            rowNum: 5,
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
            recordpos: 'left',
            // autowidth: true,

        });
    jQuery(grid_selector_Mine).closest(".ui-jqgrid-bdiv").css({
        "overflow-x": "hidden"
    });
    $(window).triggerHandler('resize.jqGrid');// trigger window resize to make
}
// 我待办的
var grid_selector_Mine1 = "#myTabMine1";
$(function(){
    pageInitMine1();
});
function pageInitMine1() {
    var mydatam1 = [
        {
            E_Title: "192.168.1.113",
            E_Items:'凭证异常',
            E_Handler: "寇宏飞",
            E_Resolution: "现场解决，详细查看附件",
            E_UpdateTime:"2017-02-24 14:49:00", 
            E_Operation:"",
        }, {
            E_Title: "192.168.1.113",
            E_Items:'凭证异常',
            E_Handler: "寇宏飞",
            E_Resolution: "现场解决，详细查看附件",
            E_UpdateTime:"2017-02-24 14:49:00", 
            E_Operation:"",
        },{
             E_Title: "192.168.1.113",
            E_Items:'凭证异常',
            E_Handler: "寇宏飞",
            E_Resolution: "现场解决，详细查看附件",
            E_UpdateTime:"2017-02-24 14:49:00", 
            E_Operation:"",
        },{
             E_Title: "192.168.1.113",
            E_Items:'凭证异常',
            E_Handler: "寇宏飞",
            E_Resolution: "现场解决，详细查看附件",
            E_UpdateTime:"2017-02-24 14:49:00", 
            E_Operation:"",
        },{
             E_Title: "192.168.1.113",
            E_Items:'凭证异常',
            E_Handler: "寇宏飞",
            E_Resolution: "现场解决，详细查看附件",
            E_UpdateTime:"2017-02-24 14:49:00", 
            E_Operation:"",
        },{
             E_Title: "192.168.1.113",
            E_Items:'凭证异常',
            E_Handler: "寇宏飞",
            E_Resolution: "现场解决，详细查看附件",
            E_UpdateTime:"2017-02-24 14:49:00", 
            E_Operation:"",
        },{
             E_Title: "192.168.1.113",
            E_Items:'凭证异常',
            E_Handler: "寇宏飞",
            E_Resolution: "现场解决，详细查看附件",
            E_UpdateTime:"2017-02-24 14:49:00", 
            E_Operation:"",
        },{
            E_Title: "192.168.1.113",
            E_Items:'凭证异常',
            E_Handler: "寇宏飞",
            E_Resolution: "现场解决，详细查看附件",
            E_UpdateTime:"2017-02-24 14:49:00", 
            E_Operation:"",
        },{
             E_Title: "192.168.1.113",
            E_Items:'凭证异常',
            E_Handler: "寇宏飞",
            E_Resolution: "现场解决，详细查看附件",
            E_UpdateTime:"2017-02-24 14:49:00", 
            E_Operation:"",
        },{
            E_Title: "192.168.1.113",
            E_Items:'凭证异常',
            E_Handler: "寇宏飞",
            E_Resolution: "现场解决，详细查看附件",
            E_UpdateTime:"2017-02-24 14:49:00", 
            E_Operation:"",
        },{
             E_Title: "192.168.1.113",
            E_Items:'凭证异常',
            E_Handler: "寇宏飞",
            E_Resolution: "现场解决，详细查看附件",
            E_UpdateTime:"2017-02-24 14:49:00", 
            E_Operation:"",
        },{
             E_Title: "192.168.1.113",
            E_Items:'凭证异常',
            E_Handler: "寇宏飞",
            E_Resolution: "现场解决，详细查看附件",
            E_UpdateTime:"2017-02-24 14:49:00", 
            E_Operation:"",
        }
    ]
    jQuery(grid_selector_Mine1).jqGrid(
        {
            data: mydatam1,
            datatype: "local", // 将这里改为使用JSON数据
            //mtype:"POST",
            //url : basePath+'user/findUsers', // 这是数据的请求地址
            height: 'auto',
            colNames: ['标题', '描述', '处理人', '解决方案','更新时间','操作'],
            colModel: [
            {
                name: 'E_Title',
                index: 'E_Title',
                width:200,
            },{
                name: 'E_Items',
                index: 'E_Items',
                width:200,
            }, {
                name: 'E_Handler',
                index: 'E_Handler',
                width:100,
            }, {
                name: 'E_Resolution',
                index: 'E_Resolution',
                width:200  
            }, {
                name: 'E_UpdateTime',
                index: 'E_UpdateTime',
                width:150  
            }, {
                name: 'E_Average',
                index: 'E_Average',
                width:120,
                formatter : function(cellvalue, options,rowObject){
                    var str='<input type="button" style="background:url(../../assets/images/tijiao.png);width:16px;height:16px;border:none"><input type="button" style="background:url(../../assets/images/fanhui.png);width:16px;height:16px;border:none;margin-left:20px;">'
                    return str;
                }
            }],
            shrinkToFit: true,
            viewrecords: true,// 是否显示总记录数
            rowNum: 5,
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
            recordpos: 'left',
           autowidth: true,

        });
    jQuery(grid_selector_Mine1).closest(".ui-jqgrid-bdiv").css({
        "overflow-x": "hidden"
    });
    $(window).triggerHandler('resize.jqGrid');// trigger window resize to make
}
