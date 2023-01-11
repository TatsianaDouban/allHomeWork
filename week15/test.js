document.querySelector('.push').onclick = () => {
    console.log(document.querySelector('#one').value);
    //стили
    document.querySelector('.push').style.backgroundColor = 
    document.querySelector('#one').value
}

document.querySelector('#one').oninput = () => {
    console.log(document.querySelector('#one').value);
    document.querySelector('span').innerHTML =  document.querySelector('#one').value
}
document.querySelector('.push2').onclick = () => {
    console.log(document.querySelector('#i2').value);
    let myCheck = document.querySelector('#i2');
    console.log(myCheck.checked)
    if(myCheck.checked) {
        console.log('нажат');

    }else{
        console.log('на нажат')

    }
}

document.querySelector('#push3').onclick = (event) => {
    event.preventDefault();
    let text = document.querySelector('#two');
    console.log(text.value);

}







