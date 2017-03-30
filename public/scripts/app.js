

$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((dbthings) => {
    for(user of dbthings) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;
});

$(() => {
  $.ajax({
    method: "GET",
    url: "/"
    success: function(searchResults) {
      //spit out a function here that prints search results
    },
    error: function() {
      alert("There was a problem with finding your search results");
    }
  });
});

