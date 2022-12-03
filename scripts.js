//link variables to buttons

const zero= document.querySelector('#zero');
const one= document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four= document.querySelector('#four');
const five= document.querySelector('#five');
const six= document.querySelector('#six');
const seven= document.querySelector('#seven');
const eight= document.querySelector('#eight');
const nine= document.querySelector('#nine');
const equals= document.querySelector('#equals');
const plus= document.querySelector('#plus');
const minus= document.querySelector('#minus');
const multiply= document.querySelector('#multiply');
const divide= document.querySelector('#divide');
const plusorminus= document.querySelector('#plusorminus');
const remainder= document.querySelector('#remainder');
const back= document.querySelector('#back');
const clear= document.querySelector('#clear');
const period= document.querySelector('#period');
const screen= document.querySelector('#screen');
const buttons=document.querySelectorAll('button');

//create functions for the operations

function addition(x,y) {
    return ((x*1) + (y*1));
}

function subtraction(x,y) {
    return ((x*1)-(y*1));
}

function multiplication(x,y) {
    return (x * y)
}

function division(x,y) {
    return (x / y)
}

function remain(x,y) {
    return ( x % y)
}

function equate(x,y,operator) {
    if(y==0 && operator==division) {
       return screen.textContent='ANSWERS 0 OBVIOUSLY'
    } else {
    answer=  operator(x,y);
    answer=answer.toString();
    if (answer.length < 15) {
    return answer
    } else { 

    }
}
}

//create variables for buttons to fill
let x='';
let y='';
let operator;
let answer='';

// add event listeners to numbers

zero.addEventListener('click', function() {
    if ( operator == undefined) { if ( x.length < 15) {
        x= x.concat('0');
        screen.textContent= x;}
    } else if (y.length < 15) {
        y= y.concat('0');
        screen.textContent= y;
    }
});


one.addEventListener('click', function() {
    if ( operator == undefined ) { if ( x.length < 15) {
        x= x.concat('1');
        screen.textContent=x;}
    } else if (y.length < 15) {
        y= y.concat('1');
        screen.textContent= y;
    }
});

two.addEventListener('click', function() {
    if ( operator == undefined ) { if ( x.length < 15) {
        x= x.concat('2');
        screen.textContent= x;}
    } else if (y.length < 15) {
        y= y.concat('2');
        screen.textContent= y;
    }
});

three.addEventListener('click', function() {
    if ( operator == undefined) { if ( x.length < 15) {
        x= x.concat('3');
        screen.textContent= x;}
    } else if (y.length < 15) {
        y= y.concat('3');
        screen.textContent= y;
    }
});

four.addEventListener('click', function() {
    if ( operator == undefined ) { if ( x.length < 15) {
        x= x.concat('4');
        screen.textContent= x;}
    } else if (y.length < 15) {
        y= y.concat('4');
        screen.textContent= y;
    }
});

five.addEventListener('click', function() {
    if ( operator == undefined ) { if ( x.length < 15) {
        x= x.concat('5');
        screen.textContent= x;}
    } else if (y.length < 15) {
        y= y.concat('5');
        screen.textContent= y;
    }
});

six.addEventListener('click', function() {
    if ( operator == undefined ) { if ( x.length < 15) {
        x= x.concat('6');
        screen.textContent= x;}
    } else if (y.length < 15) {
        y= y.concat('6');
        screen.textContent= y;
    }
});

seven.addEventListener('click', function() {
    if ( operator == undefined ) { if ( x.length < 15) {
        x= x.concat('7');
        screen.textContent= x;}
    } else if (y.length < 15) {
        y= y.concat('7');
        screen.textContent= y;
    }
});

eight.addEventListener('click', function() {
    if ( operator == undefined ) { if ( x.length < 15) {
        x= x.concat('8');
        screen.textContent= x;}
    } else if (y.length < 15) {
        y= y.concat('8');
        screen.textContent= y;
    }
});

nine.addEventListener('click', function() {
    if ( operator == undefined ) { if ( x.length < 15) {
        x= x.concat('9');
        screen.textContent= x;}
    } else if (y.length < 15) {
        y= y.concat('9');
        screen.textContent= y;
    }
});

