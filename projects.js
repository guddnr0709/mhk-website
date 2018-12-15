$(document).ready(function() {
  $('.project-filter a').click(function() {
    var filter = $(this).text().toLowerCase()
    if ( filter == 'all' ) {
      $('.project').fadeIn(300)
    } else {
      $('.project').fadeOut(300)
      $('.project' + '.' + filter).fadeIn(300)
    }

  })
})
