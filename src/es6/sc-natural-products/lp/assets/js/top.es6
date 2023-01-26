/**
 * __sumitomo_chemical__
 *
 * @date 2023-02-02
 */

/* global gsap, ScrollTrigger */

(function($) {
  const sumitomo_chemical_aggro = window.sumitomo_chemical_aggro || {};

  sumitomo_chemical_aggro.Top = function() {
    gsap.registerPlugin(ScrollTrigger);


    // 初期化
    const _init = function() {
      fadeUp();
      kv_anim();
    };

    const fadeUp = () => {
      ScrollTrigger.batch('.js_fadeUp_targer', { // eslint-disable-line
        onEnter: batch => gsap.fromTo(batch, {
          autoAlpha: 0,
          y: 30,
        }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
        }),
        start: '-10% 80%',
        ease: 'Power4.easeOut',
        once: true,
      });
    };

    const kv_anim = () =>  {
      const tl = gsap.timeline();

      const window_size_sm = () => {
        tl.set('.bl_kv_catch_txt_01 > .bl_imgWrapper', {
          y: 40,
        }).set('.bl_kv_catch_txt_02 > .bl_imgWrapper', {
          y: 40,
        }).set('.bl_kv_catch_txt_03 > .bl_imgWrapper', {
          y: 40,
        }).set('.un_kv_txt', {
          y: 20,
        }).to('.bl_kv_catch_txt_01 > .bl_imgWrapper', 0.9, {
          y: 0,
          autoAlpha: 1,
          ease: 'Power4.easeOut',
        }, '+=0.3').to('.bl_kv_catch_txt_02 > .bl_imgWrapper', 0.9, {
          y: 0,
          autoAlpha: 1,
          ease: 'Power4.easeOut',
        }, '-=0.5').to('.bl_kv_catch_txt_03 > .bl_imgWrapper', 0.9, {
          y: 0,
          autoAlpha: 1,
          ease: 'Power4.easeOut',
        }, '-=0.5').to('.un_kv_txt', 0.6  , {
          y: 0,
          autoAlpha: 1,
        }, '-=0.54').to('.un_kv_caution', 0.6, {
          autoAlpha: 1,
        }, '-=0.3');
      };

      const window_size_lg = () => {
        tl.set('.bl_kv_catch_txt_01 > .bl_imgWrapper', {
          y: 40,
        }).set('.bl_kv_catch_txt_02 > .bl_imgWrapper', {
          y: 40,
        }).set('.un_kv_txt', {
          y: 20,
        }).to('.bl_kv_catch_txt_01 > .bl_imgWrapper', 0.9, {
          y: 0,
          autoAlpha: 1,
          ease: 'Power4.easeOut',
        }, '+=0.3').to('.bl_kv_catch_txt_02 > .bl_imgWrapper', 0.9, {
          y: 0,
          autoAlpha: 1,
          ease: 'Power4.easeOut',
        }, '-=0.5').to('.un_kv_txt', 0.6  , {
          y: 0,
          autoAlpha: 1,
        }, '-=0.54').to('.un_kv_caution', 0.6, {
          autoAlpha: 1,
        }, '-=0.3').to('.bl_kv_catch_txt_03 > .bl_imgWrapper', 0.1, {
          autoAlpha: 1,
        });
      };

      if($.ua.isMobile || $.ua.isTablet || window.innerWidth <= 767) {
        window_size_sm();
      } else {
        window_size_lg();
      }
    };

    return {
      init: _init
    };
  }();

  sumitomo_chemical_aggro.Top.init();
})(jQuery);