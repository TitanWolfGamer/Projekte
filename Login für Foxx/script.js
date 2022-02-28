function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username == 'TitanFoxx' && password == 'TitanFoxx123') {
        window.location.href = './login-success.html';
    } else {
        alert('Keine Berrechtigungen')
    }

}

function BackToLogin() {
    window.location.href = './index.html';
}