
function exec(fn, a, b){
    return fn(a, b)
}


const somarNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (w, z) => console.log(w - z)

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)

//set interval executa de forma repetida, 1 par= func e 2 par = qtd milisegundos 

setInterval(function () {  
    console.log('Exec...')
}, 1000)

