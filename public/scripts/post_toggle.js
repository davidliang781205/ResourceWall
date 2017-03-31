$(() => {
  $('.card').click(function(e) {
    var $title = $(this).find('.caption h3').text();
    var $description = $(this).find('.caption').children('.description').text();
    var $media = $(this).find('img').attr('src');
    $('#cardModal .modal-body').empty();
    $('#cardModal .modal-title').text($title);
    $('#cardModal .modal-body').append($('<img class="post-image">').attr('src', $media));
    $('#cardModal .modal-body').append($('<div class="post-description">').text($description));
    $('#cardModal .modal-body').append($('<hr>'));
    $('#cardModal .modal-body').append($('<div class="user-actions">')
      .append(makeRating())
      .append(makeThumbUp()));

    $('#cardModal').modal('toggle');
  });
})

function makeRating() {
  var $starContainer = $('<div>').addClass('stars');
  $starContainer.append($('<form id="stars">'));
  $starContainer.append($('<input class="star star-5" id="star-5">').attr('type', 'radio').attr('name', 'star'))
    .append($('<label class="star star-5">').attr('for', 'star-5'))
    .append($('<input class="star star-4" id="star-4">').attr('type', 'radio').attr('name', 'star'))
    .append($('<label class="star star-4">').attr('for', 'star-4'))
    .append($('<input class="star star-3" id="star-3">').attr('type', 'radio').attr('name', 'star'))
    .append($('<label class="star star-3">').attr('for', 'star-3'))
    .append($('<input class="star star-2" id="star-2">').attr('type', 'radio').attr('name', 'star'))
    .append($('<label class="star star-2">').attr('for', 'star-2'))
    .append($('<input class="star star-1" id="star-1">').attr('type', 'radio').attr('name', 'star'))
    .append($('<label class="star star-1">').attr('for', 'star-1'));

  return $starContainer;

}

function makeThumbUp() {
  var $thumbContainer = $('<div>').addClass('like');
  $thumbContainer.append('<form id="like">')
    .append($('<i class="fa fa-thumbs-up" aria-hidden="true">'));

  return $thumbContainer;
}