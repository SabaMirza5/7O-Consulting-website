
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() >  $(window).height(15)){
            $(".navbar").css({"background-color":"transparent"});
        }
        else{
            $(".navbar").css({"padding":"10px"});
        }
    })
})