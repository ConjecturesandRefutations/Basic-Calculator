function add(){
    let input1 = parseInt(document.getElementById('input1').value);
    let input2 = parseInt(document.getElementById('input2').value);
    let output = input1 + input2
    document.getElementById('output').innerHTML = output;
}

function subtract(){
    let input1 = parseInt(document.getElementById('input1').value);
    let input2 = parseInt(document.getElementById('input2').value);
    let output = input1 - input2
    document.getElementById('output').innerHTML = output;
}

function multiply(){
    let input1 = parseInt(document.getElementById('input1').value);
    let input2 = parseInt(document.getElementById('input2').value);
    let output = input1 * input2
    document.getElementById('output').innerHTML = output;
}

function divide(){
    let input1 = parseInt(document.getElementById('input1').value);
    let input2 = parseInt(document.getElementById('input2').value);
    let output = input1 / input2
    document.getElementById('output').innerHTML = output;
}

function clearInputs(){
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('output').innerHTML = '0';
}