$('ul').on('click', 'li', function(){
  $(this).toggleClass('completed');
});

//when the spans are clicked, fade out todo item
$('ul').on('click', 'span', function(event){
  $(this).parent().fadeOut(200, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    //grab the input text from input and store it
    var todoText = $(this).val();
    $(this).val('');
    //create a new li and add to the ul
    $('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + todoText + '</li>');
  }

});

$('.fa-plus-square').click(function(){
  $("input[type='text']").fadeToggle();
});
