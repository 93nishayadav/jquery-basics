//Check size of screen in document ready to manage the size of modal
$(document).ready(()=>{
	$(window).trigger("resize");
});

//Button click to trigger modal open
$('#button1').click(function(){
   $('#button1').hide();
   $('body').toggleClass("over");
   $('#myModal').toggleClass("modal");
});

//Close button of modal to close modal and overlay
$('#close').click(function(){
   $('#button1').show();
   $('body').toggleClass("over");
   $('#myModal').toggleClass("modal");
});
//Modal size should be 100% for mobile screens
$(window).resize(function(){
   if($(window).width()<800){
        $('.content').css("width","90%");
   }
   else
   {
	$('.content').css("width","50%");
   }
});

