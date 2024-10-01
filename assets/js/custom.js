// Обработчик события для добавления комментариев
document.addEventListener('DOMContentLoaded', function () {

    var commentTemplate = document.getElementById("comment_template");
    var publicButton = document.getElementById("publicButton");
    var textareaMessage = document.getElementById("textareaComment");
    var userPublicText = document.getElementById("userMessageText");

    // Добавление обработчика событий на нажатие кнопки публикации комментария
    publicButton.addEventListener("click", function () {

        // Проверка не пустое ли поле комментария
        if (textareaMessage.value.length > 0) {
            
            userPublicText.textContent = textareaMessage.value;
            // Клонирование html кода шаблона для комментария
            var cloneComment = commentTemplate.cloneNode(true);
            cloneComment.style = "display:block;"
            
            // Добавляем на страницу новый комментарий после commentTemplate
            commentTemplate.after(cloneComment);

        }
        else{
            // Вывод аалерта при попытке отправить комментарий без символов
            alert("O campo de comentários não pode ficar vazio")
        }

    })

});
