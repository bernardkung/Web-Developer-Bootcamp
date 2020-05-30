// var first_li = document.querySelector("li");
var li_list = document.querySelectorAll("li");

for (var l = 0; l < li_list.length; l++) {
    li_list[l].addEventListener("mouseover", function() {
        this.classList.add("selected");
    });
    
    li_list[l].addEventListener("mouseout", function() {
        this.classList.remove("selected");
    });

    li_list[l].addEventListener("click", function() {
        this.classList.toggle("done");
    })
}
