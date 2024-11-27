function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

var iloscZawodników = document.getElementById("iloscZawodników");

iloscZawodników.addEventListener("change", function () {
    var zawodnicy = document.getElementById("zawodnicy");
    zawodnicy.innerHTML = "";
    for (var i = 0; i < iloscZawodników.value; i++) {
        zawodnicy.innerHTML += `<input type="text" class="zawodnik" placeholder="Zawodnik ${i + 1}"><br>`;
    }
});

function submit() {
    var tab = [];
    var d1 = document.getElementById("druzyna1");
    var d2 = document.getElementById("druzyna2");
    d1.style.visibility = "visible";
    d2.style.visibility = "visible";
    
    d1.innerHTML = "Drużyna 1:<br>";
    d2.innerHTML = "Drużyna 2:<br>";

    document.querySelectorAll(".zawodnik").forEach((zawodnik) => {
        if(zawodnik.value){
            tab.push(zawodnik.value);
        }
        else{
            tab.push(`Zawodnik ${tab.length+1}`);
        } 
    });

    shuffle(tab);

    for(var i = 0; i < tab.length; i++){
        if (i < tab.length / 2) {
            d1.innerHTML += `<h2>${tab[i]}</h2>`;
        } else {
            d2.innerHTML += `<h2>${tab[i]}</h2>`;
        }
    }
}

var ifhidden = false;

function hide() {
    let hideButton = document.getElementById("hide");
    let inputsContainer = document.getElementById("zawodnicy");
    let iloscZawodników = document.getElementById("iloscZawodników");

    if(ifhidden){
        hideButton.innerHTML = "<i class='icon-up'></i>";
        iloscZawodników.style.display = "initial";
        inputsContainer.style.display = "block";
        ifhidden = false;
    }else{
        hideButton.innerHTML = "<i class='icon-down'></i>";
        iloscZawodników.style.display = "none";
        inputsContainer.style.display = "none";
        ifhidden = true;
    }
}