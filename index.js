let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

/*
console.log('clicked');
console.log(e);
console.log(e.target);
console.log(e.target.innerText);
упрощаем через switch
*/
buttons.map(button => {
    button.addEventListener('click', (e) => { //добавляем каждой кнопке Event с названием (e) которая меняет наши события
        switch (e.target.innerText) { //target - делегирование событий
            case 'CE':
                display.innerText = ''; // когда мы нажимаем СЕ удаляется строка ,пустая string
                break; //останавливаем что бы в string больше не прописывал СЕ
                case 'C':
                    display.innerText = display.innerText.slice(0, -1);//Метод slice() не изменяет исходный массив, а возвращает новую «одноуровневую» копию, содержащую копии элементов, вырезанных из исходного массива. 
                    break;
                    case '=':
                        display.innerText = eval(display.innerText);//Функция Eval вычисляет строковое выражение и возвращает его значение.
                        break;
            default:
                display.innerText += e.target.innerText;
        }
    }
    );
});
