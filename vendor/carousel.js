$('#box>div>img').mouseover(function () {
  $(this).addClass('active').siblings().removeClass('active')

  const lg = $(this).data('lg')
  $('#box>img').prop('src', lg)
}).eq(0).mouseover();