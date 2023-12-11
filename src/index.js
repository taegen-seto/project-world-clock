function updateTime() {
  let cityOneElement = document.querySelector("#city-one");
  if (cityOneElement) {
    let cityOneDateElement = cityOneElement.querySelector(".date");
    let cityOneTimeElement = cityOneElement.querySelector(".time");

    let cityOneTime = moment().tz("Europe/Madrid");

    cityOneDateElement.innerHTML = cityOneTime.format("dddd, MMMM Do YYYY");
    cityOneTimeElement.innerHTML = cityOneTime.format(
      "hh:mm:ss [<small>]a[</small>]"
    );
  }

  let cityTwoElement = document.querySelector("#city-two");
  if (cityTwoElement) {
    let cityTwoDateElement = cityTwoElement.querySelector(".date");
    let cityTwoTimeElement = cityTwoElement.querySelector(".time");

    let cityTwoTime = moment().tz("America/Jamaica");

    cityTwoDateElement.innerHTML = cityTwoTime.format("dddd, MMMM Do YYYY");
    cityTwoTimeElement.innerHTML = cityTwoTime.format(
      "hh:mm:ss [<small>]a[</small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);
