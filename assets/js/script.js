window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

 function getLocation() {
      const result = document.getElementById("result");

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        result.innerHTML = "Geolocation is not supported by this browser.";
      }
    }

    function showPosition(position) {
      document.getElementById("result").innerHTML =
        "Latitude: " + position.coords.latitude + "<br>" +
        "Longitude: " + position.coords.longitude;
    }

    function showError(error) {
      switch(error.code) {
        case error.PERMISSION_DENIED:
          result.innerHTML = "User denied the request for Geolocation.";
          break;
        case error.POSITION_UNAVAILABLE:
          result.innerHTML = "Location information is unavailable.";
          break;
        case error.TIMEOUT:
          result.innerHTML = "The request to get user location timed out.";
          break;
        default:
          result.innerHTML = "An unknown error occurred.";
      }
    }