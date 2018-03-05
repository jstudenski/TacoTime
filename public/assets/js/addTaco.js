console.log("Hello world!!");

$(".add-taco").on("submit", function(event) {
    event.preventDefault();

    var taco = {
      name: $("#name").val().trim()
    };
    
    // Send the POST request.
    $.ajax("/api/tacos", {
      type: "POST",
      data: taco
    }).then(
      function() {
        console.log("added new taco");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
