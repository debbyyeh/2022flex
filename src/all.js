$(document).ready(function () {
  // burger menu
  $('.menu_btn').click(function (e) {
    e.preventDefault(), $('body').toggleClass('menuList-height')
  })

  // 發票頁面
  $('.receiptButton a').click(function (e) {
    e.preventDefault()
    $(this).addClass('active').siblings().removeClass('active')
  })
  $('.E-receiptButton').click(function (e) {
    $('.E-receiptContent').show()
    $('.paper-receiptContent').hide()
  })
  $('.paper-receiptButton').click(function (e) {
    $('.paper-receiptContent').show()
    $('.E-receiptContent').hide()
  })
})
