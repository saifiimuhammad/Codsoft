let string = "";
let buttons = document.querySelectorAll('.btn');
let viewBox = document.querySelector('.view');
let calcMemory = 0;
let storage = 0;

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {

        switch (e.target.innerHTML) {
            case 'x': e.target.innerHTML = '*';
                console.log(e.target);
                string = string + e.target.innerHTML;
                viewBox.innerHTML = string;
                e.target.innerHTML = 'x';
                break;

            case '=': string = eval(string);
                let eString = Math.fround(string);
                viewBox.innerHTML = eString;
                break;

            case 'M+': storage = storage + Number(viewBox.innerHTML);
                calcMemory = storage;
                break;

            case 'M-':
                storage = storage - Number(viewBox.innerHTML);
                calcMemory = storage;
                break;

            case 'MC':
                storage = 0;
                calcMemory = storage;
                break;

            case 'C':
                string = "";
                viewBox.innerHTML = string;
                break;
                
            default:
                console.log(e.target);
                string = string + e.target.innerHTML;
                viewBox.innerHTML = string;
                break;
        }

    })
})