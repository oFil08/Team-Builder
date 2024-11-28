function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

var iloscZawodników = document.getElementById("iloscZawodników");

function updateNumOfPlayers() {
    var zawodnicy = document.getElementById("zawodnicy");
    zawodnicy.innerHTML = "";
    for (var i = 0; i < iloscZawodników.value; i++) {
        zawodnicy.innerHTML += `<input type="text" class="zawodnik" placeholder="Zawodnik ${i + 1}"><br>`;
    }

    document.querySelectorAll(".zawodnik").forEach((input, index, inputs) => {
        input.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                } else {
                    submit();
                    input.blur();
                }
            }

            if (event.key === "Backspace") {
                if (!input.value && index > 0) { 
                    event.preventDefault();
                    inputs[index - 1].focus();
                }
            }
        });
    });
}
updateNumOfPlayers();

iloscZawodników.addEventListener("change", updateNumOfPlayers);

function submit() {
    var d1 = document.getElementById("druzyna1");
    var d2 = document.getElementById("druzyna2");
    d1.style.visibility = "visible";
    d2.style.visibility = "visible";
    
    var tab = [];
    document.querySelectorAll(".zawodnik").forEach((zawodnik) => {
        tab.push(zawodnik.value || `Zawodnik ${tab.length + 1}`);
    });

    const params = new URLSearchParams({ players: JSON.stringify(tab) });
    window.history.replaceState({}, "", `?${params.toString()}`);

    shuffle(tab);

    d1.innerHTML = "Drużyna 1:<br>";
    d2.innerHTML = "Drużyna 2:<br>";

    tab.forEach((player, i) => {
        if (i < tab.length / 2) {
            d1.innerHTML += `<h2>${player}</h2>`;
        } else {
            d2.innerHTML += `<h2>${player}</h2>`;
        }
    });
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

function savePlayerData() {
    const players = [];
    document.querySelectorAll(".zawodnik").forEach((input) => {
        players.push(input.value || "");
    });
    localStorage.setItem("players", JSON.stringify(players));
}

function loadPlayerData() {
    const savedPlayers = JSON.parse(localStorage.getItem("players"));
    if (savedPlayers) {
        iloscZawodników.value = savedPlayers.length;
        updateNumOfPlayers();
        document.querySelectorAll(".zawodnik").forEach((input, index) => {
            input.value = savedPlayers[index] || "";
        });
    }
}

document.addEventListener("input", savePlayerData);

window.addEventListener("load", loadPlayerData);