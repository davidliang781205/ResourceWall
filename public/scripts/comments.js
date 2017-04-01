$(() => {

  $('#cardModal .submit-button').on('click', function (event) {
    event.preventDefault();
    let comment = $('#cardModal textarea').val();
    $.ajax({
      method: 'post',
      url: '/comments',
      data: {
        comment: comment
      }
    }).done(function () {
      console.log('hi');
    })
    //   loadTweets();
    //   $('.all-tweets').removeClass('err');
    //   $('section.new-tweet textarea').focus().val('');
    // }).fail(function (err) {
    //   $('.all-tweets').addClass('err');
    // });
  });
});
