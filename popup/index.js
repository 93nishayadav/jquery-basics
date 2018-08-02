$(document).ready(()=>{
	$(window).trigger("resize");
});
$('#button1').click(function(){
$('#button1').hide();
$('body').toggleClass("over");
$('#myModal').toggleClass("modal");
});

$('#close').click(function(){
$('#button1').show();
$('body').toggleClass("over");
$('#myModal').toggleClass("modal");

});
$(window).resize(function(){
if($(window).width()<768){
$('.content').css("width","100%");
}
else
{
	$('.content').css("width","50%");
}
});

