async = (url, callback) ->
  iT = 'script'
  oScript = document.createElement(iT)

  oScript.src = url

  if callback
    oScript.addEventListener('load', (event) ->
      callback(null, event)
    , false)

  document.body.appendChild(oScript)

# 标签云
(() ->
  # only load tagcloud.js in tag.html
  if $('#tag_cloud').length
    async('/dist/js/jquery.tagcloud.js', () ->
      $.fn.tagcloud.defaults = {
        color: {start: '#bbbbee', end: '#0085a1'},
      }

      $('#tag_cloud a').tagcloud()
    )
)()

# 文章页面按需加载文章导航
###
(() ->
  if $('.toc-nav-button').length
    $('.toc-nav-button').click(()->
      $(this).html('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i>')
      async('/dist/js/toc.min.js', () ->
        $('.toc-nav-button').hide()
      )
    )
)()
###

# 滚动页面时控制顶部导航栏的状态
$(() ->
  MQL = 1170

  # primary navigation slide-in effect
  if $(window).width() > MQL
    headerHeight = $('.navbar-custom').height()

    $(window).on('scroll', {
      previousTop: 0
    }, () ->
      currentTop = $(window).scrollTop()

      if currentTop < this.previousTop
        if currentTop > 0 and $('.navbar-custom').hasClass('is-fixed')
          $('.navbar-custom').addClass('is-visible')
        else
          $('.navbar-custom').removeClass('is-visible is-fixed')
      else
        $('.navbar-custom').removeClass('is-visible')

        if currentTop > headerHeight and !$('.navbar-custom').hasClass('is-fixed')
          $('.navbar-custom').addClass('is-fixed')

      this.previousTop = currentTop
    )
)
