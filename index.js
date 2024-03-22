// 对于导航元素的点击事件处理
function toggleDropdown(navtog) {
    navtog.classList.toggle('active');
}

document.getElementById('navtog').addEventListener('click', function () {
    toggleDropdown(this);
});

// 对于按钮1和按钮2的点击事件处理
function removeNavtogActive() {
    var navtogElement = document.getElementById('navtog');
    navtogElement.classList.remove('active');
}

document.getElementById('button1').addEventListener('click', removeNavtogActive);
document.getElementById('button2').addEventListener('click', removeNavtogActive);

const iframe = document.getElementById('nestedWebpage');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

button1.addEventListener('click', function () {
    iframe.src = 'https://43.136.134.19';
});
button2.addEventListener('click', function () {
    iframe.src = 'https://152.136.227.248';
});