$(document).ready(function(){

// ========================================= Dropdown Menus ================================= //
$(".dropdown-parent").click(function(){
  $(this).next().slideToggle();
  $(this).toggleClass('dropdown-shadow');
});

$(".dropdown-children li").click(function(){
  var selectedValue = $(this).text();
  $(this).parent().slideToggle();
  $(this).parent().prev().children().find('span').text(selectedValue);
  
  $(".dropdown-shadow").removeClass("dropdown-shadow");
});

// ========================================= Checkbox =========================== //
$('.checkbox').click(function(){
  $(this).children().fadeToggle();
});

//End Document.ready
});