//add event listeners to operators 

plus.addEventListener('click', function(){
    if (x == '') {
        screen.textContent='Please put number first'
    } else if (x != '' && y!= '') {
        answer= equate(x,y,operator);
        screen.textContent= answer;
        x= answer;
        y='';
        operator=addition;
        buttons.forEach(button => {
            button.classList.remove('operation')
        });
        plus.classList.add('operation');
    } else {
        buttons.forEach(button => {
            button.classList.remove('operation')
        });
        operator= addition;
        plus.classList.add('operation');
    }

    });

minus.addEventListener('click', function(){
    if (x === '') {
        screen.textContent='Please put number first'
    } else if (x != '' && y!= '') {
        answer= equate(x,y, operator);
        screen.textContent= answer;
        x= answer;
        y='';
        operator=subtraction;
        buttons.forEach(button => {
            button.classList.remove('operation')
        });
        minus.classList.add('operation');
    } else {
        buttons.forEach(button => {
            button.classList.remove('operation')
        });
        operator=subtraction;
        minus.classList.add('operation');
    }

    });

multiply.addEventListener('click', function(){
    if (x === '') {
        screen.textContent='Please put number first'
    } else if (x != '' && y!= '') {
        answer= equate(x,y, operator);
        screen.textContent= answer;
        x= answer;
        y='';
        operator=multiplication;
        buttons.forEach(button => {
            button.classList.remove('operation')
        });
        multiply.classList.add('operation');
    } else {
        buttons.forEach(button => {
            button.classList.remove('operation')
        });
        operator=multiplication;
        multiply.classList.add('operation');
    }

    });

divide.addEventListener('click', function(){
    if (x === '') {
        screen.textContent='Please put number first'
    } else if (x != '' && y!= '') {
        answer= equate(x,y, operator);
        screen.textContent= answer;
        x= answer;
        y='';
        operator=division;
        buttons.forEach(button => {
            button.classList.remove('operation')
        });
        divide.classList.add('operation');
    } else {
        buttons.forEach(button => {
            button.classList.remove('operation')
        });
        operator=division;
        divide.classList.add('operation');
    }

    });

remainder.addEventListener('click', function(){
    if (x === '') {
        screen.textContent='Please put number first'
    } else if (x != '' && y!= '') {
        answer= equate(x,y, operator);
        screen.textContent= answer;
        x= answer;
        y='';
        operator=remain;
        buttons.forEach(button => {
            button.classList.remove('operation')
        });
        remainder.classList.add('operation');
    } else {
        buttons.forEach(button => {
            button.classList.remove('operation')
        });
        operator=remain;
        remainder.classList.add('operation');
    }

    });

equals.addEventListener('click', function() {
    if (x === '') {
        screen.textContent='No numbers to equate'
    } else if (x === '' || y === '' || operator === undefined) {
        screen.textContent='Missing numbers or operator'
    } else {
        answer= equate(x,y,operator);
        screen.textContent=answer;
        x=answer;
        y='';
        operator=undefined;
        buttons.forEach(button => {
            button.classList.remove('operation')
        });
    }
    
});

clear.addEventListener('click', function() {
    y='';
    x='';
    operator=undefined;
    answer='';
    screen.textContent='';
    buttons.forEach(button => {
        button.classList.remove('operation')
    });
})

back.addEventListener('click', function() {
    if (x==='') {
        screen.textContent='Nothing to delete'
    } else if ( x!='' && y==='') {
        x=x.toString().slice(0,-1);
        screen.textContent=x;
    } else if (x != '' && y != '') {
        y=y.toString().slice(0,-1);
        screen.textContent=y;
    }
})

plusorminus.addEventListener('click', function() {
    if (x==='') {
        screen.textContent='Please enter number';
    } else if ( x !='' && y==='') {
        x=(x*-1);
        screen.textContent=x;
    } else if (x != '' && y!='') {
        y=(y*-1);
        screen.textContent=y;
    }
})