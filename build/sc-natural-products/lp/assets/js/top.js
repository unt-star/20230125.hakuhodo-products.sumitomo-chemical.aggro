!function(_){var t=window.sumitomo_chemical_aggro||{};t.Top=function(){gsap.registerPlugin(ScrollTrigger),window.addEventListener("resize",function(){ScrollTrigger.refresh()});var t=function(){ScrollTrigger.batch(".js_fadeUp_targer",{onEnter:function(t){return gsap.fromTo(t,{autoAlpha:0,y:30},{autoAlpha:1,y:0,duration:.6})},start:"-10% 80%",ease:"Power4.easeOut",once:!0,markers:!0})},e=function(){var t=gsap.timeline();_.ua.isMobile||_.ua.isTablet||window.innerWidth<=767?t.set(".bl_kv_catch_txt_01 > .bl_imgWrapper",{y:40}).set(".bl_kv_catch_txt_02 > .bl_imgWrapper",{y:40}).set(".bl_kv_catch_txt_03 > .bl_imgWrapper",{y:40}).set(".un_kv_txt",{y:20}).to(".bl_kv_catch_txt_01 > .bl_imgWrapper",.9,{y:0,autoAlpha:1,ease:"Power4.easeOut"},"+=0.3").to(".bl_kv_catch_txt_02 > .bl_imgWrapper",.9,{y:0,autoAlpha:1,ease:"Power4.easeOut"},"-=0.5").to(".bl_kv_catch_txt_03 > .bl_imgWrapper",.9,{y:0,autoAlpha:1,ease:"Power4.easeOut"},"-=0.5").to(".un_kv_txt",.6,{y:0,autoAlpha:1},"-=0.54").to(".un_kv_caution",.6,{autoAlpha:1},"-=0.3"):t.set(".bl_kv_catch_txt_01 > .bl_imgWrapper",{y:40}).set(".bl_kv_catch_txt_02 > .bl_imgWrapper",{y:40}).set(".un_kv_txt",{y:20}).to(".bl_kv_catch_txt_01 > .bl_imgWrapper",.9,{y:0,autoAlpha:1,ease:"Power4.easeOut"},"+=0.3").to(".bl_kv_catch_txt_02 > .bl_imgWrapper",.9,{y:0,autoAlpha:1,ease:"Power4.easeOut"},"-=0.5").to(".un_kv_txt",.6,{y:0,autoAlpha:1},"-=0.54").to(".un_kv_caution",.6,{autoAlpha:1},"-=0.3").to(".bl_kv_catch_txt_03 > .bl_imgWrapper",.1,{autoAlpha:1})},a=function(){var t=document.querySelector(".js_pagetop");gsap.to(t,{scrollTrigger:{trigger:".bl_section_ttl_cont",start:"0% 100%",onEnter:function(){t.classList.add("is-show")},onLeaveBack:function(){t.classList.remove("is-show")}}})};return{init:function(){window.addEventListener("load",function(){e(),a(),t()})}}}(),t.Top.init()}(jQuery);