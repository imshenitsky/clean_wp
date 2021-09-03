console.log 'Hello world from coffeescript'
$(document).on 'turbolinks:load', ->
  $('.coffee').on 'click', ->
    txt = undefined

    if confirm('Press a button!')
      txt = 'You pressed OK!'
    else
      txt = 'You pressed Cancel!'
    $('.demo').html(txt)
