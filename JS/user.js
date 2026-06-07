const currentUserName =
    localStorage.getItem('currentUserName');

const welcomeTitle =
    document.querySelector('.welcome h1');

const userBox =
    document.querySelector('.user');

if(currentUserName){

    welcomeTitle.textContent =
        `Hoş Geldin ${currentUserName} 👋`;

    userBox.textContent =
        currentUserName;
}

document
    .getElementById('logoutBtn')
    ?.addEventListener('click', () => {

        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('currentUserId');
        localStorage.removeItem('currentUserName');

        window.location.href =
            './login.html';

    });