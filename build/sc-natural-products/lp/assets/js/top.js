!function(r){var t=window.sumitomo_chemical_aggro||{};t.Top=function(){var a=this;gsap.registerPlugin(ScrollTrigger);var t=function(){ScrollTrigger.batch(".js_fadeUp_targer",{onEnter:function(t){return gsap.fromTo(t,{autoAlpha:0,y:30},{autoAlpha:1,y:0,duration:.6})},start:"-10% 80%",ease:"Power4.easeOut",once:!0})},e=function(){var t=gsap.timeline();r.ua.isMobile||r.ua.isTablet||window.innerWidth<=767?t.set(".bl_kv_catch_txt_01 > .bl_imgWrapper",{y:40}).set(".bl_kv_catch_txt_02 > .bl_imgWrapper",{y:40}).set(".bl_kv_catch_txt_03 > .bl_imgWrapper",{y:40}).set(".un_kv_txt",{y:20}).to(".bl_kv_catch_txt_01 > .bl_imgWrapper",.9,{y:0,autoAlpha:1,ease:"Power4.easeOut"},"+=0.3").to(".bl_kv_catch_txt_02 > .bl_imgWrapper",.9,{y:0,autoAlpha:1,ease:"Power4.easeOut"},"-=0.5").to(".bl_kv_catch_txt_03 > .bl_imgWrapper",.9,{y:0,autoAlpha:1,ease:"Power4.easeOut"},"-=0.5").to(".un_kv_txt",.6,{y:0,autoAlpha:1},"-=0.54").to(".un_kv_caution",.6,{autoAlpha:1},"-=0.3"):t.set(".bl_kv_catch_txt_01 > .bl_imgWrapper",{y:40}).set(".bl_kv_catch_txt_02 > .bl_imgWrapper",{y:40}).set(".un_kv_txt",{y:20}).to(".bl_kv_catch_txt_01 > .bl_imgWrapper",.9,{y:0,autoAlpha:1,ease:"Power4.easeOut"},"+=0.3").to(".bl_kv_catch_txt_02 > .bl_imgWrapper",.9,{y:0,autoAlpha:1,ease:"Power4.easeOut"},"-=0.5").to(".un_kv_txt",.6,{y:0,autoAlpha:1},"-=0.54").to(".un_kv_caution",.6,{autoAlpha:1},"-=0.3").to(".bl_kv_catch_txt_03 > .bl_imgWrapper",.1,{autoAlpha:1})},o=function(){var t=document.querySelector(".js_pagetop");gsap.to(t,{scrollTrigger:{trigger:".bl_section_ttl_cont",start:"0% 100%",onEnter:function(){t.classList.add("is-show")},onLeaveBack:function(){t.classList.remove("is-show")}}})},_=function(){MicroModal.init({disableFocus:!0,awaitOpenAnimation:!0,awaitCloseAnimation:!0,disableScroll:!0,onClose:function(t){t.querySelector("video")&&Array.from(t.querySelectorAll("video")).forEach(function(t){t.pause()}),t.classList.contains("js_biorational_modal")&&a.global_modal_slide_container.Components.Autoplay.play()}})};return{init:function(){t(),e(),o(),_()}}}(),t.Top.init()}(jQuery);