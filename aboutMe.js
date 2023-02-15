document.body.style.fontFamily = 'Arial, sans-serif';
var nickname = document.getElementById('nickname');
nickname.innerHTML = 'daniel';
var favorites = document.getElementById('favorites');
favorites.innerHTML = 'fried rice';
var hometown = document.getElementById('hometown');
hometown.innerHTML = 'tolleson';

var li = document.querySelectorAll('li');
for(var i = 0; i < li.length; i++){
    li[i].classList.add('list-item');
}
var myImg = document.createElement('img');
myImg.src = 'image/myRepresentation.png';
myImg.style.width = '40%';
myImg.style.height = '35vh';
(document.body).appendChild(myImg);
