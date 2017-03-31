$(() => {
  $("#menu-toggle").on('click', (e) => {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

  $(".login-button").on('click', (e) => {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/login',
      data: textInput.serialize()
    }).done(() => {});
  })

//   $(".register-button").on('click', (e) => {
//     e.preventDefault();
//     $.ajax({
//       method: 'POST',
//       url: '/register',
//       data: $('#register-form').serialize()
//     }).done(() => {});
//   })

})
