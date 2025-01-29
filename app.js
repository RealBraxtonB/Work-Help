//Grab dom objects
const form = document.querySelector('form');
const results = document.querySelector('.results');
const tableInput = document.querySelector('#tableInput');
const chairInput = document.querySelector('#chairInput');

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

        }
    }

});
