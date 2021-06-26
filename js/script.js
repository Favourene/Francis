$(document).ready(function () {
  $nav = $('.nav')
  $toggleCollapse = $('.toggle-collapse')

  /** click event on toggle menu */
  $toggleCollapse.click(function () {
    $nav.toggleClass('collapse')
  })
  var swiper = new Swiper('.slider-bg .swiper-container', {
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  })
})

var a = 0
$(window).scroll(function () {
  var oTop = $('.counter').offset().top - window.innerHeight
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count')
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 5000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum))
          },
          complete: function () {
            $this.text(this.countNum)
            //alert('finished');
          },
        }
      )
    })
    a = 1
  }
})
