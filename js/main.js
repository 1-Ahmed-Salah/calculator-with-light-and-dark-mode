
let buttons   = document.querySelectorAll('span')        ,
    value     = document.getElementById('value')         ,
    body      = document.querySelector('body')           ,
    toggleBtn = document.querySelector('.toggle-button') ;

buttons.forEach(button => {
    button.addEventListener('click', event => {
        if( event.currentTarget.textContent === '=' ) {
            value.textContent = eval(value.textContent);
        } else if (event.currentTarget.textContent === 'Clear') {
            value.textContent = '';
        } else {
            value.textContent += event.currentTarget.textContent;
        }
    });
});

// Add the dark class to the body
toggleBtn.addEventListener('click', event => {
    body.classList.toggle('dark');
});


