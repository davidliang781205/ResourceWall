$(() => {

  $('#cardModal .submit-button').on('click', function(event) {
    event.preventDefault();
    let comment = $('#cardModal textarea').val();
    let urlid = $('#cardModal .post-meta').data('id');
    console.log(comment);
    console.log('metadata ', urlid);

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
