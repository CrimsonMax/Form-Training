const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password2')


form.addEventListener('submit', (event) => {
    event.preventDefault()
    checkInputs()
})

function checkInputs() {
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank!')
    } else {
        setSuccessFor(username)
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email needed!')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid!')
    } else {
        setSuccessFor(email)
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Input password!')
    } else if (!passLength(passwordValue)) {
        setErrorFor(password, 'Password must be no less than 4 characters!')
    } else {
        setSuccessFor(password)
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Repeat password!')
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Password wrong!')
    } else {
        setSuccessFor(password2)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function passLength(passwordValue) {
    let x = passwordValue.split('')
    console.log(x)
    console.log(x.length)
    if (x.length > 3) {
        return true
    } else {
        return false
    }
}