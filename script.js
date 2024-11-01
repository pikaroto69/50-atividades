function at1() {
    var nome = prompt("Insira o Nome:")
    console.log(nome)
}
function at2() {
    var a = 10
    var b = 37.8
    var c = a + b
    console.log(a, "+", b, "=", c)
}
function at3() {
    var idade = parseInt(prompt("Insira a idade"))
    if (idade >= 18) {
        console.log("Você é maior de idade")
    }
    else {
        console.log("Vai dormir")
    }
}
function at4() {
    var num = 8
    var quad = num * num
    console.log(num + "²", "=", quad)
}
function at5() {
    var graus = parseFloat(prompt("Insira a temperatura em Celcius"))
    var farenheit = (graus * 9 / 5) + 32
    console.log(farenheit)
}
function at6() {
    var num = parseInt(prompt("Insira numero"))
    if (num % 2 == 0) {
        console.log("O numero é par")
    }
    else {
        console.log("O numero é impar")
    }
}
function at7() {
    function valorAbsoluto(numero) {
        return Math.abs(numero)
    }
    var numero = -5
    var resultado = valorAbsoluto(numero)
    console.log("O valor absoluto de " + numero + " é " + resultado)
}
function at8() {
    var n = prompt("Insira um numero")
    if (n > 0) {
        console.log("O numero é positivo")
    }
    else if (n < 0) {
        console.log("O numero é negativo")
    }
    else {
        console.log("O numero é 0")
    }
}
function at9() {
    var nome = prompt("Insira seu nome")
    if (nome == '') {
        console.log("Insira um nome valido")
    }
    else {
        console.log(nome)
    }
}
function at10() {
    var n1 = parseInt(prompt("Insira numero"))
    var n2 = parseInt(prompt("Insira numero"))
    var n3 = parseInt(prompt("Insira numero"))
    var media = (n1 + n2 + n3) / 3
    console.log("A media é: " + media)
}
function at11() {
    var ano = parseInt(prompt("Insira ano"))
    if (ano % 4 == 0) {
        console.log("O ano é bissexto")
    }
    else {
        console.log("O ano não é bissexto")
    }
}
function at12() {
    var idade = parseInt(prompt("Insira idade"))
    if (idade < 12) {
        console.log("Criança")
    }
    else if (idade < 18) {
        console.log("Adolescente")
    }
    else if (idade < 60) {
        console.log("Adulto")
    }
    else {
        console.log("Idoso")
    }
}
function at13() {
    var consoantes = [
        'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n',
        'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
    var vogais = ['a', 'e', 'i', 'o', 'u'];
    var letra = prompt("insira letra").toLowerCase()
    for (var i = 0; i < consoantes.length; i++) {
        if (consoantes[i] === letra) {
            console.log("A letra é uma consoante")
            break
        }
        else {
            for (var o = 0; o < vogais.length; o++) {
                if (vogais[o] === letra) {
                    console.log("A letra é uma vogal")
                    break
                }
                else {
                    console.log("Insira uma letra valida")
                }
            }
        }
    }
}
function at14() {
    var n1 = parseInt(prompt("Insira numero"))
    var n2 = parseInt(prompt("Insira numero"))
    if (n1 > n2) {
        console.log("O maior numero é: " + n1)
    }
    else {
        console.log("O maior numero é: " + n2)
    }
}
function at15() {
    var texto = prompt("Insira o texto")
    if (texto.includes("JavaScript")) {
        console.log("A string contem a 'JavaScript'.")
    } else {
        console.log("A string não contem a 'JavaScript'.")
    }
}
function at16() {
    var nota = parseInt(prompt("Insira nota"))
    if (nota <= 2) {
        console.log("A nota é: E")
    }
    else if (nota <= 4) {
        console.log("A nota é: D")
    }
    else if (nota <= 6) {
        console.log("A nota é: C")
    }
    else if (nota <= 8) {
        console.log("A nota é: B")
    }
    else {
        console.log("A nota é: A")
    }
}
function at17() {
    var n = parseInt(prompt("Insira numero"))
    if (n % 3 == 0 && n % 5 == 0) {
        console.log("O numero é multipli de 3 e 5")
    }
    else if (n % 3 == 0) {
        console.log("O numero é multiplo de 3")
    }
    else if (n % 5 == 0) {
        console.log("O numero é multiplo de 5")
    }
    else {
        console.log("O numero não é ultiplo de 3 e nem 5")
    }
}
function at18() {
    var n1 = parseInt(prompt("Insira numero"))
    var n2 = parseInt(prompt("Insira numero"))
    var n3 = parseInt(prompt("Insira numero"))
    var n4 = 0
    if (n1 < n2) {
        var n4 = n1
    }
    else (
        n4 = n2
    )
    if (n4 < n3) {
        console.log(n4)
    }
    else {
        console.log(n3)
    }
}
function at19() {
    var senha = prompt("Insira senha")
    if (senha.length >= 8) {
        console.log("A senha é valida")
    } else {
        console.log("A senha deve ter ao menos 8 caracteres")
    }
}
function at20() {
    var n = prompt("Insira o numero")
    var min = parseInt(prompt("Insira o numero minimo do intervalo"))
    var max = parseInt(prompt("Insira o numero maximo do intervalo"))
    if (n >= min && n <= max) {
        console.log("O numero " + n + " esta entre " + min + " e " + max)
    } else {
        console.log("O numero " + n + " não esta entre " + min + " e " + max)
    }
}
function at21() {
    var n = 1
    for (let i = 0; i < 10; i++) {
        console.log(n)
        n += 1
    }
}
function at22() {
    var n = 5
    var n2 = 1
    var n3 = 5
    for (let i = 0; i < 10; i++) {
        console.log(n + " x " + n2 + " = " + n3)
        n2 += 1
        n3 = n * n2
    }
}
function at23() {
    var n = 1
    for (let i = 0; i < 100; i++) {
        console.log(n)
        n += 1
    }
}
function at24() {
    var n = 1
    for (let i = 0; i < 50; i++) {
        if (n % 2 == 0) {
            console.log(n)
            n += 1
        }
        else {
            n += 1
        }
    }
}
function at25() {
    var a = 0
    var b = 1
    var n = parseInt(prompt("Insira qual numero da sequência de Fibonacci você quer"))
    for (let i = 0; i < n; i++) {
        console.log(a)
        b = a + b
        a = b - a
    }
}
function at26() {
    var str = prompt("Insira uma string")
    var inv = ""
    for (var i = str.length - 1; i >= 0; i--) {
        inv += str[i]
    }
    console.log(inv)
}
function at27() {
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            console.log(nums[i])
        }
    }
}
function at28() {
    var nums = [1, 5, 3, 9, 2, 8, 4, 10, 6, 7]
    var maior = 0
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] > maior) {
            maior = nums[i]
        }
    }
    console.log("O maior número é: " + maior)
}
function at29() {
    var num = parseInt(prompt("Insira um número para verificar se é primo:"))
    if (num < 2) {
        console.log(num + " não é um número primo.");
        return
    }
    for (var i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            console.log(num + " não é um número primo.")
            return
        }
    }
    console.log(num + " é um número primo.")
}
function at30() {
    for (let i = 0; i < 100; i++) {
        console.log("JavaScript")
    }
}
function at31() {
    function somar(arr) {
        var soma = 0
        for (var i = 0; i < arr.length; i++) {
            soma += arr[i]
        }
        return soma
    }
    var numeros = [1, 2, 3, 4, 5]
    var resultado = somar(numeros)
    console.log("A soma dos elementos do array é: " + resultado)
}
function at32() {
    var numeros = [1, 2, 3, 4, 5]
    var n = parseInt(prompt("Insira um numero"))
    for (var i = 0; i < numeros.length; i++) {
        if (n == numeros[i]) {
            console.log("O numero " + n + " esta presente")
            break
        }
        else {
            console.log("O numero " + n + " não esta presente")
        }
    }
}
function at33() {
    function inverter(arr) {
        var arrayInvertido = []
        for (var i = arr.length - 1; i >= 0; i--) {
            arrayInvertido[arrayInvertido.length] = arr[i]
        }
        return arrayInvertido
    }
    var numeros = [1, 2, 3, 4, 5]
    var resultado = inverter(numeros)
    console.log("Array normal: " + numeros)
    console.log("Array invertido: " + resultado)
}
function at34() {
    var numeros = [1, 2, 2, 3, 4, 4, 5]
    var semDup = []
    for (var i = 0; i < numeros.length; i++) {
        var existe = 0
        for (var j = 0; j < semDup.length; j++) {
            if (numeros[i] == semDup[j]) {
                existe++
            }
        }
        if (existe == 0) {
            semDup[semDup.length] = numeros[i]
        }
    }
    console.log("Array: " + numeros)
    console.log("Array sem duplicatas: " + semDup)
    return semDup
}


