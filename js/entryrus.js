let username = prompt("Кто ты?" , '')

if (username == "admin") 
{

    let pass = prompt("Пароль" , '');
   
    if (pass == "admin")
        alert ("Добро пожаловать!");

        else if (pass == '' || pass == null)
        alert ("Отменено");
    
        else
        alert ("Неверный пароль");
}

 else if (username == '' || username == null)
    alert ("Отменено");


 else 
    alert ("Я тебя не знаю"); 
