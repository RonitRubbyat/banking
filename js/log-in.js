const logBtn = document.getElementById('login-submit');
logBtn.addEventListener('click', function(){
    const userEmail = document.getElementById('user-email').value;
    const password = document.getElementById('password').value;
    if(userEmail == 'aladin@mf.com' && password == 'dictator'){
        window.location.href= 'banking.html'
    }
    else if(userEmail == 'tasnimnur@rubbyat.com' && password == 'i love you'){
        window.location.href = 'My-panda.html';
    }
    else{
        alert('Wrong email id or password.');
    }
})