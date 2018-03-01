function gotoBlog(){
    stopShowWelcome();
    $('.header').removeClass("fixedHeader");
    $('.content').removeClass("downContent");
    $('body').load('./pages/main.html');
}
function loadContent(url){
    stopShowWelcome();
    //$('.header').addClass("fixedHeader");
    //$('.content').addClass("downContent");
    $('.content').load(url);
}
(function(){
    $('#main').click(function(){window.location.reload();});
    $('#start').click(function(){gotoBlog();});
    $('#blog').click(function(){gotoBlog();});
    $('#about').click(function(){loadContent('./pages/about.html');});
    $('#contact').click(function(){loadContent('./pages/contact.html');});
})();