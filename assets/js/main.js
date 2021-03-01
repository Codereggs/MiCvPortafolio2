/**
 * Template Name: MyResume - v2.2.1
 * Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
!(function ($) {
  "use strict";

  // Preloader
  $(window).on("load", function () {
    if ($("#preloader").length) {
      $("#preloader")
        .delay(100)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });

  // Hero typed
  if ($(".typed").length) {
    var typed_strings = $(".typed").data("typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on("click", ".nav-menu a, .scrollto", function (e) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top;

        $("html, body").animate(
          {
            scrollTop: scrollto,
          },
          1500,
          "easeInOutExpo"
        );

        if ($(this).parents(".nav-menu, .mobile-nav").length) {
          $(".nav-menu .active, .mobile-nav .active").removeClass("active");
          $(this).closest("li").addClass("active");
        }

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass(
            "icofont-navigation-menu icofont-close"
          );
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function () {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top;
        $("html, body").animate(
          {
            scrollTop: scrollto,
          },
          1500,
          "easeInOutExpo"
        );
      }
    }
  });

  $(document).on("click", ".mobile-nav-toggle", function (e) {
    $("body").toggleClass("mobile-nav-active");
    $(".mobile-nav-toggle i").toggleClass(
      "icofont-navigation-menu icofont-close"
    );
  });

  $(document).click(function (e) {
    var container = $(".mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($("body").hasClass("mobile-nav-active")) {
        $("body").removeClass("mobile-nav-active");
        $(".mobile-nav-toggle i").toggleClass(
          "icofont-navigation-menu icofont-close"
        );
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $("section");
  var main_nav = $(".nav-menu, #mobile-nav");

  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop() + 300;

    nav_sections.each(function () {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find("li").removeClass("active");
        }
        main_nav
          .find('a[href="#' + $(this).attr("id") + '"]')
          .parent("li")
          .addClass("active");
      }
      if (cur_pos < 200) {
        $(".nav-menu ul:first li:first").addClass("active");
      }
    });
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500,
      "easeInOutExpo"
    );
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000,
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }

  // Porfolio isotope and filter
  $(window).on("load", function () {
    var portfolioIsotope = $(".portfolio-container").isotope({
      itemSelector: ".portfolio-item",
    });

    $("#portfolio-flters li").on("click", function () {
      $("#portfolio-flters li").removeClass("filter-active");
      $(this).addClass("filter-active");

      portfolioIsotope.isotope({
        filter: $(this).data("filter"),
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(".venobox").venobox({
      share: false,
    });

    // Initiate aos_init() function
    aos_init();
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1,
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1,
  });
})(jQuery);

// Skills buttom

let switche = true;
const $boton = document.querySelector(".switch-button__label"),
 $hardSkills = document.querySelector(".hard-skills"),
 $softSkills = document.querySelector(".soft-skills"),
 $html5 = document.querySelector(".html5"),
 $css3 = document.querySelector(".css3"),
 $bootstrap = document.querySelector(".bootstrap"),
 $js = document.querySelector(".js"),
 $php = document.querySelector(".php"),
 $jquery = document.querySelector(".jquery"),
 $wp = document.querySelector(".wp"),
 $git = document.querySelector(".git"),
 $github = document.querySelector(".github-skills"),
 $skill = document.querySelector(".skill"),
 $arrayNewSkillsText = [{new1: document.createElement("p")},{new2: document.createElement("p")},{new3: document.createElement("p")}];
 $newSkillsText = document.createElement("p");
window.document.addEventListener("click", (e)=>{
  console.log(e.target);
  
  if(e.target.matches(".switch-button__label")){
    if (switche) {
      $hardSkills.style.display = "none";
      $softSkills.style.display = "flex";
      switche = false;
    } else {
      $hardSkills.style.display = "flex";
      $softSkills.style.display = "none";
      switche = true;
    }
  }

  if(e.target.matches(".botonCV")){
    alert("Muchas gracias por descargar mi CV. Dentro de poco empezará la descarga.");
  }

  
});



window.document.addEventListener("mouseover", (e) =>{
  console.log(e.target);

  if(document.getElementById("skills-text") != null) {
    return document.getElementById("skills-text").remove();
}

  if(e.target.matches(".htmlimg")){
  $newSkillsText.innerHTML = "HTML5";
  $newSkillsText.setAttribute("id","skills-text");
  $html5.insertAdjacentElement("afterend",$newSkillsText);
  } 
  
  if(e.target.matches(".bootstrapimg")){
    $newSkillsText.innerHTML = "Bootstrap";
    $newSkillsText.setAttribute("id","skills-text");
    $bootstrap.insertAdjacentElement("afterend",$newSkillsText);
    } 
  
    if(e.target.matches(".cssimg")){
      $newSkillsText.innerHTML = "CSS3";
      $newSkillsText.setAttribute("id","skills-text");
      $css3.insertAdjacentElement("afterend",$newSkillsText);
      } 
     if(e.target.matches(".jsimg")){
      $newSkillsText.innerHTML = "Javascript";
      $newSkillsText.setAttribute("id","skills-text");
      $js.insertAdjacentElement("afterend",$newSkillsText);
      } 
      if(e.target.matches(".phpimg")){
        $newSkillsText.innerHTML = "PHP";
        $newSkillsText.setAttribute("id","skills-text");
        $php.insertAdjacentElement("afterend",$newSkillsText);
        } 
      if(e.target.matches(".jqueryimg")){
          $newSkillsText.innerHTML = "Jquery";
          $newSkillsText.setAttribute("id","skills-text");
          $jquery.insertAdjacentElement("afterend",$newSkillsText);
          } 
      if(e.target.matches(".wpimg")){
            $newSkillsText.innerHTML = "Wordpress";
            $newSkillsText.setAttribute("id","skills-text");
            $wp.insertAdjacentElement("afterend",$newSkillsText);
            } 
      if(e.target.matches(".gitimg")){
              $newSkillsText.innerHTML = "GIT";
              $newSkillsText.setAttribute("id","skills-text");
              $git.insertAdjacentElement("afterend",$newSkillsText);
              } 
      if(e.target.matches(".githubimg")){
                $newSkillsText.innerHTML = "Github";
                $newSkillsText.setAttribute("id","skills-text");
                $github.insertAdjacentElement("afterend",$newSkillsText);
                } 


  
    

          
});

/*$newSkillsText.innerHTML = "Html";
$newSkillsText.classList.add("skills-text");
$skillsIMG.insertAdjacentElement("beforeend",$newSkillsText);*/


