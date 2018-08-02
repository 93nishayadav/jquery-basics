$(document).ready(()=>{
$(window).trigger("resize");
});

$(window).resize(function(){

if($(window).width()<768){
$('ul').hide();
$('img').show();
$('ul').addClass("vertical-nav");
}
else
{
	$('ul').removeClass("vertical-nav");
$('img').hide();
$('ul').show();
}
});

$('img').click(function(){
$('ul').toggle();
});