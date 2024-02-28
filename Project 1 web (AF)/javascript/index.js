const fiets = document.querySelector("#fiets1");
let richting = 'rechts'; // Richting van de beweging

function fietsen() {
  let huidigeMarginLeft = 20;

  const verplaatsFiets = setInterval(() => {
    if (richting === 'rechts') {
      huidigeMarginLeft += 0.2; // Je kunt hier een ander percentage gebruiken voor een andere snelheid
    } else {
      huidigeMarginLeft -= 0.2; // Je kunt hier een ander percentage gebruiken voor een andere snelheid
    }

    fiets.style.marginLeft = huidigeMarginLeft + '%';

    // Controleer of de fietsen het uiterste punt hebben bereikt
    if (huidigeMarginLeft >= 70) {
      // Verander de bewegingsrichting
      richting = 'links';
      //draait het plaatje om zodat de fiets de andere kant op fiets
      fiets.style.transform = 'scaleX(-1)';
    } else if (huidigeMarginLeft <= 20 ) {
      // Verander de bewegingsrichting
      richting = 'rechts';
      //draait het plaatje om zodat de fiets de andere kant op fiets
      fiets.style.transform = 'scaleX(1)';
    }
  }, 20); // Interval van 20 milliseconden voor de animatie
}

fietsen(); // Start de animatie



function showInfo(fietsId) {
  var infoDiv = document.getElementById(fietsId + "Info");
  infoDiv.style.display = "block";
}

function hideInfo(fietsId) {
  var infoDiv = document.getElementById(fietsId + "Info");
  infoDiv.style.display = "none";
}