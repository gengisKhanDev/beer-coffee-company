document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, {
    indicators: true,
    padding: 200,
  });

  var urlPDF = document.querySelectorAll(".pdf-site");

  urlPDF.forEach(function (element) {
    element.addEventListener("click", function (event) {
      console.log(element.classList.contains("carta-bcc"))
      if (element.classList.contains("carta-bcc") || element.closest(".carousel-item").classList.contains("active")) {
        window.open("img/menubcc.pdf", "_blank");
      }
      else {
        event.preventDefault();
      }
    });
  });
});
