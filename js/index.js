// 导航栏tab切换
$(function(){
    $('section nav ul li').each(function(i){
        $(this).click(function(){
            $('section nav ul li').each(function(i){
                $(this).find('i').css('color', "#a3a9b2");
                $(this).find('span').css('color', "#70757e");
                $('section article').eq(i).css('display','none');
            });
            $(this).find('i').css('color', "#f54236");
            $(this).find('span').css('color', "white");
            $('section article').eq(i).css('display','block');
        })
    })
})

// 表格分页
$(function(){
    var $table = $('#article_five .one_row table');
    var currentPage = 0;//当前页默认值为0
    var pageSize = 10;//每一页显示的数目
    $table.bind('paging',function(){
        $table.find('tbody tr').hide().slice(currentPage*pageSize,(currentPage+1)*pageSize).show();
    });
    var sumRows = $table.find('tbody tr').length;
    var sumPages = Math.ceil(sumRows/pageSize);//总页数

    var $pager = $('<div class="page"></div>'); //新建div，放入a标签,显示底部分页码
    for(var pageIndex = 0 ; pageIndex<sumPages ; pageIndex++){
        $('<a href="#" rel="external nofollow" id="pageStyle" onclick="changCss(this)"><span>'+(pageIndex+1)+'</span></a>').bind("click",
            {"newPage":pageIndex},
            function(event){
            currentPage = event.data["newPage"];
            $table.trigger("paging");
            //触发分页函数
        }).appendTo($pager);
        $pager.append(" ");
    }
    $pager.insertAfter($table);
    $table.trigger("paging");

    //默认第一页的a标签效果
    var $pagess = $('#pageStyle');
    $pagess[0].style.backgroundColor="#006B00";
    $pagess[0].style.color="#ffffff";
});
// a链接点击变色，再点其他回复原色
function changCss(obj){
    var arr = document.getElementsByTagName("a");
    for(var i=0;i<arr.length;i++){
        if(obj==arr[i]){ //当前页样式
            obj.style.backgroundColor="#006B00";
            obj.style.color="#ffffff";
        }
        else
        {
            arr[i].style.color="";
            arr[i].style.backgroundColor="";
        }
    }
}

// 三条线点击显示隐藏
$('header .logo_list .list').click(function(){
    $('section nav').toggle(100)
    $('section article').animate({
        flex : '1'
    })
})
