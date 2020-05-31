// Fade immediately
$("button").on("click", function() {
    $('div').fadeOut();
})

// Fade over time
$("button").on("click", function() {
    $('div').fadeOut(1000);
})

// Fade with message, message is immediate
$("button").on("click", function() {
    $('div').fadeOut(1000);
    console.log("Faded out!")
})

// Fade with delayed message
$("button").on("click", function() {
 $('div').fadeOut(1000, function() {
   console.log("Faded out!");
    });
});

// Fade and delete elements
$("button").on("click", function() {
 $('div').fadeOut(1000, function() {
   $(this).remove();
    });
});

// Fade in
$("button").on("click", function() {
    $('div').fadeIn(1000);
   });

// Fade toggle
$("button").on("click", function() {
    $('div').fadeToggle(1000);
   });


// Slide up (makes it disappear)
$("button").on("click", function() {
    $('div').slideUp();
   });
   
// Slide down (brings it back)
$("button").on("click", function() {
    $('div').slideDown();
   });

// Slide toggle
$("button").on("click", function() {
    $('div').slideToggle();
   });
   