$(function() {
  var freeze = false;

  $('body').on('click', '.js-notify', function() {
    var html = renderTemplate('notification', {message: $(this).data('message')}, 'body')
      , timeout = setTimeout(function() {
          unRender(html)
        }, 4000);

    $('.js-notify-close').on('click', function() {
      clearTimeout(timeout);
      unRender(html);
    });
  });

  $('body').on('click', '.js-question-answers li', function() {
    if (freeze === false) {
      freeze = true;
      $answers = $(this).closest('.js-question-answers');
      correct = $answers.data('correct')

      if ($(this).index() == correct) {
        $(this).addClass('right');
        setTimeout(function() {
          increaseTotals(true);
          renderQuestion();
          freeze = false
        }, 2000);
      } else {
        $(this).addClass('wrong');
        setTimeout(function() {
          console.log($answers.eq(correct));
          $answers.children().eq(correct).addClass('right');
          setTimeout(function() {
            increaseTotals(false);
            renderQuestion();
            freeze = false
          }, 2000);
        }, 750);
      }
    }
  });

  $('body').on('click', '.js-trigger-modal', function(e) {
    e.preventDefault();

    $('.js-modal').removeClass('active');

    modal = $(this).data('modal');
    $activeModal = $('.js-modal').filter(function() {
      return $(this).data('modal') == modal
    });
    $activeModal.addClass('active')
  });

  $('body').on('click', '.js-modal-close', function(e) {
    e.preventDefault();

    $('.js-modal').removeClass('active');
  });
});

