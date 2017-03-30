$(() => {
  $('.card').click(function(e) {
    var $title = $(this).find('.caption h3').text();
    var $description = $(this).find('.caption').children('.description').text();
    var $media = $(this).find('img').attr('src');
    $('.modal-body').empty();
    $('.modal-title').text($title);
    $('.modal-body').append($('<img>').attr('src', $media));
    $('.modal-body').append($description);
    $('#myModal').modal('toggle');
  });
})