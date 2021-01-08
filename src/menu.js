$(".submenu").click(function(){
  $(this).children("ul").slideToggle(); 
})

$("ul").click(function(p){
    p.stopPropagation();
  })