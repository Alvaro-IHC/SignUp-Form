const btn = document.getElementsByTagName('button')[0];
const inputs = document.querySelectorAll('input');
const password = document.getElementsByClassName('form-group')[4];

btn.addEventListener('click', (e) => {
    // e.preventDefault();
    const atrs = [...inputs].map((input) => (
        input.name
    ));
    const values = [...inputs].map((input) => (
        input.value
    ));
    if (values[values.length - 2] !== values[values.length - 1]) {
        e.preventDefault();
        password.classList.add('error');
        alert("Password don't match");
        return;
    }

    const user = {};

    atrs.forEach((atr, index) => {
        if (atr !== 'confirmed-password')
            user[atr] = values[index];
    })

    console.log(user);
    alert('Successful registration');

});