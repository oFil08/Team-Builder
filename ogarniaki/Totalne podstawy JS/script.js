var div = document.getElementById("div");

//Tworzenie zmiennych
var a = 5; //liczba całkowita - int
var b = "10"; //ciąg znaków - string
var c = 15.99; //liczba zmiennoprzecinkowa - float
var d = true; //wartosc logiczna - boolean
var e = 'a'; //pojedynczy znak - char
var f = null; //brak wartości - null
var g; //zmienna niezdefiniowana - undefined

//rożnica między = , == i ===
var x = 5; // przypisanie wartości 5 do zmiennej x
var y = "5"; // przypisanie wartości "5" (string) do zmiennej y

div.innerHTML += `<p> <h4>Różne równasie:</h4>x == y: ${x == y}, bo nie bierze pod uwagę typu danych <br> x === y: ${x === y} bo bierze pod uwagę typ danych </p>`;

//operatory arytmetyczne
var i = 2;
var j = 3;

j += i; // j = j + i
j -= i; // j = j - i
j *= i; // j = j * i
j /= i; // j = j / i
j **= i; // j = j^i
j++; // j = j + 1
j--; // j = j - 1
j %= i; // j = j % i

var k = 5;
var l = "10";
// parsenInt() - zamienia string na liczbę całkowitą

div.innerHTML += `<br><p> <h4>Operatory arytmetyczne:</h4>k = 5, l = "10" <br><br> k + l = ${k + l} <br><br> k + parseInt(l) = ${k + parseInt(l)} <br><br> k - parseInt(l) = ${k - parseInt(l)} <br><br> k * parseInt(l) = ${k * parseInt(l)} <br><br> k / parseInt(l) = ${k / parseInt(l)} <br><br> k % parseInt(l) = ${k % parseInt(l)} <br><br> k ** parseInt(l) = ${k ** parseInt(l)} </p>`;

//instrukcja warunkowa if

/* 
    Struktura:

    if(warunek){
        kod który sie zrobi jeśli warunek jest spełniony    
    } else {
        kod który sie zrobi jeśli warunek nie jest spełniony
    }
    
    (else nie musi być)
*/

//instrukcja warunkowa if
var m = 10;
var n = 20;

if (m < n) {
    div.innerHTML += `<br><p> <h4>Instrukcja warunkowa if:</h4>warunek spełniony!</p>`;
} else {
    div.innerHTML += `<br><p> <h4>Instrukcja warunkowa if:</h4>warunek nie spełniony :(</p>`;
}

//pętle
div.innerHTML += `<br><p> <h4>Pętle:</h4>`;
for (var p = 0; p < 5; p++) {
    div.innerHTML += `for: ${p} <br>`;
}

var q = 0;
while (q < 5) {
    div.innerHTML += `while: ${q} <br>`;
    q++;
}
div.innerHTML += `</p>`;

//operacje na stringach
var str1 = "Hello";
var str2 = "World";
var str3 = str1 + " " + str2;

div.innerHTML += `<br><p> <h4>Operacje na stringach:</h4>str1 = ${str1}, str2 = ${str2} <br> str1 + " " + str2 = ${str3} <br> str1.length = ${str1.length} <br> str2.toUpperCase() = ${str2.toUpperCase()} <br> str3.includes("World") = ${str3.includes("World")} </p>`;

//definiowanie funkcji
function add(x, y) {
    return x + y;
}

div.innerHTML += `<br><p> <h4>Definiowanie funkcji:</h4>add(5, 10) = ${add(5, 10)} </p>`;

//zakres zmiennych
// var - zmienna globalna
// let - zmienna lokalna
// const - stała

//klasa Math
var num = 9;
div.innerHTML += `<br><p> <h4>Klasa Math:</h4>Math.sqrt(${num}) = ${Math.sqrt(num)} <br> Math.pow(2, 3) = ${Math.pow(2, 3)} <br> Math.random() = ${Math.random()} </p>`;
//liczby losowe z przedziału 1-10:
div.innerHTML += `Math.floor(Math.random() * 10) + 1 = ${Math.floor(Math.random() * 10) + 1}`;