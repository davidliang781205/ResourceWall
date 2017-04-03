$(() => {
  $('.card').click(function(e) {
    var description = $(this).find('.caption').children('.card-text').text();
    var media = $(this).find('img').attr('src');
    var $title = $('#cardModal .modal-title');
    var $body = $('#cardModal .modal-body-content');
    var rating = Number($(this).find('div .post-meta').data('rates'));
    var link = $(this).find('div .post-meta').data('oriurl');


    if (!rating) {
      rating = 'No Rating';
    } else {
      rating = rating.toFixed(1);
    }
    $('#cardModal .modal-title').text($(this).find('.caption .card-title').text());
    $('#cardModal .modal-subtitle').text($(this).find('.caption .card-subtitle').text());
    $('#cardModal .link').attr('href', 'http://' + link);
    $body.find('img').attr('src', media);
    $body.find('.post-description').text(description);
    $('#cardModal .user-actions').find('.rate-count').text(rating);
    $('#cardModal .user-actions').find('.like-count').text($(this).find('div .post-meta').data('likes'));
    $('div .modal-comments').empty();
    $('div .modal-comments').append($(this).find('div .post-meta').clone().css('display', 'block'));

    $('#cardModal').modal('toggle');

  });
})