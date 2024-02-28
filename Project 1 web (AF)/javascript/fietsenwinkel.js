//voegt fietsen toe aan de winkelwagen doet verder niet zoveel
function fietsAdd(){
    var winkel = document.getElementById("winkelwagenAdd");
    winkel.textContent ++;
}


// Deze functie filtert items op basis van geselecteerde merken en geslachten
function filterItems() {
    // Verzamel geselecteerde merken in een array
    const selectedBrands = [];
    const brandCheckboxes = document.querySelectorAll('input[type="checkbox"][id^="Cortina"], input[type="checkbox"][id^="Cube"]');
    
    // Controleer welke merken zijn aangevinkt en voeg deze toe aan de array
    brandCheckboxes.forEach(function(checkbox) {
        if (checkbox.checked) {// dit checkt of de checkbox gechecked is
            selectedBrands.push(checkbox.id); //als het gechecked is en het is true dan word het id van de checkbox toegevoegd aan de array
        }
    });

    // Verzamel geselecteerde geslachten in een array
    const selectedGenders = [];
    const genderCheckboxes = document.querySelectorAll('input[type="checkbox"][id^="heren"], input[type="checkbox"][id^="vrouwen"]');
    
    // Controleer welke geslachten zijn aangevinkt en voeg deze toe aan de array
    genderCheckboxes.forEach(function(checkbox) {
        if (checkbox.checked) { // dit checkt of de checkbox gechecked is
            selectedGenders.push(checkbox.id); // als het gechecked is en het is true dan word het id van de check box toegevoegd aan de array.
        }
    });

    // Selecteer alle items die gefilterd moeten worden
    const items = document.querySelectorAll('.item');
    items.forEach(function(item) {
        // Haal het merk en het geslacht op van elk item
        const itemBrand = item.getAttribute('data-merk'); // data-merk is een soort zelfde als een id of class je kan er een waarde aangeven.
        const itemGender = item.classList.contains('heren') ? 'heren' : 'vrouwen'; //heeft het element de class heren als dat niet is word vrouwen neergezet

        // Controleer of het item voldoet aan de geselecteerde filters
        const brandFilterPassed = selectedBrands.length === 0 || selectedBrands.includes(itemBrand); // hij controleert of de array lengte gelijk is aan 0 dan zijn er dus geen
        //merken geselecteerd. selectedbrands-includes(itemBrand) kijkt hij of itemBrand in selectedBrands staat. 
        const genderFilterPassed = selectedGenders.length === 0 || selectedGenders.includes(itemGender);

        // Pas de weergave van het item aan op basis van de filters
        if (brandFilterPassed && genderFilterPassed) {
            item.style.display = 'block'; // Toon het item
        } else {
            item.style.display = 'none'; // Verberg het item
        }
    });
}



filterItems(); //start de functie