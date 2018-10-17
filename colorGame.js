let numSquares = 9;
let colors = [];
let pickedColor;

let squares = document.querySelectorAll('.square');
let colorDisplay = document.querySelector('#colorDisplay');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let easyBtn = document.querySelector('#easyBtn');
let hardBtn = document.querySelector('#hardBtn');
let modeBtn = document.querySelectorAll('.mode');

init();

function init() {
    setupModeBtns();
    setupSquares();
    reset();
}

function setupModeBtns() {
    for (let i=0; i<modeBtn.length; i++) {
        modeBtn[i].addEventListener('click', function() {
            modeBtn[0].classList.remove('selected');
            modeBtn[1].classList.remove('selected');
            modeBtn[2].classList.remove('selected');
            this.classList.add('selected');
    
            if (this.textContent === 'Easy') {
                numSquares = 3;
            } else if (this.textContent == 'Medium') {
                numSquares = 6;
            } else {
                numSquares = 9;
            }
            reset();
        });
    }    
}

function setupSquares() {
    for (let i=0; i<squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        //click
        squares[i].addEventListener('click', function() {
            let clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = 'Correct!';
                changeColors(pickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = 'Play Again';
            } else {
                this.style.backgroundColor = '#232323';
                messageDisplay.textContent = 'Try Again';
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = '';
    resetButton.textContent = 'New Colors';
    for (let i=0; i<squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = 'block';
        } else {
            squares[i].style.display = 'none';
        }
    }
    h1.style.backgroundColor = 'steelblue';
}

// colorDisplay.textContent = pickedColor;

resetButton.addEventListener('click', function() {
    reset();
});



function changeColors(color) {
    for (let i=0; i<squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    let arr = [];

    for (let i=0; i<num; i++) {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}