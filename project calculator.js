let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

































// var operand1 = 0;
// var operand2 = null;
// var operator = null;

//  for(var i = 0; i< buttons.length; i++){
//      buttons[i].addEventListener('click',function(){
//            var value = this.getAttribute('data-value');

//            if(value == '+'){
//                operator='+';
//                operand1= parseFloat(display.textContent);

//            }
//            else if(value == '='){
//                operand2=parseFloat(display.textContent);

//            }
//            else{
//                display.innerText +=value;
//            }
//      });
//  }