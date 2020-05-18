// homework2 js
let question1 = prompt("Класицизм - це")
let question2 = prompt("Температура кипіння води (писати в градусах)?")
let question3 = prompt("Скільки місяців у році?")
let question4 = prompt("У якому році Україна отримала незалежність?")
let question5 = prompt("Хто був першим президентом України?")
let question6 = prompt("Чи в Україні є гори?")
let question7 = prompt("Найглибше озеро України?")
let question8 = prompt("Протяжність кордону з сусідніми державами(в км)?")
let question9 = prompt("Де знаходиться географічний центр Європи")
let question10 = prompt("найбільша висота в Україні над рівнем моря?")
let result = 0;
if(question1 == "напрям в мистецтві"){
    result++;
}
if(question2 == "100"){
    result++;
}
if(question3 == "12"){
    result++;
}
if(question4 == "1991"){
    result++;
}
if(question5 == "Леонід Кравчук"){
    result++;
}
if(question6 == "Так"){
    result++;
}
if(question7 == "Світязь"){
    result++;
}
if(question8 == "6992"){
    result++;
}
if(question9 == "село Ділове"){
    result++;
}
if(question10 == "2061"){
    result++;
}
if(result = 0 && result <=3){
    alert(`${result} балів. Погано, спробуйте ще раз`)
}
 else if(result>=4 && result <=6){
    alert(`${result} балів. Непогано`)
}
else if(result>=7 && result <=9){
    alert(`${result} балів. Хороший результат`)
}
else if(result = 10){
    alert(`${result} балів. Чудово`)
}