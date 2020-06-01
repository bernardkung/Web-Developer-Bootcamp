
// Toggle completion when a todo is clicked
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
})

// Delete todo when X is clicked
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  // Halt event bubbling
  event.stopPropagation();
})

$("input[type='text']").on("keypress", function(event) {
  // Grab input text when enter is pressed
  if (event.which === 13) {
    let todoText = $(this).val();
    $("ul").append(`<li>${todoText}<span><i class="fa fa-trash"></i></span></li>`);
    $(this).val("");
  }
})

$(".fa-edit").click(function() {
  $("input[type='text']").fadeToggle();
})