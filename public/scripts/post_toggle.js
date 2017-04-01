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
    .append($('<label class="star star-1">').attr('for', 'star-1'))

  return $starContainer;
}

function makeThumbUp() {
  var $thumbContainer = $('<div>').addClass('like');
  $thumbContainer.append('<form id="like">')
    .append($('<i class="fa fa-thumbs-up" aria-hidden="true">'));

  return $thumbContainer;
}

$(() => {
  $('.card').click(function(e) {
    var $title = $(this).find('.caption .card-title').text();
    var $subtitle = $(this).find('.caption .card-subtitle').text();
    var $description = $(this).find('.caption').children('.card-text').text();
    var $media = $(this).find('img').attr('src');
    var $title = $('#cardModal .modal-title');
    var $body = $('#cardModal .modal-body');
    $('#cardModal .modal-body').empty();
    $title.text($title);
    $title.append($subtitle);
    $body.append($('<img class="post-image">').attr('src', $media));
    $body.append($('<div class="post-description">').text($description));
    $body.append($('<hr>'));
    $body.append($('<div class="user-actions">')
      .append(makeRating())
      .append(makeThumbUp()));

    $body.append($(this).find('div .post-meta'));

    $('#cardModal').modal('toggle');
  });
})