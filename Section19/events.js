
// Print every keypress to console
$("input[type='text']").keypress(function(event) {
    console.log(event);
});

// Detect when enter was pressed
$("input[type='text']").keypress(function(event) {
    // if enter was pressed
    if (event.which === 13) {
        alert("You hit enter!")
    }
});

// Turn all H1 purple when any are clicked
$("h1").on("click", function() {
    $("h1").css("color", "purple");
})

// Turn a clicked on h1 purple
$("h1").on("click", function() {
    $(this).css("color", "purple");
})

// Log a keypress
$("input").on("keypress", function() {
    console.log("keypressed!");
})

// Hover highlight
$("button").on("mouseenter", function() {
    $(this).css("font-weight", "bold");
})
// Unhover unhighlight
$("button").on("mouseleave", function() {
    $(this).css("font-weight", "normal");
})