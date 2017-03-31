$(() => {
  $('#menu-toggle').on('click', (e) => {
    e.preventDefault();
    $('#wrapper').toggleClass('toggled');
  });

  $('.login-button').on('click', (e) => {
    var data = $('#login').serialize();
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/user/login',
      data: data
    }).done(() => {
      window.location.reload();
    })
  })

  $('.register-button').on('click', (e) => {
    e.preventDefault();
    var data = $('#register').serialize();
    $.ajax({
      method: 'POST',
      url: '/api/user/register',
      data: data
    }).done(() => {
      window.location.reload();
    });
  })

})