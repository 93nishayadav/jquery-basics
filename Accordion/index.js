$(document).ready(()=>{

$(".button1").click(function(){

 var id="#"+this.id;
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
});