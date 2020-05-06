(function($) {
  $('.ad').on('click', function() {
    $(this)
      .parent()
      .animate(
        {
          opacity: 0,
          display: 'none'
        },
        {
          duration: 1000
        }
      );
  });
})($);
