$(document).ready(function(){

    //$('li').css("blackground", "yellow");
    
    $('.box').mouseover(function(){
    $(this).css("background", "rgb(245, 180, 220)");
    });

    $('.box').mouseout(function(){
    $(this).css("background", "rgb(226, 166, 226)");
    });

});
