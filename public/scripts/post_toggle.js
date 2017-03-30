$(document).ready(() => {
    $('.card').on('click', (e) => {
        e.stopPropagation();
        $('#myModal').modal('toggle');
    })
})