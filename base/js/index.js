function gotoBlog(){
    stopShowWelcome();
    //$('.header').removeClass("fixedHeader");
    //$('.content').removeClass("downContent");
    $('body').load('./pages/blog_main.html');
}
function loadContent(url){
    stopShowWelcome();
    //$('.header').addClass("fixedHeader");
    //$('.content').addClass("downContent");
    $('.content').load(url);
}
function addIconsLink(){
    $('.icons').click(function(){showAlert("陈独秀同志,请你坐下.");});
}
function removeAlert(){
    $('.tips').remove();
}
function showAlert(msg){
    var html = '';
    html += '<div class="tips"><div class="tips-content">'+msg+'</div><button type="button" class="tips-button" onclick="removeAlert();">确定</button></div>';
    $('body').append(html);
}
function scrollShowHeader(){
    var header=$(".header");
    $(window).scroll(function(){
        if($(document).scrollTop()>=800){
            header.addClass("fixedHeader"); 
        }else{
            header.removeClass("fixedHeader");
        }
    });
}
(function(){
    //$('body,html').animate({scrollTop:0},500);
    $('.toTop').click(function(){$('body,html').animate({scrollTop:0},500);});
    $('#main').click(function(){window.location.reload();});
    $('#start').click(function(){gotoBlog();});
    $('#blog').click(function(){gotoBlog();});
    $('#about').click(function(){loadContent('./pages/about.html');});
    $('#contact').click(function(){loadContent('./pages/contact.html');});
})();