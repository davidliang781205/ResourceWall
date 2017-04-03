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

  $('.card').click(function(e) {
    var rate;
    $('.star-1').click(function(e) {
      var urlid = $('#cardModal .post-meta').data('id');
      rate = 1;
      $.ajax({
        method: 'post',
        url: '/rates',
        data: {
          rate: rate,
          urlid: Number(urlid)
        }
      }).done(function() {
        console.log(rate);
      })
    });
    $('.star-2').click(function(e) {
      var urlid = $('#cardModal .post-meta').data('id');
      rate = 2;
      $.ajax({
        method: 'post',
        url: '/rates',
        data: {
          rate: rate,
          urlid: Number(urlid)
        }
      }).done(function() {
        console.log(rate);
      })
    });
    $('.star-3').click(function(e) {
      var urlid = $('#cardModal .post-meta').data('id');
      rate = 3;
      $.ajax({
        method: 'post',
        url: '/rates',
        data: {
          rate: rate,
          urlid: Number(urlid)
        }
      }).done(function() {
        console.log(rate);
      })
    });
    $('.star-4').click(function(e) {
      var urlid = $('#cardModal .post-meta').data('id');
      rate = 4;
      $.ajax({
        method: 'post',
        url: '/rates',
        data: {
          rate: rate,
          urlid: Number(urlid)
        }
      }).done(function() {
        console.log(rate);
      })
    });
    $('.star-5').click(function(e) {
      var urlid = $('#cardModal .post-meta').data('id');
      rate = 5;
      $.ajax({
        method: 'post',
        url: '/rates',
        data: {
          rate: rate,
          urlid: Number(urlid)
        }
      }).done(function() {
        console.log(rate);
      })
    });

  });
});