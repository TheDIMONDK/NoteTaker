var form = document.getElementById("create-form");

document.getElementById("create-sumbit").addEventListener("click", function () {
    var titleText = document.getElementById("title-input").value;
    var contentText = document.getElementById("content-input").value;
    var isCompleted = false;

    // Хранит заметку
    var note = [contentText, isCompleted];

    // Сохраняем заметку в БД
    localStorage.setItem(titleText, JSON.stringify(note));

    //alert("*ЗАМЕТКА СОЗДАНА*\nТекст заголовка: " + titleText + "\nСодержимое: " + contentText);

    // Вернём пользователя на главную
    location.replace("./index.html");
});