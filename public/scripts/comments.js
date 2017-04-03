$(() => {
  $('#cardModal .submit-button').on('click', function(event) {
    event.preventDefault();
    var comment = $('#cardModal textarea');
    var urlid = $('#cardModal .post-meta').data('id');

    $.ajax({
      method: 'post',
      url: '/comments',
      data: {
        comment: comment.val(),
        urlid: urlid
      }
    }).done(function(row) {
      var $comment = $('<div class="comment">').append('<hr>');
      $comment
        .append($('<div class="comment-content">').text(row[0].content))
        .append($('<div class="comment-user">').text(row[0].email))

      $('#cardModal .post-meta').append($comment);
      $('div[data-id=' + urlid + ']').append($comment);
      comment.val('');
    })
  });
})