function operacao(operador) {
    const num1 = Number(document.querySelector("#num1").value)
    const num2 = Number(document.querySelector("#num2").value)
    let res = 0
 

    if (operador == "+") {
        alert(num1 + num2)
    } else if (operador == "-") {
        alert(num1-num2)
    } else if (operador == "*") {
        alert(num1*num2)
    } else {
        if (num2 == 0) {
            alert ("Não pode dividir o número por zero!")
    } else {
        res = num1 / num2
    }
}
alert(res)