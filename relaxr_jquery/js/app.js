
$(document).ready(function() {
$("#sidebar").click(showAdditionalText)
$(".readless").click(hideAdditionalText)
function showAdditionalText(){
  console.log(this)
  $("#show-this-on-click").slideDown()
  $(this).hide()
  $(".readmore").hide()
  $(".readless").show()
  event.preventDefault()
}
  function hideAdditionalText(){
    $("#show-this-on-click").slideDown()
    $(".readless").hide()
    $(".readmore").show()
    event.preventDefault()
}
});
