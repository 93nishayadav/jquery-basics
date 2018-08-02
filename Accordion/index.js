$(".button1").click(function(){
    //find id of button which is clicked
    let id="#"+this.id;
    //add and remove classes from p which is children of clicked button
    if($(id).children('p').hasClass('hidden')==true){
        $(id).children('p').show(500);
        $(id).children('p').removeClass('hidden');
    }
    else
    {
        $(id).children('p').hide(500);
        $(id).children('p').addClass('hidden');
    }   
});
