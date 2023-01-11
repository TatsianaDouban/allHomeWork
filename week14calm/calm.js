
let x 
let y 
let solver ;

function showsolver(){
    document.getElementById("result").innerHTML = solver;
};

function sum(){
    x = document.getElementById("one").value;
    y = document.getElementById("Two").value;
    solver = Number(x) + Number(y);
    showsolver();
}  

function minus(){
    x = document.getElementById("one").value;
    y = document.getElementById("Two").value;
    solver = x-y;
    showsolver(); 
}

function divitiom(){
    x = document.getElementById("one").value;
    y = document.getElementById("Two").value;
    solver = x/y;
    let error = document.querySelector(".error");
   
    if (y == 0){
        error.textContent = "на ноль делить нельзя";      
    }
    else{
        showsolver();
    }
    
}

function myltiply(){
    x = document.getElementById("one").value;
    y = document.getElementById("Two").value;
    solver = x*y;
    showsolver();
}
