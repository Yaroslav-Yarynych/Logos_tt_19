let ask = prompt('Введіть пароль');
let password = '2020';
let n = 5;
while(ask !=='2020' && n>1){
    n--
    alert('У вас залишилося' + n + 'спроб')
    ask = prompt('Введіть пароль');
}
if(ask == '2020'){
    alert('WELCOME')

}
else{
    alert('спробуйте пізніше')
}