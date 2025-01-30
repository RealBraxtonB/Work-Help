//Grab dom objects
const form = document.querySelector('form');
const results = document.querySelector('.results');
const tableInput = document.querySelector('#tableInput');
const chairInput = document.querySelector('#chairInput');

const chairMath = (chairs, tables) => {
    console.log('in chairmath')
    const remainder = chairs % 3;
    console.log(remainder)
    let three = 0; ;
    if(remainder === 1){
        const temp = chairs - remainder;
        three = (temp / 3) - 1;
    } else {
        console.log('run 2 remainder')
        const temp = chairs - remainder;
        three = temp / 3;
    }
    const two = tables - three;
    const html =`<p>${three} tables of 3 and ${two} tables of 2</p>`
    results.innerHTML = html;
};

form.addEventListener('submit', e => {
    e.preventDefault();

    const tableAmount = Number(tableInput.value);
    const ChairAmount = Number(chairInput.value);

    if(tableAmount && ChairAmount) {
        if (ChairAmount % 2 === 0 && ChairAmount / 2 <= tableAmount) {
            const html = '<p>2 Chairs per Table</p>';
            results.innerHTML = html;
        } else if (ChairAmount % 3 === 0 && ChairAmount / 3 <= tableAmount) {
            const html = '<p>3 Chairs per Table</p>';
            results.innerHTML = html;
        } else {
            chairMath(ChairAmount, tableAmount);
        }
    }

});
