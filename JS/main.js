<!-- Show and hide details of members -->
var Josh = [".Josh1", ".Josh2", "#Josh h3", "#Josh p"]
var Acalia = [".Acalia1", ".Acalia2", "#Acalia h3", "#Acalia p"]
var Sam = [".Sam1", ".Sam2", "#Sam h3", "#Sam p"]
var Michelle = [".Michelle1", ".Michelle2", "#Michelle h3", "#Michelle p"]
var Kerry = [".Kerry1", ".Kerry2", "#Kerry h3", "#Kerry p"]

function showDetails(name) {
  name.forEach(function(item) {
    $(item).toggle("slow");
  })
}

$("#Josh").click(function() {
  showDetails(Josh);
});
$("#Acalia").click(function() {
  showDetails(Acalia);
});
$("#Sam").click(function() {
  showDetails(Sam);
});
$("#Michelle").click(function() {
  showDetails(Michelle);
});
$("#Kerry").click(function() {
  showDetails(Kerry);
});

<!--Show full menu when in mobile -->
$(".menu").click(showMenu);

function showMenu(event) {
  event.preventDefault();
  $(".submenu").toggle("slow");
  $(".menu").show();
}

<!--Show and hide items on the page on click-through-->
$("#menu-hikes").click(hideMap);

function hideMap() {
  console.log('hideMap');
  $(".map").hide();
}

<!-- Show and hide blog-->
$("#read-more1").click(toggleBlog1);
$("#read-less1").click(toggleBlog1);
$("#read-more2").click(toggleBlog2);
$("#read-less2").click(toggleBlog2);
$("#read-more3").click(toggleBlog3);
$("#read-less3").click(toggleBlog3);
$("#read-more4").click(toggleBlog4);
$("#read-less4").click(toggleBlog4);

function toggleBlog1(event) {
  event.preventDefault();
  $("#main-blog1").toggle("slow");
  $("#read-more1").toggle("slow");
  $("#read-less1").toggle("slow");
}
function toggleBlog2(event) {
  event.preventDefault();
  $("#main-blog2").toggle("slow");
  $("#read-more2").toggle("slow");
  $("#read-less2").toggle("slow");
}
function toggleBlog3(event) {
  event.preventDefault();
  $("#main-blog3").toggle("slow");
  $("#read-more3").toggle("slow");
  $("#read-less3").toggle("slow");
}
function toggleBlog4(event) {
  event.preventDefault();
  $("#main-blog4").toggle("slow");
  $("#read-more4").toggle("slow");
  $("#read-less4").toggle("slow");
}
