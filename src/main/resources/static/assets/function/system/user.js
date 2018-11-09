

$(function (){

    pageInit();

});
function pageInit(){
    $.jgrid.defaults.width = 1570;
    $.jgrid.defaults.responsive = true;
    $.jgrid.defaults.styleUI = 'Bootstrap';
    //创建jqGrid组件
    $("#dataTable").jqGrid({
        url: 'http://trirand.com/blog/phpjqgrid/examples/jsonp/getjsonp.php?callback=?&qwery=longorders',
        mtype: "GET",
        styleUI : 'Bootstrap',
        multiselect: true,//复选框
        datatype: "jsonp",
        colModel: [
            { label: 'OrderID', name: 'OrderID', key: true, width: 75 },
            { label: 'Customer ID', name: 'CustomerID', width: 150 },
            { label: 'Order Date', name: 'OrderDate', width: 150 },
            { label: 'Freight', name: 'Freight', width: 150 },
            { label:'Ship Name', name: 'ShipName', width: 150 }
        ],
        viewrecords: true,
        loadComplete : function() {
            var table = this;
            setTimeout(function(){
                updatePagerIcons(table);
            }, 0);
        },
        height: 250,
        rowNum: 10,
        rowList : [10,20,30],
        pager: "#dataPage"
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
