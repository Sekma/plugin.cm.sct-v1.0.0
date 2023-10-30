
(function($){
    //tableau des images
    var bgTab=["img/bg1.jpg","img/bg2.jpg","img/bg3.jpg","img/bg4.jpg","img/bg5.jpg","img/bg6.jpg"];
    var num=0;

    //affichage image initiale
    $.fn.changeImage=function(){
       this.css("background-image", "url("+bgTab[num]+")");
    }
    
   //changement d'image en cliquant sur le bouton droite
    $.fn.changeImageRight=function(){   
        if(num<bgTab.length-1){
            num++;
        }
         else if(num==bgTab.length-1){
                num=num-(bgTab.length-1);
         }    
         this.css("background-image", "url("+bgTab[num]+")");
    }

 //changement d'image en cliquant sur le bouton gauche
    $.fn.changeImageLeft=function(){
        if(num>0){
            num--;   
        }
        else if(num==0){
            num=num+(bgTab.length-1);
        }
        this.css("background-image", "url("+bgTab[num]+")");
    }
})(jQuery);