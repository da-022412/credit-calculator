const allRanges = document.querySelectorAll('.range-wrap');
allRanges.forEach((wrap) => {
    const range = wrap.querySelector('.range');
    const bubble = wrap.querySelector('.bubble');

    range.addEventListener('input', () => {
        setBubble(range, bubble);
    });
    setBubble(range, bubble);
});

function setBubble(range, bubble) {
    const val = range.value;
    const min = range.min ? range.min : 0;
    const max = range.max ? range.max : 100;
    const newVal = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML = val;

    // Sorta magic numbers based on size of the native UI thumb
    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}
const rangeInputs = document.querySelectorAll('input[type="range"]');

function handleInputChange(e) {
    let target = e.target;
    if (e.target.type !== 'range') {
        target = document.getElementById('range');
    }
    const min = target.min;
    const max = target.max;
    const val = target.value;

    target.style.backgroundSize = ((val - min) * 100) / (max - min) + '% 100%';
}

rangeInputs.forEach((input) => {
    input.addEventListener('input', handleInputChange);
});

function restrict() {
    if (+rangeInputs[1].value >= rangeInputs[0].value) {
        rangeInputs[1].value = +rangeInputs[0].value - 1;
    }
}
