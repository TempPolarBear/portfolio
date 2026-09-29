(() => {
  const configureLightbox = () => {
    if (window.lightbox && typeof window.lightbox.option === "function") {
      window.lightbox.option({
        wrapAround: true,
        alwaysShowNavOnTouchDevices: true,
        albumLabel: "Image %1 of %2",
        showImageNumberLabel: true,
      });
    }

    const closeButton = document.querySelector("#lightbox .lb-close");
    const previousButton = document.querySelector("#lightbox .lb-prev");
    const nextButton = document.querySelector("#lightbox .lb-next");

    closeButton?.setAttribute("aria-label", "Close gallery");
    previousButton?.setAttribute("aria-label", "Previous image");
    nextButton?.setAttribute("aria-label", "Next image");
  };

  document.addEventListener(
    "click",
    (event) => {
      if (event.target?.id === "lightboxOverlay") {
        event.preventDefault();
        event.stopImmediatePropagation();
        return;
      }

      if (event.target.closest("a[data-lightbox]")) {
        window.setTimeout(configureLightbox, 0);
      }
    },
    true,
  );

  document.addEventListener("DOMContentLoaded", configureLightbox);
})();
