window.renderTemplate = function(name, data, el) {
  if ($(el).length) {
    html = Handlebars.templates[name](data);
      if (el) {
        html = $(html).css('opacity', 0).appendTo(el).animate({'opacity': 1}, 200).get(0);
      }
      return html
  }
}

window.unRender = function(template, callback) {
  $(template).fadeOut('fast', function() {
    $(template).remove()
    if (callback && typeof callback === 'function') {
      callback()
    }
  });
}

window.question = 0;

window.renderQuestion = function() {
  $('.js-question').html('');
  renderTemplate('question', data.questions[question], '.js-question');
  if (window.question + 1 >= data.questions.length ) {
    question = 0;
  } else {
    question++;
  }
}

window.increaseTotals = function(correct) {
  if (correct) {
    $('.js-count-correct').html((parseInt($('.js-count-correct').html()) + 1));
  }
  $('.js-count-total').html((parseInt($('.js-count-total').html()) + 1));
  $('.js-count').addClass('anim-pulse');
  setTimeout(function() {
    $('.js-count').removeClass('anim-pulse');
  }, 500);
}

window.events = {}

$(function() {
  renderQuestion();
});


