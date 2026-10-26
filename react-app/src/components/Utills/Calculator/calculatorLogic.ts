
const operators = ["+", "-", "*", "/"]

export function calculateExpression(value: string): string {
  const tokens = value.match(/(?:^|(?<=[+*/-]))-?\d+(?:\.\d+)?|\d+(?:\.\d+)?|[+*/-]/g)

  if (!tokens || tokens.join("") !== value || tokens.length % 2 === 0 ||
    tokens.some((token, index) => index % 2 === 1
      ? !operators.includes(token)
      : !Number.isFinite(Number(token)))) {
    throw new Error("Invalid expression")
  }

  const reduced: (number | string)[] = [Number(tokens[0])]

  for (let index = 1; index < tokens.length; index += 2) {
    const operator = tokens[index]
    const number = Number(tokens[index + 1])

    if (operator === "*" || operator === "/") {
      const previous = reduced.pop()

      if (typeof previous !== "number") throw new Error("Invalid expression")
      if (operator === "/" && number === 0) throw new Error("Cannot divide by zero")

      reduced.push(operator === "*" ? previous * number : previous / number)
    } else {
      reduced.push(operator, number)
    }
  }

  let result = reduced[0]
  if (typeof result !== "number") throw new Error("Invalid expression")

  for (let index = 1; index < reduced.length; index += 2) {
    const number = reduced[index + 1]
    if (typeof number !== "number") throw new Error("Invalid expression")
    result = reduced[index] === "+" ? result + number : result - number
  }

  if (!Number.isFinite(result)) throw new Error("Invalid result")
  return String(Number(result.toFixed(10)))
}

export function addValue(expression: string, value: string): string {
  const lastCharacter = expression.at(-1)

  if (operators.includes(value)) {
    if (!expression) return value === "-" ? "-" : ""

    if (value === "-" && ["+", "*", "/"].includes(lastCharacter ?? "")) {
      return expression + value
    }

    if (expression === "-") return expression

    return operators.includes(lastCharacter ?? "")
      ? expression.slice(0, -1) + value
      : expression + value
  }

  if (value === ".") {
    const currentNumber = expression.split(/[+\-*/]/).at(-1) ?? ""
    if (currentNumber.includes(".")) return expression
    return expression + (currentNumber ? "." : "0.")
  }

  return expression + value
}
