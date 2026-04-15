// создаём переменную, в которой будет храниться весь пример (строка)
let expression = "";

// функция вызывается при нажатии любой кнопки (цифры или оператора)
function press(num) {
    try {

        // список всех операторов
        let operators = ["+", "-", "*", "/"];

        // берём последний символ из текущего выражения
        let lastChar = expression.slice(-1);

        // проверяем: если нажали оператор (+, -, *, /)
        if (operators.includes(num)) {

            // и если последний символ тоже оператор
            if (operators.includes(lastChar)) {

                // то ничего не делаем (запрещаем ввод типа ++ или */)
                return;
            }
        }

        // если всё ок — добавляем символ в выражение
        expression += num;

        // обновляем поле ввода (display), показываем текущее выражение
        document.getElementById("display").value = expression;
    } 
    catch (error) {

        // если произошла ошибка — выводим её в поле ввода
        document.getElementById("display").value = error;
    }
}

// функция вызывается при нажатии "="
function calculate() {
    try {

        // считаем результат выражения (например "2+3" → 5)
        // eval превращает строку в вычисление
        expression = eval(expression).toString();

        // выводим результат на экран
        document.getElementById("display").value = expression;
    }
    catch (error) {

        // если ошибка (например "2+") — показываем ошибку
        document.getElementById("display").value = error;
    }
}

// функция для кнопки "C" (очистка)
function clearDisplay() {
    try {

        // очищаем выражение (сбрасываем в пустую строку)
        expression = "";

        // очищаем поле ввода
        document.getElementById("display").value = "";
    }
    catch (error) {

        // если вдруг ошибка — выводим её
        document.getElementById("display").value = error;
    }
}