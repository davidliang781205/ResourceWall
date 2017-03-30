$(() => {
  $('.card').click(function(e) {
    var $title = $(this).find('.caption h3').text();
    var $description = $(this).find('.caption').children('.description').text();
    var $media = $(this).find('img').attr('src');
    $('#myModal .modal-body').empty();
    $('#myModal .modal-title').text($title);
    $('#myModal .modal-body').append($('<img>').attr('src', $media));
    $('#myModal .modal-body').append($description);
    $('#myModal').modal('toggle');
  });
})