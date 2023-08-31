function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}

// OPEN INVITATION
function openInvitation() {
  var cover = document.getElementById("cover");
  var hiddenDiv = document.getElementById("main");

  const backgroundAudio = document.getElementById("backgroundAudio");

  // Check if the cover is currently visible
  if (cover.style.display !== "none") {
    // Hide the cover and show the hiddenDiv
    cover.style.display = "none";
    hiddenDiv.style.display = "block"; // You can use "block" or "inline-block" depending on your layout
  } else {
    // Show the cover and hide the hiddenDiv
    cover.style.display = "block";
    hiddenDiv.style.display = "none";
  }
}

// ROUTER QUERY PARAMS
document.addEventListener("DOMContentLoaded", function () {
  // Get the URLSearchParams object from the current URL
  const params = new URLSearchParams(window.location.search);
  const paramValue = params.get("to");
  const recipient = document.getElementById("recipient");

  if (paramValue) {
    let str = paramValue.replace(/\w+/g, function (w) {
      return w[0].toUpperCase() + w.slice(1).toLowerCase();
    });
    recipient.textContent = `${str}`;
  } else {
    recipient.textContent = "Recipient";
  }
});

// SET TEXT BY QUERY SELECTOR
function setText(selector, text) {
  const nodeList = document.querySelectorAll(selector, text);
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].textContent = text;
  }

  return nodeList;
}

// EFEK TEXT
// function toggleAnimation() {
//   var textElement = document.querySelector(".small-to-big");
//   textElement.classList.toggle("active");
// }

function payment(params) {
  console.log("payment");
}

window.onload = function () {
  // Or window.addEventListener("load", function() {
  // bride
  setText("#groom", "Galih");
  setText("#bride", "Ratna");

  // akad
  setText("#akad-day", "Sab, 26 Agustus 2023");
  setText("#akad-time", "10.00 / 11.00 WIB");
  setText("#akad-venue", "Masjid Baitussalam");
  setText("#akad-loc", "Yogyakarta");

  // resepsi
  setText("#reception-day", "Minggu, 27 Agustus 2023");
  setText("#reception-time", "10.00 - 15.00 WIB");
  setText("#reception-venue", "Hotel Amarello");
  setText("#reception-loc", "Yogyakarta");

  // card
  setText("#card-name", "Galih");
  setText("#card-num", "137002251313");
};
