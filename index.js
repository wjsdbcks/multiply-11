const input = document.querySelector(".input");
const inputNum = input.querySelector(".input_num");
const progress = document.querySelector(".progress");
const progress_print = progress.querySelector(".progress_print");
const result = document.querySelector(".result");
const result_print = result.querySelector(".result_print");

function math(event){
    value = inputNum.value;
    event.preventDefault();
    if(value<10 || value>=1000){
        result_print.innerHTML = value*11
        progress_print.innerHTML = `${value} X 11`
    } else if(value>=10 && value<100){
        one = value%10
        ten = (value - one)/10
        result_m1 = (ten*100) + (ten + one)*10 + one
        result_print.innerHTML = result_m1;
        progress_m1 = ` ${value} X 11 = (${ten}X100) + {(${ten} + ${one})X10} + ${one}`;
        progress_print.innerHTML = progress_m1;
    } else if(value>=100 && value<1000){
        one = value%10;
        ten = ((value - one)/10)%10;
        hundred = (value - (ten*10) - one)/100;
        result_m2 = (hundred*1000) + (hundred + ten)*100 + (ten + one)*10 + one;
        progress_m2 = ` ${value} X 11 = (${hundred}X1000) + {(${hundred} + ${ten})X100} + {(${ten} + ${one})X10} + ${one}`;      
        result_print.innerHTML = result_m2;  
        progress_print.innerHTML = progress_m2;
    }

}


function init(){
    input.addEventListener("submit", math);
}


init()
