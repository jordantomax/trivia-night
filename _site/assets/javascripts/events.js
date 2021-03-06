$(function() {
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
    $answers = $(this).closest('.js-question-answers');
    correct = $answers.data('correct')
    if ($(this).index() == correct) {
      $(this).addClass('right');
      setTimeout(function() {
        increaseTotals(true);
        renderQuestion();
      }, 2000);
    } else {
      $(this).addClass('wrong');
      setTimeout(function() {
        console.log($answers.eq(correct));
        $answers.children().eq(correct).addClass('right');
        setTimeout(function() {
          increaseTotals(false);
          renderQuestion();
        }, 2000);
      }, 750);
    }
  });
});

