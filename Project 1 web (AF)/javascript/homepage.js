var text = 'Fluitende Fietser'; //de titel
var lengteText = text.length; //hij kijkt hoelang de titel is
let index = 0;

var intro = document.getElementById('intro');


function schrijfTekst(){
  //kijkt of index kleiner is dan lengteText
    if(index <lengteText){
  //voegt aan intro dat is een div de text toe 1 voor 1 totdat index even groot is aan de lengte van de text.
    intro.textContent += text[index];
    index++;//voegt er steeds 1 aan toe
}
}
//zorgt dus dat de functie schrijfText steeds uitgevoerd word
const interval = setInterval(schrijfTekst, 100); // Interval van 100 milliseconden tussen elk karakter

//de afbeeldingen van de carousel
const afbeeldingen = [
  'img/verschillende_fietsen/Cortina_Foss_ND3_Stadsfiets.png', 
  'img/verschillende_fietsen/Cortina_U4_Transport_R3_Transportfiets.png', 
  'img/verschillende_fietsen/Cube-Touring-Hybride-fiets.png'
];

const fotoContainer = document.getElementById('fotos');
let currentIndex = 0;

function toonFoto(index) {

  var foto = document.getElementById("fotos");
  //kijkt hoegroot de fotos zijn
  var fotosize = foto.getBoundingClientRect();

  schermBreedte = window.innerWidth;
  breedteFoto = foto.offsetWidth;
  //kijkt of het beeldscherm grooter is dan 900
if(schermBreedte > 900){
  const verschuiving = -index * ((breedteFoto / 3) + 8);  //verplaatst de foto de breedte van de foto / 3 + 8
  fotoContainer.style.transform = `translateX(${verschuiving}px)`;
}
  //kijkt of het beeldscherm grooter is dan 600 en kleiner dan 900
if(schermBreedte >600 && schermBreedte < 900){
  const verschuiving = -index * (breedteFoto + 30); //verplaatst de foto de breedte van de foto+ 30px
  fotoContainer.style.transform = `translateX(${verschuiving}px)`;
}
  //kijkt of het beeldscherm grooter is dan 600
if(schermBreedte < 600){
  const verschuiving = -index * (breedteFoto + 31); //verplaatst de foto de breedte van de foto+ 31px
  fotoContainer.style.transform = `translateX(${verschuiving}px)`;
}
  
}

function volgendeFoto() {
  //currentIndex = 0 dus hij voegt er steeds 1 aantoe zodat hij naar de volgende foto gaat.
  currentIndex = (currentIndex + 1) % afbeeldingen.length;
  toonFoto(currentIndex); //toont de foto die op welke index hij staat dat is 0, 1, 2
}

//een loopje die kijkt hoeveel afbeeldingen het zijn en er steeds een aan toe voegt
for (var i = 0; i < afbeeldingen.length; i++) {
  //hier create hij image en propt daar de afbeeldingen van boven in
  const nieuwElement = document.createElement('img');
  nieuwElement.src = afbeeldingen[i];
  fotoContainer.appendChild(nieuwElement);//voegt nieuwElement toe aan fotoContainer
}

setInterval(volgendeFoto, 3000); ///doet elke 3 seconden een nieuwe foto
toonFoto(currentIndex);

function plusSlides() {
  currentIndex = (currentIndex + 1) % afbeeldingen.length; //als je op het pijltje verder klikt gaat hij eentje verder
  toonFoto(currentIndex); //hij toont de foto 
}

function minSlides() {
  currentIndex = (currentIndex - 1 + afbeeldingen.length) % afbeeldingen.length; // als je op het pijltje terug klikt gaat hij eentje terug
  toonFoto(currentIndex); //hij toont de foto 
}

    tijd();
    

    function tijd() {
      var openingstijden = document.getElementById('moment');
      var plaatje = document.getElementById('plaatje');
      const nu = new Date();
      //kijkt naar de datum, uren en minuten
      //pakt de uren
      var hours = nu.getHours(); 
      //pakt de minuten
      var minutes = nu.getMinutes();
      //maakt een array van de dagen van de week
      const daysOfWeek = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
      const dag = daysOfWeek[nu.getDay()];
        //als je dag de dag is van vandaag dan gaat hij erin kijkt hij of de tijd klopt dan
        //laat hij zien tot hoelaat ze geopend of gesloten zijn en het goede plaatje erbij
        //dat doet hij bij elke hierbeneden
      switch(dag) {
        case 'Maandag':
          if ((hours > 12 || (hours === 12 && minutes >= 30)) && (hours < 18 || (hours === 18 && minutes < 0))) {
            openingstijden.textContent = 'tot 18:00 uur';
            plaatje.src = 'img/Geopend.jpeg'
          } else {
            openingstijden.textContent = 'Opend Dinsdag om 08:30';
            plaatje.src = 'img/Gesloten.jpeg'
          }
          break;
            case 'Dinsdag':
              if ((hours > 8 || (hours === 8 && minutes >= 30)) && (hours < 18 || (hours === 18 && minutes < 0))) {
                openingstijden.textContent = 'Geopend tot 18:30 uur';
                plaatje.src = 'img/Geopend.jpeg'
              } else {
                openingstijden.textContent = 'Geopend Woensdag om 08:30';
                plaatje.src = 'img/Gesloten.jpeg'
              }
              break;
              case 'Woensdag':
                if ((hours > 8 || (hours === 8 && minutes >= 30)) && (hours < 18 || (hours === 18 && minutes < 0))) {
                  openingstijden.textContent = ' tot 18:30 uur';
                  plaatje.src = 'img/Geopend.jpeg'
                } else {
                  openingstijden.textContent = 'Geopend Donderdag om 08:30';
                  plaatje.src = 'img/Gesloten.jpeg'
                }
                break;
                case 'Donderdag':
                  if ((hours > 8 || (hours === 8 && minutes >= 30)) && (hours < 18 || (hours === 18 && minutes < 0))) {
                    openingstijden.textContent = ' tot 18:30 uur';
                    plaatje.src = 'img/Geopend.jpeg'
                  } else {
                    openingstijden.textContent = 'Geopend Vrijdag om 08:30';
                    plaatje.src = 'img/Gesloten.jpeg'
                  }
                  break;
                  case 'Vrijdag':
                    if ((hours > 8 || (hours === 8 && minutes >= 30)) && (hours < 19 || (hours === 19 && minutes < 30))) {
                      openingstijden.textContent = ' tot 19:30 uur';
                      plaatje.src = 'img/Geopend.jpeg'
                    } else {
                      openingstijden.textContent = 'Geopend Zaterdag om 09:00';
                      plaatje.src = 'img/Gesloten.jpeg'
                    }
                    break;
                    case 'Zaterdag':
                      if ((hours > 9 || (hours === 9 && minutes >= 0)) && (hours < 17 || (hours === 17 && minutes < 0))) {
                        openingstijden.textContent = ' tot 17:00 uur';
                        plaatje.src = 'img/Geopend.jpeg'
                      } else {
                        openingstijden.textContent = 'Geopend Maandag om 12:30';
                        plaatje.src = 'img/Gesloten.jpeg'
                      }
                      break;
                      case 'Zondag':
                        openingstijden.textContent = 'Geopend Maandag om 12:30';
                        plaatje.src = 'img/Gesloten.jpeg'
                      break;
        default:
          openingstijden.textContent = 'Error';
          //stel het gaat fout dan zegt 'Error'
          break;
      }
    }
    