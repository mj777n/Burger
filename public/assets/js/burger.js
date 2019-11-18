  // Make sure to wait to attach the handlers until the DOM is fully loaded.
$(function() {
  $(".eatBurger").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
      // var newSleep = $(this).data("newsleep");
    var devouredState = {
      devoured: 1
    };
        // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function() {
        // Reload the page to get the updated list
      location.reload();
    });
  });     
  
$(".create-form").on("submit", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();
  var newBurger = {
    burger_name: $("#newBurger").val().trim(),
    devoured: 0
  }; 
    // Send the POST request.
  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
  }).then(function() {
    // Reload the page to get the updated list
     location.reload();
  });
});
  
$(".deleteBurger").on("click", function(event) {
  // event.preventDefault();    
  var id = $(this).data("id");
    // Send the DELETE request.
  $.ajax("/api/burgers/" + id, {
    type: "DELETE"
  }).then(function() {
  });
    // Reload the page to get the updated list    
  location.reload();
});
});
  