function at35() {
    function unirArrays(arr1, arr2) {
        var uniao = []
        for (var i = 0; i < arr1.length; i++) {
            var existe = 0
            for (var j = 0; j < uniao.length; j++) {
                if (arr1[i] == uniao[j]) {
                    existe++
                }
            }
            if (existe == 0) {
                uniao[uniao.length] = arr1[i]
            }
        }
        for (var i = 0; i < arr2.length; i++) {
            var existe = 0
            for (var j = 0; j < uniao.length; j++) {
                if (arr2[i] === uniao[j]) {
                    existe++
                }
            }
            if (existe == 0) {
                uniao[uniao.length] = arr2[i]
            }
        }
        return uniao
    }
    var array1 = [1, 2, 3, 4]
    var array2 = [3, 4, 5, 6]
    var resultado = unirArrays(array1, array2)
    console.log("Array 1: " + array1)
    console.log("Array 2:" + array2)
    console.log("Arrays juntos: " + resultado)
}
function at36() {
    var arr = [10, 20, 30, 40, 50]
    var valor = parseInt(prompt("Insira um valor"))
    var indice = -1
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == valor) {
            indice = i
            break
        }
    }
    if (indice != -1) {
        console.log("O valor está no índice: " + indice + " posição " + (indice + 1))
        console.log(arr)
    } else {
        console.log("O valor não está presente no array.")
        console.log(arr)
    }
}

