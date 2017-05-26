
jQuery.fn.navSwitch=function(){
    var $tabs=this.children('li');
    $tabs.on('click',function(e){
        $(this).addClass('active').siblings('.active').removeClass('active');
    })
};
jQuery.fn.carousel = function(){
    var interval = 4000;
    var duration = 400;
    var $imgList = this.children('img');
    var $liList = this.find('li');
    var cur = 0;
    var next = 1;
    function lunHuan(){
        $liList.eq(next).addClass('active').siblings('.active').removeClass('active');
        if(next==0&&cur==($imgList.length-1)||next>cur){
        $imgList.eq(cur).animate({left:'-100%'},duration,function(){
            $(this).removeClass('active');
        });
        $imgList.eq(next).addClass('active').css('left','100%').animate({left: '0'},duration);
        }else{
            $imgList.eq(cur).animate({left:'100%'},duration,function(){
                $(this).removeClass('active');
            });
            $imgList.eq(next).addClass('active').css('left','-100%').animate({left: '0'},duration);
        }
        cur = next;
        next++;
        if(next>=$imgList.length){
            next = 0;
        }
    }
    setInterval(function(){
        lunHuan()
    }, interval);
    $liList.on('mouseover',function(){
        var i = $liList.index(this);
        next = i;
        lunHuan();
    });
};

jQuery.fn.switchbox=function(){
    var $tabs=this.children('li');
    var $switchs=this.parent().find('div.switch-box');
    $tabs.on('mouseover',function(e){
        $(this).addClass('current').siblings('.current').removeClass('current');
        var s=$tabs.index(this);
        $switchs.eq(s).addClass('current').siblings('.current').removeClass('current');
    })
};
//if login
jQuery.fn.login_user=function(){
    if(sessionStorage['uid']){
        var str=`<h2>欢迎！&nbsp;${sessionStorage['uName']}</h2>`;
        $(this).html(str);
    }
};
/**
 * 滚动监听插件
 * $(window).scrollspy(options)
 */
jQuery.fn.scrollspy = function(options){
    var $liList = $(options.target).find('li');
    $liList.on('click','a', function(e){
        e.preventDefault();
        var floorId = $(this).attr('href');
        var top = $(floorId).offset().top;
        $('body').animate({scrollTop: top}, 500);
    });
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top<700){
            $(options.target).fadeOut();
        }else if(top>2800){
            $(options.target).fadeOut();
        }else {
            $(options.target).fadeIn();
            $liList.each(function(i, li){
                var floorId = $(this).children('a').attr('href');
                console.log(floorId);
                var floorTop = $(floorId).offset().top;
                console.log(floorTop);
                if(top>=floorTop){
                    $(li).addClass('active').siblings('.active').removeClass('active');
                }
            });
        }
    })
};

jQuery.fn.scrollUp = function(options){
    $(options.target).fadeOut();
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top<700){
            $(options.target).fadeOut();
        }else {
            $(options.target).fadeIn();
        }
    });
    $(options.target).on('click', function(e){
        e.preventDefault();
        var top = $('#header').offset().top;
        $('body').animate({scrollTop: top}, 500);
    })
};

jQuery.fn.nowSwitch=function(){
    var i=location.pathname.lastIndexOf('/');
    var page=location.pathname.slice(i+1);
    if(page=='index.html'){
        var $tabs=this.children('li:first');
        $tabs.addClass('active').siblings('.active').removeClass('active');
    }else if(page=='case.html'){
        var $tabs=this.children('li:nth-child(2)');
        $tabs.addClass('active').siblings('.active').removeClass('active');
    }
}
//函数调用
$(function(){
    $('#header').load('header.html',function(){
        $('#login_user').login_user();
        $('.nav-list').nowSwitch();
        $('.nav-list').navSwitch();
    });
    //调用滚动监听插件函数
    $(window).scrollspy( {
        target: 'div.affix'  //指定要操作的附加导航
    } );
    $(window).scrollUp( {
        target: '#scrollUp'  //指定要操作的附加导航
    });
    $('#footer').load('footer.html');
    $('div.slider').carousel();
    $('ul.f-tab').switchbox();
    $('ul.p-tab').switchbox();
    $('div.col_right').on('mouseover', 'div.item p', function () {
        $(this).parent().addClass('current').siblings('.current').removeClass('current');
    });
})

