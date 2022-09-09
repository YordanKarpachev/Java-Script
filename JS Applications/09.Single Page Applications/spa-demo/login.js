import { showHome } from "./home.js";

const section = document.getElementById('loginView');
const form = section.querySelector('form');
form.addEventListener('submit', onsubmit);
section.remove();


export function showLogin() {
    document.querySelector('main').replaceChildren(section);
}

async function onsubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();

    try {
        const res = await fetch('http://localhost::3030/user/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email, password
            })
        });
        if (res.ok == false) {
                const error = await res.json();
                throw Error (error.message);
        }

        const data = await res.json();
        const userData = {
            email: data.email,
            accessToken: data.accessToken,
            id: data.id
        };

        sessionStorage.setItem('userData', JSON.stringify(userData));
        showHoWme();

    }
    catch (err) {
        alert(err.message);
    }
}