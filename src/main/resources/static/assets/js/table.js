var grid_selector = "#demo_table";
var pager_selector = "#demo_pager";

$(function(){

    initTable();



});
function initTable(){
    $(window).on('resize.jqGrid', function() {
        $(grid_selector).jqGrid('setGridHeight', 500);
        $(grid_selector).jqGrid('setGridWidth', $("tableList").width());
    });
    var parent_column = $(grid_selector).closest('[class*="col-"]');
    $(document).on('settings.ace.jqGrid' , function(ev, event_name, collapsed) {
        if( event_name === 'sidebar_collapsed' || event_name === 'main_container_fixed' ) {
            setTimeout(function() {
                $(grid_selector).jqGrid( 'setGridWidth', parent_column.width());
            }, 0);
        }
    });
    jQuery(grid_selector).jqGrid(
        {
            datatype : "json", // 将这里改为使用JSON数据
            mtype:"POST",
            //url : basePath+'demand/showDemand', // 这是数据的请求地址
            //height : 'auto',
            colNames : [ 'ID','名称', '全称', '地址','联络人',  '联系电话','变更状态','备注'],
            colModel : [ {
                name : 'id',
                index : 'id',
                hidden : true  //
            }, {
                name : 'name',
                index : 'name',
                width : 30
            }, {
                name : 'full_name',
                index : 'full_name',
                width : 30
            }, {
                name : 'address',
                index : 'address',
                width : 30
            }, {
                name : 'liaison',
                index : 'liaison',
                width : 30
            }, {
                name : 'phone',
                index : 'phone',
                width : 30
            }, {
                name : 'change_status',
                index : 'change_status',
                formatter : "select",
                editoptions : {
                    value : "0:待审核;1:审核通过;2:审核未通过"
                },
                width : 30
            }, {
                name : 'remark',
                index : 'remark',
                width : 30
            }],
            shrinkToFit : true,
            viewrecords : true,// 是否显示总记录数
            rowNum : 10,
            rowList : [ 10, 20, 30 ],
            pager : pager_selector,
            altRows : true,
            multiselect : true,
            multiboxonly : true,
            loadComplete : function() {
                var table = this;
                setTimeout(function() {
                    updatePagerIcons(table);
                }, 0);
            },
            sortable:true,
            sortname:'id',
            sortorder:'desc',
            pagerpos:'right',
            recordpos:'left',
            autowidth:true

        });
    jQuery(grid_selector).closest(".ui-jqgrid-bdiv").css({
        "overflow-x" : "hidden"
    });
    $(window).triggerHandler('resize.jqGrid');
    function updatePagerIcons(table) {
        var replacement = {
            'ui-icon-seek-first' : 'icon iconfont icon-first',
            'ui-icon-seek-prev' : 'icon iconfont icon-pre',
            'ui-icon-seek-next' : 'paginate_button next',
            'ui-icon-seek-end' : 'icon iconfont icon-last'
        };
        $('.ui-pg-table:not(.navtable) > tbody > tr > .ui-pg-button > .ui-icon')
            .each(
                function() {
                    var icon = $(this);
                    var $class = $.trim(icon.attr('class').replace(
                        'ui-icon', ''));

                    if ($class in replacement)
                        icon.attr('class', 'ui-icon '
                            + replacement[$class]);
                })
    }
    $(document).on('ajaxloadstart', function(e) {
        $(grid_selector).jqGrid('GridUnload');
        $('.ui-jqdialog').remove();
    });
}