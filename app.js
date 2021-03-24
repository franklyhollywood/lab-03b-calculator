const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const buttonPlus = document.getElementById('button-add');
const result1 = document.getElementById('result1');

buttonPlus.addEventListener('click', () => {
    const sum = Number(input1.value) + Number(input2.value);
    if (sum) {result1.textContent = sum;}
    input1.value = '';
    input2.value = '';
})


const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');
const buttonMinus = document.getElementById('button-subtract');
const result2 = document.getElementById('result2');

buttonMinus.addEventListener('click', () => {
    const minus = Number(input3.value) - Number(input4.value);
    if (minus) {result2.textContent = minus};
    input3.value = '';
    input4.value = ''; 
})

const input5 = document.getElementById('input5');
const input6 = document.getElementById('input6');
const buttonTimes = document.getElementById('button-multiply');
const result3 = document.getElementById('result3');

buttonTimes.addEventListener('click', () => {
    const product = Number(input5.value) * Number(input6.value);
    if (product) {result3.textContent = product};
    input5.value = '';
    input6.value = ''; 
})

const input7 = document.getElementById('input7');
const input8 = document.getElementById('input8');
const buttonDivide = document.getElementById('button-divide');
const result4 = document.getElementById('result4');

buttonDivide.addEventListener('click', () => {
    const dividend = Number(input7.value) / Number(input8.value);
    if (dividend) {result4.textContent = dividend}; 
    input7.value = '';
    input8.value = '';
})