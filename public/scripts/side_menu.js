$(() => {
  $('#menu-toggle').on('click', (e) => {
    e.preventDefault();
    $('#wrapper').toggleClass('toggled');
  });

})