$(() => {

  $('#cardModal .submit-button').on('click', function(event) {
    event.preventDefault();
    let comment = $('#cardModal textarea').val();
    let urlid = $('#cardModal .post-meta').data('id');

    $.ajax({
      method: 'post',
      url: '/comments',
      data: {
        comment: comment,
        urlid: urlid
      }
    }).done(function() {
      console.log('hi');
    })
  });
});