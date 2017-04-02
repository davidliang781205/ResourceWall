$(() => {

  $('#cardModal .submit-button').on('click', function(event) {
    event.preventDefault();
    let comment = $('#cardModal textarea');
    let urlid = $('#cardModal .post-meta').data('id');

    $.ajax({
      method: 'post',
      url: '/comments',
      data: {
        comment: comment.val(),
        urlid: urlid
      }
    }).done(function() {
      $('#cardModal .modal-comments').empty();
      comment.val('');

    })
  });
});