<div class="mod-question-wrap">
  <h1 class="mod-question">{{question}}</h1>
  <ul class="mod-question-answers js-question-answers" data-correct="{{correct}}">
    {{#each answers}}
    <li class="mod-question-answer index-{{@index}}">{{this}}<i class="icon-check check"></i><i class="icon-cross x"></i></li>
    {{/each}}
  </ul>
</div>
