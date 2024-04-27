const size = document.getElementById('size');
size.addEventListener('click', sizeFn);
const container = document.getElementById('container');
let sizePrompt;
let integerValue;

const reset = document.getElementById('reset');
reset.addEventListener('click', function(){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(function(box) {
        box.classList.remove('box');
        box.classList.add('emp');
    });
});

function sizeFn() {
    sizePrompt = prompt('Enter size as an integer (Not more than 64):');
    integerValue = parseInt(sizePrompt);
    checkIfInt();
    container.innerHTML = '';
    container.style.backgroundColor = 'pink';
    container.style.display = 'flex';  
    container.style.flexWrap = 'wrap'; 
    container.style.height = (sizePrompt*30) + 'px';
    container.style.width = (sizePrompt*30) + 'px';
    container.style.margin = '0';
    container.style.margin = 'auto';


    for (let i = 0; i < sizePrompt; i++) {
        const row = document.createElement('div');
        row.addEventListener('mouseenter', function() {
            row.classList.add('row');
        });
        row.style.display = 'flex';  
        for(let j = 0; j < sizePrompt; j++){
            const box = document.createElement('div');
            box.classList.add('emp');
            box.addEventListener('mouseenter', function() {
                box.classList.add('box');
            });
            box.style.width = '30px'; 
            box.style.height = '30px'; 
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

function checkIfInt() {
    if (!isNaN(integerValue) && Number.isInteger(integerValue)) {
        if(integerValue >=64)
        {
            sizeFn();
        }
        else{
            alert('You entered an integer: ' + integerValue);
        }
    }
    else {
        sizeFn();
    }
}

