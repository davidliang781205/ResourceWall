$(() => {
  $('#menu-toggle').on('click', (e) => {
    e.preventDefault();
    $('#wrapper').toggleClass('toggled');
  });

  $('.login-button').on('click', (e) => {
    var email = $('#login').find('.login-email').val();
    var password = $('#login').find('.login-email').val();
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/user/login',
      data: {
        email: email,
        password: password
      }
    }).done(() => {
      window.location.reload();
    })
  })

  $('.register-button').on('click', (e) => {
    e.preventDefault();
    var email = $('#register').find('.register-email').val();
    var password = $('#register').find('.register-password').val();
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/user/register',
      data: {
        email: email,
        password: password
      }
    }).done(() => {
      window.location.reload();
    });
  })

})