const iLove = document.getElementById('iLove');
iLove.style.display = 'none';

const loveImg = document.getElementById('loveImg');
loveImg.style.display = 'none';

const showBtn = document.getElementById('loveBtn');
showBtn.addEventListener('click', function(){
    iLove.style.display = 'block';
    loveImg.style.display = 'block';
})