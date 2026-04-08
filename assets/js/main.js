// создание переменной для переключателя темы
const themeToggle = document.getElementById("themeToggle");

// создание переменой для обращения к тегу html, который хранит атрибут с темой
const root = document.documentElement

// создание события на изменение состояния нашего переключателя
themeToggle.addEventListener("change", () => {

    // выводим сообщение про успешную смену темы
    alert("Your theme was successfully changed")

    // проверка находится ли переключатель темы в отмеченом состоянии
    if (themeToggle.checked == true) {
        // то следующая тема будет черная
        mode = "dark"
    // в противном случае
    } else {
        // тема будет белая
        mode = "light"
    }

    // меняем атрибут темы на режим темы для тега html (root)
    root.setAttribute("data-bs-theme", mode)
});

//
let expression = "";
//
function press(num) {
    //
    expression += num;
    //
    document.getElementById("display").value = expression;
}
//
function calculate() {
    //
    expression = eval(expression).toString();
    //
    document.getElementById("display").value = expression;
}

