const leitor = document.querySelector('.resultado-input');
let numero;
let valor1;
let valor2;
let operador; 


function exibeNoResultado(valor){
    leitor.value = valor;
}

function insert(numero){
    leitor.value = leitor.value + numero;
}

function limpaResultado(){
    exibeNoResultado('');
}

function insertOperador(operadorDigitado){
    valor1 = parseFloat(leitor.value);
    operador = operadorDigitado;
    limpaResultado();
}

//function quadrado
document.querySelector('#quadrado').onclick = function(){
    let valor1 = leitor.value;
    leitor.value = valor1*valor1;
};

//function limpaNumero
document.querySelector('#limpar').onclick = function(){
    valor1 = '';
    valor2 = '';
    exibeNoResultado('');
};

//funcion limpaResultado
document.querySelector('#limparTudo').onclick = limpaResultado; 


//function inverteNumero
document.querySelector('#negativo').onclick = function(){
    if(!leitor.value == ''){
        valor1 = -parseFloat(leitor.value);
        exibeNoResultado(valor1);
    }
}

//function insertPonto
document.querySelector('#ponto').onclick = function(){
    if(!leitor.value.includes('.')  || !leitor.value == ''){
        insert('.');
    }
}

//function calcula
document.querySelector('#igual').onclick = function(){
    valor2 = parseFloat(leitor.value);
    switch (operador)
    {
        case '+':
            resultado = valor1 + valor2;
            leitor.value = resultado.toString();
            break;

        case '-':
            resultado = valor1 - valor2;
            leitor.value = resultado.toString();
            break;

        case '*':
            resultado = valor1 * valor2;
            leitor.value = resultado.toString();
            break;

        case '/':
            resultado = valor1 / valor2;
            leitor.value = resultado.toString();
            break;
    }
}