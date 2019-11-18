// JS file for events (click for Devour Burger and Delete)
//   events for PUT, POST and DELETE
$(function() {
  $(".eatBurger").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    var devouredState = {
      devoured: 1
    };
        // "Eating" a burger starts the PUT request
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function() {
        // Reload the page to get the updated list
      location.reload();
    });
  });     
    // Event to grab the new order for a Burger using form 
  $(".create-form").on("submit", function(event) {
    // Use preventDefault on a submit event.
    event.preventDefault();
    var newBurger = {
      burger_name: $("#newBurger").val().trim(),
      devoured: 0
    }; 
      // Creating a new burger starts the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      // Reload the page to get the updated list
       location.reload();
    });
  });
    // Deleting an already devoured burger starts the DELETE request  
  $(".deleteBurger").on("click", function(event) {
    // event.preventDefault();    
    var id = $(this).data("id");
      // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(function() {
  });
    // Reload the page to get the updated list  
    // I moved the reload out of the above function becuase 
    //   it wasn't refreshing the page after a delete  
    location.reload();
  });
});