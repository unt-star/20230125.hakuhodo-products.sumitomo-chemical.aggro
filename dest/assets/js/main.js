function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * jQueryオブジェクトの拡張
 *
 * @date 2021-03-18
 */
(function ($) {
  /**
   * userAgent判定フラグ
   *
   * @date 2020-05-12
   */
  var ua = navigator.userAgent.toLowerCase();
  $.ua = {
    isWindows: /windows/.test(ua),
    isMac: /macintosh/.test(ua),
    isIE: /msie (\d+)|trident/.test(ua),
    isLtIE9: /msie (\d+)/.test(ua) && RegExp.$1 < 9,
    isLtIE10: /msie (\d+)/.test(ua) && RegExp.$1 < 10,
    isFirefox: /firefox/.test(ua),
    isWebKit: /applewebkit/.test(ua),
    isChrome: /chrome/.test(ua) && !/edge/.test(ua) || /crios/.test(ua),
    isSafari: /safari/.test(ua) && !/chrome/.test(ua) && !/crios/.test(ua) && !/android/.test(ua),
    isIOS: /i(phone|pod|pad)/.test(ua) || /macintosh/.test(ua) && 'ontouchstart' in window,
    isIOSChrome: /crios/.test(ua),
    isIPhone: /i(phone|pod)/.test(ua),
    isIPad: /ipad/.test(ua) || /macintosh/.test(ua) && 'ontouchstart' in window,
    isAndroid: /android/.test(ua),
    isAndroidMobile: /android(.+)?mobile/.test(ua),
    isTouchDevice: 'ontouchstart' in window,
    isMobile: /i(phone|pod)/.test(ua) || /android(.+)?mobile/.test(ua),
    isTablet: /ipad/.test(ua) || /macintosh/.test(ua) && 'ontouchstart' in window || /android/.test(ua) && !/mobile/.test(ua)
  };
  /**
   * ロールオーバー
   *
   * @date 2012-10-01
   *
   * @example $('.rollover').rollover();
   * @example $('.rollover').rollover({ over: '-ov' });
   * @example $('.rollover').rollover({ current: '_cr', currentOver: '_cr_ov' });
   * @example $('.rollover').rollover({ down: '_click' });
   */

  $.fn.rollover = function (options) {
    var defaults = {
      over: '_ov',
      current: null,
      currentOver: null,
      down: null
    };
    var settings = $.extend({}, defaults, options);
    var over = settings.over;
    var current = settings.current;
    var currentOver = settings.currentOver;
    var down = settings.down;
    return this.each(function () {
      var src = this.src;
      var ext = /\.(gif|jpe?g|png)(\?.*)?/.exec(src)[0];
      var isCurrent = current && new RegExp(current + ext).test(src);
      if (isCurrent && !currentOver) return;
      var search = isCurrent && currentOver ? current + ext : ext;
      var replace = isCurrent && currentOver ? currentOver + ext : over + ext;
      var overSrc = src.replace(search, replace);
      new Image().src = overSrc;
      $(this).mouseout(function () {
        this.src = src;
      }).mouseover(function () {
        this.src = overSrc;
      });

      if (down) {
        var downSrc = src.replace(search, down + ext);
        new Image().src = downSrc;
        $(this).mousedown(function () {
          this.src = downSrc;
        });
      }
    });
  };
  /**
   * フェードロールオーバー
   *
   * @date 2012-11-21
   *
   * @example $('.faderollover').fadeRollover();
   * @example $('.faderollover').fadeRollover({ over: '-ov' });
   * @example $('.faderollover').fadeRollover({ current: '_cr', currentOver: '_cr_ov' });
   */


  $.fn.fadeRollover = function (options) {
    var defaults = {
      over: '_ov',
      current: null,
      currentOver: null
    };
    var settings = $.extend({}, defaults, options);
    var over = settings.over;
    var current = settings.current;
    var currentOver = settings.currentOver;
    return this.each(function () {
      var src = this.src;
      var ext = /\.(gif|jpe?g|png)(\?.*)?/.exec(src)[0];
      var isCurrent = current && new RegExp(current + ext).test(src);
      if (isCurrent && !currentOver) return;
      var search = isCurrent && currentOver ? current + ext : ext;
      var replace = isCurrent && currentOver ? currentOver + ext : over + ext;
      var overSrc = src.replace(search, replace);
      new Image().src = overSrc;
      $(this).parent().css('display', 'block').css('width', $(this).attr('width')).css('height', $(this).attr('height')).css('background', 'url("' + overSrc + '") no-repeat');
      $(this).parent().hover(function () {
        $(this).find('img').stop().animate({
          opacity: 0
        }, 200);
      }, function () {
        $(this).find('img').stop().animate({
          opacity: 1
        }, 200);
      });
    });
  };
  /**
   * スムーズスクロール
   *
   * @date 2021-03-18
   *
   * @example $.scroller();
   * @example $.scroller({ cancelByMousewheel: true });
   * @example $.scroller({ scopeSelector: '#container', noScrollSelector: '.no-scroll' });
   * @example $.scroller('#content');
   * @example $.scroller('#content', { marginTop: 200, callback: function() { console.log('callback')} });
   */


  $.scroller = function () {
    var self = $.scroller.prototype;

    if (!arguments[0] || _typeof(arguments[0]) === 'object') {
      self.init.apply(self, arguments);
    } else {
      self.scroll.apply(self, arguments);
    }
  };

  $.scroller.prototype = {
    defaults: {
      callback: function callback() {},
      cancelByMousewheel: false,
      duration: 500,
      easing: 'swing',
      hashMarkEnabled: false,
      marginTop: 0,
      noScrollSelector: '.noscroll',
      scopeSelector: 'body'
    },
    init: function init(options) {
      var self = this;
      var settings = this.settings = $.extend({}, this.defaults, options);
      $(settings.scopeSelector).find('a[href^="#"]').not(settings.noScrollSelector).each(function () {
        var hash = this.hash || '#';
        var eventName = 'click.scroller';

        if (hash !== '#' && !$(hash + ', a[name="' + hash.substr(1) + '"]').eq(0).length) {
          return;
        }

        $(this).off(eventName).on(eventName, function (e) {
          e.preventDefault();
          self.scroll(hash, settings);
        });
      });
    },
    scroll: function scroll(id, options) {
      var self = this;
      var settings = options ? $.extend({}, this.defaults, options) : this.settings ? this.settings : this.defaults;
      if (!settings.hashMarkEnabled && id === '#') return;
      var dfd = $.Deferred();
      var win = window;
      var doc = document;
      var $doc = $(doc);
      var $page = $('html, body');
      var scrollEnd = id === '#' ? 0 : $(id + ', a[name="' + id.substr(1) + '"]').eq(0).offset().top - settings.marginTop;
      var windowHeight = $.ua.isAndroidMobile ? Math.ceil(win.innerWidth / win.outerWidth * win.outerHeight) : win.innerHeight || doc.documentElement.clientHeight;
      var scrollableEnd = $doc.height() - windowHeight;
      if (scrollableEnd < 0) scrollableEnd = 0;
      if (scrollEnd > scrollableEnd) scrollEnd = scrollableEnd;
      if (scrollEnd < 0) scrollEnd = 0;
      scrollEnd = Math.floor(scrollEnd);
      $page.stop().animate({
        scrollTop: scrollEnd
      }, {
        duration: settings.duration,
        easing: settings.easing,
        complete: function complete() {
          dfd.resolve();
        }
      });
      dfd.done(function () {
        self.focus(id);
        settings.callback();
        $doc.off('.scrollerMousewheel');
      });

      if (settings.cancelByMousewheel) {
        var mousewheelEvent = 'onwheel' in document ? 'wheel.scrollerMousewheel' : 'mousewheel.scrollerMousewheel';
        $doc.one(mousewheelEvent, function () {
          dfd.reject();
          $page.stop();
        });
      }
    },
    focus: function focus(id) {
      var focusableElements = ['a[href]', 'area[href]', 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', 'select:not([disabled]):not([aria-hidden])', 'textarea:not([disabled]):not([aria-hidden])', 'button:not([disabled]):not([aria-hidden])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'];
      var $target = $(id + ', a[name="' + id.substr(1) + '"]').eq(0);
      var targetIsFocusableElement = $target.is(focusableElements.join());

      if (targetIsFocusableElement) {
        $target.focus();
      } else {
        $target.attr('tabindex', -1).focus().removeAttr('tabindex');
      }
    }
  };
  /**
   * 文字列からオブジェクトに変換したクエリを取得
   *
   * @example $.getQuery();
   * @example $.getQuery('a=foo&b=bar&c=foobar');
   */

  $.getQuery = function (str) {
    if (!str) str = location.search;
    str = str.replace(/^.*?\?/, '');
    var query = {};
    var temp = str.split(/&/);

    for (var i = 0, l = temp.length; i < l; i++) {
      var param = temp[i].split(/=/);
      query[param[0]] = decodeURIComponent(param[1]);
    }

    return query;
  };
  /**
   * 画像をプリロード
   *
   * @date 2012-09-12
   *
   * @example $.preLoadImages('/assets/img/01.jpg');
   */


  var cache = [];

  $.preLoadImages = function () {
    var args_len = arguments.length;

    for (var i = args_len; i--;) {
      var cacheImage = document.createElement('img');
      cacheImage.src = arguments[i];
      cache.push(cacheImage);
    }
  };
  /**
   * タッチデバイスにタッチイベント追加
   *
   * @date 2018-10-03
   *
   * @example $.enableTouchOver();
   * @example $.enableTouchOver('.touchhover');
   */


  $.enableTouchOver = function (target) {
    if (target === undefined) {
      target = 'a, button, .js-touchHover';
    }

    if (!$.ua.isTouchDevice) {
      $('html').addClass('no-touchevents');
    } else {
      $('html').addClass('touchevents');
    }

    $(target).on({
      'touchstart mouseenter': function touchstartMouseenter() {
        $(this).addClass('is-touched');
      },
      'touchend mouseleave': function touchendMouseleave() {
        $(this).removeClass('is-touched');
      }
    });
  };
})(jQuery);
/**
 * __PROJECT_NAME__
 *
 * @date 2017-04-07
 */


var __NAMESPACE__ = function ($) {
  var _init = function _init() {
    $(function () {
      if (!$.ua.isTouchDevice) {
        $('.rollover').rollover();
      }

      if (!$.ua.isMobile) {
        $('a[href^="tel:"]').on('click', function (e) {
          e.preventDefault();
        });
      }

      $.scroller();
      $.enableTouchOver();
    });
  };

  return {
    init: function init() {
      window.console = window.console || {
        log: function log() {}
      };

      _init();
    }
  };
}(jQuery);

__NAMESPACE__.init();