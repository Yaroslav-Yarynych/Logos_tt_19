let name = prompt("Name");
let password;
if(name == 'Name'){
    password = prompt('Пароль');
}
else if(name == null){
    alert('вхід скасовано');
}
else{
   alert("я вас не знаю")
}
if(password == "логос"){
    alert('Ласкаво просимо');
}
else if(password == null){
    alert('Вхід скасовано')
}
else{
    alert('Пароль невірний');
}


