function tabuada() {
    let num = document.getElementById('txti');
    let res = document.getElementById('res');
    let tabuada='';

    if (num.value.length == 0) {
        window.alert('[ERRO] Por favor, digite um número!')
        res.innerHTML = 'Impossível calcular. Por favor, digite um número!'
    } else {
        /* res.innerHTML = 'Contando: <br>' */
        let number = parseInt(num.value)
        for(let count=1; count <=10; count++)
        tabuada += number + " x " + count + " = " + number*count + "<br/>";
        res.innerHTML = tabuada
    } 
}
