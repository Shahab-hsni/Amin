$(document).ready(() => {
  //media query variables
  const mq0 = window.matchMedia("screen and (min-width: 766px)");
  const mq1 = window.matchMedia(
    "screen and (min-width: 376px) and (max-width: 765px)"
  );

  //page elements variables
  let reveal_btn = $("#reveal-btn");
  let reveal_msg = $("#reveal-message");
  let see_more_area = $("#see-more");

  //animation timeline variables
  let tl0 = gsap.timeline();
  let tl1 = gsap.timeline();

  if (!mq0.matches) {
    tl0
      .from("#logo", { duration: 3, y: 1500, scale: 0, ease: "bounce" })
      .from(
        ".logo-svg",
        {
          duration: 3,
          opacity: 0,
          ease: "slow",
          onComplete: enable_button,
        },
        "-=2"
      )
      .from(reveal_msg, { duration: 0.5, opacity: 0, ease: "slow" }, "-=1")
      .from(
        "#reveal-btn",
        { duration: 0.5, opacity: 0, ease: "slow" },
        "-=0.4"
      );
  } else {
    tl0
      .from("#logo", { duration: 3, y: 1800, scale: 0, ease: "bounce" })
      .from(
        ".logo-svg",
        {
          duration: 3,
          opacity: 0,
          ease: "slow",
          onComplete: enable_button,
        },
        "-=2"
      )
      .from(reveal_msg, { duration: 0.5, opacity: 0, ease: "slow" })
      .from(
        "#reveal-btn",
        { duration: 0.5, opacity: 0, ease: "slow" },
        "-=0.4"
      );
  }

  function enable_button() {
    reveal_btn.removeClass("d-none");
    reveal_btn.addClass("d-flex");

    reveal_msg.removeClass("d-none");
    reveal_msg.addClass("d-flex");
  }

  $(".btn-see-more").on("click", function (e) {
    e.preventDefault();

    if (mq0.matches) {
      tl1
        .to("#logo", { duration: 2, y: -3200, scale: 10, ease: "slow" })
        .to(
          ".logo-svg",
          { duration: 2, y: 200, scale: 0.1, ease: "slow" },
          "-=2"
        )
        .to(
          ".in-circle",
          { duration: 2, y: 13.2, scale: 0.2, ease: "slow" },
          "-=4"
        )
        .to("#reveal-btn", { duration: 0.5, opacity: 0, ease: "slow" }, "-=2")
        .to(
          reveal_msg,
          { duration: 0.5, opacity: 0, ease: "slow", onComplete: see_more },
          "-=2"
        );
    } else if (!mq1.matches && !mq0.matches) {
      tl1
        .to("#logo", { duration: 2, y: -900, scale: 5, ease: "slow" })
        .to(
          ".logo-svg",
          { duration: 2, y: 105, scale: 0.15, ease: "slow" },
          "-=2"
        )
        .to(
          ".in-circle",
          { duration: 2, y: 8, scale: 0.3, ease: "slow" },
          "-=4"
        )
        .to("#reveal-btn", { duration: 0.5, opacity: 0, ease: "slow" }, "-=2")
        .to(
          reveal_msg,
          { duration: 0.5, opacity: 0, ease: "slow", onComplete: see_more },
          "-=2"
        );
    } else if (mq1.matches && !mq0.matches) {
      tl1
        .to("#logo", { duration: 2, y: -900, scale: 4, ease: "slow" })
        .to(
          ".logo-svg",
          { duration: 2, y: 125, scale: 0.2, ease: "slow" },
          "-=2"
        )
        .to(
          ".in-circle",
          { duration: 2, y: 12, scale: 0.2, ease: "slow" },
          "-=4"
        )
        .to("#reveal-btn", { duration: 0.5, opacity: 0, ease: "slow" }, "-=2")
        .to(
          reveal_msg,
          { duration: 0.5, opacity: 0, ease: "slow", onComplete: see_more },
          "-=2"
        );
    }

    function see_more() {
      reveal_btn.removeClass("d-flex");
      reveal_btn.addClass("d-none");

      reveal_msg.removeClass("d-flex");
      reveal_msg.addClass("d-none");

      see_more_area.removeClass("d-none");
      see_more_area.addClass("d-flex");

      gsap.from(see_more_area, {
        duration: 2,
        opacity: 0,
        ease: "power2",
        delay: 1,
      });
    }
  });

  $("body").on("scroll", function () {
    if (isOnScreen($("#below-landing"))) {
    }
  });

  function see_log_in() {
    let log_in_card = $("#log-in");

    log_in_card.removeClass("d-none");
    log_in_card.addClass("d-flex");

    gsap.from(log_in_card, {
      duration: 2,
      opacity: 0,
      ease: "power2",
      delay: 1,
    });
  }

  function isOnScreen(element) {
    var curPos = element.offset();
    var curTop = curPos.top;
    var screenHeight = $(window).height();
    return curTop > screenHeight ? false : true;
  }
});
