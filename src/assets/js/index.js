document.addEventListener("DOMContentLoaded", function () {
  function revealSpoiler(e) {
    e.classList.toggle("spoiler");
    e.classList.toggle("revealed");
  }

  const spoilers = document.querySelectorAll(".spoiler");
  if (spoilers != null) {
    spoilers.forEach((spoiler) => {
      spoiler.addEventListener("click", function () {
        revealSpoiler(this);
      });

      spoiler.addEventListener("touchend", function (evemt) {
        event.preventDefault();
        revealSpoiler(this);
      });
    });
  }

  const randomLink = document.getElementById("randomLink");
  if (randomLink != null) {
    const linkGroup = document.querySelector(".outlink-group");

    randomLink.addEventListener("click", function () {
      const sites = linkGroup.getElementsByTagName("a");

      const index = Math.floor(Math.random() * sites.length + 1);

      const link = sites[index % sites.length].href;

      window.open(link, "_blank");
    });
  }
});
