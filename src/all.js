$(document).ready(function () {
  $('.menu_btn').click(function (e) {
    e.preventDefault(), $('body').toggleClass('menuList-height')
  })
})