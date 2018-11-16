

$(function (){
    pageInit();
    var newHeight = $(window).height()*0.6;
    $(".ui-jqgrid .ui-jqgrid-bdiv").css("cssText","height: "+newHeight+"px!important;");


});
function pageInit(){
    $.jgrid.defaults.height = 1000;
    $.jgrid.defaults.width = 1570;
    $.jgrid.defaults.responsive = true;
    $.jgrid.defaults.styleUI = 'Bootstrap';
    //创建jqGrid组件
    $("#dataTable").jqGrid({
        url: contextPath + 'user/getPages',
        mtype: "GET",
        styleUI : 'Bootstrap',
        multiselect: true,//复选框
        datatype: "json",
        colModel: [
            { label: 'id', name: 'id', hidden: true, width: 75 },
            { label: '用户名', name: 'username', width: 150 },
            { label: '昵称', name: 'nickname', width: 150 },
        ],
        viewrecords: true,
        loadComplete : function() {
            var table = this;
            setTimeout(function(){
                updatePagerIcons(table);
            }, 0);
        },
        height: 250,
        rowNum: 15,
        rowList : [15,20,25],
        pager: "#dataPage",
        sortable : true,
        sortname : 'id',
        sortorder : 'desc',
        pagerpos : 'right',
        recordpos : 'left',
        autowidth : true
    });
}
function updatePagerIcons(table) {
    var replacement = {
        'ui-icon-seek-first' : 'icon-fast-backward',
        'ui-icon-seek-prev' : 'icon-step-backward',
        'ui-icon-seek-next' : 'icon-step-forward',
        'ui-icon-seek-end' : 'icon-fast-forward'
    };
    $('.ui-pg-table:not(.navtable) > tbody > tr > .ui-pg-button > .ui-icon').each(function() {
        var icon = $(this);
        var $class = $.trim(icon.attr('class').replace('ui-icon', ''));
        if ($class in replacement)
            icon.attr('class', 'ui-icon ' + replacement[$class]);
    });
}

function  test(){
    alert(22222);
}