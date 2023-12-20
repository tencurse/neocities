document.addEventListener("DOMContentLoaded", function () {
  function revealSpoiler(e) {
    e.classList.toggle("spoiler");
    e.classList.toggle("revealed");
  }

  const spoilers = document.querySelectorAll('.spoiler');
  spoilers.forEach((spoiler) => {
    spoiler.addEventListener('click', function() {
      revealSpoiler(this);
    })

    spoiler.addEventListener('touchend', function(evemt) {
      event.preventDefault();
      revealSpoiler(this);
    })
  })
});
