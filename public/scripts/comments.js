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

  $('.card').click(function(e){
    let rate = 0;
    let urlid = $('#cardModal .post-meta').data('id');
    $('.star-1').click(function(e){
      let $this = $(this);
      if($this.hasClass('highlight')) {
        $this.removeClass('highlight');
        // $.ajax({
        //   method: 'post',
        //   url: '/updateRates',
        //   data:{
        //     urlid:urlid
        //   }
        // })
      } else {
        $this.addClass('highlight');
        rate = 5;
        $.ajax({
          method: 'post',
          url: '/rates',
          data: {
            rate: rate,
            urlid: urlid
          }
        }).done(function (){
          console.log(('star5 clicked'));
        })
      }
    })
    $('.star-2').click(function(e){
      let $this = $(this);
      if($this.hasClass('highlight')) {
        $this.removeClass('highlight');
        // $.ajax({
        //   method: 'post',
        //   url: '/updateRates',
        //   data:{
        //     urlid:urlid
        //   }
        // })
      } else {
        $this.addClass('highlight');
        rate = 4;
        $.ajax({
          method: 'post',
          url: '/rates',
          data: {
            rate: rate,
            urlid: urlid
          }
        }).done(function (){
          console.log(('star4 clicked'));
        })
      }
    })
    $('.star-3').click(function(e){
      let $this = $(this);
      if($this.hasClass('highlight')) {
        $this.removeClass('highlight');
        // $.ajax({
        //   method: 'post',
        //   url: '/updateRates',
        //   data:{
        //     urlid:urlid
        //   }
        // })
      } else {
        $this.addClass('highlight');
        rate = 3;
        $.ajax({
          method: 'post',
          url: '/rates',
          data: {
            rate: rate,
            urlid: urlid
          }
        }).done(function (){
          console.log(('star3 clicked'));
        })
      }
    })
    $('.star-4').click(function(e){
      let $this = $(this);
      if($this.hasClass('highlight')) {
        $this.removeClass('highlight');
        // $.ajax({
        //   method: 'post',
        //   url: '/updateRates',
        //   data:{
        //     urlid:urlid
        //   }
        // })
      } else {
        $this.addClass('highlight');
        rate = 2;
        $.ajax({
          method: 'post',
          url: '/rates',
          data: {
            rate: rate,
            urlid: urlid
          }
        }).done(function (){
          console.log(('star2 clicked'));
        })
      }
    })
    $('.star-5').click(function(e){
      let $this = $(this);
      if($this.hasClass('highlight')) {
        $this.removeClass('highlight');
        // $.ajax({
        //   method: 'post',
        //   url: '/updateRates',
        //   data:{
        //     urlid:urlid
        //   }
        // })
      } else {
        $this.addClass('highlight');
        rate = 1;
        $.ajax({
          method: 'post',
          url: '/rates',
          data: {
            rate: rate,
            urlid: urlid
          }
        }).done(function (){
          console.log(('star1 clicked'));
        })
      }
    })
  });
});
