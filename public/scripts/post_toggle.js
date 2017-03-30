$(() => {
  $('.card').on('click', () => {
    $(this).next('.modal').addClass('is-active');
  })

})