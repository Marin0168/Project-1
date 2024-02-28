const form = document.getElementById('multiStepForm');
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');

function showStep(step) {
    //standaard zijn alle steps niet zichtbaar
    step1.style.display = 'none';
    step2.style.display = 'none';
//als step is gelijk aan 1 dan laat hij step 1 zien
    if (step === 1) {
        step1.style.display = 'block';
//zo ook bij step 2 als step gelijk is aan 2 laat hij step 2 zien.
    } else if (step === 2) {
        step2.style.display = 'block';
    }
}

showStep(1); // Toon de eerste stap bij het laden van de pagina

//nextStep is een functie die de volgende stap gaat als je op volgende klikt
function nextStep() {
    var beginDatum = new Date(document.getElementById('beginDatum').value);
    var eindDatum = new Date(document.getElementById('eindDatum').value);
    var qbegin = document.querySelector('#beginDatum');
    var qeind = document.querySelector('#eindDatum');

    // Controleer of de begindatum in de toekomst ligt
    if (beginDatum < new Date()) {
        qbegin.style.color = 'red';
        qeind.style.color = 'red';
        alert("Begindatum kan niet in het verleden liggen.");
        return; // Stop de functie als de validatie mislukt
    }

    // Controleer of de einddatum niet eerder is dan de begindatum
    if (eindDatum < beginDatum) {
        qbegin.style.color = 'red';
        qeind.style.color = 'red';
        alert("Einddatum kan niet eerder zijn dan de begindatum.");
        return; // Stop de functie als de validatie mislukt
    }

    if (step1.style.display === 'block') {
        showStep(2);
    } else if (step2.style.display === 'block') {
        alert('Formulier is verzonden!');
        // Voer hier eventuele aanvullende acties uit na het verzenden van het formulier
    }
}

//dit is een functie die weer naar de vorige stap gaat als je op vorige pagina klikt.
function prevStep() {
    if (step2.style.display === 'block') {
        showStep(1);
    }
}

function showPhoto(){
    var gekozenFiets = document.getElementById("soortFiets");
    var fietsPhoto = document.getElementById("fietsPhoto");

    // Get the selected value
    var selectedValue = gekozenFiets.value;

    // Set the photo source based on the selected value
    switch (selectedValue) {
        case "normaleFiets":
            fietsPhoto.src = "../img/NormaleFiets.png";
            break;
        case "bakFiets":
            fietsPhoto.src = "../img/BakFiets.png";
            break;
        case "omaFiets":
            fietsPhoto.src = "../img/OmaFiets.png";
            break;
        case "elektrischeFiets":
            fietsPhoto.src = "../img/elektrischeFiets.png";
            break;
        default:
            fietsPhoto.src = ""; // You can set a default image or leave it empty
    }

    console.log(selectedValue);
}


