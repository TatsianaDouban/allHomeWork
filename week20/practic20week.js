let LikeCollection = [];
const herousCollection = `[{
    "name" : "Бэтмен",
    "src" : "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg",
    "character" : "борец с преступностью, филантроп, миллиардер",
    "description" : "интеллект, обширные познания, знания боевых искусств, ловкость",
    "reiting" : [1]
},{ 
    "name" : "Супермен",
    "src" : "https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg",
    "character" : "борец за справедливость",
    "description" : "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
    "reiting" : [1,2]
},{
    "name" : "Железный человек",
    "src" : "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg",
    "character" : " гений, миллиардер, плейбой, филантроп",
    "description" : "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
    "reiting" : [1,2]
}]`;

document.addEventListener("DOMContentLoaded",function(){
    getHerous()
});

function getHerous() {
    let herous = JSON.parse(herousCollection);
    let collection = localStorage.getItem("LikeCollection"); 
    if (collection){
        LikeCollection = JSON.parse(localStorage.getItem("LikeCollection")) 
    } else {
    localStorage.setItem('LikeCollection', JSON.stringify([]));
    
}
for (let i = 0; i < herous.length; i++){
    createHerous(herous[i])
}
}

function createHerous(data){
    
    let ul = document.createElement('ul');
    let li_name = ul.appendChild(document.createElement('li'));

    let li_img = document.createElement("img");
    li_img.src = data.src.jpg;

    li_name.classList.add('li_name');
    li_name.textContent = data.name;

    let li_character = ul.appendChild(document.createElement('li'));
    li_character.textContent = data.character;

    let li_description = ul.appendChild(document.createElement('li'));
    li_description.textContent = data.description;

    let li_reiting = ul.appendChild(document.createElement('li'));
    li_reiting.textContent = data.reiting.length;

    let li_like = ul.appendChild(document.createElement('li'));
    let buttonLike = document.createElement('button')
    buttonLike.classList.add('buttonlike');

    let index = LikeCollection.indexOf(data.name);
    if( index !== -1){
        buttonLike.classList.add('liked');
    }
    buttonLike.textContent = "like";
    li_like.appendChild(buttonLike);
    buttonLike.addEventListener("click",togglelike);
    document.body.append(ul); 
}

function togglelike(event){
    event.target.closest('.buttonlike').classList.add("liked");
    toggleLocalSror(event.target.closest("ul").firstChild.textContent);
}

function toggleLocalSror(value){
    console.log(LikeCollection);
    let index = LikeCollection.indexOf(value);

    if (index ==-1){
        LikeCollection.push(value);
    }else{
        LikeCollection.slice(index,1);

    }
    localStorage.setItem("LikeCollection".JSON.stringify(LikeCollection));
}










// const todo = [
//     {name: "задача1", isDone: false},
//     {name: "задача2", isDone: true}
// ];

// let resultNode = document.createElement('ul');
// for (let item of todo){
//     let itemNode = document.createElement('li');
//     let textNode = document.createElement('p');
//     let checkbox = document.createElement('input');

//     checkbox.addEventListener("change",(evt) =>{
//         item.isDone = !item.isDone;
//         // тут хорошо вставить действие отправки  

//     });

//      textNode.textContent = item.name;
//      checkbox.type = "checkbox";
//      checkbox.checked = item.isDone;

//      itemNode.append(textNode);
//      itemNode.append(checkbox);
//      resultNode.append(itemNode);
    
// }
// document.body.append(resultNode);