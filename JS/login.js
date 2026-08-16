const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const usernameInput =
        document.getElementById('loginUsername')
            .value
            .trim();

    const passwordInput =
        document.getElementById('loginPassword')
            .value;

    try {

        // JSON dosyasını oku
        const response =
            await fetch('./JSON/user.json');

        const data =
            await response.json();

        const jsonUsers =
            data.users;

        // LocalStorage kullanıcıları
        const localUsers =
            JSON.parse(
                localStorage.getItem('registeredUsers')
            ) || [];

        // Hepsini birleştir
        const allUsers =
            [...jsonUsers, ...localUsers];

        console.log(allUsers);

        // Kullanıcıyı bul
        const user =
            allUsers.find(
                u =>
                    u.username === usernameInput &&
                    u.password === passwordInput
            );

        if (user) {

            localStorage.setItem(
                'isLoggedIn',
                'true'
            );

            localStorage.setItem(
                'currentUserId',
                user.id
            );

            localStorage.setItem(
                'currentUserName',
                user.name
            );

            window.location.href =
                './userbord.html';

        } else {

            loginError.innerText =
                "Invalid username or password!";

            loginError.style.color =
                "red";
        }

    } catch (error) {

        console.error(error);

        loginError.innerText =
            "Error accessing user data.";

    }

    

});