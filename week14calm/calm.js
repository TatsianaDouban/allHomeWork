
let x 
let y
let results = document.getElementById("result")

class Calm {
    static plus (){
            return +x + +y;
        }
        static minus(){ 
            
            return x - y;
        }
        static multiply(){
            return x * y;
        }
        static divide(){
            return x / y;
        }
    }

        function getNumber() {
            x = document.getElementById("one").value;
            y = document.getElementById("Two").value;
        }

function sum(){
    getNumber();
    let result = Calm.plus(x, y);
    results.innerHTML = Calm.plus(x, y);
}  

function minus(){
    getNumber();
    let result = Calm.minus(x, y);
    results.innerHTML = Calm.minus(x, y); 
}

function divitiom(){
    getNumber()
    let result = Calm.divide(x, y);
    let error = document.querySelector(".error"); 
    if (y == 0){
        error.textContent = "на ноль делить нельзя";      
    }
    else{
        results.innerHTML = Calm.divide(x, y);
    }
    
}
function myltiply(){
    getNumber()
    let result = Calm.multiply(x, y);
    results.innerHTML = Calm.multiply(x, y);
}


