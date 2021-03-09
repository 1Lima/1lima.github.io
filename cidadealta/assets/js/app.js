document.addEventListener("DOMContentLoaded", () => {
  let timeline = new TimelineMax();

  timeline
    .fromTo(
      ".bg-loader",
      2,
      { width: "100%" },
      { width: "0%", delay: 2, ease: Expo.easeInOut }
    )
    .fromTo(
      ".bg-video",
      2,
      { width: "0%", opacity: 0 },
      { width: "100%", opacity: 1, ease: Expo.easeInOut },
      "-=1"
    )
    .fromTo(
      ".logo",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeInOut },
      "-=0.5"
    )
    .fromTo(
      ".nav-list",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeInOut },
      "-=0.5"
    )
    .fromTo(
      ".title",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeInOut },
      "-=0.5"
    )
    .fromTo(
      ".description",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeInOut },
      "-=0.5"
    )
    .fromTo(
      ".credits",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeInOut },
      "-=0.5"
    )
    .fromTo(
      ".alta-image",
      0.7,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, ease: Expo.easeInOut },
      "-=0.5"
    );
});
