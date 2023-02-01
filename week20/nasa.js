
async function loadData() {
    let response = await fetch(
"https://api.nasa.gov/planetary/apod?api_key=KsHbrEEUCHGTBOi0DknpCbQJOs4EuNumgQN21Ujn"
);

let data = await response.json();

console.log(data);

let showall = document.createElement('div');
let showimg = document.createElement('img');
showimg.src = data.hdurl;
showimg.width = 100;

let showtext = document.createElement('h3');
showtext.textContent = data.explanation;

showall.append(showtext);
showall.append(showimg);
document.body.append(showall);

}
    loadData();
