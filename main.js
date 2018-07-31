//window.onscroll = function() {myFunction()};

/*var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}*/
/*
if (screen.width <= 900) {
  document.location = "mobile.html";
}
*/

if (window.confirm('Greetings! We have updated our Privacy Policy. If you click OK you will be redirected to the updated Privacy Policy. Cancel will load the website.')) {
  window.location.href = 'privacy.pdf';
};

/*Weather.getCurrent("Paris", function (current) {
  console.log(
    ["currently:", current.temperature(), "and", current.conditions()].join(" ")
  );
});

Weather.getForecast("Paris", function (forecast) {
  console.log("Forecast High in Kelvin: " + forecast.high());
  console.log("Forecast High in Fahrenheit" + Weather.kelvinToFahrenheit(forecast.high()));
  console.log("Forecast High in Celsius" + Weather.kelvinToCelsius(forecast.high()));
});*/
