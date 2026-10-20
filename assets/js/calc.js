(() => {
  const display = document.getElementById("calculator-display");
  const buttons = document.querySelectorAll("[data-calculator-value], [data-calculator-action]");

  if (!display || !buttons.length) return;

  let expression = "";
  const operators = ["+", "-", "*", "/"];

  const updateDisplay = (value = expression) => {
    display.value = value || "";
  };

  const calculateExpression = (value) => {
    const tokens = value.match(/(?:^|(?<=[+*/-]))-?\d+(?:\.\d+)?|\d+(?:\.\d+)?|[+*/-]/g);

    if (!tokens || tokens.join("") !== value || tokens.length % 2 === 0 ||
        tokens.some((token, index) => index % 2 === 1 ? !operators.includes(token) : !Number.isFinite(Number(token)))) {
      throw new Error("Invalid expression");
    }

    const reduced = [Number(tokens[0])];

    for (let index = 1; index < tokens.length; index += 2) {
      const operator = tokens[index];
      const number = Number(tokens[index + 1]);

      if (operator === "*" || operator === "/") {
        const previous = reduced.pop();
        if (operator === "/" && number === 0) throw new Error("Cannot divide by zero");
        reduced.push(operator === "*" ? previous * number : previous / number);
      } else {
        reduced.push(operator, number);
      }
    }

    let result = reduced[0];
    for (let index = 1; index < reduced.length; index += 2) {
      result = reduced[index] === "+" ? result + reduced[index + 1] : result - reduced[index + 1];
    }

    if (!Number.isFinite(result)) throw new Error("Invalid result");
    return String(Number(result.toFixed(10)));
  };

  const addValue = (value) => {
    const lastCharacter = expression.at(-1);

    if (operators.includes(value)) {
      if (!expression) {
        if (value === "-") {
          expression = "-";
          updateDisplay();
        }
        return;
      }
      if (value === "-" && ["+", "*", "/"].includes(lastCharacter)) {
        expression += value;
        updateDisplay();
        return;
      }
      if (expression === "-") return;
      expression = operators.includes(lastCharacter) ? `${expression.slice(0, -1)}${value}` : `${expression}${value}`;
    } else if (value === ".") {
      const currentNumber = expression.split(/[+\-*/]/).at(-1);
      if (currentNumber.includes(".")) return;
      expression += currentNumber ? "." : "0.";
    } else {
      expression += value;
    }

    updateDisplay();
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.calculatorAction === "clear") {
        expression = "";
        updateDisplay();
      } else if (button.dataset.calculatorAction === "equals") {
        try {
          expression = calculateExpression(expression);
          updateDisplay();
        } catch (error) {
          expression = "";
          updateDisplay(error.message);
        }
      } else {
        addValue(button.dataset.calculatorValue);
      }
    });
  });
})();
