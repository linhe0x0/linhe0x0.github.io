(function() {
  var async;

  async = function(url, callback) {
    var iT, oScript;
    iT = 'script';
    oScript = document.createElement(iT);
    oScript.src = url;
    if (callback) {
      oScript.addEventListener('load', function(event) {
        return callback(null, event);
      }, false);
    }
    return document.body.appendChild(oScript);
  };

  (function() {
    if ($('#tag_cloud').length) {
      return async('/dist/js/jquery.tagcloud.js', function() {
        $.fn.tagcloud.defaults = {
          color: {
            start: '#bbbbee',
            end: '#0085a1'
          }
        };
        return $('#tag_cloud a').tagcloud();
      });
    }
  })();


  /*
  (() ->
    if $('.toc-nav-button').length
      $('.toc-nav-button').click(()->
        $(this).html('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i>')
        async('/dist/js/toc.min.js', () ->
          $('.toc-nav-button').hide()
        )
      )
  )()
   */

  $(function() {
    var MQL, headerHeight;
    MQL = 1170;
    if ($(window).width() > MQL) {
      headerHeight = $('.navbar-custom').height();
      return $(window).on('scroll', {
        previousTop: 0
      }, function() {
        var currentTop;
        currentTop = $(window).scrollTop();
        if (currentTop < this.previousTop) {
          if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
            $('.navbar-custom').addClass('is-visible');
          } else {
            $('.navbar-custom').removeClass('is-visible is-fixed');
          }
        } else {
          $('.navbar-custom').removeClass('is-visible');
          if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) {
            $('.navbar-custom').addClass('is-fixed');
          }
        }
        return this.previousTop = currentTop;
      });
    }
  });

}).call(this);
