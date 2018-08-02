$(document).ready(()=>{
    //check for windows size on document.ready and act accordingly
    $(window).trigger("resize");
});

//change he orientation as well as show /hide image and nav menu on image resize
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

//show/hide nav menu on image click
$('img').click(function(){
    $('ul').toggle();
});
