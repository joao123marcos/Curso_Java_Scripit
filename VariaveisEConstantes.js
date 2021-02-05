//Declaração de variáveis com Var
var a = 3

//Declaração de variável com let
let b = 4

/*A diferença entre a declaração de var let 

var -> a variável pode ser redeclarada dentro do codigo fonte.
let -> não é possível redecalarar a variável.

var a = 30
let b = 40  -> SyntaxError: Identifier 'b' has already been declared

console.log(a,b)*/

var a = 30
b = 40

console.log(a+", "+b)

//Alterando o valor das variáveis
a = 300
b = 400

console.log(a,b)

const c = 5
//c = 50  não se pode alterar o valor de uma constante (Assignment to constant variable.)
console.log(c)