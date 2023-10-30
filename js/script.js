$(document).ready(function() {

    $(".section1").changeImage();

    $(".btn-right").click(function(){
    $(".section1").changeImageRight();
    });
    
    $(".btn-left").click(function(){
        $(".section1").changeImageLeft();
        })
    
 });

