// Preloader js    
$(window).on('load', function () {
  $('.preloader').fadeOut(100);


  const button = document.querySelector('#item-button')
  const quantity = document.querySelector('#quantity')

  if (quantity !== null) {
    quantity.value = 1;
    quantity.addEventListener('change', () => {
      // Sets the default quantity when adding the item
      button.setAttribute('data-item-quantity', quantity.value)
    })
  }

  if (button !== null) {
    const select = document.querySelector('#frame_color')
  select.addEventListener('change', () => {
    // Sets the default frame color when adding the item
    button.setAttribute("data-item-custom1-value", select.value)
  })
  }

  let image = document.getElementsByClassName('picker-image');

  if (image.length !== 0) {
    let title = document.getElementById('item-Name');
    // let button1 = document.getElementById('item-button');
    initPick(image[0]);

    for (let i = 0; i < image.length; i++) {
      const element = image[i];
      element.addEventListener('click', function () {
        initPick(element);
      });
    }

    function initPick(element) {
      let path = element.src;
      let count = path.split("/").length;
      let filename = path.split("/")[count - 1]
      let name = filename.split('.')[0];
      let cleanNmae = name.replaceAll('-', ' ');

      title.innerHTML = cleanNmae;
      // button1.setAttribute('data-item-name', cleanNmae);
      // button1.setAttribute('data-item-image', path);
      // button1.setAttribute('data-item-id', cleanNmae);
      // button1.setAttribute('data-item-description', cleanNmae);
      // button.setAttribute('data-item-url', path);
    }
  }
});

(function ($) {
  'use strict';

  // navigation
  $(window).scroll(function () {
    if ($('.navigation').offset().top > 1) {
      $('.navigation').addClass('nav-bg');
    } else {
      $('.navigation').removeClass('nav-bg');
    }
  });


  // video modal popup
  var $videoSrc;
  $('.video-modal').click(function () {
    $videoSrc = $(this).data("src");
  });
  $('#videoModal').on('shown.bs.modal', function (e) {
    $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
  })
  $('#videoModal').on('hide.bs.modal', function (e) {
    $("#video").attr('src', $videoSrc);
  })
  $('#videoModal2').on('shown.bs.modal', function (e) {
    $("#video2").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
  })
  $('#videoModal2').on('hide.bs.modal', function (e) {
    $("#video2").attr('src', $videoSrc);
  })


  // testimonial slider
  $('.testimonial-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-arrow-left\'></i></button>',
    nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-arrow-right\'></i></button>',
    autoplay: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 401,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });


  // product Slider
  $('.product-slider').slick({
    autoplay: false,
    infinite: true,
    arrows: false,
    dots: true,
    customPaging: function (slider, i) {
      var image = $(slider.$slides[i]).data('image');
      return '<img class="img-fluid" src="' + image + '" alt="product-img">';
    }
  });


  // Accordions
  $('.collapse').on('shown.bs.collapse', function () {
    $(this).parent().find('.ti-plus').removeClass('ti-plus').addClass('ti-minus');
  }).on('hidden.bs.collapse', function () {
    $(this).parent().find('.ti-minus').removeClass('ti-minus').addClass('ti-plus');
  });


})(jQuery);