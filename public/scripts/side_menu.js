$(() => {
  $('#menu-toggle').on('click', (e) => {
    e.preventDefault();
    $('#wrapper').toggleClass('toggled');
  });

  // TODO: I think we're replacing this with a regular form submission?
  $('.login-button').on('click', (e) => {
    var data = $('#login').serialize();
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/users/login',
      data: data
    }).done(() => {
      window.location.reload();
    })
  })
})