function at37() {
    var numeros = [10, 20, 30, 40, 50, 50,]
    var maior = numeros[0]
    var sMaior = -1
    for (var i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            sMaior = maior
            maior = numeros[i]
        }
        else if (numeros[i] > sMaior && numeros[i] < maior) {
            sMaior = numeros[i]
        }
    }
    console.log("O segundo maior número é: " + sMaior)

}
function at38() {
    var numeros = [10, 20, 30, 40, 50]
    var resultado = ""
    for (var i = 0; i < numeros.length; i++) {
        resultado += numeros[i]
    }
    console.log("String concatenada: " + resultado)
    console.log(numeros)
}
function at39() {
    var strings = ["macaco", "kenzo", "javascript", "html"]
    var maiusculas = []
    for (var i = 0; i < strings.length; i++) {
        maiusculas[maiusculas.length] = strings[i].toUpperCase()
        console.log("Array em maiúsculas:", maiusculas)
    }
}
function at40() {
    var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var contador = 0

    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 !== 0) {
            contador++;
        }
    }
    console.log(numeros)
    console.log("Quantidade de números ímpares:", contador)
}
function at41() {
    var pessoa = {
        nome: "Kleber",
        idade: 69,
        cidade: "Curitiba"
    }
    console.log(pessoa)
}
function at42() {
    var pessoa = {
        nome: "Kleber",
        idade: 69,
        cidade: "Curitiba"
    }
    pessoa.email = "kleber@gmail.com"
    console.log(pessoa)
}
function at43() {
    function exibir(objeto) {
        for (var propriedade in objeto) {
            console.log(propriedade + ": " + objeto[propriedade])
        }
    }
    var pessoa = {
        nome: "Kleber",
        idade: 69,
        cidade: "Curitiba"
    }
    exibir(pessoa)
}
function at44() {
    var pessoa = {
        nome: "Kleber",
        idade: 69,
        cidade: "Curitiba"
    }
    var propriedade = prompt("Insira o nome da propriedade que quer verificar:")
    if (propriedade in pessoa) {
        console.log("A propriedade '" + propriedade + "' existe no objeto.")
    } else {
        console.log("A propriedade '" + propriedade + "' não existe no objeto.")
    }
}
function at45() {
    var pessoas = [
        { nome: "Ana", idade: 28 },
        { nome: "João", idade: 35 },
        { nome: "Maria", idade: 22 },
        { nome: "Pedro", idade: 40 }
    ]
    function calcularMedia(lista) {
        var sIdades = 0
        var ttpessoas = lista.length
        for (var i = 0; i < ttpessoas; i++) {
            sIdades += lista[i].idade
        }
        var media = sIdades / ttpessoas
        return media
    }
    var mediaIdd = calcularMedia(pessoas)
    console.log("A média de idade das pessoas é: " + mediaIdd)
    console.log(pessoas)
}

function at46() {
    function somar(objeto) {
        var soma = 0
        for (var propriedade in objeto) {
            if (objeto[propriedade] == objeto[propriedade]) {
                if (objeto[propriedade] - 0 == objeto[propriedade]) {
                    soma += objeto[propriedade]
                }
            }
        }
        return soma
    }
    var carrinho = {
        banana: 5.00,
        maca: 3.00,
        leite: 5.50,
    }
    var total = somar(carrinho)
    console.log(carrinho)
    console.log("A soma dos produtos é: " + total)
}
function at47() {
    var livro = {
        titulo: "O principe",
        autor: "Nicoulau Maquiavel",
        ano: 1532,
    }
    console.log("O livro " + livro.titulo + " escrito por " + livro.autor + " no ano de " + livro.ano + ", é um livro que até hoje tem um grande impacto")
}
function at48() {
    var pessoa = {
        nome: "Kleber",
        idade: 69,
        cidade: "Curitiba"
    }
    console.log(pessoa)
    delete pessoa.idade
    console.log("Idade removida ", pessoa)
}
function at49() {
    var pessoa = {
        nome: "Kleber",
        idade: prompt("Insira idade"),
        cidade: "Curitiba"
    }
    if (pessoa.idade >= 18) {
        console.log("pode dirigir")
    }
    else {
        console.log("Não pode dirigir")
    }
}
function at50() {
    var produto = {
        nome: "Macaco Hidraulico",
        preco: 945.50
    }
    function formatar(produto) {
        if (produto.nome && produto.preco) {
            return "Produto: " + produto.nome + ", Preço: R$ " + produto.preco.toFixed(2)
        }
    }
    var informacaoProduto = formatar(produto)
    console.log(informacaoProduto)
}











































































































function gg(){
    for (let i = 0; true; ) {
        console.log(i);
    }
}
