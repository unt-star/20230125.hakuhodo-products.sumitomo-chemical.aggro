/**
 * __sumitomo_chemical__
 *
 * @date 2023-02-02
 */

(function ($) {
  var sumitomo_chemical_aggro = window.sumitomo_chemical_aggro || {};

  sumitomo_chemical_aggro.Top = function () {
    gsap.registerPlugin(ScrollTrigger);
    window.addEventListener('resize', function () {
      ScrollTrigger.refresh();
    }); 

    var _init = function _init() {
      window.addEventListener('load', function () {
        kv_anim();
        pageTop();
        fadeUp();
      });
    };

    var fadeUp = function fadeUp() {
      ScrollTrigger.batch('.js_fadeUp_targer', {
        onEnter: function onEnter(batch) {
          return gsap.fromTo(batch, {
            autoAlpha: 0,
            y: 30
          }, {
            autoAlpha: 1,
            y: 0,
            duration: 0.6
          });
        },
        start: '-10% 80%',
        ease: 'Power4.easeOut',
        once: true
      });
    };

    var kv_anim = function kv_anim() {
      var tl = gsap.timeline();

      var window_size_sm = function window_size_sm() {
        tl.set('.bl_kv_catch_txt_01 > .bl_imgWrapper', {
          y: 40
        }).set('.bl_kv_catch_txt_02 > .bl_imgWrapper', {
          y: 40
        }).set('.bl_kv_catch_txt_03 > .bl_imgWrapper', {
          y: 40
        }).set('.un_kv_txt', {
          y: 20
        }).to('.bl_kv_catch_txt_01 > .bl_imgWrapper', 0.9, {
          y: 0,
          autoAlpha: 1,
          ease: 'Power4.easeOut'
        }, '+=0.3').to('.bl_kv_catch_txt_02 > .bl_imgWrapper', 0.9, {
          y: 0,
          autoAlpha: 1,
          ease: 'Power4.easeOut'
        }, '-=0.5').to('.bl_kv_catch_txt_03 > .bl_imgWrapper', 0.9, {
          y: 0,
          autoAlpha: 1,
          ease: 'Power4.easeOut'
        }, '-=0.5').to('.un_kv_txt', 0.6, {
          y: 0,
          autoAlpha: 1
        }, '-=0.54').to('.un_kv_caution', 0.6, {
          autoAlpha: 1
        }, '-=0.3');
      };

      var window_size_lg = function window_size_lg() {
        tl.set('.bl_kv_catch_txt_01 > .bl_imgWrapper', {
          y: 40
        }).set('.bl_kv_catch_txt_02 > .bl_imgWrapper', {
          y: 40
        }).set('.un_kv_txt', {
          y: 20
        }).to('.bl_kv_catch_txt_01 > .bl_imgWrapper', 0.9, {
          y: 0,
          autoAlpha: 1,
          ease: 'Power4.easeOut'
        }, '+=0.3').to('.bl_kv_catch_txt_02 > .bl_imgWrapper', 0.9, {
          y: 0,
          autoAlpha: 1,
          ease: 'Power4.easeOut'
        }, '-=0.5').to('.un_kv_txt', 0.6, {
          y: 0,
          autoAlpha: 1
        }, '-=0.54').to('.un_kv_caution', 0.6, {
          autoAlpha: 1
        }, '-=0.3').to('.bl_kv_catch_txt_03 > .bl_imgWrapper', 0.1, {
          autoAlpha: 1
        });
      };

      if ($.ua.isMobile || $.ua.isTablet || window.innerWidth <= 767) {
        window_size_sm();
      } else {
        window_size_lg();
      }
    };

    var pageTop = function pageTop() {
      var target = document.querySelector('.js_pagetop');
      gsap.to(target, {
        scrollTrigger: {
          trigger: '.bl_section_ttl_cont',
          start: '0% 100%',
          onEnter: function onEnter() {
            target.classList.add('is-show');
          },
          onLeaveBack: function onLeaveBack() {
            target.classList.remove('is-show');
          }
        }
      });
      gsap.to(target, {
        scrollTrigger: {
          trigger: '.ly_footer',
          start: '0% 100%',
          onEnter: function onEnter() {
            target.classList.add('absolute');
          },
          onLeaveBack: function onLeaveBack() {
            target.classList.remove('absolute');
          }
        }
      });
    };

    return {
      init: _init
    };
  }();

  sumitomo_chemical_aggro.Top.init();
})(jQuery);