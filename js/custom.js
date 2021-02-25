(function () {
    // ICONS
    feather.replace();

    // LOADING
    $(".loader-wrapper").slideUp(800, function () {
        $("body").css("overflow", "visible");
    });

    // LOCOMOTIVE
    const scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        smoothMobile: false,
    });
    setTimeout(() => {
        scroll.update();
    }, 2000);

    // GALLERY POPUP MODAL
    var imgPopup = $(".img-popup");
    var imgCont = $(".g-item");
    var popupImage = $(".img-popup img");
    var closeBtn = $(".close-btn");

    imgCont.on("click", function () {
        var img_src = $(this).children("img").attr("src");
        imgPopup.children("img").attr("src", img_src);
        imgPopup.addClass("opened");
    });
    $(imgPopup, closeBtn).on("click", function () {
        imgPopup.removeClass("opened");
        imgPopup.children("img").attr("src", "");
    });
    popupImage.on("click", function (e) {
        e.stopPropagation();
    });

    // HERO ILLUSTRATION
    TweenMax.from(".jupiter", { y: 400, opacity: 0, duration: 2 });
    TweenMax.from(".satelite", { y: 200, x: 200, opacity: 0, duration: 2 });
    TweenMax.from(".moon1", {
        y: 200,
        opacity: 0,
        ease: Back.easeOut.config(1.7),
        duration: 2,
        onComplete: () => {
            setTimeout(() => {
                $(".satelite").attr({
                    "data-scroll": "",
                    "data-scroll-speed": "3",
                    "data-scroll-position": "top",
                });
                $(".jupiter").attr({
                    "data-scroll": "",
                    "data-scroll-speed": "-2",
                    "data-scroll-position": "top",
                });
                scroll.update();
            }, 500);
        },
    });

    // ONSCROLL MOBILE NAVBAR
    const navbar = document.querySelector("header");
    const navLinks = document.querySelectorAll("nav li a");
    const hamburger = document.querySelector(".nav-toggle-label span");
    scroll.on("scroll", (e) => {
        if (e.scroll.y > 0) {
            document.querySelector(".mobile-view").style.transform =
                "translate(0px, 0px)";
            document.querySelector(".mobile-view").style.transform +=
                "scale(1)";
            hamburger.classList.remove("white-hamburger");
            hamburger.classList.add("black-hamburger");

            navbar.style.backgroundColor = "#ffffff";
            navbar.style.boxShadow = "0px 1px 10px #00000014";
            navLinks.forEach((navlink) => {
                navlink.style.color = "black";
            });
        } else {
            document.querySelector(".mobile-view").style.transform =
                "translate(10vw, 18vh)";
            document.querySelector(".mobile-view").style.transform +=
                "scale(4, 4.5)";
            navbar.style.backgroundColor = "transparent";
            hamburger.classList.add("white-hamburger");
            hamburger.classList.remove("black-hamburger");
            navbar.style.boxShadow = "0px 0px 0px #00000014";
            navLinks.forEach((navlink) => {
                navlink.style.color = "#d6d0c4";
            });
        }
    });

    // ONHOVER GALLERY IMAGES
    $(".g-item").on("mouseenter", () => {
        $(".g-item").find("img").css("transition", "all 0.6s ease-in");
    });

    var figure = $(".video").hover(hoverVideo, hideVideo);

    function hoverVideo(e) {
        $("video", this).get(0).play();
    }

    function hideVideo(e) {
        $("video", this).get(0).currentTime = 0;
        $("video", this).get(0).pause();
    }
    let lotties = document.querySelectorAll(".lottie");
    var colors = [
        "linear-gradient(45deg, rgb(226, 239, 255), transparent)",
        "linear-gradient(45deg, #fff1ea, transparent)",
        "linear-gradient(45deg, #e4fbff, transparent)",
        "linear-gradient(45deg, #ffe4f3, transparent)",
        "linear-gradient(45deg, #e2efff, transparent)",
    ];
    lotties.forEach((lottie) => {
        lottie.style.background =
            colors[Math.floor(Math.random() * colors.length)];
    });
})(jQuery);
