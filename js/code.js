let addition = document.querySelector('#addition');

addition.addEventListener('click', add)

function add(){
    let number1 = document.querySelector('#number1').value;
    let number2 = document.querySelector('#number2').value;

    console.log( eval(`${number1} + ${number2}`) );
    let output = document.querySelector('#output');

    output.innerHTML = eval(`${number1} + ${number2}`)
}