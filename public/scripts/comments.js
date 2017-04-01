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
  // $('#cardModal .fa-thumbs-up').on('click', function (event) {
  //   // let liked = false;
  //   let count = 1;
  //   $.ajax({
  //     method: 'post',
  //     url: '/likes',
  //     data: count
  //   }).done(function () {
  //     // liked = true;
  //   });
  // });


});
