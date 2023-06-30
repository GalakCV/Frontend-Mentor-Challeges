console.log('Js test');

const btnUser = document.getElementById('button');
const inputUser = document.getElementById('email-input');

btnUser.addEventListener('click', () => {
    const email = inputUser.value.trim();
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const iconError = document.getElementById('iconerror');
    const msg = document.getElementById('msg');

    if (email === '') {
        msg.textContent = "Please, fill in the empty field !";
        iconError.style.display = 'inline-block';
    } else if (!emailRegex.test(email)) {
        msg.textContent = "Invalid email format.";
        iconError.style.display = 'inline-block';
    } else {
        msg.textContent = "Thanks, an email will come soon!";
        iconError.style.display = 'none';
    }
});