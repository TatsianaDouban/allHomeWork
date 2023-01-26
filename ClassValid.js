let form = document.querySelector("form");


class Validation {
    static сheckEmptyInputs(inputs) {
        let isEmpty = false;
        for (let input of inputs) {
            if (input.value == '')
                isEmpty = true;
        }
        return isEmpty;  
    }
    static isEmail(str){
        let reg = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        return reg.test(str);
    }
    static isDomin(str){
        let reg = /^[a-zA-Z0-9][a-zA-z0-9-]{1.61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
        return reg.test(str);
    }
    static isDate(str){
        let reg = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
        return reg.test(str);
    }
    static isPhone (str){
        let reg = /^[0-9]+$/
        return reg.test(str);
    }
}


 console.log(Validation.isEmail("tatsina334560@gmail.com"));
 console.log(Validation.isDomin("itgirlschool.ru"));
 console.log(Validation.isDate("16.01.2023"));
 // и т.д.