document.addEventListener("DOMContentLoaded", function () {
  var loadingDiv = document.getElementById("loadingDiv");

  //Hide the loading page(div) after less than 6 seconds
  // setTimeout(function () {
  //   loadingDiv.classList.add("hidden");
  // }, 5800);

  //heart bit effect for the logo in the laoding page
  function logoHeartBeat() {
    var logo = document.getElementById("logo");
    logo.style.transform = "scale(1.2)";

    setTimeout(function () {
      logo.style.transform = "scale(1)";
    }, 500);
  }
  //call the function here is not necesary but it makes the effect start as soon as the page loades
  logoHeartBeat();

  //Make the heart bit effect repeat for 6 seconds
  var interval = setInterval(logoHeartBeat, 1000);
  setTimeout(function () {
    clearInterval(interval);
  }, 6000);
});
