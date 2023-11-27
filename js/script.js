let list = [];

let lenght = parseInt(prompt("Quanti prodotti vuoi inserire?"));

for(let i = 0; i < lenght; i++) list[i] = prompt("Inserisci un prodotto");

console.log(list);

let j = 0;

while(j < list.length){
    document.getElementById("spesa").innerHTML += "<li>" + list[j] + "</li>";
    console.log(j);
    j++;
}