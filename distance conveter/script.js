(function () {
  "use strict";

  let convertType = "miles";
  const heading = document.querySelector("h1");
  const intro = document.querySelector("p");
  const answerDiv = document.getElementById("answer");
  const form = document.getElementById("convert");

  document.addEventListener("keydown", function () {
    let key = event.code;
    // alert(key);
    if (key === "KeyK") {
      convertType = "kilometers";
      heading.innerHTML = "Kilometers to Miles Converter";
      intro.innerHTML =
        "<p>Type in a number of kilometers and click the button to convert the distance to miles.</p>";
    } else if (key === "KeyM") {
      convertType = "miles";
      heading.innerHTML = "Miles to Kilometers Converter";
      intro.innerHTML =
        "<p>Type in a number of miles and click the button to convert the distance to kilometers.</p>";
    }
  });

  document.addEventListener("submit", function (event) {
    event.preventDefault();
    const distance = parseFloat(document.getElementById("distance").value);

    // See if distance contains a number or not.................
    if (distance) {
      if (convertType == "miles") {
        const conversion = (distance * 1.609344).toFixed(3);

        answer.innerHTML = `<h2>${distance} miles are equal to ${conversion} KMs</h2>`;
      } else {
        const conversion = (distance * 0.621371192).toFixed(3);

        answer.innerHTML = `<h2>${distance} kilometers are equal to ${conversion} Miles</h2>`;
      }
    } else {
      answer.innerHTML = "Please provide a number!";
    }
  });
})();
